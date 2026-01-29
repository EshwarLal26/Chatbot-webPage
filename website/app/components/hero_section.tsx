export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center
      bg-gradient-to-br from-indigo-50 via-white to-purple-50
      dark:from-gray-900 dark:via-gray-900 dark:to-gray-800
      overflow-hidden pt-32 -mt-36"
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -left-24 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl" />
      </div>

      <div className="relative grid max-w-screen-xl px-6 sm:px-8 lg:px-12 py-16 mx-auto lg:grid-cols-12 gap-8">
        
        {/* Left content */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <h1
            data-aos="fade-out"
            data-aos-delay="1000"
            data-aos-duration="800"
            className="max-w-2xl mb-6 text-4xl font-extrabold tracking-tight leading-tight md:text-5xl xl:text-6xl text-gray-900 dark:text-white"
          >
            AI Chatbot for Website Content – Powered by RAG
          </h1>

          <p
            data-aos="fade-out"
            data-aos-delay="1000"
            data-aos-duration="800"
            className="max-w-2xl mb-8 text-lg md:text-xl text-gray-600 dark:text-gray-400"
          >
            Ask questions and get accurate answers directly from website 
          </p>

          <div
            data-aos="fade-up"
            data-aos-delay="2000"
            data-aos-duration="1600"
            className="flex flex-wrap gap-4"
          >
            <a
              href="/chat"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white rounded-lg bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-900 transition"
            >
              Try the Chatbot
            </a>

            <a
              href="#architecture"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 transition"
            >
              View Architecture
            </a>
          </div>
        </div>

        {/* Right visual */}
        <div
          data-aos="fade-in"
          data-aos-delay="1500"
          data-aos-duration="1200"
          className="hidden lg:col-span-5 lg:flex items-center justify-center"
        >
          <div className="relative w-full max-w-sm p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-xl border border-gray-200 dark:border-gray-700">
            
            {/* Icons row */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                🤖
              </div>
              <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                🗄️
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                AI + Website Data
              </div>
            </div>

            {/* Chat bubble mock */}
            <div className="space-y-3">
              <div className="self-start max-w-[80%] px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-sm text-gray-800 dark:text-gray-200">
                How does pricing work?
              </div>
              <div className="self-end max-w-[80%] px-4 py-2 rounded-xl bg-indigo-600 text-sm text-white">
                Pricing is based on usage and retrieved directly from your documentation.
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
