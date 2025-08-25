import Link from "next/link";
import { getAllArticles } from "@/lib/markdown";

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
        Articles
      </h1>

      {articles.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            No articles found.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            Add markdown files to{" "}
            <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
              src/content/articles/
            </code>{" "}
            to get started.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 md:gap-8">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-red-300 dark:hover:border-red-700 transition-all duration-200 hover:shadow-md"
            >
              <h2 className="text-xl font-semibold mb-2">
                <Link
                  href={`/articles/${article.slug}`}
                  className="text-gray-900 dark:text-white hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200"
                >
                  {article.title}
                </Link>
              </h2>

              {article.date && (
                <time className="text-sm text-gray-500 dark:text-gray-400 mb-3 block">
                  {new Date(article.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              )}

              {article.excerpt && (
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
              )}

              <Link
                href={`/articles/${article.slug}`}
                className="inline-flex items-center text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 font-medium transition-colors duration-200"
              >
                Read more
                <svg
                  className="ml-1 w-4 h-4"
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
  );
}
