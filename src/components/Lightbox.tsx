import { useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export type ArtPiece = {
  src: string;
  alt: string;
  title: string;
  note: string;
  story: string;
};

export function Lightbox({
  items,
  index,
  onClose,
  onNavigate,
}: {
  items: ArtPiece[];
  index: number | null;
  onClose: () => void;
  onNavigate: (next: number) => void;
}) {
  const open = index !== null;
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((index! + 1) % items.length);
      if (e.key === "ArrowLeft") onNavigate((index! - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, index, items.length, onClose, onNavigate]);

  const item = index === null ? undefined : items[index];
  if (!open || !item) return null;

  const go = (delta: number) => onNavigate((index! + delta + items.length) % items.length);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Ilustração: ${item.title}`}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-navy-deep/98 p-4 backdrop-blur-md overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      {/* Botão Fechar */}
      <button
        type="button"
        aria-label="Fechar"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-4 right-4 z-[210] flex items-center gap-2 rounded-full border border-cream/30 bg-navy-light/90 px-4 py-2 text-xs tracking-[0.2em] text-cream uppercase shadow-xl transition-colors hover:border-amber-ink hover:text-amber-ink sm:top-6 sm:right-6"
      >
        <X className="h-4 w-4" />
        Fechar
      </button>

      {/* Botão Anterior */}
      <button
        type="button"
        aria-label="Anterior"
        onClick={(e) => {
          e.stopPropagation();
          go(-1);
        }}
        className="absolute left-4 z-[210] hidden rounded-full border border-cream/20 bg-navy-light/80 p-3 text-cream/80 backdrop-blur-sm transition-colors hover:border-amber-ink hover:text-amber-ink md:block"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      {/* Botão Próximo */}
      <button
        type="button"
        aria-label="Próxima"
        onClick={(e) => {
          e.stopPropagation();
          go(1);
        }}
        className="absolute right-4 z-[210] hidden rounded-full border border-cream/20 bg-navy-light/80 p-3 text-cream/80 backdrop-blur-sm transition-colors hover:border-amber-ink hover:text-amber-ink md:block"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div
        className="relative my-auto flex w-full max-w-4xl flex-col gap-6 py-6"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={(e) => {
          const t = e.changedTouches.item(0);
          if (t) touchStart.current = { x: t.clientX, y: t.clientY };
        }}
        onTouchEnd={(e) => {
          const start = touchStart.current;
          const t = e.changedTouches.item(0);
          touchStart.current = null;
          if (!start || !t) return;
          const dx = t.clientX - start.x;
          const dy = t.clientY - start.y;
          if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) go(dx < 0 ? 1 : -1);
        }}
      >
        {/* Painel da Obra */}
        <div className="grid gap-6 rounded-xl border border-cream/15 bg-navy-light/60 p-6 shadow-2xl backdrop-blur-md md:grid-cols-[1fr_1fr] md:items-center md:gap-8 md:p-8">
          {/* Imagem em destaque */}
          <div className="flex items-center justify-center rounded-lg bg-[#FAF7F2] p-4 shadow-inner max-h-[400px]">
            <img
              key={item.src}
              src={item.src}
              alt={item.alt}
              className="max-h-[350px] w-auto max-w-full rounded object-contain transition-all duration-300 animate-scale-in"
            />
          </div>

          {/* Texto explicativo */}
          <div className="flex flex-col justify-center text-cream">
            <p className="eyebrow text-amber-ink">{item.note}</p>
            <h3 className="mt-2 font-display text-3xl sm:text-4xl text-cream">{item.title}</h3>
            <p className="mt-4 leading-relaxed text-cream/90 text-sm sm:text-base">{item.story}</p>

            <div className="mt-6 flex items-center justify-between border-t border-cream/10 pt-4">
              <span className="text-xs tracking-[0.25em] text-cream/50 uppercase font-mono">
                {index! + 1} / {items.length}
              </span>
              <span className="text-xs text-cream/40 md:hidden">← deslize para navegar →</span>
            </div>
          </div>
        </div>

        {/* Miniaturas de navegação */}
        <ul className="flex items-center justify-center gap-3">
          {items.map((it, i) => (
            <li key={it.title}>
              <button
                type="button"
                onClick={() => onNavigate(i)}
                aria-label={`Ver ${it.title}`}
                aria-current={i === index}
                className={`block h-14 w-14 overflow-hidden rounded-lg border-2 bg-[#FAF7F2] p-1 transition-all duration-300 sm:h-16 sm:w-16 ${
                  i === index
                    ? "border-amber-ink opacity-100 scale-105 shadow-lg ring-2 ring-amber-ink/50"
                    : "border-cream/20 opacity-60 hover:opacity-100 hover:border-cream/50"
                }`}
              >
                <img src={it.src} alt="" className="h-full w-full rounded object-contain" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
