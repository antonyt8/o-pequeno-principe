import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { ThemeToggle } from "@/components/ThemeToggle";
import { MobileMenu } from "@/components/MobileMenu";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useI18n } from "@/lib/i18n";
import { navLinks } from "@/data/content";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const { t } = useI18n();
  const links = navLinks.map((l) => ({ ...l, label: t(`nav.${l.to}`) }));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter,box-shadow] duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-navy-deep/80 shadow-[0_18px_40px_-30px_oklch(0.21_0.055_266)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        className={`container-page grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 transition-all duration-500 sm:flex sm:justify-between ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <Link
          to="/"
          className="min-w-0 truncate font-display text-xl tracking-wide text-cream transition-colors hover:text-amber-ink"
        >
          Le Petit Prince
        </Link>
        <ul className="hidden shrink-0 items-center gap-8 text-sm tracking-wide text-cream/70 sm:flex">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="nav-link hover:text-amber-ink"
                activeProps={{ className: "text-amber-ink" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex shrink-0 items-center gap-3">
          <LanguageToggle />
          <ThemeToggle />
          <MobileMenu links={links} />
        </div>
      </nav>
    </header>
  );
}
