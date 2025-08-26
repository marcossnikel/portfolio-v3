import Link from "next/link";
import { getAllArticles } from "@/lib/markdown";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Articles",
};

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex flex-col gap-16 md:gap-24">
        <div className="flex animate-in flex-col gap-8">
          <div className="animate-in" style={{animationDelay: "0.1s", animationFillMode: "both"}}>
            <h1 className="text-3xl font-semibold tracking-tighter text-primary">
              Articles
            </h1>
          </div>
          <p className="animate-in text-secondary" style={{animationDelay: "0.2s", animationFillMode: "both"}}>
            Thoughts, ideas, and insights about software development and technology.
          </p>
        </div>

        {articles.length === 0 ? (
          <div className="animate-in flex flex-col gap-6" style={{animationDelay: "0.3s", animationFillMode: "both"}}>
            <p className="text-secondary">
              No articles published yet.
            </p>
            <p className="text-sm text-tertiary">
              Add markdown files to{" "}
              <code className="rounded bg-secondary px-2 py-1 font-mono text-sm text-accent">
                src/content/articles/
              </code>{" "}
              to get started.
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-16">
            {articles.map((article, index) => (
              <article
                key={article.slug}
                className="animate-in flex flex-col gap-4"
                style={{
                  animationDelay: `${0.3 + index * 0.1}s`,
                  animationFillMode: "both"
                }}
              >
                <h2 className="text-2xl font-semibold tracking-tight">
                  <Link
                    href={`/articles/${article.slug}`}
                    className="text-primary hover:text-accent transition-colors duration-200"
                  >
                    {article.title}
                  </Link>
                </h2>

                {article.date && (
                  <time className="text-sm text-tertiary">
                    {new Date(article.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                )}

                {article.excerpt && (
                  <p className="text-secondary leading-relaxed">
                    {article.excerpt}
                  </p>
                )}

                <Link
                  href={`/articles/${article.slug}`}
                  className="inline-flex w-fit items-center gap-1 rounded-md bg-secondary px-3 py-2 text-sm text-secondary hover:bg-tertiary transition-colors duration-200"
                >
                  Read article
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
