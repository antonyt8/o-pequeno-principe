import { createFileRoute, Link } from "@tanstack/react-router";

import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SITE_ORIGIN, OG_IMAGE, planets } from "@/data/content";
import { useContent } from "@/lib/use-content";

const TITLE = "Os Planetas Visitados — O Pequeno Príncipe";
const DESCRIPTION =
  "As sete escalas do pequeno príncipe: o rei, o vaidoso, o bêbado, o homem de negócios, o acendedor, o geógrafo e a Terra — e a lição de cada asteroide.";

export const Route = createFileRoute("/planetas")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `${SITE_ORIGIN}/planetas` },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE_ORIGIN}/planetas` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Os planetas visitados pelo pequeno príncipe",
          itemListElement: planets.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: p.name,
            description: p.line,
          })),
        }),
      },
    ],
  }),
  component: PlanetasPage,
});

function PlanetasPage() {
  const { copy, planets: list } = useContent();
  const c = copy.planetas;

  return (
    <>
      <PageHero eyebrow={c.eyebrow} title={c.title} lead={c.lead} />

      <section className="container-page section-pad">
        <ol className="grid gap-px overflow-hidden rounded-sm border border-border bg-border">
          {list.map((p, i) => (
            <Reveal
              as="li"
              key={p.n}
              delay={i * 60}
              className={`grid gap-4 p-8 md:grid-cols-[8rem_1fr_18rem] md:items-baseline ${
                i % 2 === 1 ? "bg-secondary/70" : "bg-card"
              }`}
            >
              <div className="flex items-baseline gap-3">
                <span className="font-display text-5xl text-sand-deep">{i + 1}</span>
                <span className="caption-label">B-{p.n}</span>
              </div>
              <div>
                <h2 className="font-display text-2xl text-primary">{p.name}</h2>
                <p className="body-copy mt-2 text-sm">{p.line}</p>
              </div>
              <p className="border-l-2 border-sand-deep pl-4 font-display text-lg text-primary/90 italic">
                {p.lesson}
              </p>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="bg-navy-deep">
        <div className="container-page section-pad text-center">
          <Reveal>
            <p className="eyebrow text-amber-ink">{c.breakEyebrow}</p>
            <blockquote className="mx-auto mt-6 max-w-3xl font-display text-3xl leading-snug text-cream italic md:text-4xl">
              “{c.breakQuote}”
            </blockquote>
            <p className="mt-6 text-sm tracking-[0.2em] text-cream/50 uppercase">
              {c.breakChapter}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-page section-pad">
        <Reveal className="border-t border-border pt-10">
          <p className="caption-label">{c.nextLabel}</p>
          <Link to="/poentes" className="mt-2 link-arrow text-3xl">
            {c.nextLink}
          </Link>
        </Reveal>
      </section>
    </>
  );
}
