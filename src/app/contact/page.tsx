import { FileText } from "lucide-react";
import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { CopyEmail } from "@/components/CopyEmail";
import { PageShell } from "@/components/PageShell";
import { EMAIL } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "The fastest way to reach Marcos is email.",
};

export default function ContactPage() {
  return (
    <PageShell
      statement="Say oi."
      gradient="gradient-blue"
      intro="The fastest way to reach me is email. You can also send a message directly from here and I will get back to you."
    >
      <div className="flex flex-wrap items-center gap-3">
        <CopyEmail email={EMAIL} />
        <a
          href="/marcos-nikel-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm text-foreground transition-colors duration-200 hover:bg-secondary"
        >
          <FileText className="size-4 text-muted-foreground" />
          Resume
        </a>
      </div>
      <div className="mt-10 max-w-xl">
        <ContactForm />
      </div>
    </PageShell>
  );
}
