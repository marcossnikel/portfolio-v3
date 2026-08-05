"use client";

import { Command, Moon, Sun } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const links = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/projects", label: "Projects" },
  { href: "/uses", label: "Uses" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 md:px-12">
        <Link
          href="/"
          className="whitespace-nowrap text-sm font-semibold tracking-tight text-foreground"
        >
          Marcos Nikel
        </Link>

        <div className="flex items-center gap-1">
          <div className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-3 py-1.5 text-sm transition-colors duration-200 hover:bg-secondary hover:text-foreground ${
                  pathname === link.href
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            type="button"
            onClick={() => window.dispatchEvent(new Event("open-cmdk"))}
            className="ml-1 cursor-pointer rounded-lg p-2 text-muted-foreground transition-colors duration-200 hover:bg-secondary hover:text-foreground"
            aria-label="Open command menu"
          >
            <Command className="size-4" />
          </button>

          <button
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="cursor-pointer rounded-lg p-2 text-muted-foreground transition-colors duration-200 hover:bg-secondary hover:text-foreground"
            aria-label="Toggle theme"
          >
            {mounted ? (
              theme === "dark" ? (
                <Sun className="size-4" />
              ) : (
                <Moon className="size-4" />
              )
            ) : (
              <div className="size-4" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
