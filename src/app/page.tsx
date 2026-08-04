import { ArrowUpRight, FileText, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { CopyEmail } from "@/components/CopyEmail";

const EMAIL = "marcosnikeldev@gmail.com";

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const socials = [
  { label: "GitHub", href: "https://github.com/marcossnikel", icon: Github },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mnikel/",
    icon: Linkedin,
  },
  { label: "X", href: "https://x.com/marcosnikel_", icon: XIcon },
];

const stats = [
  { value: "500K", label: "requests/min served" },
  { value: "50", label: "US states filed" },
  { value: "12,000", label: "employers, one quarter close" },
  { value: "896", label: "km run this year" },
];

interface LogEntry {
  id: string;
  meta: string;
  title: string;
  body: string;
  outcome: string;
}

const logbook: LogEntry[] = [
  {
    id: "01",
    meta: "Salsa · 2026 · Kotlin, Kafka, PostgreSQL",
    title: "New hire reporting, zero to fifty states",
    body: "US employers must report every new hire to their state within roughly 20 days. Salsa had nothing, competitors had shipped it years earlier, and a partner go-live date was already committed. I built the product from zero: an event-driven pipeline from payroll confirmation to state-formatted filings, with per-state rules, rehire detection, salary derivation, and payroll blockers when required worker data is missing.",
    outcome:
      "In production in under 3 months, expanded from 5 pilot states to all 50, covering both employees and contractors.",
  },
  {
    id: "02",
    meta: "Salsa · 2026 · distributed systems",
    title: "Tax files that stopped crashing the JVM",
    body: "Quarterly tax returns were generated inside a single synchronous request, and large employers could crash an instance at around 15K worker payments held in memory. I rebuilt generation as a chunked async pipeline with retries, dead-lettering, and ordered merge, then proved correctness with byte-level golden-file parity against the old path before cutover.",
    outcome:
      "Ran a production quarter close for about 12,000 employers, including a live scheduler tuning that roughly 10x'd throughput mid-run.",
  },
  {
    id: "03",
    meta: "Salsa · 2026 · incident writeup",
    title: "The missing index",
    body: "Production database degrading under a partner's bulk syncs, invisible to tracing. I correlated the CPU spikes to an event fan-out where one consumer query, a sequential scan repeated across 163K events, accounted for 53% of total database load. The table had never been indexed on the column every query filtered by.",
    outcome:
      "CREATE INDEX CONCURRENTLY on production, recovery in about 30 seconds, and the next sync wave absorbed at p95 220ms the same day.",
  },
  {
    id: "04",
    meta: "Mercado Libre · 2024 to 2026 · Go",
    title: "Half a million requests per minute",
    body: "Owned high-traffic Go services on one of Latin America's largest platforms. Refactored a service handling 500K requests per minute, removing bottlenecks for a 20ms latency cut, and introduced retries, circuit breakers, rate limiting, and caching across critical paths.",
    outcome:
      "18% better uptime on critical paths and 30% fewer false alarms after recalibrating the alerting.",
  },
];

const alsoShipped = [
  "Partner-facing audit log API at Salsa: multi-tenant GraphQL with strict tenant isolation, delivered on time as project lead starting two weeks after joining",
  "Self-originated project killing silent data drift with a third-party tax engine, from incident diagnosis to production go-live in 3 weeks",
  "Internationalization rollout across six projects at Mercado Libre",
  "CI/CD pipelines to Kubernetes for an AI document platform serving European banks at NowCM",
  "Cryptography patch stopping unauthorized prize redemptions at Minutrade, tied to a 10% revenue increase",
];

interface CareerItem {
  company: string;
  role: string;
  period: string;
  note: string;
  logo: string;
  url: string;
}

const career: CareerItem[] = [
  {
    company: "Salsa",
    role: "Software Engineer",
    period: "2026",
    note: "Embedded payroll infrastructure: US tax filings, compliance products, production ownership",
    logo: "/salsa.png",
    url: "https://salsa.dev",
  },
  {
    company: "Mercado Libre",
    role: "Software Engineer",
    period: "2024 - 2026",
    note: "High-traffic Go services for user and profile management",
    logo: "/mercadolivre.png",
    url: "https://mercadolivre.com.br",
  },
  {
    company: "NowCM",
    role: "Software Engineer",
    period: "2024",
    note: "Go backends for a debt issuance platform, Luxembourg fintech",
    logo: "/nowcm.png",
    url: "https://nowcm.eu",
  },
  {
    company: "Minutrade",
    role: "Software Engineer",
    period: "2022 - 2024",
    note: "Node.js APIs for loyalty and rewards, where it all started",
    logo: "/minutrade.png",
    url: "https://minu.co",
  },
];

const runStats = [
  { value: "896 km", label: "logged since March" },
  { value: "340", label: "runs synced" },
  { value: "4:20 /km", label: "half marathon target" },
  { value: "42.2 km", label: "first marathon, in training" },
];

const photos = [
  {
    src: "/run.jpeg",
    alt: "Marcos mid-race in Sao Paulo",
    caption: "race pace, orange shoes",
  },
  {
    src: "/podium.jpeg",
    alt: "Marcos on the podium holding a trophy and medal",
    caption: "first podium, 7K",
  },
  {
    src: "/stadium.jpeg",
    alt: "Marcos in a Brazil shirt at a packed stadium",
    caption: "matchday",
  },
  {
    src: "/rj.jpeg",
    alt: "Marcos on a rooftop above Ipanema beach in Rio",
    caption: "off day in Rio",
  },
];

function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <div className="mb-8 flex items-baseline gap-3">
      <span className="font-mono text-xs text-primary">{index}</span>
      <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {title}
      </h2>
      <div className="h-px flex-1 self-center bg-border" />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="animate-fade-in pt-16 md:pt-24">
      <p className="font-mono text-xs text-muted-foreground">
        Software engineer · Sao Paulo, Brazil · UTC-3
      </p>

      <h1 className="mt-5 max-w-[16ch] font-heading text-4xl font-medium leading-[1.08] tracking-tight text-foreground md:text-[3.25rem]">
        I build backends where{" "}
        <em className="text-primary">correctness is money.</em>
      </h1>

      <div className="mt-8 flex items-start gap-5">
        <Image
          src="/me.jpeg"
          alt="Marcos Nikel"
          width={56}
          height={56}
          className="size-14 shrink-0 rounded-md object-cover object-[50%_38%] ring-1 ring-border"
          priority
        />
        <p className="max-w-[52ch] text-[15px] leading-relaxed text-muted-foreground md:text-base">
          Payroll and tax-filing infrastructure, marketplace-scale services, and
          the reliability work that keeps both alive. Four years across fintech
          in Brazil, Luxembourg, and the US, most recently at{" "}
          <a
            href="https://salsa.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-primary"
          >
            Salsa
          </a>
          . When I am not shipping, I am training for my first marathon.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <CopyEmail email={EMAIL} />
        <a
          href="/marcos-nikel-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-3.5 py-2 font-mono text-xs text-foreground transition-colors duration-200 hover:border-primary/50 hover:bg-secondary"
        >
          <FileText className="size-3.5 text-muted-foreground" />
          resume.pdf
        </a>
        <div className="flex items-center gap-1">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="rounded-md p-2 text-muted-foreground transition-colors duration-200 hover:bg-secondary hover:text-foreground"
            >
              <social.icon className="size-4" />
            </a>
          ))}
        </div>
      </div>

      <dl className="mt-14 grid grid-cols-2 divide-border overflow-hidden rounded-md border border-border sm:grid-cols-4 sm:divide-x">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col gap-1 border-border bg-card p-4 [&:nth-child(-n+2)]:border-b sm:[&:nth-child(-n+2)]:border-b-0 [&:nth-child(odd)]:border-r sm:[&:nth-child(odd)]:border-r-0"
          >
            <dd className="font-heading text-2xl font-medium tabular-nums text-foreground">
              {stat.value}
            </dd>
            <dt className="font-mono text-[11px] text-muted-foreground">
              {stat.label}
            </dt>
          </div>
        ))}
      </dl>
    </section>
  );
}

function WorkSection() {
  return (
    <section id="work" className="scroll-mt-20 pt-20 md:pt-28">
      <SectionLabel index="01" title="Selected work" />

      <div className="flex flex-col gap-12">
        {logbook.map((entry) => (
          <article key={entry.id} className="group">
            <p className="font-mono text-xs text-muted-foreground">
              <span className="text-primary">log {entry.id}</span> ·{" "}
              {entry.meta}
            </p>
            <h3 className="mt-2.5 font-heading text-xl font-medium tracking-tight text-foreground md:text-2xl">
              {entry.title}
            </h3>
            <p className="mt-3 max-w-[62ch] text-[15px] leading-relaxed text-muted-foreground">
              {entry.body}
            </p>
            <p className="mt-3 max-w-[62ch] border-l-2 border-primary/60 pl-3 text-[15px] leading-relaxed text-foreground">
              {entry.outcome}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-14">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Also shipped
        </p>
        <ul className="flex flex-col gap-2.5">
          {alsoShipped.map((item) => (
            <li
              key={item}
              className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
            >
              <span
                aria-hidden="true"
                className="mt-[9px] size-1 shrink-0 rounded-full bg-primary/70"
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function CareerSection() {
  return (
    <section id="route" className="scroll-mt-20 pt-20 md:pt-28">
      <SectionLabel index="02" title="The route" />

      <div className="flex flex-col">
        {career.map((item) => (
          <a
            key={item.company}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group -mx-3 flex items-center gap-4 rounded-md px-3 py-4 transition-colors duration-200 hover:bg-secondary/60"
          >
            <div className="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-md border border-border bg-white">
              <Image
                src={item.logo}
                alt={item.company}
                width={26}
                height={26}
                className="object-contain"
              />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <span className="font-medium text-foreground">
                  {item.company}
                </span>
                <ArrowUpRight className="size-3.5 text-muted-foreground opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
              </div>
              <p className="text-sm text-muted-foreground">{item.note}</p>
            </div>
            <span className="shrink-0 whitespace-nowrap font-mono text-xs tabular-nums text-muted-foreground">
              {item.period}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 pt-20 md:pt-28">
      <SectionLabel index="03" title="Backstory" />
      <div className="flex max-w-[62ch] flex-col gap-4 text-[15px] leading-relaxed text-muted-foreground">
        <p>
          I grew up inside Perfect World, and at 10 I was running my own game
          server without knowing that counted as programming. I still managed to
          start college in nutrition. One year in I admitted the obvious,
          switched to computer science, and turned the hobby into the career.
        </p>
        <p>
          Since then the thread has been fintech: loyalty rewards, capital
          markets, a marketplace serving half a continent, and payroll. I like
          being close to the product, and I like problems where being wrong
          costs real money, because they force the habits I care about most:
          reading systems end to end, writing things down, and owning outcomes
          in production.
        </p>
      </div>
    </section>
  );
}

function RunningSection() {
  return (
    <section id="running" className="scroll-mt-20 pt-20 md:pt-28">
      <SectionLabel index="04" title="Training log" />

      <p className="max-w-[62ch] text-[15px] leading-relaxed text-muted-foreground">
        The only thing I like more than shipping is a negative split. I lift, I
        run, and I am training for my first marathon. True to type, I built my
        own training log instead of using someone else's:{" "}
        <a
          href="https://github.com/marcossnikel/training-hub"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-primary"
        >
          training-hub
        </a>{" "}
        syncs every activity from Strava and tracks mileage per shoe.
      </p>

      <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-4">
        {runStats.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-1 bg-card p-4">
            <dd className="font-mono text-lg font-medium tabular-nums text-foreground">
              {stat.value}
            </dd>
            <dt className="font-mono text-[11px] text-muted-foreground">
              {stat.label}
            </dt>
          </div>
        ))}
      </dl>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {photos.map((photo, i) => (
          <figure key={photo.src} className="group">
            <div
              className={`overflow-hidden rounded-md border border-border ${
                i % 2 === 1 ? "sm:translate-y-3" : ""
              }`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={400}
                height={533}
                className="aspect-[3/4] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              />
            </div>
            <figcaption
              className={`mt-2 font-mono text-[11px] text-muted-foreground ${
                i % 2 === 1 ? "sm:translate-y-3" : ""
              }`}
            >
              {photo.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20 py-20 md:py-28">
      <SectionLabel index="05" title="Finish line" />
      <p className="mb-8 max-w-[52ch] text-[15px] leading-relaxed text-muted-foreground">
        Have a hard backend problem, a team I should meet, or a race to
        recommend? My inbox is open, and so is my{" "}
        <a
          href="https://www.linkedin.com/in/mnikel/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-primary"
        >
          LinkedIn
        </a>
        .
      </p>
      <ContactForm />
    </section>
  );
}

export default function HomePage() {
  return (
    <div className="mx-auto max-w-[44rem] px-6">
      <HeroSection />
      <WorkSection />
      <CareerSection />
      <AboutSection />
      <RunningSection />
      <ContactSection />
    </div>
  );
}
