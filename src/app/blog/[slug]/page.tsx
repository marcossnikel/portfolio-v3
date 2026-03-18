import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import { Card, CardContent } from "@/components/ui/card";
import { getAllArticleSlugs, getArticleBySlug } from "@/lib/articles";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: "Article Not Found" };
  }

  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="animate-fade-in mx-auto max-w-2xl px-6 py-8 md:py-12">
      <div className="flex flex-col gap-8">
        <Link
          href="/blog"
          className="inline-flex w-fit cursor-pointer items-center gap-2 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Back to Blog
        </Link>

        <div className="flex flex-col gap-3">
          {article.date && (
            <time className="font-mono text-xs text-muted-foreground">
              {new Date(article.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          )}
          <h1 className="font-heading text-2xl font-bold tracking-tight md:text-4xl">
            {article.title}
          </h1>
        </div>

        <Card>
          <CardContent className="p-6 md:p-10">
            <MarkdownRenderer content={article.content} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
