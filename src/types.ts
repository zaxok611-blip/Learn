export type Level = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
export type ViewMode = 'home' | 'list' | 'quiz' | 'phrasal' | 'idioms' | 'saved' | 'stories' | 'grammar' | 'conversations' | 'aichat';

export interface WordData {
  word: string;
  pronunciation: string;
  meaning: string;
  definition: string;
  definitionEnglish: string;
  exampleEnglish: string;
  exampleKurdish: string;
  partOfSpeech?: string;
}

export interface WordEntry extends WordData {
  id: string | number;
  level?: Level;
}

export interface DialogueLine {
  speaker: string;
  text: string;
  translation: string;
}

export interface VocabularyItem {
  word: string;
  translation: string;
}

export interface Conversation {
  id: string;
  title: string;
  titleKurdish: string;
  level?: Level;
  dialogue: DialogueLine[];
  vocabulary: VocabularyItem[];
}

export interface StoryQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number; // index of the correct option
}

export interface Story {
  id: string;
  title: string;
  titleKurdish: string;
  content: string;
  contentKurdish: string;
  level?: Level;
  questions: StoryQuestion[];
}
