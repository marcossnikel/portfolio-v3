import Link from "next/link";

const navigation = [
  { name: "About", href: "/" },
  { name: "Articles", href: "/articles" },
  { name: "Projects", href: "/projects" },
  { name: "Speaking", href: "/speaking" },
  { name: "Hire me", href: "/hire-me" },
  { name: "Uses", href: "/uses" },
];

export function Footer() {
  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12">
        <div className="flex flex-col space-y-8">
          <div className="flex flex-wrap justify-center gap-8" role="navigation" aria-label="Footer navigation">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex justify-center">
            <div className="text-sm text-gray-500 dark:text-gray-500">
              <span>© </span>
              <span>{new Date().getFullYear()} Marcos Nikel. All Rights Reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
