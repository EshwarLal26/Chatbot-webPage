export default function FutureEnhancementsSection() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-24">
      <div className="max-w-screen-xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            Future Enhancements
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Planned features that demonstrate scalability, extensibility, and long-term vision.
          </p>
        </div>

        {/* Enhancements Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {/* Multi-page crawling */}
          <div data-aos="zoom-in-down" className="p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
            <div className="text-3xl mb-4">🕸️</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Multi-page Crawling
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Automatically crawl and index entire websites instead of single pages.
            </p>
          </div>

          {/* Source citations */}
      

          {/* PDF support */}
          <div data-aos="zoom-in-down" className="p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
            <div className="text-3xl mb-4">📄</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              PDF Upload Support
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Upload and query PDFs such as documentation, manuals, and reports.
            </p>
          </div>

          {/* Multi-language */}
          <div data-aos="zoom-in-down" className="p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
            <div className="text-3xl mb-4">🌍</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Multi-language Support
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Index and answer questions across multiple languages.
            </p>
          </div>

          {/* Authentication */}
          <div data-aos="zoom-in-down" className="p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
            <div className="text-3xl mb-4">🔐</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              User Authentication
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Secure user accounts with personalized chat history and access control.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
