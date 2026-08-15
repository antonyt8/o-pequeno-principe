import { createFileRoute, Link } from "@tanstack/react-router";

import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { HatOrBoa } from "@/components/HatOrBoa";
import { SmartImage } from "@/components/SmartImage";
import { QuoteAudio } from "@/components/QuoteAudio";
import { SITE_ORIGIN, OG_IMAGE, characters } from "@/data/content";
import { useContent } from "@/lib/use-content";

const TITLE = "Personagens e Símbolos — O Pequeno Príncipe";
const DESCRIPTION =
  "Quem é quem em O Pequeno Príncipe: o príncipe, o piloto, a raposa, a rosa, a serpente, o carneiro na caixa e o astrônomo turco — e o que cada um simboliza.";

export const Route = createFileRoute("/personagens")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `${SITE_ORIGIN}/personagens` },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE_ORIGIN}/personagens` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Personagens de O Pequeno Príncipe",
          itemListElement: characters.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: c.name,
            description: c.text,
          })),
        }),
      },
    ],
  }),
  component: PersonagensPage,
});

function PersonagensPage() {
  const { copy, characters: list, quotes } = useContent();
  const c = copy.personagens;

  return (
    <>
      <PageHero eyebrow={c.eyebrow} title={c.title} lead={c.lead} />

      <section className="container-page section-pad">
        <ul className="space-y-16 md:space-y-24">
          {list.map((ch, i) => {
            const flipped = i % 2 === 1;
            return (
              <Reveal as="li" key={ch.image} delay={40}>
                <article className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
                  <SmartImage
                    src={ch.image}
                    alt={ch.alt}
                    width={768}
                    height={768}
                    wrapperClassName={`aspect-[4/3] w-full rounded-sm border border-border bg-cream shadow-editorial ${
                      flipped ? "md:order-2" : ""
                    }`}
                    className="h-full w-full object-cover object-top transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105"
                  />
                  <div className={flipped ? "md:order-1 md:text-right" : ""}>
                    <p className="caption-label">
                      {String(i + 1).padStart(2, "0")} · {ch.role}
                    </p>
                    <h2 className="mt-2 font-display text-4xl text-primary">{ch.name}</h2>
                    <p className="body-copy mt-4">{ch.text}</p>
                    <p
                      className={`mt-6 font-display text-lg text-primary/90 italic ${
                        flipped
                          ? "border-r-2 border-sand-deep pr-4 md:border-l-0"
                          : "border-l-2 border-sand-deep pl-4"
                      }`}
                    >
                      {ch.symbol}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </ul>
      </section>

      <section className="bg-navy-deep">
        <div className="container-page section-pad">
          <Reveal>
            <HatOrBoa />
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary/60">
        <div className="container-page section-pad">
          <Reveal>
            <h2 className="heading-section">{c.teachHeading}</h2>
          </Reveal>
          <ul className="mt-10 grid gap-8 md:grid-cols-3">
            {quotes.map((q, i) => (
              <Reveal as="li" key={q.text} delay={i * 90}>
                <blockquote className="border-l-2 border-sand-deep pl-6">
                  <p className="font-display text-2xl leading-snug text-primary italic">
                    “{q.text}”
                  </p>
                  <footer className="caption-label mt-3">{q.who}</footer>
                  <QuoteAudio text={q.text} />
                </blockquote>
              </Reveal>
            ))}
          </ul>

          <Reveal className="mt-16 border-t border-border pt-10">
            <p className="caption-label">{c.nextLabel}</p>
            <Link to="/planetas" className="mt-2 link-arrow text-3xl">
              {c.nextLink}
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
