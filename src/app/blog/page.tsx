import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { getAllArticles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles about software engineering, Golang, and technology.",
};

function ArticleCard({
  title,
  date,
  excerpt,
  slug,
}: {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
}) {
  return (
    <Link href={`/blog/${slug}`} className="group cursor-pointer">
      <Card className="transition-colors duration-200 group-hover:border-primary/30 group-hover:bg-secondary/50">
        <CardContent className="flex flex-col gap-2 p-5 md:p-6">
          {date && (
            <time className="font-mono text-xs text-muted-foreground">
              {new Date(date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          )}
          <div className="flex items-start gap-2">
            <h2 className="font-heading text-lg font-semibold tracking-tight text-foreground transition-colors duration-200 group-hover:text-primary md:text-xl">
              {title}
            </h2>
            <ArrowUpRight className="mt-1 size-4 shrink-0 text-muted-foreground opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
          <p className="line-clamp-2 text-muted-foreground leading-relaxed">
            {excerpt}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}

export default function BlogPage() {
  const articles = getAllArticles();

  return (
    <div className="animate-fade-in mx-auto max-w-2xl px-6 py-12 md:py-16">
      <div className="mb-10 flex flex-col gap-3 text-center">
        <h1 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">
          Blog
        </h1>
        <p className="mx-auto max-w-md text-muted-foreground">
          Thoughts on software engineering, technology, and everything in
          between.
        </p>
      </div>

      {articles.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center text-muted-foreground">
            No articles yet. Check back soon!
          </CardContent>
        </Card>
      ) : (
        <div className="flex flex-col gap-4">
          {articles.map((article, i) => (
            <div
              key={article.slug}
              className="animate-fade-in-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <ArticleCard
                title={article.title}
                date={article.date}
                excerpt={article.excerpt}
                slug={article.slug}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
