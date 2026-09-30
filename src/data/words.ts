import { WordEntry } from "../types";
import a1Data from "./a1Words.json";
import a2Data from "./a2Words.json";
import b1Data from "./b1Words.json";
import b2Data from "./b2Words.json";
import c1Data from "./c1Words.json";
import c2Data from "./c2Words.json";

export const ALL_A1_WORDS: WordEntry[] = a1Data as WordEntry[];
export const ALL_A2_WORDS: WordEntry[] = a2Data as WordEntry[];
export const ALL_B1_WORDS: WordEntry[] = b1Data as WordEntry[];
export const ALL_B2_WORDS: WordEntry[] = b2Data as WordEntry[];
export const ALL_C1_WORDS: WordEntry[] = c1Data as WordEntry[];
export const ALL_C2_WORDS: WordEntry[] = c2Data as WordEntry[];

export const WORDS: WordEntry[] = [
  ...ALL_A1_WORDS,
  ...ALL_A2_WORDS,
  ...ALL_B1_WORDS,
  ...ALL_B2_WORDS,
  ...ALL_C1_WORDS,
  ...ALL_C2_WORDS,
];
