export function Footer() {
  return (
    <footer className="mt-auto border-t border-border/60">
      <div className="mx-auto flex max-w-[44rem] flex-col gap-2 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Marcos Nikel · Sao Paulo, Brazil
        </p>
        <a
          href="https://github.com/marcossnikel/portfolio-v3"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs text-muted-foreground transition-colors duration-200 hover:text-foreground"
        >
          view source
        </a>
      </div>
    </footer>
  );
}
