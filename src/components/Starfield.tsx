/**
 * Campo de estrelas sutil: três camadas de pontos que cintilam e derivam
 * lentamente. Puro CSS (sem canvas) e desligado com prefers-reduced-motion.
 */
export function Starfield({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`starfield pointer-events-none absolute inset-0 ${className}`}
    >
      <span className="starfield-layer starfield-layer--near" />
      <span className="starfield-layer starfield-layer--mid" />
      <span className="starfield-layer starfield-layer--far" />
    </div>
  );
}
