export const EMAIL = "marcosnikeldev@gmail.com";

export interface WorkItem {
  title: string;
  context: string;
  description: string;
}

export const work: WorkItem[] = [
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
    title: "User profile services",
    context: "Mercado Libre · 2024 to 2026",
    description:
      "Owned the Go services behind user profile management at Mercado Libre. Every profile access on the platform went through them, across every Latin American country where Mercado Libre operates, at 500K requests per minute. Refactored the hot path for lower latency and added retries, circuit breakers, rate limiting, and caching to keep it resilient.",
  },
  {
    title: "Debt issuance, minus the bureaucracy",
    context: "NowCM · 2024",
    description:
      "Worked on the document automation platform behind NowCM's debt issuance flow for European banks, turning bond contract generation from a slow manual legal process into an automated one. Optimized the generation hot path with Go concurrency primitives and built the CI/CD pipelines deploying it to Kubernetes.",
  },
];

export interface CareerItem {
  company: string;
  role: string;
  period: string;
  note: string;
  logo: string;
  url: string;
}

export const career: CareerItem[] = [
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
    note: "Node.js APIs for loyalty and rewards, integrating with banks like Banco do Brasil",
    logo: "/minutrade.png",
    url: "https://minu.co",
  },
];

export const photos = [
  {
    src: "/volleyball-match.jpeg",
    alt: "Marcos spiking over the net in a volleyball match",
    caption: "city team days",
  },
  {
    src: "/volleyball-jump.jpeg",
    alt: "Marcos jumping to attack in an indoor volleyball game",
    caption: "still jumping",
  },
  {
    src: "/race-asics.jpeg",
    alt: "Marcos mid-race at the Asics Golden Run in Sao Paulo",
    caption: "Asics Golden Run, Sao Paulo",
  },
  {
    src: "/race-finish.jpeg",
    alt: "Marcos sprinting on the blue finish carpet of a race",
    caption: "chasing the PR",
  },
  {
    src: "/race-medal.jpeg",
    alt: "Marcos holding a 30K finisher medal",
    caption: "30K, longest one yet",
  },
  {
    src: "/coffee.jpeg",
    alt: "An espresso held up against the sunrise",
    caption: "the other fuel",
  },
];

export interface GearItem {
  item: string;
  note: string;
}

export const deskGear: GearItem[] = [
  {
    item: "MacBook Pro 14, M4 Pro, 48 GB",
    note: "does not break a sweat, unlike me",
  },
  { item: "Claude Code", note: "the pair programmer that never sleeps" },
  { item: "Double-walled espresso cup", note: "the real IDE" },
];

export const roadGear: GearItem[] = [
  { item: "ASICS", note: "the easy-day pair" },
  { item: "Adidas racing shoes", note: "the PR-chasing pair" },
  { item: "GPS watch", note: "knows my pace better than I do" },
  {
    item: "Strava + Training Hub",
    note: "if it is not logged, it did not happen",
  },
];

export const socials = [
  { label: "GitHub", href: "https://github.com/marcossnikel" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mnikel/" },
  { label: "X", href: "https://x.com/marcosnikel_" },
  { label: "Email", href: `mailto:${EMAIL}` },
];
