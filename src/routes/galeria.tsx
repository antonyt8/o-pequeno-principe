import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Lightbox } from "@/components/Lightbox";
import { SITE_ORIGIN, OG_IMAGE } from "@/data/content";
import { useContent } from "@/lib/use-content";

const TITLE = "Galeria de Arte — O Pequeno Príncipe";
const DESCRIPTION =
  "Aquarelas inspiradas nos símbolos de O Pequeno Príncipe: a rosa, a raposa, o avião no Saara e o asteroide B-612 — cada uma com sua história.";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `${SITE_ORIGIN}/galeria` },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE_ORIGIN}/galeria` }],
  }),
  component: GaleriaPage,
});

function GaleriaPage() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const { copy, gallery } = useContent();
  const c = copy.galeria;

  return (
    <>
      <PageHero eyebrow={c.eyebrow} title={c.title} lead={c.lead} />

      <section className="container-page section-pad">
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.map((item, i) => (
            <Reveal as="li" key={item.src} delay={i * 90}>
              <button
                type="button"
                onClick={() => setLightbox(i)}
                className="card-art group block w-full rounded-sm text-left transition-transform duration-300 hover:-translate-y-1"
                aria-label={`${c.open} ${item.title}`}
              >
                <span className="relative block overflow-hidden rounded-t-sm bg-[#FAF7F2]">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    width={800}
                    height={800}
                    className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 flex items-end bg-gradient-to-t from-navy-deep/80 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="text-xs tracking-[0.3em] text-cream uppercase">{c.read}</span>
                  </span>
                </span>
                <span className="block px-4 py-4">
                  <span className="block font-display text-xl text-primary">{item.title}</span>
                  <span className="caption-label block">{item.note}</span>
                </span>
              </button>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-16 border-t border-border pt-10">
          <p className="caption-label">{c.nextLabel}</p>
          <Link to="/autor" className="mt-2 link-arrow text-3xl">
            {c.nextLink}
          </Link>
        </Reveal>
      </section>

      <Lightbox
        items={gallery}
        index={lightbox}
        onClose={() => setLightbox(null)}
        onNavigate={setLightbox}
      />
    </>
  );
}
