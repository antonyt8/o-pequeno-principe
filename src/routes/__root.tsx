import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageTransition } from "@/components/PageTransition";
import { ScrollProgress } from "@/components/ScrollProgress";
import { I18nProvider } from "@/lib/i18n";

function NotFoundComponent() {
  return (
    <div className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-navy-deep px-6 py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(1px 1px at 20% 30%, white, transparent), radial-gradient(1px 1px at 70% 20%, white, transparent), radial-gradient(1.5px 1.5px at 45% 70%, white, transparent), radial-gradient(1px 1px at 85% 60%, white, transparent), radial-gradient(1px 1px at 15% 80%, white, transparent)",
        }}
      />
      <div className="relative max-w-xl text-center">
        <p className="eyebrow text-amber-ink">Asteroide não catalogado</p>
        <h1 className="mt-4 font-display text-7xl text-cream md:text-8xl">404</h1>
        <p className="mt-6 font-display text-2xl leading-snug text-cream/90 italic">
          “Onde estão as pessoas?”, perguntou o pequeno príncipe. “A gente é um pouco só no
          deserto…”
        </p>
        <p className="mt-6 text-sm leading-relaxed text-cream/60">
          Esta página não existe neste céu. Talvez o vento a tenha levado — ou talvez ela só seja
          invisível aos olhos.
        </p>
        <div className="mt-10">
          <Link to="/" className="btn-amber">
            Voltar ao B-612
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "O Pequeno Príncipe — Uma jornada por entre as estrelas" },
      {
        name: "description",
        content: "Site editorial dedicado a O Pequeno Príncipe, de Antoine de Saint-Exupéry.",
      },
      { name: "author", content: "Antoine de Saint-Exupéry" },
      { property: "og:site_name", content: "Le Petit Prince" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "O Pequeno Príncipe — Uma jornada por entre as estrelas" },
      { name: "twitter:title", content: "O Pequeno Príncipe — Uma jornada por entre as estrelas" },
      {
        property: "og:description",
        content: "Site editorial dedicado a O Pequeno Príncipe, de Antoine de Saint-Exupéry.",
      },
      {
        name: "twitter:description",
        content: "Site editorial dedicado a O Pequeno Príncipe, de Antoine de Saint-Exupéry.",
      },
      { property: "og:image", content: "/og-cover.jpg" },
      { name: "twitter:image", content: "/og-cover.jpg" },
    ],

    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Lora:ital,wght@0,400;0,500;1,400&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <I18nProvider>
        <div className="min-h-screen bg-background paper-texture">
          <ScrollProgress />
          <SiteHeader />
          <main>
            {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
            <PageTransition>
              <Outlet />
            </PageTransition>
          </main>
          <SiteFooter />
        </div>
      </I18nProvider>
    </QueryClientProvider>
  );
}
