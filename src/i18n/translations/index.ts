import { en } from "./en";
import { fr } from "./fr";
import { es } from "./es";

export const translations = {
  en,
  fr,
  es,
} as const;

export type Language = keyof typeof translations;
export type TranslationKeys = typeof en;
