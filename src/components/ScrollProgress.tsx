import { useEffect, useState } from "react";

/** Fio âmbar no topo indicando o progresso de leitura da página. */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="scroll-progress w-full"
      style={{ transform: `scaleX(${progress})`, opacity: progress > 0.01 ? 1 : 0 }}
    />
  );
}
