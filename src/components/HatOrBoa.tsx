import { useRef, useState } from "react";
import { Sparkles } from "lucide-react";

import { useI18n } from "@/lib/i18n";
import hatOutside from "@/assets/hat-outside.png";
import hatInside from "@/assets/hat-inside.png";

/** Pequeno acorde de "revelação", gerado no próprio navegador. */
function playChime(reveal: boolean) {
  if (typeof window === "undefined") return;
  const Ctx =
    window.AudioContext ??
    (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!Ctx) return;
  if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
  try {
    const ctx = new Ctx();
    const notes = reveal ? [523.25, 659.25, 783.99] : [783.99, 523.25];
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.value = freq;
      const start = ctx.currentTime + i * 0.09;
      gain.gain.setValueAtTime(0.0001, start);
      gain.gain.exponentialRampToValueAtTime(0.08, start + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.5);
      osc.connect(gain).connect(ctx.destination);
      osc.start(start);
      osc.stop(start + 0.55);
    });
    window.setTimeout(() => ctx.close().catch(() => {}), 1400);
  } catch {
    /* áudio indisponível — segue sem som */
  }
}

export function HatOrBoa() {
  const [revealed, setRevealed] = useState(false);
  const [muted, setMuted] = useState(false);
  const { t } = useI18n();
  const hintRef = useRef<HTMLSpanElement>(null);

  const toggle = () => {
    const next = !revealed;
    setRevealed(next);
    if (!muted) playChime(next);
  };

  return (
    <div className="grid gap-10 md:grid-cols-[1.1fr_1fr] md:items-center">
      <div className="relative">
        <button
          type="button"
          onClick={toggle}
          aria-pressed={revealed}
          aria-describedby="hat-hint"
          aria-label={revealed ? "Voltar a ver o chapéu" : "Ver o que existe dentro do desenho"}
          className="group relative block aspect-[4/3] w-full overflow-hidden rounded-sm border border-cream/15 bg-cream/95 shadow-editorial"
        >
          <img
            src={hatOutside}
            alt="Desenho a traço de uma forma que parece um chapéu"
            loading="lazy"
            width={1024}
            height={768}
            className={`absolute inset-0 h-full w-full object-contain transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
              revealed ? "scale-105 opacity-0 blur-sm" : "opacity-100"
            }`}
          />
          <img
            src={hatInside}
            alt="Desenho a traço de uma jiboia digerindo um elefante"
            loading="lazy"
            width={1024}
            height={768}
            className={`absolute inset-0 h-full w-full object-contain transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
              revealed ? "opacity-100" : "scale-95 opacity-0 blur-sm"
            }`}
          />

          {/* Dica flutuante — sempre visível, com destaque no hover */}
          <span
            id="hat-hint"
            ref={hintRef}
            className="pointer-events-none absolute top-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-navy-deep/90 px-4 py-1.5 text-[0.65rem] tracking-[0.16em] text-cream uppercase opacity-90 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:opacity-100 group-focus-visible:opacity-100"
          >
            <Sparkles className="h-3.5 w-3.5 text-amber-ink" />
            {t("hatHint")}
          </span>

          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-navy-deep/85 px-4 py-1.5 text-[0.7rem] tracking-[0.2em] text-cream uppercase transition-colors group-hover:bg-navy-deep">
            {revealed ? "Ver de novo como adulto" : "Toque para olhar por dentro"}
          </span>
        </button>

        <button
          type="button"
          onClick={() => setMuted((m) => !m)}
          aria-pressed={muted}
          className="mt-3 text-[0.65rem] tracking-[0.18em] text-cream/60 uppercase transition-colors hover:text-amber-ink"
        >
          {muted ? "Ativar som da interação" : "Desativar som da interação"}
        </button>
      </div>

      <div>
        <p className="eyebrow text-amber-ink">Desenho número 1</p>
        <h2 className="mt-3 font-display text-4xl text-cream">Um chapéu? Olhe de novo.</h2>
        <p className="mt-6 leading-relaxed text-cream/75">
          Aos seis anos, o narrador desenhou uma jiboia digerindo um elefante. Mostrou a obra-prima
          aos adultos e perguntou se aquilo dava medo. Todos responderam a mesma coisa: “Medo de um
          chapéu?”. Nenhum deles pediu para ver o que havia dentro.
        </p>
        <p className="mt-4 leading-relaxed text-cream/60">
          {revealed
            ? "Você viu o elefante. É assim que o livro começa — e é assim que ele pede para ser lido."
            : "Clique no desenho ao lado e veja como uma criança o enxergaria."}
        </p>
      </div>
    </div>
  );
}
