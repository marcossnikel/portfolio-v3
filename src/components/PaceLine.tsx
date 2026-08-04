"use client";

import { useEffect, useState } from "react";

const RACE_DISTANCE = 42.2;

export function PaceLine() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    function update() {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
      frame = 0;
    }

    function onScroll() {
      if (!frame) {
        frame = requestAnimationFrame(update);
      }
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    console.info(
      "%ckm 0.0 / 42.2  ·  every page is a race, thanks for running this one with me.\n%cwant to compare splits? marcosnikeldev@gmail.com",
      "font-family: monospace; color: #e8630a;",
      "font-family: monospace; color: inherit;",
    );
  }, []);

  const km = (progress * RACE_DISTANCE).toFixed(1);
  const finished = progress > 0.995;

  return (
    <aside
      aria-hidden="true"
      className="fixed bottom-6 left-6 z-40 hidden select-none flex-col items-start gap-2 lg:flex"
    >
      <div className="h-32 w-px bg-border">
        <div
          className="w-px origin-top bg-primary"
          style={{ height: `${progress * 100}%` }}
        />
      </div>
      <p className="font-mono text-[10px] tabular-nums text-muted-foreground">
        {finished ? "finish line" : `km ${km} / ${RACE_DISTANCE}`}
      </p>
    </aside>
  );
}
