"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Separator } from "@/components/ui/separator";

interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="markdown-content">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="mb-4 mt-8 font-heading text-3xl font-bold tracking-tight">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="mb-4 mt-8 font-heading text-2xl font-bold tracking-tight">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="mb-3 mt-6 font-heading text-xl font-semibold tracking-tight">
              {children}
            </h3>
          ),
          p: ({ children }) => (
            <p className="mb-4 text-muted-foreground leading-relaxed md:text-lg">
              {children}
            </p>
          ),
          a: ({ href, children }) => (
            <a
              href={href || "#"}
              className="cursor-pointer font-medium text-primary underline decoration-primary/30 underline-offset-4 transition-colors duration-200 hover:decoration-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </a>
          ),
          ul: ({ children }) => (
            <ul className="mb-4 flex flex-col gap-2 pl-6 text-muted-foreground list-disc marker:text-muted-foreground/50">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="mb-4 flex flex-col gap-2 pl-6 text-muted-foreground list-decimal marker:text-muted-foreground/50">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="leading-relaxed md:text-lg">{children}</li>
          ),
          code: ({ className, children }) => {
            const isBlock = className?.includes("language-");
            if (isBlock) {
              return (
                <pre className="mb-4 overflow-x-auto rounded-lg bg-secondary p-4 font-mono text-sm">
                  <code className="block whitespace-pre">{children}</code>
                </pre>
              );
            }
            return (
              <code className="rounded-md bg-secondary px-1.5 py-0.5 font-mono text-sm">
                {children}
              </code>
            );
          },
          pre: ({ children }) => <>{children}</>,
          hr: () => <Separator className="my-8" />,
          blockquote: ({ children }) => (
            <blockquote className="my-4 border-l-4 border-primary/30 py-1 pl-4 italic text-muted-foreground">
              {children}
            </blockquote>
          ),
          strong: ({ children }) => (
            <strong className="font-semibold text-foreground">
              {children}
            </strong>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
