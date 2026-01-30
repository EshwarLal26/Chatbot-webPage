import FadeContent from "@/components/FadeContent";

export default function KeyFeaturesSection() {
  const features = [
    {
      icon: "🌐",
      title: "Web Scraping",
      desc: "Extract clean, structured content directly from website pages.",
    },
    {
      icon: "🧠",
      title: "Semantic Search",
      desc: "Content is converted into vectors using AI Embeddings Model for meaning-based search.",
    },
    {
      icon: "📦",
      title: "Vector Database",
      desc: "Fast and scalable similarity search across large volumes of embedded content.",
    },
    {
      icon: "🤖",
      title: "RAG-based AI Responses",
      desc: "GPT-5.2 generates answers strictly from retrieved website data.",
    },
    {
      icon: "🔒",
      title: "Page-Restricted Answers",
      desc: "No hallucinations, no outside knowledge — answers come only from indexed pages.",
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900 py-20">
      <div className="max-w-screen-xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16">
          <FadeContent blur duration={800} delay={100}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
              Key Features
            </h2>
          </FadeContent>

          <FadeContent blur duration={700} delay={300}>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Powerful RAG architecture explained in simple, practical terms.
            </p>
          </FadeContent>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FadeContent
              key={feature.title}
              blur
              duration={700}
              delay={600 + index * 180} // ⏱ staggered card reveal
            >
              <div className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="text-3xl mb-4">{feature.icon}</div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400">
                  {feature.desc}
                </p>
              </div>
            </FadeContent>
          ))}
        </div>

      </div>
    </section>
  );
}
