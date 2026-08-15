import { Link } from "@tanstack/react-router";

import { navLinks } from "@/data/content";
import { useI18n } from "@/lib/i18n";
import { useContent } from "@/lib/use-content";

export function SiteFooter() {
  const { t } = useI18n();
  const { copy } = useContent();

  return (
    <footer id="contato" className="bg-sand-deep/40">
      <div className="container-page grid gap-8 py-14 sm:grid-cols-[1fr_auto] sm:items-end">
        <div>
          <p className="font-display text-2xl text-primary">Le Petit Prince</p>
          <p className="mt-2 max-w-md text-sm text-foreground/70">{copy.footer.tagline}</p>
        </div>
        <ul className="flex flex-wrap gap-6 text-sm text-foreground/70">
          {navLinks.map((l) => (
            <li key={l.to}>
              <Link to={l.to} className="transition-colors hover:text-primary">
                {t(`nav.${l.to}`)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t border-sand-deep/50">
        <div className="container-page flex flex-wrap items-center justify-between gap-3 py-5">
          <p className="text-xs tracking-[0.18em] text-foreground/60 uppercase">
            {copy.footer.credit}
          </p>
          <p className="text-xs tracking-[0.18em] text-foreground/45 uppercase">
            © {new Date().getFullYear()} · Antony Thiago
          </p>
        </div>
      </div>
    </footer>
  );
}
