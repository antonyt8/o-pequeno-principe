import { useMemo } from "react";

import { useI18n } from "@/lib/i18n";
import { COPY, DATA, type Copy } from "@/data/translations";
import {
  gallery as ptGallery,
  quotes as ptQuotes,
  anthology as ptAnthology,
  editions as ptEditions,
  planets as ptPlanets,
  characters as ptCharacters,
  bookFacts as ptBookFacts,
  timelineEntries as ptTimeline,
} from "@/data/content";

/** Mescla o array base (com imagens/valores) com o override traduzido, por índice. */
function merge<T extends object, O extends object>(base: T[], over?: O[]): T[] {
  if (!over) return base;
  return base.map((item, i) => ({ ...item, ...(over[i] ?? {}) }));
}

export function useContent() {
  const { lang } = useI18n();

  return useMemo(() => {
    const over = DATA[lang];
    const copy: Copy = COPY[lang] ?? COPY.pt;
    return {
      copy,
      gallery: merge(ptGallery, over?.gallery),
      quotes: merge(ptQuotes, over?.quotes),
      anthology: merge(ptAnthology, over?.anthology),
      editions: merge(ptEditions, over?.editions),
      planets: merge(ptPlanets, over?.planets),
      characters: merge(ptCharacters, over?.characters),
      bookFacts: merge(ptBookFacts, over?.bookFacts),
      timeline: merge(ptTimeline, over?.timeline),
    };
  }, [lang]);
}
