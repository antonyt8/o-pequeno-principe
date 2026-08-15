import { useMemo, useState } from "react";

const MS_DAY = 86_400_000;
const LUNAR = 29.530588;

function formatNumber(n: number) {
  return new Intl.NumberFormat("pt-BR").format(n);
}

function poeticLine(sunsets: number) {
  if (sunsets < 6_000)
    return "Ainda é manhã na sua história — há muito horizonte guardado à sua frente.";
  if (sunsets < 12_000) return "Já são poentes suficientes para saber que nenhum se repete.";
  if (sunsets < 20_000)
    return "Você já viu mais entardeceres do que estrelas contadas pelo homem de negócios.";
  return "Tantos poentes que dariam para encher um deserto inteiro de silêncio bonito.";
}

export function SunsetCalculator() {
  const [birth, setBirth] = useState("");

  const result = useMemo(() => {
    if (!birth) return null;
    const d = new Date(`${birth}T12:00:00`);
    if (Number.isNaN(d.getTime())) return null;
    const days = Math.floor((Date.now() - d.getTime()) / MS_DAY);
    if (days < 0 || days > 45_000) return null;
    return {
      days,
      sunsets: days,
      moons: Math.floor(days / LUNAR),
      orbits: Math.floor(days / 365.2425),
      missed43: Math.max(0, 43 - (days % 43)),
    };
  }, [birth]);

  const invalid = birth !== "" && result === null;

  return (
    <div className="mx-auto max-w-3xl">
      <label className="caption-label block text-cream/60" htmlFor="birth">
        Sua data de nascimento
      </label>
      <div className="mt-3 flex flex-wrap items-center gap-4">
        <input
          id="birth"
          type="date"
          value={birth}
          max={new Date().toISOString().slice(0, 10)}
          onChange={(e) => setBirth(e.target.value)}
          className="rounded-full border border-cream/25 bg-cream/5 px-6 py-3 font-body text-cream outline-none transition-colors focus:border-amber-ink"
        />
        {birth && (
          <button
            type="button"
            onClick={() => setBirth("")}
            className="text-xs tracking-[0.3em] text-cream/50 uppercase transition-colors hover:text-cream"
          >
            Limpar
          </button>
        )}
      </div>

      {invalid && (
        <p className="mt-6 text-cream/70">
          Essa data não cabe em nenhum calendário conhecido — nem no do geógrafo.
        </p>
      )}

      {result && (
        <div className="animate-fade-in mt-12">
          <p className="eyebrow text-amber-ink">Você já teve a chance de ver</p>
          <p className="mt-4 font-display text-[clamp(3.5rem,12vw,7rem)] leading-none text-cream">
            {formatNumber(result.sunsets)}
          </p>
          <p className="mt-2 font-display text-2xl text-cream/80 italic">pores do sol</p>
          <p className="mt-6 max-w-xl leading-relaxed text-cream/70">
            {poeticLine(result.sunsets)}
          </p>

          <dl className="mt-12 grid gap-8 border-t border-cream/15 pt-8 sm:grid-cols-3">
            <div>
              <dt className="caption-label text-cream/50">Dias vividos</dt>
              <dd className="mt-2 font-display text-3xl text-cream">{formatNumber(result.days)}</dd>
            </div>
            <div>
              <dt className="caption-label text-cream/50">Luas completas</dt>
              <dd className="mt-2 font-display text-3xl text-cream">
                {formatNumber(result.moons)}
              </dd>
            </div>
            <div>
              <dt className="caption-label text-cream/50">Voltas ao redor do Sol</dt>
              <dd className="mt-2 font-display text-3xl text-cream">
                {formatNumber(result.orbits)}
              </dd>
            </div>
          </dl>

          <blockquote className="mt-12 border-l-2 border-amber-ink pl-6">
            <p className="font-display text-2xl leading-snug text-cream italic">
              “Sabe… quando a gente está muito triste, gosta dos pores do sol. Num dia, eu vi o sol
              se pôr quarenta e três vezes.”
            </p>
            <footer className="mt-4 text-xs tracking-[0.3em] text-amber-ink uppercase">
              O Pequeno Príncipe
            </footer>
          </blockquote>
          <p className="mt-6 max-w-xl leading-relaxed text-cream/60">
            No asteroide B-612 bastava arrastar a cadeira alguns passos. Aqui na Terra, você teria
            de viver mais {formatNumber(result.missed43)} dia
            {result.missed43 === 1 ? "" : "s"} para completar mais um ciclo de 43 poentes.
          </p>
        </div>
      )}
    </div>
  );
}
