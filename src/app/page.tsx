import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="px-16 sm:py-24">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 px-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="text-red-600">Marcos Nikel</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            A passionate developer dedicated to crafting exceptional digital
            experiences through clean code and innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Who I Am
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a software developer with a passion for creating beautiful,
              functional web applications. My journey in technology has been
              driven by curiosity and a desire to solve complex problems through
              elegant code.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies,
              writing technical articles, or contributing to open-source
              projects. I believe in continuous learning and sharing knowledge
              with the developer community.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              What I Do
            </h2>
            <div className="space-y-4">
              <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-red-300 dark:hover:border-red-700 transition-colors duration-200">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Full-Stack Development
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Building end-to-end web applications with modern technologies
                </p>
              </div>
              <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-red-300 dark:hover:border-red-700 transition-colors duration-200">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  UI/UX Design
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Creating intuitive and aesthetically pleasing user interfaces
                </p>
              </div>
              <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-red-300 dark:hover:border-red-700 transition-colors duration-200">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Technical Writing
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Sharing knowledge through detailed articles and tutorials
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/articles"
            className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-all duration-200 hover:shadow-lg"
          >
            Read My Articles
          </Link>
          <Link
            href="/career"
            className="px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 hover:border-red-300 dark:hover:border-red-700 rounded-lg font-medium transition-all duration-200"
          >
            View My Career
          </Link>
          <Link
            href="/hire-me"
            className="px-6 py-3 bg-gradient-to-r from-gray-900 to-red-600 hover:from-black hover:to-red-700 text-white rounded-lg font-medium transition-all duration-200 hover:shadow-lg"
          >
            Work With Me
          </Link>
        </div>
      </div>
    </div>
  );
}
