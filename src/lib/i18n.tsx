import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Lang = "pt" | "en" | "fr";

export const LANGS: { code: Lang; label: string; htmlLang: string }[] = [
  { code: "pt", label: "PT", htmlLang: "pt-BR" },
  { code: "en", label: "EN", htmlLang: "en" },
  { code: "fr", label: "FR", htmlLang: "fr" },
];

type Dict = Record<string, string>;

const pt: Dict = {
  "nav./jornada": "A Jornada",
  "nav./personagens": "Personagens",
  "nav./planetas": "Os Planetas",
  "nav./frases": "Frases",
  "nav./poentes": "Pores do Sol",
  "nav./galeria": "Galeria",
  "nav./livro": "O Livro",
  "nav./autor": "O Autor",
  close: "Fechar",
  closeSection: "Fechar esta seção e voltar ao início",
  menu: "Menu",
  language: "Idioma",
  listen: "Ouvir a citação",
  stopListening: "Parar a narração",
  audioUnsupported: "Seu navegador não suporta narração por voz.",
  timelineTitle: "Linha do tempo ilustrada",
  timelineLead: "A vida do autor e a trajetória do livro, lado a lado, ano após ano.",
  filterLife: "Vida do autor",
  filterBook: "O livro",
  filterAll: "Tudo",
  hatHint: "Clique no desenho para ver o que existe por dentro",
  loadingImage: "Carregando ilustração",
};

const en: Dict = {
  "nav./jornada": "The Journey",
  "nav./personagens": "Characters",
  "nav./planetas": "The Planets",
  "nav./frases": "Quotes",
  "nav./poentes": "Sunsets",
  "nav./galeria": "Gallery",
  "nav./livro": "The Book",
  "nav./autor": "The Author",
  close: "Close",
  closeSection: "Close this section and go back home",
  menu: "Menu",
  language: "Language",
  listen: "Listen to the quote",
  stopListening: "Stop narration",
  audioUnsupported: "Your browser does not support speech narration.",
  timelineTitle: "Illustrated timeline",
  timelineLead: "The author's life and the book's path, side by side, year by year.",
  filterLife: "Author's life",
  filterBook: "The book",
  filterAll: "All",
  hatHint: "Click the drawing to see what is hidden inside",
  loadingImage: "Loading illustration",
};

const fr: Dict = {
  "nav./jornada": "Le Voyage",
  "nav./personagens": "Personnages",
  "nav./planetas": "Les Planètes",
  "nav./frases": "Citations",
  "nav./poentes": "Couchers de soleil",
  "nav./galeria": "Galerie",
  "nav./livro": "Le Livre",
  "nav./autor": "L'Auteur",
  close: "Fermer",
  closeSection: "Fermer cette section et revenir à l'accueil",
  menu: "Menu",
  language: "Langue",
  listen: "Écouter la citation",
  stopListening: "Arrêter la narration",
  audioUnsupported: "Votre navigateur ne prend pas en charge la narration vocale.",
  timelineTitle: "Chronologie illustrée",
  timelineLead: "La vie de l'auteur et le parcours du livre, année après année.",
  filterLife: "Vie de l'auteur",
  filterBook: "Le livre",
  filterAll: "Tout",
  hatHint: "Cliquez sur le dessin pour voir ce qu'il cache",
  loadingImage: "Chargement de l'illustration",
};

const DICTS: Record<Lang, Dict> = { pt, en, fr };

type I18nValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
  /** Escolhe entre variações traduzidas de um mesmo conteúdo. */
  pick: <T>(variants: Partial<Record<Lang, T>> & { pt: T }) => T;
  speechLocale: string;
};

const I18nContext = createContext<I18nValue | null>(null);

const STORAGE_KEY = "pp-lang";

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("pt");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (stored && stored in DICTS) setLangState(stored);
  }, []);

  useEffect(() => {
    const entry = LANGS.find((l) => l.code === lang);
    if (entry) document.documentElement.lang = entry.htmlLang;
  }, [lang]);

  const value = useMemo<I18nValue>(
    () => ({
      lang,
      setLang: (l) => {
        setLangState(l);
        try {
          window.localStorage.setItem(STORAGE_KEY, l);
        } catch {
          /* ignore */
        }
      },
      t: (key) => DICTS[lang][key] ?? DICTS.pt[key] ?? key,
      pick: (variants) => (variants[lang] ?? variants.pt) as never,
      speechLocale: lang === "pt" ? "pt-BR" : lang === "fr" ? "fr-FR" : "en-US",
    }),
    [lang],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    // Fallback seguro para SSR/árvores sem provider.
    return {
      lang: "pt",
      setLang: () => {},
      t: (key) => pt[key] ?? key,
      pick: (variants) => variants.pt as never,
      speechLocale: "pt-BR",
    };
  }
  return ctx;
}
