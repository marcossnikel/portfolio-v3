"use client";

import { Check, Copy } from "lucide-react";
import { useRef, useState } from "react";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="group inline-flex cursor-pointer items-center gap-2 rounded-md border border-border bg-card px-3.5 py-2 font-mono text-xs text-foreground transition-colors duration-200 hover:border-primary/50 hover:bg-secondary"
      aria-label={`Copy email address ${email}`}
    >
      {email}
      {copied ? (
        <Check className="size-3.5 text-primary" />
      ) : (
        <Copy className="size-3.5 text-muted-foreground transition-colors group-hover:text-foreground" />
      )}
    </button>
  );
}
