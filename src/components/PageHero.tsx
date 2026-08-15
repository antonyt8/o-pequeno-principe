import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { X } from "lucide-react";

import heroSky from "@/assets/hero-sky.jpg";
import { useI18n } from "@/lib/i18n";

export function PageHero({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  children?: ReactNode;
}) {
  const { t } = useI18n();
  return (
    <section className="relative overflow-hidden bg-navy-deep pt-36 pb-20 md:pt-44 md:pb-24">
      <img
        src={heroSky}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(100deg,oklch(0.21_0.055_266/0.94)_0%,oklch(0.21_0.055_266/0.7)_55%,oklch(0.21_0.055_266/0.35)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" />
      <div className="container-page relative">
        <div className="flex items-start justify-between gap-6">
          <p className="eyebrow text-amber-ink">{eyebrow}</p>
          <Link
            to="/"
            aria-label={t("closeSection")}
            className="flex shrink-0 items-center gap-2 rounded-full border border-cream/25 bg-navy-deep/60 px-4 py-2 text-[0.65rem] tracking-[0.2em] text-cream/80 uppercase backdrop-blur-sm transition-colors hover:border-amber-ink hover:text-amber-ink"
          >
            <X className="h-3.5 w-3.5" />
            {t("close")}
          </Link>
        </div>
        <h1 className="heading-hero mt-5 text-[clamp(2.5rem,6vw,4.5rem)]">{title}</h1>
        {lead && (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-cream/75 sm:text-lg">
            {lead}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
