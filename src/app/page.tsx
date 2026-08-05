import { FileText } from "lucide-react";
import { CmdKHint } from "@/components/CmdKHint";
import { CopyEmail } from "@/components/CopyEmail";
import { PronounceName } from "@/components/PronounceName";
import { EMAIL } from "@/lib/content";

export default function HomePage() {
  return (
    <section className="relative flex flex-1 overflow-hidden">
      <div aria-hidden="true" className="hero-glow absolute inset-0" />
      <div className="relative mx-auto flex w-full max-w-3xl flex-col justify-center px-6 py-24 md:py-32">
        <div className="animate-fade-in-up flex items-center gap-4">
          <h1 className="text-hero-gradient pb-1 text-5xl font-semibold tracking-tight md:text-6xl">
            Marcos Nikel
          </h1>
          <PronounceName />
        </div>

        <p className="animate-fade-in-up mt-4 text-base text-foreground [animation-delay:80ms]">
          Full-stack engineer, strongest on the backend
        </p>
        <p className="animate-fade-in-up mt-1.5 text-base text-muted-foreground [animation-delay:120ms]">
          Go, distributed systems, and products people rely on
        </p>

        <p className="animate-fade-in-up mt-6 text-sm text-muted-foreground [animation-delay:180ms]">
          Sao Paulo, Brazil · Now training for my first marathon in{" "}
          <span className="relative inline-block text-foreground">
            Valencia
            <svg
              className="scribble"
              viewBox="0 0 110 42"
              fill="none"
              aria-hidden="true"
              preserveAspectRatio="none"
            >
              <path
                d="M12 24 C10 10, 44 3, 74 6 C98 8, 106 16, 103 25 C100 35, 68 40, 38 38 C16 36, 6 31, 9 22"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </p>

        <div className="animate-fade-in-up mt-10 [animation-delay:240ms]">
          <CmdKHint />
        </div>

        <div className="animate-fade-in-up mt-10 flex flex-wrap items-center gap-3 [animation-delay:300ms]">
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
        </div>
      </div>
    </section>
  );
}
