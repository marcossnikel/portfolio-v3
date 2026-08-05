"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export function CmdKHint() {
  const [modKey, setModKey] = useState("⌘");

  useEffect(() => {
    if (!/mac|iphone|ipad/i.test(navigator.platform)) {
      setModKey("Ctrl");
    }
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event("open-cmdk"))}
      className="group inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-foreground"
    >
      Press
      <kbd className="rounded-md border border-border bg-secondary px-1.5 py-0.5 font-mono text-xs text-muted-foreground">
        {modKey}
      </kbd>
      <kbd className="rounded-md border border-border bg-secondary px-1.5 py-0.5 font-mono text-xs text-muted-foreground">
        K
      </kbd>
      to start
      <ArrowRight className="size-4 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5" />
    </button>
  );
}
