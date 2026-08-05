import type { Metadata } from "next";
import Image from "next/image";
import { PageShell } from "@/components/PageShell";
import { photos } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Born and raised in the interior of Sao Paulo. Volleyball, running, coffee, and code.",
};

export default function AboutPage() {
  return (
    <PageShell statement="Court. Road. Keyboard." gradient="gradient-rose">
      <div className="flex flex-col gap-10 md:flex-row md:items-start md:gap-12">
        <div className="flex max-w-[62ch] flex-col gap-4 text-base leading-relaxed text-muted-foreground">
          <p>
            I was born and raised in the interior of Sao Paulo, got into
            computers early, and wrote my first code at 10 while setting up a
            game server. I still started college in nutrition; one year in I
            admitted the obvious, switched to computer science, and turned the
            hobby into a career.
          </p>
          <p>
            Sports shaped me before software did. I played volleyball for my
            city's semi-professional team for years, and the discipline that
            takes is the same one I bring to work. These days it goes into
            running, with my first marathon coming up in Valencia, December
            2026.
          </p>
          <p>
            I have worked with people from Luxembourg, Colombia, Argentina,
            Uruguay, France, Spain, the UK, the US, Australia, and Canada, and
            that mix is my favorite part of this job. Portuguese and English,
            plus enough Spanish to keep up. Fueled by an unreasonable amount of
            coffee.
          </p>
        </div>
        <div className="photo-glow shrink-0 self-start rounded-2xl bg-gradient-to-b from-foreground/15 to-foreground/5 p-px">
          <Image
            src="/me.jpeg"
            alt="Marcos Nikel"
            width={224}
            height={280}
            priority
            className="aspect-[4/5] w-56 rounded-[calc(1rem-1px)] object-cover object-[50%_30%]"
          />
        </div>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {photos.map((photo) => (
          <figure key={photo.src}>
            <Image
              src={photo.src}
              alt={photo.alt}
              width={400}
              height={500}
              className="aspect-[4/5] w-full rounded-lg border border-border object-cover transition-[filter] duration-300 hover:brightness-110"
            />
            <figcaption className="mt-2 text-xs text-muted-foreground">
              {photo.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </PageShell>
  );
}
