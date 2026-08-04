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

interface WorkItem {
  title: string;
  context: string;
  description: string;
}

const work: WorkItem[] = [
  {
    title: "New hire reporting",
    context: "Salsa · 2026",
    description:
      "Built Salsa's new hire reporting product end to end: an event-driven compliance pipeline that reports new hires to US state agencies, launched from 5 pilot states to all 50 for both employees and contractors.",
  },
  {
    title: "Async tax file generation",
    context: "Salsa · 2026",
    description:
      "Redesigned quarterly tax file generation from a synchronous, memory-bound process into a chunked async pipeline with retries and dead-lettering, validated against the previous output before cutover.",
  },
  {
    title: "Partner audit log",
    context: "Salsa · 2026",
    description:
      "Led the delivery of a partner-facing audit log: multi-tenant GraphQL API, React UI, and public documentation, rolled out from the first partner to all of them.",
  },
  {
    title: "High-traffic Go services",
    context: "Mercado Libre · 2024 to 2026",
    description:
      "Refactored a Go service handling 500K requests per minute and improved resilience across critical paths with retries, circuit breakers, rate limiting, and caching.",
  },
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
    note: "Embedded payroll infrastructure, US tax compliance",
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
    note: "Go backends for a document automation platform, Luxembourg fintech",
    logo: "/nowcm.png",
    url: "https://nowcm.eu",
  },
  {
    company: "Minutrade",
    role: "Software Engineer",
    period: "2022 - 2024",
    note: "Node.js APIs for loyalty and rewards",
    logo: "/minutrade.png",
    url: "https://minu.co",
  },
];

const photos = [
  { src: "/run.jpeg", alt: "Marcos running a race in Sao Paulo" },
  { src: "/podium.jpeg", alt: "Marcos on a race podium with a trophy" },
  { src: "/stadium.jpeg", alt: "Marcos at a football stadium" },
  { src: "/rj.jpeg", alt: "Marcos on a rooftop in Rio de Janeiro" },
];

function Section({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-border">
      <div className="mx-auto grid w-full max-w-7xl gap-6 px-6 py-16 md:grid-cols-[220px_1fr] md:gap-12 md:px-12 md:py-20">
        <h2 className="text-sm font-medium text-muted-foreground">{title}</h2>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden="true" className="hero-glow absolute inset-0" />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-6 py-20 md:grid-cols-[1fr_auto] md:px-12 md:py-28">
        <div>
          <h1 className="animate-fade-in-up text-hero-gradient pb-1 text-5xl font-semibold tracking-tight md:text-6xl">
            Marcos Nikel
          </h1>
          <p className="animate-fade-in-up mt-3 text-base text-muted-foreground [animation-delay:80ms]">
            Software engineer · Sao Paulo, Brazil
          </p>
          <p className="animate-fade-in-up mt-6 max-w-[60ch] text-base leading-relaxed text-muted-foreground [animation-delay:160ms]">
            Backend-focused engineer with 4+ years building fintech systems:
            payroll and tax compliance infrastructure at Salsa, high-traffic
            services at Mercado Libre, and document automation for European
            banks at NowCM. Comfortable across the stack with TypeScript and
            React when needed.
          </p>

          <div className="animate-fade-in-up mt-8 flex flex-wrap items-center gap-3 [animation-delay:240ms]">
            <CopyEmail email={EMAIL} />
            <a
              href="/marcos-nikel-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm text-foreground transition-colors duration-200 hover:bg-secondary"
            >
              <FileText className="size-4 text-muted-foreground" />
              Resume
            </a>
            <div className="flex items-center gap-1">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="rounded-lg p-2 text-muted-foreground transition-colors duration-200 hover:bg-secondary hover:text-foreground"
                >
                  <social.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="photo-glow hidden rounded-2xl bg-gradient-to-b from-foreground/15 to-foreground/5 p-px md:block">
          <Image
            src="/me.jpeg"
            alt="Marcos Nikel"
            width={264}
            height={330}
            priority
            className="aspect-[4/5] w-64 rounded-[calc(1rem-1px)] object-cover object-[50%_30%]"
          />
        </div>
      </div>
    </section>
  );
}

function WorkSection() {
  return (
    <Section id="work" title="Selected work">
      <div className="divide-y divide-border border-y border-border">
        {work.map((item) => (
          <article
            key={item.title}
            className="-mx-4 grid gap-2 rounded-lg px-4 py-6 transition-colors duration-200 hover:bg-secondary/60 md:grid-cols-[1fr_220px] md:gap-8"
          >
            <div className="md:order-1">
              <h3 className="text-base font-medium text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 max-w-[70ch] text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
            <p className="text-sm text-muted-foreground md:order-2 md:text-right">
              {item.context}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}

function ExperienceSection() {
  return (
    <Section id="experience" title="Experience">
      <div className="divide-y divide-border border-y border-border">
        {career.map((item) => (
          <a
            key={item.company}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group -mx-4 flex items-center gap-4 rounded-lg px-4 py-5 transition-colors duration-200 hover:bg-secondary/60"
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
    </Section>
  );
}

function AboutSection() {
  return (
    <Section id="about" title="About">
      <div className="flex max-w-[70ch] flex-col gap-4 text-base leading-relaxed text-muted-foreground">
        <p>
          I got into computers early, spent my childhood gaming, and wrote my
          first code at 10 while setting up a game server. I started college in
          nutrition, switched to computer science a year later, and turned the
          hobby into a career.
        </p>
        <p>
          I like being close to the product, collaborating with the people
          around me, and working on systems where correctness matters. Outside
          of work I lift and run, and I am currently training for my first
          marathon.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
        {photos.map((photo) => (
          <Image
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            width={400}
            height={500}
            className="aspect-[4/5] w-full rounded-lg border border-border object-cover transition-[filter] duration-300 hover:brightness-110"
          />
        ))}
      </div>
    </Section>
  );
}

function ContactSection() {
  return (
    <Section id="contact" title="Contact">
      <p className="max-w-[60ch] text-base leading-relaxed text-muted-foreground">
        The fastest way to reach me is email. You can also send a message
        directly from here and I will get back to you.
      </p>
      <div className="mt-6 max-w-xl">
        <ContactForm />
      </div>
    </Section>
  );
}

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <WorkSection />
      <ExperienceSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
