import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";

import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { QuoteAudio } from "@/components/QuoteAudio";
import { useContent } from "@/lib/use-content";
import { SITE_ORIGIN, OG_IMAGE, quoteThemes } from "@/data/content";

const TITLE = "Frases de O Pequeno Príncipe — Antologia com busca";
const DESCRIPTION =
  "Todas as citações de O Pequeno Príncipe reunidas: busque por palavra e filtre por personagem ou por tema — amor, responsabilidade, infância, solidão e esperança.";

export const Route = createFileRoute("/frases")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `${SITE_ORIGIN}/frases` },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE_ORIGIN}/frases` }],
  }),
  component: FrasesPage,
});

function normalize(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function FrasesPage() {
  const { copy, anthology } = useContent();
  const c = copy.frases;

  const [query, setQuery] = useState("");
  const [who, setWho] = useState<string>("all");
  const [theme, setTheme] = useState<string>("all");

  const people = useMemo(() => Array.from(new Set(anthology.map((q) => q.who))), [anthology]);

  const results = useMemo(() => {
    const q = normalize(query.trim());
    return anthology.filter((item) => {
      if (who !== "all" && item.who !== who) return false;
      if (theme !== "all" && item.theme !== theme) return false;
      if (!q) return true;
      return normalize(`${item.text} ${item.who} ${item.chapter}`).includes(q);
    });
  }, [anthology, query, who, theme]);

  const active = query !== "" || who !== "all" || theme !== "all";

  const chip = (isActive: boolean) =>
    `rounded-full border px-4 py-1.5 text-[0.68rem] tracking-[0.18em] uppercase transition-colors ${
      isActive
        ? "border-sand-deep bg-sand-deep/20 text-primary"
        : "border-border text-muted-foreground hover:border-sand-deep hover:text-primary"
    }`;

  return (
    <>
      <PageHero eyebrow={c.eyebrow} title={c.title} lead={c.lead} />

      <section className="container-page section-pad">
        <Reveal>
          <label htmlFor="quote-search" className="caption-label">
            {c.searchLabel}
          </label>
          <div className="relative mt-3 max-w-xl">
            <Search
              aria-hidden
              className="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            />
            <input
              id="quote-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={c.searchPlaceholder}
              className="w-full rounded-full border border-border bg-card py-3 pr-4 pl-11 text-base text-foreground placeholder:text-muted-foreground/70"
            />
          </div>

          <div className="mt-8 space-y-5">
            <div>
              <p className="caption-label">{c.byCharacter}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <button type="button" onClick={() => setWho("all")} className={chip(who === "all")}>
                  {c.all}
                </button>
                {people.map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setWho(p)}
                    className={chip(who === p)}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="caption-label">{c.byTheme}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setTheme("all")}
                  className={chip(theme === "all")}
                >
                  {c.all}
                </button>
                {quoteThemes.map((th) => (
                  <button
                    key={th}
                    type="button"
                    onClick={() => setTheme(th)}
                    className={chip(theme === th)}
                  >
                    {copy.themes[th]}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <p className="caption-label">
              {results.length} {c.results}
            </p>
            {active && (
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setWho("all");
                  setTheme("all");
                }}
                className="inline-flex items-center gap-2 text-xs tracking-[0.18em] text-muted-foreground uppercase transition-colors hover:text-primary"
              >
                <X className="h-3.5 w-3.5" />
                {c.clear}
              </button>
            )}
          </div>
        </Reveal>

        {results.length === 0 ? (
          <p className="body-copy mt-12">{c.empty}</p>
        ) : (
          <ul className="mt-12 grid gap-10 md:grid-cols-2">
            {results.map((q, i) => (
              <Reveal as="li" key={q.text} delay={i * 50}>
                <blockquote className="h-full rounded-sm border border-border bg-card p-6">
                  <p className="font-display text-2xl leading-snug text-primary italic">
                    “{q.text}”
                  </p>
                  <footer className="caption-label mt-4">
                    {q.who} · {q.chapter} · {copy.themes[q.theme]}
                  </footer>
                  <QuoteAudio text={q.text} />
                </blockquote>
              </Reveal>
            ))}
          </ul>
        )}

        <Reveal className="mt-16 border-t border-border pt-10">
          <p className="caption-label">{copy.livro.continueLabel}</p>
          <Link to="/livro" className="mt-2 link-arrow text-3xl">
            {copy.livro.title}
          </Link>
        </Reveal>
      </section>
    </>
  );
}
