import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ContactForm } from "@/components/ContactForm";

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

interface CareerItem {
  company: string;
  role: string;
  period: string;
  logo: string;
  url: string;
  current?: boolean;
}

const careerData: CareerItem[] = [
  {
    company: "Salsa",
    role: "Software Engineer",
    period: "2026 — Present",
    logo: "/salsa.png",
    url: "https://salsa.dev",
    current: true,
  },
  {
    company: "Mercado Libre",
    role: "Software Engineer",
    period: "2024 — 2026",
    logo: "/mercadolivre.png",
    url: "https://mercadolivre.com.br",
  },
  {
    company: "NowCM",
    role: "Software Engineer",
    period: "2023 — 2024",
    logo: "/nowcm.png",
    url: "https://nowcm.eu",
  },
  {
    company: "Minutrade",
    role: "Software Engineer",
    period: "2022 — 2023",
    logo: "/minutrade.png",
    url: "https://minu.co",
  },
];

const techStack = [
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Figma", category: "design" },
  { name: "Node.js", category: "backend" },
  { name: "Golang", category: "backend" },
  { name: "PostgreSQL", category: "database" },
  { name: "MongoDB", category: "database" },
  { name: "Redis", category: "database" },
  { name: "AWS", category: "cloud" },
  { name: "GCP", category: "cloud" },
  { name: "Docker", category: "devops" },
  { name: "Kubernetes", category: "devops" },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/marcossnikel",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mnikel/",
    icon: Linkedin,
  },
  {
    label: "X",
    href: "https://x.com/marcosnikel_",
    icon: XIcon,
  },
  {
    label: "Email",
    href: "mailto:marcosnikeldev@gmail.com",
    icon: Mail,
  },
];

function HeroSection() {
  return (
    <section className="animate-fade-in pb-16 pt-20 md:pb-20 md:pt-28">
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-5">
          <Avatar className="size-16 ring-2 ring-foreground/5">
            <AvatarImage src="/me.jpeg" alt="Marcos Nikel" />
            <AvatarFallback className="font-heading text-lg">
              MN
            </AvatarFallback>
          </Avatar>
          <div>
            <h1 className="font-heading text-xl font-bold tracking-tight">
              Marcos Nikel
            </h1>
            <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="size-3" />
              Brazil
            </p>
          </div>
        </div>

        <p className="max-w-lg text-lg text-foreground/90 leading-relaxed md:text-xl">
          Software engineer who loves being close to the product. I like
          understanding the user experience end to end and being part of the
          whole process of building things. Currently training for my first
          marathon.
        </p>

        <div className="flex items-center gap-1">
          {socials.map((social) => (
            <Tooltip key={social.label}>
              <TooltipTrigger className="cursor-pointer rounded-lg p-2.5 text-muted-foreground transition-colors duration-200 hover:bg-secondary hover:text-foreground">
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex items-center justify-center"
                >
                  <social.icon className="size-[18px]" />
                </a>
              </TooltipTrigger>
              <TooltipContent>{social.label}</TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="animate-fade-in-up py-16 [animation-delay:100ms] md:py-20">
      <h2 className="mb-6 font-heading text-sm font-medium uppercase tracking-widest text-muted-foreground">
        About
      </h2>

      <div className="flex flex-col gap-5 text-foreground/80 leading-relaxed md:text-[17px]">
        <p>
          I have always been close to computers since I was a kid. I spent my
          whole childhood playing Perfect World since I was 6 years old and got
          my first contact with programming when I was 10, creating my own
          server. Life happened and I ended up studying nutrition in high school
          and later started college in that field. After studying nutrition for a
          whole year before pivoting to Computer Science, this was the best
          decision I ever made, transforming a hobby into my career.
        </p>

        <p>
          What drives me is the joy of creating things — whether it&apos;s
          building a new feature, solving a complex problem, or bringing an idea
          to life. I believe the best products come from great collaboration, and
          I genuinely enjoy working with people, learning from different
          perspectives, and building meaningful relationships along the way.
        </p>

        <p>
          Outside of work, the only thing I like more than coding is challenging
          myself physically — in the gym, running, or any activity that pushes my
          limits. Currently I&apos;m at{" "}
          <a
            href="https://salsa.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground underline decoration-foreground/20 underline-offset-4 transition-colors duration-200 hover:decoration-foreground/60"
          >
            Salsa
          </a>
          , where I continue doing what I love: creating and collaborating.
        </p>
      </div>
    </section>
  );
}

function CareerSection() {
  return (
    <section className="animate-fade-in-up py-16 [animation-delay:200ms] md:py-20">
      <h2 className="mb-6 font-heading text-sm font-medium uppercase tracking-widest text-muted-foreground">
        Career
      </h2>

      <div className="flex flex-col gap-2">
        {careerData.map((item) => (
          <a
            key={item.company}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group -mx-3 flex items-center gap-4 rounded-xl px-3 py-3 transition-colors duration-200 hover:bg-secondary/60"
          >
            <div className="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-secondary">
              <Image
                src={item.logo}
                alt={item.company}
                width={28}
                height={28}
                className="object-contain"
              />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-medium text-foreground">
                  {item.company}
                </span>
                {item.current && (
                  <Badge variant="secondary" className="text-xs">
                    Current
                  </Badge>
                )}
                <ArrowUpRight className="size-3.5 text-muted-foreground opacity-0 transition-all duration-200 group-hover:opacity-100" />
              </div>
              <p className="text-sm text-muted-foreground">{item.role}</p>
            </div>

            <span className="hidden whitespace-nowrap font-mono text-xs text-muted-foreground sm:block">
              {item.period}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

function TechStackSection() {
  return (
    <section className="animate-fade-in-up py-16 [animation-delay:300ms] md:py-20">
      <h2 className="mb-2 font-heading text-sm font-medium uppercase tracking-widest text-muted-foreground">
        Tech Stack
      </h2>
      <p className="mb-6 text-sm text-muted-foreground/70">
        Technologies I&apos;ve worked with throughout my career
      </p>

      <div className="flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <Badge
            key={tech.name}
            variant="secondary"
            className="cursor-default px-3 py-1.5 text-sm transition-colors duration-200 hover:bg-foreground/10 hover:text-foreground"
          >
            {tech.name}
          </Badge>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="animate-fade-in-up py-16 [animation-delay:400ms] md:py-20">
      <h2 className="mb-2 font-heading text-sm font-medium uppercase tracking-widest text-muted-foreground">
        Get in touch
      </h2>
      <p className="mb-8 text-foreground/80 md:text-[17px]">
        Have something in mind? Send me a message and I&apos;ll get back to you.
      </p>

      <ContactForm />
    </section>
  );
}

export default function HomePage() {
  return (
    <div className="mx-auto max-w-2xl px-6">
      <HeroSection />
      <Separator />
      <AboutSection />
      <Separator />
      <CareerSection />
      <Separator />
      <TechStackSection />
      <Separator />
      <ContactSection />
    </div>
  );
}
