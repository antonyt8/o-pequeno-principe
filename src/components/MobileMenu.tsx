import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

import type { NavLink } from "@/data/content";

export function MobileMenu({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : prev;
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <div className="sm:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Abrir menu"
        aria-expanded={open}
        className="flex shrink-0 items-center gap-2 rounded-full border border-amber-ink/60 px-4 py-1.5 text-xs tracking-widest text-amber-ink uppercase"
      >
        <Menu className="h-3.5 w-3.5" /> Menu
      </button>

      {open &&
        typeof document !== "undefined" &&
        createPortal(
          <div className="animate-fade-in fixed inset-0 z-[90] bg-navy-deep">
            <div className="flex items-center justify-between px-5 py-4">
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className="font-display text-xl text-cream"
              >
                Le Petit Prince
              </Link>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Fechar menu"
                className="rounded-full border border-cream/20 p-2 text-cream/80"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="mt-10 px-8">
              <ul className="space-y-7">
                {links.map((l, i) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      onClick={() => setOpen(false)}
                      className="block font-display text-4xl text-cream transition-colors hover:text-amber-ink"
                    >
                      <span className="mr-4 align-middle text-xs tracking-widest text-amber-ink/70">
                        0{i + 1}
                      </span>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>,
          document.body,
        )}
    </div>
  );
}
