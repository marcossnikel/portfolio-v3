"use client";

import { Command } from "cmdk";
import {
  Briefcase,
  Code,
  Coffee,
  FileText,
  Home,
  Lightbulb,
  Link2,
  Mail,
  Moon,
  Send,
  User,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useRef, useState } from "react";
import { EMAIL } from "@/lib/content";

const REPO_URL = "https://github.com/marcossnikel/portfolio-v3";

interface Destination {
  label: string;
  href: string;
  keys: [string, string];
  icon: React.ComponentType<{ className?: string }>;
  animation: string;
}

const destinations: Destination[] = [
  {
    label: "Home",
    href: "/",
    keys: ["G", "H"],
    icon: Home,
    animation: "icon-bounce",
  },
  {
    label: "Work",
    href: "/work",
    keys: ["G", "W"],
    icon: Briefcase,
    animation: "icon-pop",
  },
  {
    label: "Projects",
    href: "/projects",
    keys: ["G", "P"],
    icon: Lightbulb,
    animation: "icon-wiggle",
  },
  {
    label: "About",
    href: "/about",
    keys: ["G", "A"],
    icon: User,
    animation: "icon-bounce",
  },
  {
    label: "Uses",
    href: "/uses",
    keys: ["G", "U"],
    icon: Coffee,
    animation: "icon-tilt",
  },
  {
    label: "Contact",
    href: "/contact",
    keys: ["G", "C"],
    icon: Send,
    animation: "icon-tilt",
  },
];

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const pendingG = useRef(false);
  const gTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const run = useCallback((action: () => void) => {
    setOpen(false);
    action();
  }, []);

  const copyLink = useCallback(() => {
    navigator.clipboard.writeText(window.location.href).catch(() => {});
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  useEffect(() => {
    function isTyping(target: EventTarget | null) {
      const el = target as HTMLElement | null;
      return (
        !!el &&
        (el.tagName === "INPUT" ||
          el.tagName === "TEXTAREA" ||
          el.isContentEditable)
      );
    }

    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
        return;
      }
      if (isTyping(e.target) || e.metaKey || e.ctrlKey || e.altKey) return;

      const key = e.key.toLowerCase();

      if (pendingG.current) {
        pendingG.current = false;
        if (gTimer.current) clearTimeout(gTimer.current);
        const dest = destinations.find((d) => d.keys[1].toLowerCase() === key);
        if (dest) {
          e.preventDefault();
          router.push(dest.href);
        }
        return;
      }

      if (key === "g") {
        pendingG.current = true;
        if (gTimer.current) clearTimeout(gTimer.current);
        gTimer.current = setTimeout(() => {
          pendingG.current = false;
        }, 1000);
        return;
      }

      if (key === "l") copyLink();
      else if (key === "e") window.location.href = `mailto:${EMAIL}`;
      else if (key === "s") window.open(REPO_URL, "_blank");
      else if (key === "r") window.open("/marcos-nikel-resume.pdf", "_blank");
      else if (key === "t") toggleTheme();
    }

    function onOpenEvent() {
      setOpen(true);
    }

    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("open-cmdk", onOpenEvent);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("open-cmdk", onOpenEvent);
    };
  }, [router, copyLink, toggleTheme]);

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Command menu"
      loop
    >
      <Command.Input placeholder="Type a command or search..." />
      <Command.List>
        <Command.Empty>No results found.</Command.Empty>

        <Command.Group heading="General">
          <Command.Item className="icon-wiggle" onSelect={() => run(copyLink)}>
            <Link2 />
            Copy link
            <span className="cmdk-kbd">
              <kbd>L</kbd>
            </span>
          </Command.Item>
          <Command.Item
            className="icon-tilt"
            onSelect={() =>
              run(() => {
                window.location.href = `mailto:${EMAIL}`;
              })
            }
          >
            <Mail />
            Send email
            <span className="cmdk-kbd">
              <kbd>E</kbd>
            </span>
          </Command.Item>
          <Command.Item
            className="icon-pop"
            onSelect={() => run(() => window.open(REPO_URL, "_blank"))}
          >
            <Code />
            View source
            <span className="cmdk-kbd">
              <kbd>S</kbd>
            </span>
          </Command.Item>
          <Command.Item
            className="icon-bounce"
            onSelect={() =>
              run(() => window.open("/marcos-nikel-resume.pdf", "_blank"))
            }
          >
            <FileText />
            Download resume
            <span className="cmdk-kbd">
              <kbd>R</kbd>
            </span>
          </Command.Item>
          <Command.Item
            className="icon-wiggle"
            onSelect={() => run(toggleTheme)}
          >
            <Moon />
            Toggle theme
            <span className="cmdk-kbd">
              <kbd>T</kbd>
            </span>
          </Command.Item>
        </Command.Group>

        <Command.Group heading="Go to">
          {destinations.map((dest) => (
            <Command.Item
              key={dest.href}
              className={dest.animation}
              onSelect={() => run(() => router.push(dest.href))}
            >
              <dest.icon />
              {dest.label}
              <span className="cmdk-kbd">
                <kbd>{dest.keys[0]}</kbd>
                <kbd>{dest.keys[1]}</kbd>
              </span>
            </Command.Item>
          ))}
        </Command.Group>
      </Command.List>
    </Command.Dialog>
  );
}
