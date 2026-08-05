import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { deskGear, type GearItem, roadGear } from "@/lib/content";

export const metadata: Metadata = {
  title: "Uses",
  description:
    "The gear I depend on, in both offices: the desk and the asphalt.",
};

function GearList({ label, items }: { label: string; items: GearItem[] }) {
  return (
    <div>
      <h2 className="mb-3 text-sm font-medium text-foreground">{label}</h2>
      <ul className="divide-y divide-border border-y border-border">
        {items.map((gear) => (
          <li
            key={gear.item}
            className="flex flex-col gap-0.5 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
          >
            <span className="text-sm text-foreground">{gear.item}</span>
            <span className="text-sm text-muted-foreground sm:text-right">
              {gear.note}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function UsesPage() {
  return (
    <PageShell
      statement="Desk. Shoes. Coffee."
      gradient="gradient-gold"
      intro="The gear I depend on, in both offices: the one with the keyboard and the one with the asphalt."
    >
      <div className="grid gap-10 md:grid-cols-2">
        <GearList label="The desk" items={deskGear} />
        <GearList label="The road" items={roadGear} />
      </div>
    </PageShell>
  );
}
