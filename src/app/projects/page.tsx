export default function ProjectsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 py-24">
      <div className="max-w-4xl">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Projects
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            A collection of projects I've built and contributed to over the years.
          </p>
        </div>

        <div className="space-y-12">
          <div className="p-8 border border-gray-200 dark:border-gray-800 rounded-2xl hover:border-gray-300 dark:hover:border-gray-700 transition-colors duration-200">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Coming Soon</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm currently working on showcasing my projects in an engaging way. 
              Check back soon to see what I've been building!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}