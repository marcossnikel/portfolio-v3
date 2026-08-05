export function Footer() {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-6 py-8 sm:flex-row sm:items-center sm:justify-between md:px-12">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Marcos Nikel · Updated August 2026
        </p>
        <a
          href="mailto:marcosnikeldev@gmail.com"
          className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
        >
          marcosnikeldev@gmail.com
        </a>
      </div>
    </footer>
  );
}
