import { socials } from "@/lib/content";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-6 py-8 sm:flex-row sm:items-center sm:justify-between md:px-12">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Marcos Nikel · Updated August 2026
        </p>
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
