"use client";

import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#running", label: "Running" },
  { href: "/#contact", label: "Contact" },
];

export function Navigation() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[44rem] items-center justify-between px-6 py-3.5">
        <Link
          href="/"
          className="font-heading text-lg italic tracking-tight text-foreground transition-colors duration-200 hover:text-primary"
        >
          marcos nikel
        </Link>

        <div className="flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-2.5 py-1.5 font-mono text-xs text-muted-foreground transition-colors duration-200 hover:bg-secondary hover:text-foreground sm:px-3"
            >
              {link.label}
            </Link>
          ))}

          <button
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="ml-1 cursor-pointer rounded-md p-2 text-muted-foreground transition-colors duration-200 hover:bg-secondary hover:text-foreground"
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
