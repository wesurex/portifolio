import "server-only";
import type { Dictionary } from "./dictionary";

const dictionaries = {
  "pt-BR": () => import("./dictionaries/pt-BR.json").then((m) => m.default),
  es: () => import("./dictionaries/es.json").then((m) => m.default),
  en: () => import("./dictionaries/en.json").then((m) => m.default),
} satisfies Record<string, () => Promise<Dictionary>>;

export type Locale = keyof typeof dictionaries;

export const locales = Object.keys(dictionaries) as Locale[];
export const defaultLocale: Locale = "en";

export const hasLocale = (locale: string): locale is Locale =>
  locale in dictionaries;

export const getDictionary = (locale: Locale): Promise<Dictionary> =>
  dictionaries[locale]();
