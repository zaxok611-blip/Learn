import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, ChevronRight, BookOpen, 
  MessageCircle, Volume2, Globe,
  ArrowLeft, Star, Heart, Share2,
  Bookmark, Headset, Sparkles
} from 'lucide-react';
import { Level, Conversation } from '../types';
import { conversations } from '../data/conversations';
import { cleanObjectToBadini } from '../utils/badiniTranslator';

const REFINED_CONVERSATIONS = conversations.map(c => {
  const cleanedC = cleanObjectToBadini(c, ['titleKurdish']);
  if (cleanedC.dialogue) {
    cleanedC.dialogue = cleanedC.dialogue.map(line => cleanObjectToBadini(line, ['translation']));
  }
  if (cleanedC.vocabulary) {
    cleanedC.vocabulary = cleanedC.vocabulary.map(voc => cleanObjectToBadini(voc, ['translation']));
  }
  return cleanedC;
});

interface ConversationViewProps {
  onBack?: () => void;
  activeLevel: Level;
}

export default function ConversationView({ onBack, activeLevel }: ConversationViewProps) {
  const [selectedLevelFilter, setSelectedLevelFilter] = useState<Level | 'All'>(activeLevel);
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
  const [extendedDialogue, setExtendedDialogue] = useState<any[]>([]);
  const [isExtending, setIsExtending] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [copiedLine, setCopiedLine] = useState<number | null>(null);

  // Sync with main app's selected level when it changes
  useEffect(() => {
    setSelectedLevelFilter(activeLevel);
  }, [activeLevel]);

  
  const handleExtendConversation = async () => {
    if (!selectedConversation) return;
    setIsExtending(true);
    try {
      const currentDialogue = [...selectedConversation.dialogue, ...extendedDialogue];
      const response = await fetch('/api/extend-conversation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: selectedConversation.title,
          dialogue: currentDialogue.slice(-6) // send last 6 lines for context
        })
      });
      const data = await response.json();
      if (data.success && data.newLines && data.newLines.length > 0) {
        setExtendedDialogue(prev => [...prev, ...data.newLines]);
      } else {
         alert(data.error || "Failed to extend conversation.");
      }
    } catch (e) {
      console.error(e);
      alert(e instanceof Error ? e.message : "Error extending conversation.");
    } finally {
      setIsExtending(false);
    }
  };

  const handleBack = () => {
    setSelectedConversation(null);
    setExtendedDialogue([]);
  };

  const handleShare = () => {
    if (selectedConversation) {
      const text = `English Conversation: ${selectedConversation.title}\n${selectedConversation.titleKurdish}\n\nLearn English with Kurdish translation!`;
      navigator.clipboard.writeText(text);
      setCopiedLine(-1); // Use -1 for global copy feedback
      setTimeout(() => setCopiedLine(null), 2000);
    }
  };

  const handleSpeak = (text: string) => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  };

  const handleCopyLine = (text: string, translation: string, idx: number) => {
    const fullText = `${text}\n${translation}`;
    navigator.clipboard.writeText(fullText);
    setCopiedLine(idx);
    setTimeout(() => setCopiedLine(null), 2000);
  };

  const filteredConversations = selectedLevelFilter === 'All'
    ? REFINED_CONVERSATIONS
    : REFINED_CONVERSATIONS.filter(c => c.level === selectedLevelFilter);

  const getLevelColor = (level: Level) => {
    switch (level) {
      case 'A1': return 'bg-emerald-500';
      case 'A2': return 'bg-teal-500';
      case 'B1': return 'bg-cyan-500';
      case 'B2': return 'bg-blue-500';
      case 'C1': return 'bg-indigo-500';
      case 'C2': return 'bg-violet-500';
      default: return 'bg-stone-500';
    }
  };

  const getLevelDesc = (level: Level) => {
    switch (level) {
      case 'A1': return 'Beginner (دەستپێک)';
      case 'A2': return 'Elementary (سەرەتایی)';
      case 'B1': return 'Intermediate (ناڤەندی)';
      case 'B2': return 'Upper Intermediate (ناڤەندییا بلند)';
      case 'C1': return 'Advanced (پیشکەفتی)';
      case 'C2': return 'Proficient (شارەزا)';
      default: return '';
    }
  };

  if (selectedConversation) {
    return (
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="space-y-6"
      >
        <div className="flex items-center justify-between mb-8">
          <button 
            onClick={handleBack}
            className="p-3 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all text-stone-600 hover:text-[#6366f1] flex items-center gap-2 font-bold kurdish-text"
          >
            <ArrowLeft size={20} />
            <span>گەڕانەوە</span>
          </button>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-[#0f172a] kurdish-text">{selectedConversation.titleKurdish}</h2>
            <p className="text-stone-500 font-medium italic">{selectedConversation.title}</p>
          </div>
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-stone-105 text-stone-600 border border-stone-200 self-center rounded-full text-xs font-bold uppercase tracking-wider h-fit">
              Level {selectedConversation.level}
            </span>
            <button 
              onClick={() => setIsLiked(!isLiked)}
              className={`p-3 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all ${isLiked ? 'text-rose-500 scale-110' : 'text-stone-400 hover:text-rose-500'}`}
            >
              <Heart size={20} fill={isLiked ? "currentColor" : "none"} />
            </button>
            <button 
              onClick={handleShare}
              className="p-3 bg-white rounded-2xl shadow-sm hover:shadow-md text-stone-400 hover:text-blue-500 transition-all"
            >
              <Share2 size={20} />
            </button>
          </div>
        </div>

        {/* Dialogue View */}
        <div className="bg-stone-50/50 rounded-3xl overflow-hidden border border-stone-200 p-4 md:p-8 space-y-6">
          <div className="flex items-center gap-3 mb-4 text-[#6366f1]">
            <Headset size={24} />
            <span className="font-black text-lg kurdish-text">گفتوگۆ (Dialogue)</span>
          </div>

          <div className="space-y-8">
            {[...selectedConversation.dialogue, ...extendedDialogue].map((line, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1, type: "spring", stiffness: 100 }}
                className={`flex ${idx % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`max-w-[85%] sm:max-w-[75%] space-y-1 ${idx % 2 === 0 ? 'items-start' : 'items-end flex flex-col'}`}>
                  <div className={`flex flex-col ${idx % 2 === 0 ? 'items-start' : 'items-end'}`}>
                    <div className={`flex items-center gap-2 mb-1 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                      idx % 2 === 0 ? 'bg-stone-100 text-stone-500' : 'bg-[#6366f1]/10 text-[#6366f1]'
                    }`}>
                      <Users size={12} />
                      {line.speaker}
                    </div>
                  </div>
                  
                  <div className={`relative group p-5 md:p-6 shadow-sm transition-all duration-300 ${idx % 2 === 0 ? 'bg-white rounded-2xl rounded-tl-sm border border-stone-200' : 'bg-[#0f172a] text-white rounded-2xl rounded-tr-sm shadow-stone-200/50'}`}>
                    <div className="flex flex-col gap-4">
                      <p className={`text-lg md:text-xl font-bold english-text leading-relaxed tracking-wide ${idx % 2 === 0 ? 'text-[#0f172a]' : 'text-white'}`}>
                        {line.text}
                      </p>
                      
                      <div className={`h-[2px] w-12 rounded-full ${idx % 2 === 0 ? 'bg-[#6366f1]/40' : 'bg-[#6366f1]/70'}`} />
                      
                      <p className={`text-base md:text-lg kurdish-text font-medium leading-relaxed ${idx % 2 === 0 ? 'text-stone-500' : 'text-stone-300'}`}>
                        {line.translation}
                      </p>
                    </div>

                    {/* Action Icons - Visible for better accessibility */}
                    <div className={`absolute bottom-3 ${idx % 2 === 0 ? 'right-4' : 'left-4'} flex items-center gap-3 opacity-40 group-hover:opacity-100 transition-opacity`}>
                      <button 
                        onClick={() => handleSpeak(line.text)}
                        className={`p-1.5 rounded-lg transition-colors ${idx % 2 === 0 ? 'hover:bg-stone-200 text-stone-600' : 'hover:bg-white/20 text-white'}`}
                      >
                        <Volume2 size={16} />
                      </button>
                      <button 
                        onClick={() => handleCopyLine(line.text, line.translation, idx)}
                        className={`p-1.5 rounded-lg transition-colors ${idx % 2 === 0 ? 'hover:bg-stone-200 text-stone-600' : 'hover:bg-white/20 text-white'}`}
                      >
                        {copiedLine === idx ? <Sparkles size={16} className="text-emerald-500" /> : <Bookmark size={16} />}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Extend button */}
          <div className="flex justify-center mt-8">
            <button
              onClick={handleExtendConversation}
              disabled={isExtending}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed font-bold kurdish-text"
            >
              <Sparkles size={20} className={isExtending ? "animate-pulse" : ""} />
              {isExtending ? 'د درێژکرنێ دایە...' : 'درێژکرنا گفتوگۆیێ ب AI'}
            </button>
          </div>

          {/* Vocabulary Section */}
          <div className="pt-12 border-t border-stone-100 mt-12">
            <div className="flex items-center gap-3 mb-6 text-[#6366f1]">
              <BookOpen size={24} />
              <span className="font-black text-lg kurdish-text">پەیڤێن سەرەکی (Key Vocabulary)</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {selectedConversation.vocabulary.map((item, idx) => (
                <div key={idx} className="bg-stone-50 p-4 rounded-2xl flex items-center justify-between hover:bg-stone-100 transition-colors cursor-default border border-stone-100">
                  <span className="font-black text-stone-700">{item.word}</span>
                  <span className="text-[#6366f1] font-bold kurdish-text">{item.translation}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0f172a] to-[#34495e] p-10 md:p-14 text-white shadow-xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-stone-900/10 rounded-full -ml-16 -mb-16 blur-3xl" />
        
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-5xl font-black mb-6 leading-tight kurdish-text shadow-sm">
            فێربوونا ئنگلیزی ب رێکا گفتوگۆیان
          </h1>
          <p className="text-xl text-white/90 font-medium leading-relaxed kurdish-text font-bold">
            گەشتەکا خۆش د ناڤبەرا ٦ ئاستێن جۆدا دا، گفتوگۆ هەمی ب وەرگێڕانا کوردی (بادینی) و پەیڤێن سەرەکی.
          </p>
        </div>
      </div>

      {/* Tabs list directly shown */}
      <div className="space-y-8">
        {/* Level Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 bg-stone-100/60 p-2 rounded-3xl max-w-2xl mx-auto border border-stone-200/50 backdrop-blur-sm">
          {(['All', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'] as const).map((lvl) => (
            <button
              key={lvl}
              onClick={() => setSelectedLevelFilter(lvl)}
              className={`
                px-5 py-2 rounded-2xl text-sm font-bold transition-all duration-300 kurdish-text
                ${selectedLevelFilter === lvl
                  ? 'bg-[#6366f1] text-white shadow-md'
                  : 'text-stone-600 hover:text-[#6366f1] hover:bg-white'}
              `}
            >
              {lvl === 'All' ? 'هەمی گفتوگۆ' : `ئاستێ ${lvl}`}
            </button>
          ))}
        </div>

        {/* Conversations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredConversations.length > 0 ? (
            filteredConversations.map((conv) => (
              <motion.button
                key={conv.id}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedConversation(conv)}
                className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition-all border border-stone-200 text-left relative overflow-hidden flex flex-col justify-between min-h-[200px]"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 ${getLevelColor(conv.level)} opacity-[0.03] -mr-8 -mt-8 rounded-full`} />
                
                <div className="w-full">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-2.5 py-1 text-white rounded-lg text-[10px] font-bold uppercase tracking-wider ${getLevelColor(conv.level)}`}>
                      Level {conv.level}
                    </span>
                    <div className="text-stone-300 group-hover:text-[#6366f1] transition-colors">
                      <MessageCircle size={20} />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-stone-800 kurdish-text group-hover:text-[#0f172a] transition-colors leading-snug">
                    {conv.titleKurdish}
                  </h3>
                  <p className="text-stone-400 font-medium italic mt-1 text-sm line-clamp-1">{conv.title}</p>
                </div>

                <div className="flex items-center gap-4 mt-4 pt-4 border-t border-stone-100 w-full justify-between">
                  <div className="flex gap-4">
                    <div className="flex items-center gap-1 text-xs font-bold text-stone-400">
                      <Users size={14} />
                      <span>{conv.dialogue.length} lines</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs font-bold text-stone-400">
                      <BookOpen size={14} />
                      <span>{conv.vocabulary.length} words</span>
                    </div>
                  </div>
                  <ChevronRight size={16} className="text-stone-300 group-hover:text-[#6366f1] transition-colors" />
                </div>
              </motion.button>
            ))
          ) : (
            <div className="col-span-full py-12 text-center text-stone-400 bg-stone-50 rounded-[2.5rem]">
              <Sparkles size={48} className="mx-auto mb-4 opacity-20" />
              <p className="kurdish-text font-bold text-xl text-stone-600">چاوەڕێ بە! کار ل سەر ڤان گفتوگۆیان دهێتە کرن...</p>
              <p className="text-sm italic text-stone-400">More conversations coming soon for level {selectedLevelFilter}.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
