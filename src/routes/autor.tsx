import { createFileRoute, Link } from "@tanstack/react-router";

import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { IllustratedTimeline } from "@/components/IllustratedTimeline";
import { SITE_ORIGIN, OG_IMAGE } from "@/data/content";
import { useContent } from "@/lib/use-content";
import authorPortrait from "@/assets/author-portrait.jpg";

const TITLE = "Antoine de Saint-Exupéry — O Autor";
const DESCRIPTION =
  "Aviador e escritor francês (1900–1944): as rotas postais, a queda no Saara, o exílio em que escreveu O Pequeno Príncipe e o desaparecimento no Mediterrâneo.";

export const Route = createFileRoute("/autor")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: `${SITE_ORIGIN}/autor` },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE_ORIGIN}/autor` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Antoine de Saint-Exupéry",
          birthDate: "1900-06-29",
          deathDate: "1944-07-31",
          jobTitle: "Aviador e escritor",
          nationality: "Francesa",
          image: OG_IMAGE,
          sameAs: "https://pt.wikipedia.org/wiki/Antoine_de_Saint-Exup%C3%A9ry",
        }),
      },
    ],
  }),
  component: AutorPage,
});

function AutorPage() {
  const { copy, bookFacts } = useContent();
  const c = copy.autor;

  return (
    <>
      <PageHero eyebrow={c.eyebrow} title={c.title} lead={c.lead} />

      <section className="container-page section-pad">
        <Reveal className="grid gap-12 md:grid-cols-2 md:items-center">
          <img
            src={authorPortrait}
            alt="Antoine de Saint-Exupéry"
            loading="lazy"
            className="mx-auto aspect-square w-full max-w-md rounded-full border border-border object-cover shadow-xl"
          />
          <div>
            <h2 className="heading-section">{c.heading}</h2>
            <p className="body-copy mt-6">{c.p1}</p>
            <p className="body-copy mt-4">{c.p2}</p>
            <blockquote className="mt-10 border-l-2 border-sand-deep pl-6">
              <p className="font-display text-3xl leading-snug text-primary italic">“{c.quote}”</p>
              <footer className="caption-label mt-4">Antoine de Saint-Exupéry</footer>
            </blockquote>
          </div>
        </Reveal>
      </section>

      <section className="bg-secondary/60">
        <div className="container-page section-pad">
          <IllustratedTimeline />

          <Reveal className="mt-20 border-t border-border pt-12">
            <h2 className="heading-section">{c.numbersHeading}</h2>
            <dl className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {bookFacts.map((f) => (
                <div key={f.value} className="border-t border-sand-deep pt-4">
                  <dt className="font-display text-4xl text-primary">{f.value}</dt>
                  <dd className="body-copy mt-2 text-sm">{f.label}</dd>
                </div>
              ))}
            </dl>
            <p className="body-copy mt-10 max-w-2xl">{c.numbersNote}</p>
          </Reveal>

          <Reveal className="mt-16 border-t border-border pt-10">
            <Link to="/galeria" className="link-arrow text-3xl">
              {c.nextLink}
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
