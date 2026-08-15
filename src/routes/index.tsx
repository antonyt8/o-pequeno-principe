import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { Starfield } from "@/components/Starfield";
import { Reveal } from "@/components/Reveal";
import { SITE_ORIGIN, OG_IMAGE, quotes } from "@/data/content";
import heroSky from "@/assets/hero-sky.jpg";
import princeFigure from "@/assets/prince-figure.png";
import galleryFox from "@/assets/gallery-fox.jpg";
import planetChart from "@/assets/planet-chart.jpg";
import galleryRose from "@/assets/gallery-rose.jpg";
import galleryPlane from "@/assets/gallery-plane.jpg";

const TITLE = "O Pequeno Príncipe — Uma jornada por entre as estrelas";
const DESCRIPTION =
  "Uma viagem literária pelo universo de O Pequeno Príncipe, de Antoine de Saint-Exupéry: a jornada, os planetas visitados, a calculadora de pores do sol e a galeria de ilustrações.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_ORIGIN}/` },
      { property: "og:image", content: OG_IMAGE },
      {
        property: "og:image:alt",
        content: "Céu estrelado com carta celeste de O Pequeno Príncipe",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE_ORIGIN}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Book",
              name: "O Pequeno Príncipe",
              alternateName: "Le Petit Prince",
              inLanguage: "pt-BR",
              datePublished: "1943",
              genre: ["Fábula", "Literatura infantojuvenil", "Filosofia"],
              image: OG_IMAGE,
              description: DESCRIPTION,
              author: {
                "@type": "Person",
                name: "Antoine de Saint-Exupéry",
                birthDate: "1900-06-29",
                deathDate: "1944-07-31",
                nationality: "Francesa",
                jobTitle: "Aviador e escritor",
                sameAs: "https://pt.wikipedia.org/wiki/Antoine_de_Saint-Exup%C3%A9ry",
              },
            },
            {
              "@type": "Person",
              name: "Antoine de Saint-Exupéry",
              birthDate: "1900-06-29",
              deathDate: "1944-07-31",
              jobTitle: "Aviador e escritor",
              image: OG_IMAGE,
              sameAs: "https://pt.wikipedia.org/wiki/Antoine_de_Saint-Exup%C3%A9ry",
            },
          ],
        }),
      },
    ],
  }),
  component: Home,
});

const chapters = [
  {
    to: "/jornada",
    eyebrow: "Capítulo I",
    title: "A Jornada",
    line: "Uma pane no Saara, um menino de cabelos dourados e uma amizade que atravessa planetas.",
    img: galleryPlane,
    alt: "Aquarela de um pequeno avião pousado nas dunas",
  },
  {
    to: "/personagens",
    eyebrow: "Capítulo II",
    title: "Personagens",
    line: "A raposa, a rosa, a serpente, o carneiro na caixa — e o que cada figura simboliza.",
    img: galleryFox,
    alt: "Aquarela de uma raposa sentada nas dunas",
  },
  {
    to: "/planetas",
    eyebrow: "Capítulo III",
    title: "Os Planetas",
    line: "Sete escalas, sete adultos sozinhos com suas obsessões — e uma lição em cada uma.",
    img: planetChart,
    alt: "Carta astronômica com órbitas pontilhadas",
  },
  {
    to: "/galeria",
    eyebrow: "Capítulo IV",
    title: "Galeria de Arte",
    line: "Aquarelas dos símbolos da obra, cada uma com a história por trás da imagem.",
    img: galleryRose,
    alt: "Aquarela de uma rosa sob a redoma de vidro",
  },
];

function Home() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[88vh] items-end overflow-hidden bg-navy-deep pt-32 pb-20 md:min-h-[min(100vh,860px)] md:items-center md:pb-28">
        <img
          src={heroSky}
          alt=""
          aria-hidden="true"
          width={1920}
          height={1000}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          style={{ transform: `translateY(${offset * 0.14}px) scale(1.12)` }}
        />
        <Starfield className="opacity-80 mix-blend-screen" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(100deg,oklch(0.21_0.055_266/0.92)_0%,oklch(0.21_0.055_266/0.72)_38%,transparent_72%)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-background" />

        <div className="container-page relative grid items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-6 lg:col-span-5">
            <p className="eyebrow text-amber-ink">Antoine de Saint-Exupéry</p>
            <h1 className="heading-hero mt-6 text-[clamp(3rem,6.5vw,5.25rem)]">
              O Pequeno
              <span className="block text-amber-ink/90 italic">Príncipe</span>
            </h1>
            <p className="mt-8 max-w-md text-base leading-relaxed text-cream/75 sm:text-lg">
              Uma jornada por entre asteroides, desertos e rosas — a obra que ensinou o mundo a
              enxergar com o coração.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Link to="/jornada" className="btn-amber">
                Começar a jornada
              </Link>
              <Link
                to="/poentes"
                className="text-sm tracking-widest text-cream/60 uppercase transition-colors hover:text-cream"
              >
                Contar meus pores do sol
              </Link>
            </div>
          </div>

          <div className="md:col-span-6 lg:col-span-7">
            <img
              src={princeFigure}
              alt="Ilustração em aquarela do pequeno príncipe sobre um pequeno planeta"
              width={700}
              height={1000}
              className="mx-auto w-56 drop-shadow-2xl sm:w-72 md:ml-auto md:w-[min(30rem,36vw)]"
              style={{ transform: `translateY(${offset * -0.06}px)` }}
            />
          </div>
        </div>
      </section>

      {/* CAPÍTULOS */}
      <section className="container-page section-pad">
        <Reveal>
          <p className="eyebrow text-amber-ink/90">O roteiro</p>
          <h2 className="heading-section mt-3">Escolha por onde viajar</h2>
        </Reveal>
        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {chapters.map((c, i) => (
            <Reveal as="li" key={c.to} delay={i * 90}>
              <Link to={c.to} className="card-art group block rounded-sm">
                <span className="block overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.alt}
                    loading="lazy"
                    className="aspect-[4/3] w-full bg-navy-deep object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </span>
                <span className="block px-5 py-6">
                  <span className="caption-label block">{c.eyebrow}</span>
                  <span className="mt-2 block font-display text-2xl text-primary">{c.title}</span>
                  <span className="mt-2 block text-sm leading-relaxed text-foreground/70">
                    {c.line}
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* CHAMADA DA CALCULADORA */}
      <section className="bg-navy">
        <div className="container-page section-pad">
          <Reveal className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
            <div>
              <p className="eyebrow text-amber-ink">Quarenta e três</p>
              <h2 className="mt-3 font-display text-4xl leading-tight text-cream sm:text-5xl">
                Quantos pores do sol você já viu?
              </h2>
              <p className="mt-5 max-w-xl leading-relaxed text-cream/70">
                Coloque sua data de nascimento e descubra, em números e em poesia, quantos
                entardeceres o céu já ofereceu a você desde o primeiro dia.
              </p>
            </div>
            <div className="md:text-right">
              <Link to="/poentes" className="btn-amber">
                Fazer a contagem
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CITAÇÕES */}
      <section className="bg-navy-deep">
        <div className="container-page section-pad max-w-5xl">
          <ul className="grid gap-14 md:grid-cols-3">
            {quotes.map((q, i) => (
              <Reveal as="li" key={q.text} delay={i * 120}>
                <p className="font-display text-2xl leading-snug text-cream italic">“{q.text}”</p>
                <p className="mt-4 text-xs tracking-[0.3em] text-amber-ink uppercase">{q.who}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
