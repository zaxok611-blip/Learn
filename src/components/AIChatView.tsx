import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, Send, User, Loader2, Sparkles, MessageSquare, 
  Image as ImageIcon, Video, X, Volume2, Copy, Check, 
  Maximize2, Paperclip, FileText, Play, RotateCcw
} from 'lucide-react';

interface AttachedMedia {
  type: 'image' | 'video';
  file: File;
  previewUrl: string;
  base64: string;
  name: string;
  sizeFormatted: string;
  mimeType: string;
}

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  attachment?: {
    type: 'image' | 'video';
    previewUrl: string;
    name?: string;
    size?: string;
    mimeType?: string;
    data?: string;
  };
}

export default function AIChatView() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: 'سلاڤ! ئەز هاریکارێ تە یێ ژیرییا دەستکردم (AI). نوکە دشێی ب ساناهی:\n\n📷 **وێنەیان بنێری**: بۆ وەرگێڕانا هەر دەق، نڤیسین، تابلۆ، یان لاپەڕەکێ د ناڤ وێنەی دا بۆ کوردییا بادینی.\n🎥 **ڤیدیۆیان بنێری**: بۆ وەرگێڕانا ئاخفتن، گۆتوبێژ و دەنگێ هەر کورتە ڤیدیۆیەکا ئنگلیزی بۆ کوردییا بادینی.\n💬 **پسیاران بکەی**: دەربارەی پەیڤ، ڕێزمان، ئیدیۆم و شێوازێ فێربوونا ئنگلیزی.'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [attachedMedia, setAttachedMedia] = useState<AttachedMedia | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const videoInputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading, attachedMedia]);

  const formatBytes = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
      reader.readAsDataURL(file);
    });
  };

  const processSelectedFile = async (file: File) => {
    const isImage = file.type.startsWith('image/');
    const isVideo = file.type.startsWith('video/');

    if (!isImage && !isVideo) {
      alert('تکایە بتنێ فایلێ وێنەی (PNG, JPG, WEBP) یان فایلێ ڤیدیۆی (MP4, WEBM, MOV) هەلبژێرە.');
      return;
    }

    // Limit to 25MB for smooth processing
    if (file.size > 25 * 1024 * 1024) {
      alert('قەبارێ ڤی فایلی زێدەترە ژ ۲٥ مێگابایت. تکایە فایله‌کێ بچویکتر یان کورتە ڤیدیۆیەکێ هەلبژێرە.');
      return;
    }

    try {
      const previewUrl = URL.createObjectURL(file);
      const base64 = await fileToBase64(file);
      
      setAttachedMedia({
        type: isImage ? 'image' : 'video',
        file,
        previewUrl,
        base64,
        name: file.name,
        sizeFormatted: formatBytes(file.size),
        mimeType: file.type || (isImage ? 'image/jpeg' : 'video/mp4')
      });
    } catch (err) {
      console.error('Error processing file:', err);
      alert('نەشیا فایلی باربکەت. تکایە دوبارە هەولبدە.');
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processSelectedFile(file);
    }
    // reset input value so re-selecting the same file works
    e.target.value = '';
  };

  // Clipboard paste support for images
  const handlePaste = (e: React.ClipboardEvent) => {
    const items = e.clipboardData?.items;
    if (!items) return;

    for (let i = 0; i < items.length; i++) {
      if (items[i].type.startsWith('image/')) {
        const file = items[i].getAsFile();
        if (file) {
          processSelectedFile(file);
          e.preventDefault();
          break;
        }
      }
    }
  };

  // Drag and drop
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      processSelectedFile(file);
    }
  };

  const removeAttachment = () => {
    if (attachedMedia?.previewUrl) {
      URL.revokeObjectURL(attachedMedia.previewUrl);
    }
    setAttachedMedia(null);
  };

  const handleSendMessage = async () => {
    if ((!input.trim() && !attachedMedia) || isLoading) return;

    const currentAttachment = attachedMedia;
    const currentInput = input.trim();

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: currentInput,
      attachment: currentAttachment ? {
        type: currentAttachment.type,
        previewUrl: currentAttachment.previewUrl,
        name: currentAttachment.name,
        size: currentAttachment.sizeFormatted,
        mimeType: currentAttachment.mimeType,
        data: currentAttachment.base64
      } : undefined
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setAttachedMedia(null);
    setIsLoading(true);

    try {
      // Build conversation payload
      const conversationHistory = messages.map(m => ({
        role: m.role,
        content: m.content,
        attachment: m.attachment ? {
          type: m.attachment.type,
          mimeType: m.attachment.mimeType,
          data: m.attachment.data
        } : undefined
      })).concat({
        role: 'user',
        content: userMessage.content,
        attachment: userMessage.attachment ? {
          type: userMessage.attachment.type,
          mimeType: userMessage.attachment.mimeType,
          data: userMessage.attachment.data
        } : undefined
      });

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ messages: conversationHistory })
      });

      const data = await response.json();
      
      if (response.ok && data.reply) {
        setMessages(prev => [...prev, {
          id: Date.now().toString(),
          role: 'assistant',
          content: data.reply
        }]);
      } else {
        throw new Error(data.error || 'کێشەیەک ڕوویدا د وەرگرتنا بەرسڤێ دا.');
      }
    } catch (error: any) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        role: 'assistant',
        content: error.message || 'ببورە، هەلەیەک چێبوو د بەرسڤدانێ دا. تکایە دوبارە هەولبدە.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleSpeak = (text: string) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();

    // Extract English phrases from text or read whole text
    const englishMatch = text.match(/[A-Za-z0-9\s,.'!?-]+/g);
    const textToSpeak = englishMatch ? englishMatch.filter(t => t.trim().length > 3).join('. ') : text;

    const utterance = new SpeechSynthesisUtterance(textToSpeak || text);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  };

  const handlePresetPrompt = (promptText: string) => {
    setInput(promptText);
  };

  return (
    <div 
      className="max-w-4xl mx-auto h-[84vh] min-h-[640px] flex flex-col bg-white rounded-3xl shadow-sm border border-stone-100 overflow-hidden relative"
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {/* Hidden File Inputs */}
      <input 
        type="file" 
        ref={imageInputRef} 
        onChange={handleFileChange} 
        accept="image/*" 
        className="hidden" 
      />
      <input 
        type="file" 
        ref={videoInputRef} 
        onChange={handleFileChange} 
        accept="video/mp4,video/webm,video/quicktime,video/mkv,video/*" 
        className="hidden" 
      />

      {/* Drag & Drop Overlay */}
      <AnimatePresence>
        {isDragging && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 bg-[#0f172a]/80 backdrop-blur-sm flex flex-col items-center justify-center text-white border-4 border-dashed border-amber-400 m-4 rounded-2xl pointer-events-none"
          >
            <Paperclip size={48} className="text-amber-400 mb-3 animate-bounce" />
            <h3 className="text-2xl font-bold kurdish-text">فایلێ وێنەی یان ڤیدیۆی لێرە بەردە</h3>
            <p className="text-stone-300 kurdish-text mt-1 text-sm">ژیرییا دەستکرد دێ ب لەز وەرگێڕانا وێ بۆتە کەسایەتی کەت</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <div className="bg-[#0f172a] p-5 md:p-6 text-white shrink-0 flex items-center justify-between">
        <div className="flex items-center gap-3 md:gap-4">
          <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-sm">
            <Bot size={28} className="text-amber-400" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl md:text-2xl font-black kurdish-text">
                هاریکارێ زیرەک
              </h2>
              <span className="bg-amber-400/20 text-amber-300 text-xs px-2.5 py-0.5 rounded-full font-bold flex items-center gap-1 border border-amber-400/30">
                <Sparkles size={12} /> دەق، وێنە و ڤیدیۆ
              </span>
            </div>
            <p className="text-stone-300 text-xs md:text-sm kurdish-text opacity-90 mt-0.5">
              وەرگێڕانا دەق، وێنە و ڤیدیۆیان بۆ کوردییا بادینی ب ژیرییا دەستکرد
            </p>
          </div>
        </div>

        {/* Action quick buttons */}
        <div className="hidden sm:flex items-center gap-2" dir="rtl">
          <button 
            onClick={() => imageInputRef.current?.click()}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-stone-200 transition-all kurdish-text border border-white/10"
            title="وەرگێڕانا وێنەی"
          >
            <ImageIcon size={16} className="text-amber-400" />
            <span>وێنە</span>
          </button>
          <button 
            onClick={() => videoInputRef.current?.click()}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-stone-200 transition-all kurdish-text border border-white/10"
            title="وەرگێڕانا ڤیدیویێ"
          >
            <Video size={16} className="text-emerald-400" />
            <span>ڤیدیۆ</span>
          </button>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 bg-stone-50/50" dir="rtl">
        <AnimatePresence initial={false}>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex gap-3 md:gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
            >
              {/* Avatar */}
              <div className={`shrink-0 w-10 h-10 rounded-2xl flex items-center justify-center shadow-sm ${msg.role === 'user' ? 'bg-[#6366f1] text-white' : 'bg-[#0f172a] text-amber-400'}`}>
                {msg.role === 'user' ? <User size={20} /> : <Bot size={20} />}
              </div>

              {/* Bubble */}
              <div className={`max-w-[85%] md:max-w-[75%] p-4 md:p-5 rounded-2xl ${
                msg.role === 'user' 
                  ? 'bg-[#6366f1] text-white rounded-tr-none shadow-md' 
                  : 'bg-white border border-stone-200/80 text-stone-800 shadow-sm rounded-tl-none'
              }`}>
                {/* Media Attachment in User Message */}
                {msg.attachment && (
                  <div className="mb-3 rounded-xl overflow-hidden border border-white/20 bg-black/10">
                    {msg.attachment.type === 'image' ? (
                      <div className="relative group cursor-pointer" onClick={() => setZoomedImage(msg.attachment?.previewUrl || null)}>
                        <img 
                          src={msg.attachment.previewUrl} 
                          alt="Attached" 
                          className="max-h-72 w-full object-contain rounded-xl bg-stone-900/50" 
                        />
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-xl">
                          <span className="bg-black/60 text-white text-xs px-3 py-1.5 rounded-lg flex items-center gap-1.5 kurdish-text font-medium">
                            <Maximize2 size={14} /> مەزنکرن
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="p-1">
                        <video 
                          src={msg.attachment.previewUrl} 
                          controls 
                          playsInline
                          className="max-h-72 w-full rounded-xl bg-black" 
                        />
                      </div>
                    )}
                    <div className="px-3 py-1.5 text-xs text-white/80 flex items-center justify-between bg-black/20">
                      <span className="truncate max-w-[200px]">{msg.attachment.name || (msg.attachment.type === 'image' ? 'وێنە' : 'ڤیدیۆ')}</span>
                      {msg.attachment.size && <span className="text-[11px] opacity-75">{msg.attachment.size}</span>}
                    </div>
                  </div>
                )}

                {/* Text Content */}
                {msg.content && (
                  <div className="kurdish-text text-sm md:text-base leading-relaxed whitespace-pre-wrap font-normal select-text">
                    {msg.content}
                  </div>
                )}

                {/* Assistant Controls (Copy & Listen) */}
                {msg.role === 'assistant' && msg.id !== 'welcome' && (
                  <div className="mt-3 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-400">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleCopy(msg.content, msg.id)}
                        className="flex items-center gap-1 hover:text-stone-700 transition-colors p-1.5 rounded-lg hover:bg-stone-100"
                        title="کۆپیکرن"
                      >
                        {copiedId === msg.id ? (
                          <>
                            <Check size={14} className="text-emerald-600" />
                            <span className="text-emerald-600 font-medium">کۆپی بوو!</span>
                          </>
                        ) : (
                          <>
                            <Copy size={14} />
                            <span>کۆپیکرن</span>
                          </>
                        )}
                      </button>

                      <button
                        onClick={() => handleSpeak(msg.content)}
                        className="flex items-center gap-1 hover:text-stone-700 transition-colors p-1.5 rounded-lg hover:bg-stone-100"
                        title="گوهداریکرن ل بەشێ ئنگلیزی"
                      >
                        <Volume2 size={14} className="text-[#6366f1]" />
                        <span>گوهداریکرن</span>
                      </button>
                    </div>

                    <span className="text-[11px] text-stone-400 flex items-center gap-1">
                      <Sparkles size={11} className="text-amber-500" /> وەرگێڕانا بادینی
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {/* Loading Spinner */}
        {isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex gap-3 md:gap-4 flex-row"
          >
            <div className="shrink-0 w-10 h-10 rounded-2xl flex items-center justify-center shadow-sm bg-[#0f172a] text-amber-400">
              <Bot size={20} />
            </div>
            <div className="max-w-[85%] md:max-w-[75%] p-4 rounded-2xl bg-white border border-stone-200/80 shadow-sm rounded-tl-none flex items-center gap-3">
              <Loader2 size={20} className="animate-spin text-[#6366f1]" />
              <div className="space-y-0.5">
                <span className="text-stone-800 text-sm font-bold kurdish-text block">
                  هاریکارێ زیرەک د وەرگێڕان و شیکارکرنێ دایە...
                </span>
                <span className="text-stone-400 text-xs kurdish-text block">
                  پشکنینا وێنە/ڤیدیو و دارشتنا وەرگێڕانا کوردییا بادینی
                </span>
              </div>
            </div>
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Selected Attachment Bar (Before Sending) */}
      <AnimatePresence>
        {attachedMedia && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-amber-50/80 border-t border-amber-200/60 p-3 shrink-0"
            dir="rtl"
          >
            <div className="max-w-3xl mx-auto flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {attachedMedia.type === 'image' ? (
                    <div className="w-12 h-12 rounded-xl overflow-hidden bg-black/10 relative shrink-0 border border-amber-300">
                      <img src={attachedMedia.previewUrl} alt="Preview" className="w-full h-full object-cover" />
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-xl bg-stone-900 flex items-center justify-center text-emerald-400 shrink-0 border border-amber-300">
                      <Video size={24} />
                    </div>
                  )}
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-stone-800 kurdish-text truncate max-w-[200px] md:max-w-[320px]">
                        {attachedMedia.name}
                      </span>
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-amber-200 text-amber-900 kurdish-text">
                        {attachedMedia.type === 'image' ? '📷 وێنە' : '🎥 ڤیدیۆ'}
                      </span>
                    </div>
                    <span className="text-xs text-stone-500 kurdish-text">
                      قەبارە: {attachedMedia.sizeFormatted} — ئامادەیە بۆ وەرگێڕانێ
                    </span>
                  </div>
                </div>

                <button
                  onClick={removeAttachment}
                  className="p-1.5 text-stone-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all"
                  title="لادان"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Quick prompt suggestions for attached media */}
              <div className="flex items-center gap-1.5 flex-wrap pt-1 border-t border-amber-200/40">
                <span className="text-[11px] text-amber-800 font-bold kurdish-text">پسیارێن بەرهەڤ:</span>
                {attachedMedia.type === 'image' ? (
                  <>
                    <button
                      onClick={() => handlePresetPrompt('تکایە هەمی دەقێ د ڤی وێنەی دا وەربگێڕە سەر کوردییا بادینی')}
                      className="text-xs bg-white hover:bg-amber-100 text-stone-700 border border-amber-300 px-2.5 py-1 rounded-lg kurdish-text transition-colors"
                    >
                      وەرگێڕانا هەمی دەقێ وێنەی
                    </button>
                    <button
                      onClick={() => handlePresetPrompt('پەیڤێن گرنگ یێن د ڤی وێنەی دا دگەل رامانا وان ب بادینی دیاربکە')}
                      className="text-xs bg-white hover:bg-amber-100 text-stone-700 border border-amber-300 px-2.5 py-1 rounded-lg kurdish-text transition-colors"
                    >
                      پەیڤێن گرنگ و واتا
                    </button>
                    <button
                      onClick={() => handlePresetPrompt('دەقێ د ڤی وێنەی دا ڕاستڤەبکە و خەلەتیێن ڕێزمانێ شروڤە بکە')}
                      className="text-xs bg-white hover:bg-amber-100 text-stone-700 border border-amber-300 px-2.5 py-1 rounded-lg kurdish-text transition-colors"
                    >
                      ڕاستڤەکرنا خەلەتیان
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => handlePresetPrompt('تکایە هەمی ئاخفتن و دەنگێ ڤێ ڤیدیویێ ب تەمامی وەربگێڕە سەر کوردییا بادینی')}
                      className="text-xs bg-white hover:bg-amber-100 text-stone-700 border border-amber-300 px-2.5 py-1 rounded-lg kurdish-text transition-colors"
                    >
                      وەرگێڕانا ئاخفتنێن ڤیدیویێ
                    </button>
                    <button
                      onClick={() => handlePresetPrompt('کورتەیا ڤێ ڤیدیویێ ب بادینی بێژە و پەیڤێن نوو یێن ئنگلیزی فێربکە')}
                      className="text-xs bg-white hover:bg-amber-100 text-stone-700 border border-amber-300 px-2.5 py-1 rounded-lg kurdish-text transition-colors"
                    >
                      کورتەیا ڤیدیو و پەیڤێن نوو
                    </button>
                    <button
                      onClick={() => handlePresetPrompt('دەستەواژە، سلاڤ و ئیدیۆمێن د ڤێ ڤیدیویێ دا هاتین شروڤە بکە')}
                      className="text-xs bg-white hover:bg-amber-100 text-stone-700 border border-amber-300 px-2.5 py-1 rounded-lg kurdish-text transition-colors"
                    >
                      دەستەواژە و ئیدیۆم
                    </button>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Input Area */}
      <div className="p-3 md:p-4 bg-white border-t border-stone-100 shrink-0">
        <div className="max-w-3xl mx-auto flex items-center gap-2">
          {/* Image & Video picker buttons */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => imageInputRef.current?.click()}
              disabled={isLoading}
              className="w-11 h-11 md:w-12 md:h-12 rounded-2xl bg-stone-100 hover:bg-stone-200 text-stone-700 flex items-center justify-center transition-all disabled:opacity-50 hover:scale-105 active:scale-95"
              title="بارکرنا وێنەی بۆ وەرگێڕانێ"
            >
              <ImageIcon size={20} className="text-amber-500" />
            </button>
            <button
              onClick={() => videoInputRef.current?.click()}
              disabled={isLoading}
              className="w-11 h-11 md:w-12 md:h-12 rounded-2xl bg-stone-100 hover:bg-stone-200 text-stone-700 flex items-center justify-center transition-all disabled:opacity-50 hover:scale-105 active:scale-95"
              title="بارکرنا ڤیدیویێ بۆ وەرگێڕانێ"
            >
              <Video size={20} className="text-emerald-600" />
            </button>
          </div>

          {/* Text Input */}
          <input
            type="text"
            dir="rtl"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            onPaste={handlePaste}
            placeholder={attachedMedia ? "پسیارەکێ دەربارەی ڤی فایلی بنڤیسە یان ئێکسەر بینێرە..." : "پسیارا خوە بنڤیسە، یان وێنە/ڤیدیۆ دەستنیشان بکە..."}
            className="flex-1 bg-stone-50 border border-stone-200 rounded-2xl px-4 md:px-6 py-3.5 md:py-4 focus:outline-none focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20 transition-all kurdish-text text-stone-800 placeholder:text-stone-400 text-sm md:text-base"
            disabled={isLoading}
          />

          {/* Send Button */}
          <button
            onClick={handleSendMessage}
            disabled={(!input.trim() && !attachedMedia) || isLoading}
            className="shrink-0 w-11 h-11 md:w-14 md:h-14 bg-[#0f172a] text-white rounded-2xl flex items-center justify-center hover:bg-[#34495e] transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-md hover:shadow-lg active:scale-95"
            title="هنارتن"
          >
            {isLoading ? <Loader2 size={22} className="animate-spin" /> : <Send size={22} className="rtl:-scale-x-100" />}
          </button>
        </div>

        {/* Footer info text */}
        <div className="flex items-center justify-between max-w-3xl mx-auto mt-2 px-1 text-[11px] text-stone-400 kurdish-text">
          <span className="flex items-center gap-1">
            <ImageIcon size={12} className="text-amber-500" /> دشێی وێنەی ڕاستەوخۆ کۆپی و پەیست (Paste) ژی بکەی
          </span>
          <span className="flex items-center gap-1">
            <MessageSquare size={12} /> وەرگێڕان ب زمانی کوردییا بادینی
          </span>
        </div>
      </div>

      {/* Full-screen Zoom Modal for Images */}
      <AnimatePresence>
        {zoomedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomedImage(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
          >
            <div className="relative max-w-4xl max-h-[90vh]">
              <img 
                src={zoomedImage} 
                alt="Enlarged view" 
                className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl" 
              />
              <button
                onClick={() => setZoomedImage(null)}
                className="absolute top-3 right-3 p-2 bg-black/60 text-white rounded-full hover:bg-black transition-colors"
              >
                <X size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
