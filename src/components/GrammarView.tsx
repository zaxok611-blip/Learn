import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GraduationCap, BookOpen, Volume2, Bookmark, 
  Sparkles, ArrowLeft, CheckCircle2, ChevronRight,
  Info, Award, HelpCircle, Copy, Share2
} from 'lucide-react';
import { Level } from '../types';
import { GRAMMAR_TOPICS, GrammarTopic } from '../data/grammar';
import { cleanObjectToBadini } from '../utils/badiniTranslator';

const REFINED_GRAMMAR_TOPICS = GRAMMAR_TOPICS.map(topic => {
  const cleanedTopic = cleanObjectToBadini(topic, ['titleKurdish', 'category']);
  if (cleanedTopic.content) {
    cleanedTopic.content = cleanedTopic.content.map(sec => {
      let cleanedSec = cleanObjectToBadini(sec, ['rule', 'explanation', 'notes']);
      if (cleanedSec.examples) {
        cleanedSec.examples = cleanedSec.examples.map(ex => cleanObjectToBadini(ex, ['ku']));
      }
      return cleanedSec;
    });
  }
  return cleanedTopic;
});

interface GrammarViewProps {
  activeLevel: Level;
}

export default function GrammarView({ activeLevel }: GrammarViewProps) {
  const [selectedLevelFilter, setSelectedLevelFilter] = useState<Level | 'All'>(activeLevel);
  const [selectedTopic, setSelectedTopic] = useState<GrammarTopic | null>(null);
  const [learnedTopics, setLearnedTopics] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('learned_grammar_topics');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null);

  // Sync level with parent activeLevel
  useEffect(() => {
    setSelectedLevelFilter(activeLevel);
  }, [activeLevel]);

  // Keep track of learned topics
  const toggleLearned = (topicId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLearnedTopics(prev => {
      const updated = prev.includes(topicId) 
        ? prev.filter(id => id !== topicId) 
        : [...prev, topicId];
      localStorage.setItem('learned_grammar_topics', JSON.stringify(updated));
      return updated;
    });
  };

  const handleSpeak = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleCopyText = (text: string, translation: string, key: string) => {
    const fullText = `${text}\n${translation}`;
    navigator.clipboard.writeText(fullText).then(() => {
      setCopiedIndex(key);
      setTimeout(() => setCopiedIndex(null), 2000);
    });
  };

  const handleShareTopic = () => {
    if (selectedTopic) {
      const shareText = `بابەتێ ڕێزمانێ: ${selectedTopic.titleKurdish} (${selectedTopic.title})\nفێربوونا زمانێ ئنگلیزی ب لایەنێ کرداری و ب زمانی بادینی!\nئاستێ: Level ${selectedTopic.level}`;
      navigator.clipboard.writeText(shareText).then(() => {
        setCopiedIndex('share');
        setTimeout(() => setCopiedIndex(null), 2000);
      });
    }
  };

  // Filter topics
  const filteredTopics = selectedLevelFilter === 'All'
    ? REFINED_GRAMMAR_TOPICS
    : REFINED_GRAMMAR_TOPICS.filter(t => t.level === selectedLevelFilter);

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

  const getLevelBorder = (level: Level) => {
    switch (level) {
      case 'A1': return 'border-emerald-200 hover:border-emerald-400';
      case 'A2': return 'border-teal-200 hover:border-teal-400';
      case 'B1': return 'border-cyan-200 hover:border-cyan-400';
      case 'B2': return 'border-blue-200 hover:border-blue-400';
      case 'C1': return 'border-indigo-200 hover:border-indigo-400';
      case 'C2': return 'border-violet-200 hover:border-violet-400';
      default: return 'border-stone-200';
    }
  };

  const getLevelProgress = (level: Level | 'All') => {
    const levelTopics = level === 'All' 
      ? REFINED_GRAMMAR_TOPICS 
      : REFINED_GRAMMAR_TOPICS.filter(t => t.level === level);
    if (levelTopics.length === 0) return 0;
    const completed = levelTopics.filter(t => learnedTopics.includes(t.id)).length;
    return Math.round((completed / levelTopics.length) * 100);
  };

  if (selectedTopic) {
    const isLearned = learnedTopics.includes(selectedTopic.id);
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        className="space-y-6"
      >
        {/* Navigation Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
          <button 
            onClick={() => setSelectedTopic(null)}
            className="px-5 py-3 w-fit bg-white border border-stone-100 rounded-2xl shadow-sm hover:shadow-md transition-all text-stone-600 hover:text-[#0f172a] flex items-center gap-2 font-bold kurdish-text active:scale-95 duration-200"
          >
            <ArrowLeft size={18} />
            <span>پاڕاستنا بەردەوامی و زڤڕین</span>
          </button>
          
          <div className="flex flex-wrap items-center gap-2">
            <span className={`px-4 py-1.5 text-white ${getLevelColor(selectedTopic.level)} rounded-xl text-xs font-black uppercase tracking-wider shadow-sm`}>
              ئاستێ {selectedTopic.level}
            </span>
            <span className="px-4 py-1.5 bg-[#8b5cf6] text-[#0f172a] rounded-xl text-xs font-black kurdish-text shadow-sm">
              {selectedTopic.category}
            </span>
            <button 
              onClick={(e) => toggleLearned(selectedTopic.id, e)}
              className={`px-5 py-2 rounded-xl text-xs font-bold shadow-sm flex items-center gap-2 transition-all active:scale-95 ${
                isLearned 
                  ? 'bg-emerald-500 text-white hover:bg-emerald-600' 
                  : 'bg-white text-stone-600 hover:bg-stone-50 border border-stone-200'
              }`}
            >
              <CheckCircle2 size={16} />
              <span className="kurdish-text">{isLearned ? 'خواندنی تەمام کر' : 'وەکو خواندنی دەستنیشان بکە'}</span>
            </button>
            <button 
              onClick={handleShareTopic}
              className="p-2.5 bg-white border border-stone-200 rounded-xl hover:bg-stone-50 transition-colors shadow-sm"
              title="کۆپیکرنا مەلۆماتێن بابەت"
            >
              <Share2 size={16} className="text-stone-500" />
            </button>
          </div>
        </div>

        {/* Detailed Topic Layout */}
        <div className="bg-white rounded-[3rem] shadow-xl overflow-hidden border border-stone-100/80">
          {/* Cover Header */}
          <div className="bg-gradient-to-r from-[#0f172a] to-[#1a252f] p-10 md:p-14 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#8b5cf6]/10 rounded-full -ml-32 -mb-32 blur-3xl" />
            
            <div className="relative z-10 max-w-3xl space-y-3">
              <span className="text-[#8b5cf6] text-xs font-black tracking-widest uppercase block">{selectedTopic.category} • LEVEL {selectedTopic.level}</span>
              <h2 className="text-4xl md:text-5xl font-black kurdish-text leading-tight drop-shadow">
                {selectedTopic.titleKurdish}
              </h2>
              <p className="text-stone-300 text-xl font-mono tracking-widest uppercase">
                {selectedTopic.title}
              </p>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-8 md:p-14 space-y-16">
            {selectedTopic.content.map((section, idx) => (
              <div key={idx} className="relative group">
                {/* Visual Number Indicator */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-[#0f172a]/5 text-[#0f172a] rounded-2xl flex items-center justify-center font-black text-xl border border-stone-200/50">
                    {idx + 1}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-stone-800 kurdish-text">
                    {section.rule}
                  </h3>
                </div>

                {/* Explanation Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Explanation Text and Structure */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="bg-stone-50 p-6 md:p-8 rounded-3xl border-r-8 border-r-[#0f172a] shadow-sm">
                      <p className="text-stone-700 font-bold kurdish-text leading-relaxed text-lg whitespace-pre-line">
                        {section.explanation}
                      </p>
                    </div>

                    {section.structure && (
                      <div className="bg-[#0f172a] p-6 md:p-8 rounded-3xl text-white shadow-md relative overflow-hidden">
                        <div className="absolute -top-4 -right-4 text-white/5 pointer-events-none">
                          <GraduationCap size={120} />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-400 mb-3 block kurdish-text">پێکهاتە و رێسا (Structure Formula)</span>
                        <p className="text-xl md:text-2xl font-black english-text tracking-wide text-[#8b5cf6] select-all">
                          {section.structure}
                        </p>
                      </div>
                    )}

                    {section.notes && section.notes.length > 0 && (
                      <div className="bg-amber-50/40 border border-amber-100 p-6 md:p-8 rounded-3xl space-y-3">
                        <div className="flex items-center gap-2 text-amber-700">
                          <Info size={18} />
                          <span className="font-black kurdish-text text-base">تێبینیێن کارا و سەرنج (Pro-Tips)</span>
                        </div>
                        <ul className="space-y-3">
                          {section.notes.map((note, nIdx) => (
                            <li key={nIdx} className="flex items-start gap-3 text-stone-600 kurdish-text text-sm font-bold leading-relaxed">
                              <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                              <span className="flex-1">{note}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Examples Column */}
                  <div className="lg:col-span-5 space-y-4">
                    <span className="text-[10px] font-black uppercase tracking-[0.15em] text-stone-400 block mb-2 text-right kurdish-text">لێکدان و نموونێن کارا (Practical Examples)</span>
                    <div className="space-y-4">
                      {section.examples.map((ex, exIdx) => {
                        const uniqueKey = `${idx}-${exIdx}`;
                        return (
                          <motion.div 
                            key={exIdx}
                            whileHover={{ y: -2 }}
                            className="bg-white border border-stone-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all relative group/item"
                          >
                            <div className="space-y-3">
                              <p className="text-lg font-bold english-text text-[#0f172a] leading-tight pr-12">
                                {ex.en}
                              </p>
                              <div className="h-[1px] w-8 bg-stone-100" />
                              <p className="text-base font-bold kurdish-text text-stone-500 leading-relaxed">
                                {ex.ku}
                              </p>
                            </div>

                            {/* TTS & Copy triggers */}
                            <div className="absolute top-4 right-4 flex items-center gap-2 opacity-50 group-hover/item:opacity-100 transition-opacity">
                              <button 
                                onClick={() => handleSpeak(ex.en)}
                                className="p-1.5 text-stone-400 hover:text-[#0f172a] hover:bg-stone-50 rounded-lg transition-all"
                                title="Speak example"
                              >
                                <Volume2 size={16} />
                              </button>
                              <button 
                                onClick={() => handleCopyText(ex.en, ex.ku, uniqueKey)}
                                className="p-1.5 text-stone-400 hover:text-emerald-600 hover:bg-stone-50 rounded-lg transition-all"
                                title="Copy example"
                              >
                                {copiedIndex === uniqueKey ? (
                                  <Sparkles size={16} className="text-emerald-500" />
                                ) : (
                                  <Copy size={14} />
                                )}
                              </button>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {idx < selectedTopic.content.length - 1 && (
                  <div className="h-[1px] bg-stone-100 w-full my-12" />
                )}
              </div>
            ))}
          </div>

          {/* Bottom Complete Panel */}
          <div className="bg-stone-50 p-8 border-t border-stone-100 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#8b5cf6]/10 flex items-center justify-center text-[#8b5cf6]">
                <Award size={24} />
              </div>
              <div>
                <h4 className="text-lg font-black text-stone-800 kurdish-text">ئایا دووماهیک تەمام کر؟</h4>
                <p className="text-sm text-stone-500 font-bold kurdish-text">هەکە بابەت یێ تەمام ب خوینە، نیشان بکە هەتا پێشکەڤتنا تە زێدە بیت.</p>
              </div>
            </div>
            <button 
              onClick={(e) => {
                toggleLearned(selectedTopic.id, e);
                setSelectedTopic(null);
              }}
              className={`px-8 py-3 rounded-2xl font-bold cursor-pointer text-sm shadow transition-all active:scale-95 kurdish-text ${
                isLearned 
                  ? 'bg-stone-200 text-stone-600 hover:bg-stone-300'
                  : 'bg-[#0f172a] text-white hover:bg-[#1a252f]'
              }`}
            >
              {isLearned ? 'ل سەر خۆ تەرخێ بکە و بڕێزە د لیستێ دا' : 'هەمی تەمام بوو! تۆمار بکە'}
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="space-y-10">
      {/* Visual Header */}
      <div className="relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-[#0f172a] to-[#34495e] p-12 text-white shadow-2xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -mr-16 -mt-16 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#8b5cf6]/10 rounded-full -ml-16 -mb-16 blur-3xl" />
        
        <div className="relative z-10 max-w-2xl">
          <span className="bg-[#8b5cf6] text-[#0f172a] px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-4 inline-block">
            ڕێزمانا فەرمی تێکست
          </span>
          <h1 className="text-5xl font-black mb-6 leading-tight kurdish-text drop-shadow-sm">
            فێربوونا ڕێزمانا ئنگلیزی ب شێوازێ تەفاسیلی
          </h1>
          <p className="text-lg text-stone-300 font-medium leading-relaxed kurdish-text font-bold">
            هەمی بابەتێن سەرەکی و پەیڤێن فەرمی ژ گڕامەری ب زمانێ بادینی بهۆنراوەکێن تێل، ب شلوڤەکرنێن درێژ و رێسایێن ڕاست، نموونە و تێبینیێن زێردە.
          </p>

          {/* overall progress bar */}
          <div className="mt-8 pt-6 border-t border-white/10 max-w-md">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-black text-white/80 kurdish-text">پێشکەفتنا گشتی یا ڕێزمانێ</span>
              <span className="text-xs font-black text-[#8b5cf6] font-mono">{getLevelProgress('All')}%</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2">
              <div 
                className="bg-[#8b5cf6] h-2 rounded-full transition-all duration-500" 
                style={{ width: `${getLevelProgress('All')}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Layout */}
      <div className="space-y-8">
        {/* Level Filters like Dialogue and Story */}
        <div className="flex flex-wrap items-center justify-center gap-2 bg-stone-100/60 p-2 rounded-3xl max-w-2xl mx-auto border border-stone-200/50 backdrop-blur-sm">
          {(['All', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'] as const).map((lvl) => {
            const progress = getLevelProgress(lvl);
            return (
              <button
                key={lvl}
                onClick={() => setSelectedLevelFilter(lvl)}
                className={`
                  px-5 py-2.5 rounded-2xl text-sm font-bold transition-all duration-300 kurdish-text relative flex items-center gap-1.5
                  ${selectedLevelFilter === lvl
                    ? 'bg-[#0f172a] text-white shadow-md'
                    : 'text-stone-600 hover:text-[#0f172a] hover:bg-white'}
                `}
              >
                <span>{lvl === 'All' ? 'هەمی بابەت' : `ئاستێ ${lvl}`}</span>
                {progress > 0 && (
                  <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-bold font-mono ${
                    selectedLevelFilter === lvl ? 'bg-[#8b5cf6] text-[#0f172a]' : 'bg-stone-205 text-stone-600'
                  }`}>
                    {progress}%
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTopics.length > 0 ? (
            filteredTopics.map((topic) => {
              const completed = learnedTopics.includes(topic.id);
              return (
                <motion.button
                  key={topic.id}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedTopic(topic)}
                  className={`bg-white p-6 rounded-[2.5rem] shadow-lg hover:shadow-xl transition-all border ${
                    completed ? 'border-emerald-250 bg-emerald-50/5' : 'border-stone-50'
                  } text-right relative overflow-hidden flex flex-col justify-between min-h-[220px]`}
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 ${getLevelColor(topic.level)} opacity-[0.03] -mr-8 -mt-8 rounded-full`} />
                  
                  <div className="w-full">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-2.5 py-1 text-white rounded-lg text-[10px] font-black uppercase tracking-wider ${getLevelColor(topic.level)}`}>
                        Level {topic.level}
                      </span>
                      <div className="flex items-center gap-2">
                        {completed && (
                          <span className="p-1 bg-emerald-100 text-emerald-600 rounded-full" title="Subject complete">
                            <CheckCircle2 size={14} />
                          </span>
                        )}
                        <span className="text-xs font-black text-stone-400 bg-stone-50 py-1 px-2.5 rounded-lg border border-stone-100">
                          {topic.category}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-black text-stone-800 kurdish-text mt-2 leading-snug">
                      {topic.titleKurdish}
                    </h3>
                    <p className="text-stone-400 font-medium italic mt-1 text-sm">{topic.title}</p>
                  </div>

                  <div className="flex items-center gap-4 mt-6 pt-4 border-t border-stone-100 w-full justify-between">
                    <div className="text-xs font-bold text-stone-400 font-mono">
                      {topic.content.length} {topic.content.length === 1 ? 'part' : 'parts'}
                    </div>
                    <div className="flex items-center gap-1.5 text-stone-600 hover:text-[#0f172a] font-black transition-colors">
                      <span className="kurdish-text text-xs">بخوینە</span>
                      <ChevronRight size={14} className="rotate-180" />
                    </div>
                  </div>
                </motion.button>
              );
            })
          ) : (
            <div className="col-span-full py-16 text-center text-stone-400 bg-stone-50 rounded-[2.5rem]">
              <HelpCircle size={48} className="mx-auto mb-4 opacity-20" />
              <p className="kurdish-text font-bold text-xl text-stone-600">کار ل سەر بابەتێن ڤی ئاستی دهێتە کرن...</p>
              <p className="text-sm italic text-stone-400">Detailed explanations for Level {selectedLevelFilter} are coming soon.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
