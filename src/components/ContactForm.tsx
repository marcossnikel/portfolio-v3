"use client";

import { ArrowRight, Check, Loader2 } from "lucide-react";
import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

const inputClasses =
  "rounded-lg border border-border bg-transparent px-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setState("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="flex flex-col items-start gap-3 rounded-lg border border-border p-6">
        <div className="flex items-center gap-2 text-sm font-medium text-foreground">
          <Check className="size-3.5" />
          Message sent
        </div>
        <p className="text-sm text-muted-foreground">
          Thanks for reaching out. I read everything and reply fast.
        </p>
        <button
          type="button"
          onClick={() => setState("idle")}
          className="cursor-pointer text-sm text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-foreground"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Name
          </label>
          <input
            id="name"
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Your name"
            className={`h-10 ${inputClasses}`}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-sm font-medium text-foreground"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="you@example.com"
            className={`h-10 ${inputClasses}`}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-sm font-medium text-foreground"
        >
          Message
        </label>
        <textarea
          id="message"
          required
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="What are you building?"
          className={`resize-none py-2.5 ${inputClasses}`}
        />
      </div>
      {state === "error" && (
        <p className="text-sm text-destructive">
          Something went wrong. Please try again or email me directly.
        </p>
      )}
      <button
        type="submit"
        disabled={state === "loading"}
        className="inline-flex cursor-pointer items-center justify-center gap-2 self-start rounded-lg bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity duration-200 hover:opacity-90 disabled:opacity-60"
      >
        {state === "loading" ? (
          <Loader2 className="size-4 animate-spin" />
        ) : (
          <>
            Send message
            <ArrowRight className="size-4" />
          </>
        )}
      </button>
    </form>
  );
}
