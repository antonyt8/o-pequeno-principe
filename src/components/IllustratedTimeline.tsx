import { useState } from "react";

import { Reveal } from "@/components/Reveal";
import { SmartImage } from "@/components/SmartImage";
import { useI18n } from "@/lib/i18n";
import { useContent } from "@/lib/use-content";

type Filter = "all" | "life" | "book";

export function IllustratedTimeline() {
  const { t } = useI18n();
  const { timeline } = useContent();
  const [filter, setFilter] = useState<Filter>("all");

  const entries = timeline.filter((e) => filter === "all" || e.kind === filter);

  const options: { id: Filter; label: string }[] = [
    { id: "all", label: t("filterAll") },
    { id: "life", label: t("filterLife") },
    { id: "book", label: t("filterBook") },
  ];

  return (
    <div>
      <Reveal>
        <h2 className="heading-section">{t("timelineTitle")}</h2>
        <p className="body-copy mt-3 max-w-2xl">{t("timelineLead")}</p>
        <div role="group" className="mt-8 flex flex-wrap gap-2">
          {options.map((o) => (
            <button
              key={o.id}
              type="button"
              onClick={() => setFilter(o.id)}
              aria-pressed={filter === o.id}
              className={`rounded-full border px-4 py-1.5 text-[0.68rem] tracking-[0.18em] uppercase transition-colors ${
                filter === o.id
                  ? "border-sand-deep bg-sand-deep/20 text-primary"
                  : "border-border text-muted-foreground hover:border-sand-deep hover:text-primary"
              }`}
            >
              {o.label}
            </button>
          ))}
        </div>
      </Reveal>

      <ol className="relative mt-12 space-y-14 before:absolute before:top-2 before:bottom-2 before:left-[7px] before:w-px before:bg-border md:before:left-1/2">
        {entries.map((e, i) => (
          <Reveal
            as="li"
            key={e.year + e.title}
            delay={i * 60}
            className="relative pl-10 md:grid md:grid-cols-2 md:items-center md:gap-12 md:pl-0"
          >
            <span
              aria-hidden
              className={`absolute top-2 left-0 h-3.5 w-3.5 rounded-full border-2 md:left-1/2 md:-translate-x-1/2 ${
                e.kind === "book"
                  ? "border-sand-deep bg-amber-ink"
                  : "border-sand-deep bg-background"
              }`}
            />
            <div className={i % 2 === 0 ? "md:pr-10 md:text-right" : "md:order-2 md:pl-10"}>
              <p className="font-display text-4xl text-sand-deep">{e.year}</p>
              <h3 className="mt-1 font-display text-2xl text-primary">{e.title}</h3>
              <p className="body-copy mt-2 text-sm">{e.text}</p>
              <p className="caption-label mt-3">
                {e.kind === "book" ? t("filterBook") : t("filterLife")}
              </p>
            </div>
            {e.image && (
              <SmartImage
                src={e.image}
                alt={e.alt ?? ""}
                wrapperClassName={`mt-5 aspect-[4/3] w-full rounded-sm border border-border md:mt-0 ${
                  i % 2 === 0 ? "md:ml-10" : "md:order-1 md:mr-10"
                }`}
                className="h-full w-full object-cover"
              />
            )}
          </Reveal>
        ))}
      </ol>
    </div>
  );
}
