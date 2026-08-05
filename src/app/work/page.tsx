import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import { PageShell } from "@/components/PageShell";
import { career, work } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected work: payroll tax infrastructure, high-traffic Go services, and fintech platforms.",
};

export default function WorkPage() {
  return (
    <PageShell
      statement="Ship. Scale. Own."
      gradient="gradient-amber"
      intro="A selection of what I have built and operated in production over the last four years, plus the route that got me here."
    >
      <div className="divide-y divide-border border-y border-border">
        {work.map((item) => (
          <article key={item.title} className="py-6">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <h2 className="text-base font-medium text-foreground">
                {item.title}
              </h2>
              <p className="shrink-0 text-sm text-muted-foreground">
                {item.context}
              </p>
            </div>
            <p className="mt-2 max-w-[70ch] text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </article>
        ))}
      </div>

      <h2 className="mt-14 mb-4 text-sm font-medium text-muted-foreground">
        Experience
      </h2>
      <div className="divide-y divide-border border-y border-border">
        {career.map((item) => (
          <a
            key={item.company}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group -mx-3 flex items-center gap-4 rounded-lg px-3 py-4 transition-colors duration-200 hover:bg-secondary/60"
          >
            <div className="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border bg-white">
              <Image
                src={item.logo}
                alt={item.company}
                width={24}
                height={24}
                className="object-contain"
              />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-medium text-foreground">
                  {item.company}
                </span>
                <ArrowUpRight className="size-3.5 text-muted-foreground opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
              </div>
              <p className="text-sm text-muted-foreground">{item.note}</p>
            </div>
            <span className="shrink-0 text-sm tabular-nums text-muted-foreground">
              {item.period}
            </span>
          </a>
        ))}
      </div>
    </PageShell>
  );
}
