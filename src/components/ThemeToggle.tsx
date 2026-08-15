import { useEffect, useRef, useState } from "react";
import { Moon, Sun } from "lucide-react";

const KEY = "pp-theme";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const mounted = useRef(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(KEY);
    const initial = saved
      ? saved === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(initial);
    mounted.current = true;
  }, []);

  useEffect(() => {
    if (!mounted.current) return;
    document.documentElement.classList.toggle("dark", dark);
    window.localStorage.setItem(KEY, dark ? "dark" : "light");
  }, [dark]);

  return (
    <button
      type="button"
      onClick={() => setDark((v) => !v)}
      aria-pressed={dark}
      aria-label={dark ? "Usar modo claro (papel)" : "Usar modo escuro (noite)"}
      title={dark ? "Modo claro" : "Modo noite"}
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cream/25 text-cream/75 transition-colors hover:border-amber-ink hover:text-amber-ink"
    >
      {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
