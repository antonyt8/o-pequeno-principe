import { useI18n, LANGS, type Lang } from "@/lib/i18n";

export function LanguageToggle() {
  const { lang, setLang, t } = useI18n();

  return (
    <div
      role="group"
      aria-label={t("language")}
      className="flex shrink-0 items-center rounded-full border border-cream/20 bg-navy-deep/50 p-0.5 backdrop-blur-sm"
    >
      {LANGS.map((l) => (
        <button
          key={l.code}
          type="button"
          onClick={() => setLang(l.code as Lang)}
          aria-pressed={lang === l.code}
          className={`rounded-full px-2.5 py-1 text-[0.65rem] tracking-[0.18em] uppercase transition-colors ${
            lang === l.code
              ? "bg-amber-ink/90 text-navy-deep"
              : "text-cream/65 hover:text-amber-ink"
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}
