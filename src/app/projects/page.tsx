import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Projects",
  description: "Things I build for myself, off the clock.",
};

export default function ProjectsPage() {
  return (
    <PageShell
      statement="Build. Run. Repeat."
      gradient="gradient-green"
      intro="Things I build for myself, off the clock. Usually to scratch an itch the market did not scratch for me."
    >
      <div className="divide-y divide-border border-y border-border">
        <article className="py-6">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
            <h2 className="text-base font-medium text-foreground">
              Training Hub
            </h2>
            <p className="shrink-0 text-sm text-muted-foreground">
              personal · active
            </p>
          </div>
          <p className="mt-2 max-w-[70ch] text-sm leading-relaxed text-muted-foreground">
            My own training log: it syncs every activity from Strava and tracks
            mileage per shoe, because spreadsheets could not keep up with the
            shoe rotation. Next.js, TypeScript, and a runner with opinions.
          </p>
        </article>
      </div>
      <p className="mt-6 text-sm text-muted-foreground">
        Also in the works: BetterFit and Finance Spot. Details soon.
      </p>
    </PageShell>
  );
}
