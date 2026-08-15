import { createFileRoute, Link } from "@tanstack/react-router";

import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { QuoteAudio } from "@/components/QuoteAudio";
import { SmartImage } from "@/components/SmartImage";
import { SITE_ORIGIN, OG_IMAGE } from "@/data/content";
import { useContent } from "@/lib/use-content";
import galleryPlane from "@/assets/gallery-plane.jpg";

const TITLE = "O Livro — Sinopse, edições e citações";
const DESCRIPTION =
  "O Pequeno Príncipe em detalhe: sinopse completa, dados de publicação da primeira edição de 1943 e a antologia das citações mais conhecidas da obra.";

export const Route = createFileRoute("/livro")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "book" },
      { property: "og:url", content: `${SITE_ORIGIN}/livro` },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE_ORIGIN}/livro` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Book",
          name: "O Pequeno Príncipe",
          alternateName: "Le Petit Prince",
          author: { "@type": "Person", name: "Antoine de Saint-Exupéry" },
          datePublished: "1943-04-06",
          inLanguage: "pt-BR",
          genre: "Fábula filosófica",
          numberOfPages: 96,
          image: OG_IMAGE,
          description: DESCRIPTION,
        }),
      },
    ],
  }),
  component: LivroPage,
});

function LivroPage() {
  const { copy, anthology, editions, bookFacts } = useContent();
  const c = copy.livro;

  return (
    <>
      <PageHero eyebrow={c.eyebrow} title={c.title} lead={c.lead} />

      <section className="container-page section-pad">
        <Reveal className="grid gap-12 md:grid-cols-[1.2fr_1fr] md:items-start">
          <div>
            <h2 className="heading-section">{c.synopsis}</h2>
            <p className="body-copy mt-6">{c.s1}</p>
            <p className="body-copy mt-4">{c.s2}</p>
            <p className="body-copy mt-4">{c.s3}</p>
          </div>
          <SmartImage
            src={galleryPlane}
            alt={copy.galeria.title}
            wrapperClassName="frame-photo w-full rounded-sm border border-border"
            className="w-full object-cover"
          />
        </Reveal>
      </section>

      <section className="bg-navy-deep">
        <div className="container-page section-pad">
          <Reveal>
            <p className="eyebrow text-amber-ink">{c.anthologyEyebrow}</p>
            <h2 className="mt-3 font-display text-4xl text-cream">{c.anthologyHeading}</h2>
          </Reveal>
          <ul className="mt-12 grid gap-10 md:grid-cols-2">
            {anthology.map((q, i) => (
              <Reveal as="li" key={q.text} delay={i * 60}>
                <blockquote className="border-l-2 border-amber-ink/70 pl-6">
                  <p className="font-display text-2xl leading-snug text-cream italic">“{q.text}”</p>
                  <footer className="mt-3 text-xs tracking-[0.2em] text-cream/50 uppercase">
                    {q.who} · {q.chapter}
                  </footer>
                  <QuoteAudio text={q.text} tone="dark" />
                </blockquote>
              </Reveal>
            ))}
          </ul>

          <Reveal className="mt-12">
            <Link to="/frases" className="link-arrow text-2xl !text-cream hover:!text-amber-ink">
              {copy.frases.title}
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="container-page section-pad">
        <Reveal>
          <h2 className="heading-section">{c.editionsHeading}</h2>
        </Reveal>
        <dl className="mt-10 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2">
          {editions.map((e, i) => (
            <Reveal key={e.label} delay={i * 50} className="bg-card p-6">
              <dt className="caption-label">{e.label}</dt>
              <dd className="body-copy mt-2">{e.value}</dd>
            </Reveal>
          ))}
        </dl>

        <Reveal className="mt-16 border-t border-border pt-12">
          <h2 className="heading-section">{c.numbersHeading}</h2>
          <dl className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {bookFacts.map((f) => (
              <div key={f.value} className="border-t border-sand-deep pt-4">
                <dt className="font-display text-4xl text-primary">{f.value}</dt>
                <dd className="body-copy mt-2 text-sm">{f.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal className="mt-16 border-t border-border pt-10">
          <p className="caption-label">{c.continueLabel}</p>
          <Link to="/autor" className="mt-2 link-arrow text-3xl">
            {c.continueLink}
          </Link>
        </Reveal>
      </section>
    </>
  );
}
