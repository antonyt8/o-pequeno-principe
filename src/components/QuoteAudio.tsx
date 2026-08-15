import { useEffect, useRef, useState } from "react";
import { Pause, Volume2 } from "lucide-react";

import { useI18n } from "@/lib/i18n";

/**
 * Narração das citações usando a síntese de voz do próprio navegador.
 * Não depende de rede nem de chaves de API.
 */
export function QuoteAudio({ text, tone = "light" }: { text: string; tone?: "light" | "dark" }) {
  const { speechLocale, t } = useI18n();
  const [supported, setSupported] = useState(true);
  const [speaking, setSpeaking] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    setSupported(typeof window !== "undefined" && "speechSynthesis" in window);
    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  if (!supported) return null;

  const stop = () => {
    window.speechSynthesis.cancel();
    setSpeaking(false);
  };

  const play = () => {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = speechLocale;
    u.rate = 0.9;
    u.pitch = 1;
    const voice = window.speechSynthesis
      .getVoices()
      .find((v) => v.lang.toLowerCase().startsWith(speechLocale.slice(0, 2)));
    if (voice) u.voice = voice;
    u.onend = () => setSpeaking(false);
    u.onerror = () => setSpeaking(false);
    utteranceRef.current = u;
    setSpeaking(true);
    window.speechSynthesis.speak(u);
  };

  return (
    <button
      type="button"
      onClick={speaking ? stop : play}
      aria-label={speaking ? t("stopListening") : t("listen")}
      className={`mt-4 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[0.65rem] tracking-[0.18em] uppercase transition-colors ${
        tone === "dark"
          ? "border-cream/25 text-cream/75 hover:border-amber-ink hover:text-amber-ink"
          : "border-border text-muted-foreground hover:border-sand-deep hover:text-primary"
      }`}
    >
      {speaking ? <Pause className="h-3.5 w-3.5" /> : <Volume2 className="h-3.5 w-3.5" />}
      {speaking ? t("stopListening") : t("listen")}
    </button>
  );
}
