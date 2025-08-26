export default function UsesPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 py-24">
      <div className="max-w-4xl">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Uses
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            Software, tools, and gear I use for development and daily work.
          </p>
        </div>

        <div className="space-y-12">
          <div className="p-8 border border-gray-200 dark:border-gray-800 rounded-2xl hover:border-gray-300 dark:hover:border-gray-700 transition-colors duration-200">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Development Setup</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Here's what I use to build software and manage my workflow:
            </p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• <span className="text-gray-900 dark:text-white">Editor:</span> VS Code with various extensions</li>
              <li>• <span className="text-gray-900 dark:text-white">Terminal:</span> iTerm2 with Zsh</li>
              <li>• <span className="text-gray-900 dark:text-white">Languages:</span> TypeScript, JavaScript, Python, Go</li>
              <li>• <span className="text-gray-900 dark:text-white">Frameworks:</span> Next.js, React, Node.js</li>
              <li>• <span className="text-gray-900 dark:text-white">Database:</span> PostgreSQL, MongoDB, Redis</li>
              <li>• <span className="text-gray-900 dark:text-white">Tools:</span> Docker, Git, Figma</li>
            </ul>
          </div>

          <div className="p-8 border border-gray-200 dark:border-gray-800 rounded-2xl hover:border-gray-300 dark:hover:border-gray-700 transition-colors duration-200">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Coming Soon</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              More detailed information about my complete setup, hardware, and 
              productivity tools is coming soon!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}