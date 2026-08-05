"use client";

import { Play } from "lucide-react";
import { useRef, useState } from "react";

export function PronounceName() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  function speakFallback() {
    if (!("speechSynthesis" in window)) {
      setPlaying(false);
      return;
    }
    const utterance = new SpeechSynthesisUtterance("Marcos Nikel");
    utterance.lang = "pt-BR";
    const voice = window.speechSynthesis
      .getVoices()
      .find((v) => v.lang.startsWith("pt"));
    if (voice) utterance.voice = voice;
    utterance.rate = 0.9;
    utterance.onend = () => setPlaying(false);
    utterance.onerror = () => setPlaying(false);
    window.speechSynthesis.speak(utterance);
  }

  function play() {
    if (playing) return;
    setPlaying(true);

    if (!audioRef.current) {
      audioRef.current = new Audio("/pronunciation.mp3");
      audioRef.current.onended = () => setPlaying(false);
    }

    audioRef.current.play().catch(() => {
      // No recording yet; let the browser say it in a Brazilian voice
      speakFallback();
    });
  }

  return (
    <button
      type="button"
      onClick={play}
      aria-label="Hear how to pronounce Marcos Nikel"
      className={`inline-flex size-9 shrink-0 cursor-pointer items-center justify-center self-center rounded-full border border-border bg-secondary text-foreground transition-all duration-200 hover:border-primary/50 hover:text-primary ${
        playing ? "scale-95 border-primary/60 text-primary" : ""
      }`}
    >
      <Play className="size-3.5 translate-x-px fill-current" />
    </button>
  );
}
