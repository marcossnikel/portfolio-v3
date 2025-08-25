import Link from "next/link";

const navigation = [
  { name: "About", href: "/" },
  { name: "Articles", href: "/articles" },
  { name: "Career", href: "/career" },
  { name: "Hire Me", href: "/hire-me" },
];

export function Footer() {
  return (
    <footer className="bg-white dark:bg-black">
      <div className="flex">
        <div className="w-16"></div>
        <div className="flex-1 px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-4 items-center space-y-4">
          <nav className="flex flex-wrap justify-center gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200 text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-500">
            <span>©</span>
            <span>Marcos Nikel. All Rights Reserved.</span>
          </div>
        </div>
        </div>
        <div className="w-16"></div>
      </div>
    </footer>
  );
}
