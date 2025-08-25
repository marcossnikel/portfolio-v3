import fs from "fs";
import path from "path";
import matter from "gray-matter";

const articlesDirectory = path.join(process.cwd(), "src/content/articles");

export interface Article {
  slug: string;
  title: string;
  date?: string;
  excerpt?: string;
  content: string;
  [key: string]: any;
}

export function getAllArticles(): Article[] {
  try {
    const fileNames = fs.readdirSync(articlesDirectory);
    const allArticles = fileNames
      .filter((name) => name.endsWith(".md"))
      .map((name) => {
        const fullPath = path.join(articlesDirectory, name);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data, content } = matter(fileContents);

        const slug = name.replace(/\.md$/, "");

        return {
          slug,
          title:
            data.title ||
            slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
          date: data.date,
          excerpt: data.excerpt,
          content,
          ...data,
        };
      });

    return allArticles.sort((a, b) => {
      if (a.date && b.date) {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      return a.title.localeCompare(b.title);
    });
  } catch (error) {
    console.warn(
      "No articles directory found or error reading articles:",
      error,
    );
    return [];
  }
}

export function getArticleBySlug(slug: string): Article | null {
  try {
    const fullPath = path.join(articlesDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title:
        data.title ||
        slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
      date: data.date,
      excerpt: data.excerpt,
      content,
      ...data,
    };
  } catch (error) {
    return null;
  }
}
