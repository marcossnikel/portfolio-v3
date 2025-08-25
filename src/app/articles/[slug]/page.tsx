import { notFound } from "next/navigation";
import { getArticleBySlug, getAllArticles } from "@/lib/markdown";
import { MDXContent } from "@/components/MDXContent";
import Link from "next/link";

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: article.title,
    description: article.excerpt || `Read ${article.title} on my portfolio`,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <nav className="mb-8">
        <Link
          href="/articles"
          className="inline-flex items-center text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors duration-200"
        >
          <svg
            className="mr-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Articles
        </Link>
      </nav>

      <article className="prose prose-lg dark:prose-invert max-w-none">
        <header className="mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            {article.title}
          </h1>

          {article.date && (
            <time className="text-gray-500 dark:text-gray-400">
              {new Date(article.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          )}

          {article.excerpt && (
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              {article.excerpt}
            </p>
          )}
        </header>

        <div className="article-content">
          <MDXContent source={article.content} />
        </div>
      </article>

      <nav className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
        <Link
          href="/articles"
          className="inline-flex items-center text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors duration-200"
        >
          <svg
            className="mr-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Articles
        </Link>
      </nav>
    </div>
  );
}
