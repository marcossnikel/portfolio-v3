import Link from "next/link";
import { getAllArticles } from "@/lib/markdown";

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 py-24">
      <div className="max-w-4xl">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Articles
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            Thoughts, ideas, and insights about software development and technology.
          </p>
        </div>

        {articles.length === 0 ? (
          <div className="text-center py-12">
            <div className="p-8 border border-gray-200 dark:border-gray-800 rounded-2xl">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                No articles published yet.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Add markdown files to{" "}
                <code className="bg-gray-100 dark:bg-gray-800 text-blue-600 dark:text-blue-400 px-2 py-1 rounded">
                  src/content/articles/
                </code>{" "}
                to get started.
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            {articles.map((article) => (
              <article
                key={article.slug}
                className="p-8 border border-gray-200 dark:border-gray-800 rounded-2xl hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-200"
              >
                <h2 className="text-2xl font-semibold mb-4">
                  <Link
                    href={`/articles/${article.slug}`}
                    className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    {article.title}
                  </Link>
                </h2>

                {article.date && (
                  <time className="text-sm text-gray-500 dark:text-gray-400 mb-4 block">
                    {new Date(article.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                )}

                {article.excerpt && (
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    {article.excerpt}
                  </p>
                )}

                <Link
                  href={`/articles/${article.slug}`}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-gray-900 dark:hover:text-white font-medium transition-colors duration-200"
                >
                  Read article
                  <svg
                    className="ml-2 w-4 h-4"
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
