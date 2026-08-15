import { createFileRoute, Link } from "@tanstack/react-router";

import { SunsetCalculator } from "@/components/SunsetCalculator";
import { SITE_ORIGIN, OG_IMAGE } from "@/data/content";
import { useContent } from "@/lib/use-content";
import heroSky from "@/assets/hero-sky.jpg";

const TITLE = "Quantos pores do sol você já viu? — O Pequeno Príncipe";
const DESCRIPTION =
  "Coloque sua data de nascimento e descubra, de forma poética, quantos pores do sol você já teve a chance de ver — inspirado nos 43 entardeceres do pequeno príncipe.";

export const Route = createFileRoute("/poentes")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_ORIGIN}/poentes` },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE_ORIGIN}/poentes` }],
  }),
  component: PoentesPage,
});

function PoentesPage() {
  const { copy } = useContent();
  const c = copy.poentes;
  return (
    <section className="relative min-h-screen overflow-hidden bg-navy-deep pt-36 pb-28 md:pt-44">
      <img
        src={heroSky}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-60"
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_0%,oklch(0.21_0.055_266/0.6)_0%,oklch(0.21_0.055_266/0.96)_70%)]" />

      <div className="container-page relative">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow text-amber-ink">{c.eyebrow}</p>
          <h1 className="heading-hero mt-5 text-[clamp(2.5rem,6vw,4.5rem)]">
            {c.title1}
            <span className="block text-amber-ink/90 italic">{c.title2}</span>
          </h1>
          <p className="mt-6 max-w-xl leading-relaxed text-cream/70">{c.lead}</p>
        </div>

        <div className="mt-14">
          <SunsetCalculator />
        </div>

        <div className="mx-auto mt-20 max-w-3xl border-t border-cream/15 pt-10">
          <Link to="/galeria" className="link-arrow text-2xl !text-cream hover:!text-amber-ink">
            {c.nextLink}
          </Link>
        </div>
      </div>
    </section>
  );
}
