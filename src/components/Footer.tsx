import { socials } from "@/lib/content";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-6 py-8 sm:flex-row sm:items-center sm:justify-between md:px-12">
        <div className="flex flex-col gap-1">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Marcos Nikel · Updated August 2026
          </p>
          <p className="text-xs text-muted-foreground/80">
            Inspired by{" "}
            <a
              href="https://zenorocha.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-border underline-offset-4 transition-colors duration-200 hover:text-foreground hover:decoration-primary"
            >
              Zeno Rocha
            </a>
            , the site and the person.
          </p>
        </div>
        <div className="flex items-center gap-4">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              {...(social.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              {social.label.toLowerCase()}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
