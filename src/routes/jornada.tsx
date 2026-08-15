import { createFileRoute, Link } from "@tanstack/react-router";

import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SITE_ORIGIN, OG_IMAGE } from "@/data/content";
import { useContent } from "@/lib/use-content";
import authorPortrait from "@/assets/author-portrait.jpg";
import study from "@/assets/study.jpg";
import planetChart from "@/assets/planet-chart.jpg";

const TITLE = "A Jornada — O Pequeno Príncipe";
const DESCRIPTION =
  "Do deserto do Saara ao asteroide B-612: a história de O Pequeno Príncipe, o encontro com o aviador, a raposa e a rosa deixada para trás.";

export const Route = createFileRoute("/jornada")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `${SITE_ORIGIN}/jornada` },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE_ORIGIN}/jornada` }],
  }),
  component: JornadaPage,
});

function JornadaPage() {
  const { copy } = useContent();
  const c = copy.jornada;

  return (
    <>
      <PageHero eyebrow={c.eyebrow} title={c.title} lead={c.lead} />

      <section className="container-page section-pad">
        <Reveal className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div className="mx-auto w-full max-w-sm">
            <img
              src={authorPortrait}
              alt="Antoine de Saint-Exupéry"
              loading="lazy"
              width={900}
              height={900}
              className="aspect-square w-full rounded-full border border-border object-cover shadow-xl"
            />
          </div>
          <div>
            <h2 className="heading-section">{c.heading}</h2>
            <p className="body-copy mt-6">{c.p1}</p>
            <p className="body-copy mt-4">{c.p2}</p>
            <p className="body-copy mt-4">{c.p3}</p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <figure className="frame-photo rounded-sm">
                <img
                  src={study}
                  alt={c.capStudy}
                  loading="lazy"
                  className="h-56 w-full object-cover"
                />
                <figcaption className="caption-label px-2 py-3">{c.capStudy}</figcaption>
              </figure>
              <figure className="frame-photo rounded-sm">
                <img
                  src={planetChart}
                  alt={c.capChart}
                  loading="lazy"
                  className="h-56 w-full object-cover"
                />
                <figcaption className="caption-label px-2 py-3">{c.capChart}</figcaption>
              </figure>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-16 border-t border-border pt-10">
          <p className="caption-label">{c.nextLabel}</p>
          <Link to="/personagens" className="mt-2 link-arrow text-3xl">
            {c.nextLink}
          </Link>
        </Reveal>
      </section>
    </>
  );
}
