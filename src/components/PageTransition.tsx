import { useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";

/**
 * Fade estrelado entre rotas: cada mudança de pathname remonta o conteúdo
 * (key) — ele sobe com desfoque enquanto uma poeira de estrelas se dissolve.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div key={pathname} className="starfield-enter">
      <span aria-hidden="true" className="starfield-veil" />
      {children}
    </div>
  );
}
