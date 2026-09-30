import "dotenv/config";
import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { GoogleGenAI } from "@google/genai";

const GEMINI_MODELS = [
  "gemini-3.1-flash-lite",
  "gemini-flash-latest",
  "gemini-3.8-flash"
];

async function generateWithFallback(ai: any, params: any) {
  let lastErr: any = null;
  for (const model of GEMINI_MODELS) {
    try {
      const response = await ai.models.generateContent({
        ...params,
        model
      });
      return response;
    } catch (err: any) {
      lastErr = err;
      continue;
    }
  }
  throw lastErr;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ limit: "50mb", extended: true }));

  // Health check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // AI Chat endpoint (supports text, images, and videos)
  app.post("/api/chat", async (req, res) => {
    try {
      const { messages } = req.body;
      if (!messages || !Array.isArray(messages)) {
        return res.status(400).json({ error: "Missing or invalid messages array" });
      }

      const systemPrompt = `You are an expert AI English teacher, linguist, and translator specializing in translating into natural, fluent Badini Kurdish (Kurdish of Duhok, Zakho, and Bahdinan region).
Your goal is to help Kurdish learners master English and translate any content accurately.

Guidelines:
1. Always respond in natural, clear Badini Kurdish (using Kurdish/Arabic script with authentic Badini vocabulary like: ئەڤە، چێکرن، بێژە، هاتییە، دروست، دڤێت، هتد).
2. When the user sends an IMAGE:
   - Carefully identify and transcribe all English text, signs, labels, documents, or handwriting present in the image.
   - Provide a complete, natural Badini translation for each part.
   - Highlight and explain key English vocabulary and expressions found in the image, with pronunciation and Badini meanings.
3. When the user sends a VIDEO:
   - Listen to and transcribe the spoken English dialogue, narration, or audio in the video clip.
   - Provide a thorough, accurate Badini Kurdish translation of what was spoken.
   - Summarize what happened in the video.
   - Teach and highlight key spoken English phrases, phrasal verbs, or idioms used in the video.
4. When answering text queries:
   - Provide comprehensive, educational explanations with clear examples in English and their Badini translations.
   - Format responses neatly with clear section titles (e.g., 📝 دەقێ ئنگلیزی، 🌍 وەرگێڕانا ب کوردییا بادینی، 💡 پەیڤێن گرنگ، 📚 تێبینی و نموونە) and bullet points.
Be polite, supportive, and pedagogically clear.`;

      const rawApiKey = process.env.GEMINI_API_KEY || "";
      const sanitizedApiKey = rawApiKey.replace(/[—–]/g, '-').trim();
      if (!sanitizedApiKey) {
        return res.status(400).json({ error: "تکایە کلیلا Gemini API ل بەشێ Settings زێدە بکە (Gemini API Key is not configured)." });
      }
      const ai = new GoogleGenAI({ apiKey: sanitizedApiKey, httpOptions: { headers: { 'User-Agent': 'aistudio-build' } } });

      const formattedContents = messages.map((msg: any) => {
        const parts: any[] = [];
        if (msg.attachment && msg.attachment.data) {
          let mimeType = msg.attachment.mimeType || (msg.attachment.type === 'video' ? 'video/mp4' : 'image/jpeg');
          let base64Data = msg.attachment.data;
          if (base64Data.includes(",")) {
            const split = base64Data.split(",");
            base64Data = split[1];
            const match = split[0].match(/:(.*?);/);
            if (match) mimeType = match[1];
          }
          parts.push({
            inlineData: {
              mimeType,
              data: base64Data
            }
          });
        }
        if (msg.content && msg.content.trim()) {
          parts.push({ text: msg.content.trim() });
        } else if (parts.length > 0) {
          parts.push({
            text: msg.attachment?.type === 'video'
              ? 'تکایە هەمی ئاخفتن، دەنگ و پەیڤێن د ڤێ ڤیدیویێ دا ب تەمامی وەربگێڕە سەر کوردییا بادینی، و پەیڤێن سەرەکی یێن ئنگلیزی دگەل واتا و دەنگێ وان شروڤە بکە.'
              : 'تکایە هەمی دەق، نڤیسین و پەیڤێن د ڤی وێنەی دا وەربگێڕە سەر کوردییا بادینی ب شێوەیەکێ دروست، و پەیڤێن گرنگ شروڤە بکە.'
          });
        }
        return {
          role: msg.role === 'assistant' ? 'model' : 'user',
          parts: parts.length > 0 ? parts : [{ text: '...' }]
        };
      });
      
      const response = await generateWithFallback(ai, {
        contents: formattedContents,
        config: {
          systemInstruction: systemPrompt
        }
      });

      const replyText = response.text || "ببورە، من نەشیا بەرسڤێ بدەم.";
      res.json({ reply: replyText });

    } catch (error: any) {
      console.error("Chat error:", error);
      const errStr = (error?.message || String(error)).toLowerCase();
      if (errStr.includes("429") || errStr.includes("quota") || errStr.includes("resource_exhausted")) {
        return res.status(429).json({ error: "لیمیتا بکارئینانێ یا تەمام بووی (Rate Limit). تکایە کێمەکێ دی دوبارە هەولبدە." });
      }
      if (errStr.includes("503") || errStr.includes("high demand") || errStr.includes("unavailable")) {
        return res.status(503).json({ error: "سێرڤەرێن ژیرییا دەستکرد ل سەر ئاستێ جیهانێ د بارگرانیێ دانە (High Demand). تکایە چەند چرکەیێن دی دوبارە کلیک بکە." });
      }
      res.status(500).json({ error: "کێشەیەک ڕوویدا د ئامادەکرنا بەرسڤێ دا. تکایە چەند چرکەیێن دی دوبارە هەولبدە.", details: String(error?.message || error) });
    }
  });

  // Conversation Extension Endpoint
  app.post("/api/extend-conversation", async (req, res) => {
    try {
      const { title, dialogue } = req.body;
      if (!title || !dialogue) {
        return res.status(400).json({ error: "Missing title or dialogue" });
      }

      const rawApiKey = process.env.GEMINI_API_KEY || "";
      const sanitizedApiKey = rawApiKey.replace(/[—–]/g, '-').trim();
      if (!sanitizedApiKey) {
        return res.status(400).json({ error: "تکایە کلیلا Gemini API ل بەشێ Settings زێدە بکە." });
      }

      const ai = new GoogleGenAI({ apiKey: sanitizedApiKey, httpOptions: { headers: { 'User-Agent': 'aistudio-build' } } });

      const prompt = `You are an expert English teacher writing a conversation.
The conversation title is: "${title}".
Here is the conversation so far:
${JSON.stringify(dialogue, null, 2)}

Please generate 8 to 10 MORE lines to continue this exact conversation naturally, making the dialogue richer and longer.
Return ONLY a JSON array of objects with this format:
[
  { "speaker": "SpeakerName", "text": "English text", "translation": "Badini Kurdish translation" }
]`;

      const response = await generateWithFallback(ai, {
        contents: [{ role: "user", parts: [{ text: prompt }] }],
      });

      const responseText = response.text || "[]";
      let newLines = [];
      try {
         const jsonMatch = responseText.match(/\[[\s\S]*\]/);
         if (jsonMatch) {
            newLines = JSON.parse(jsonMatch[0]);
         }
      } catch(e) {
         console.error("Failed to parse JSON for extended conversation");
      }

      res.json({ success: true, newLines });
    } catch (error: any) {
      console.error("Extend conversation error:", error);
      if (error.message && error.message.includes("429") || String(error).includes("429")) {
        return res.status(429).json({ error: "لیمیتا بکارئینانێ یا تەمام بووی (Rate Limit Exceeded). تکایە پشتی چەند دەقەیەکێ دی دوبارە هەولبدە یان پلانەکا بلندتر بۆ Gemini API بکاربینە." });
      }
      res.status(500).json({ error: "Failed to extend conversation", details: String(error) });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server started successfully on port ${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  });

  return app;
}

export const appPromise = startServer();
