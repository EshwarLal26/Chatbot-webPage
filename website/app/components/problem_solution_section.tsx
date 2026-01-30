import FadeContent from "@/components/FadeContent";


export default function ProblemSolutionSection() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-20 min-h-screen flex items-center">
      <div className="max-w-screen-xl mx-auto px-6 grid gap-12 lg:grid-cols-2 items-center">

        {/* Problem */}
        <div
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="900"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900 dark:text-white">
            The Problem
          </h2>

          <ul className="space-y-6 text-lg text-gray-600 dark:text-gray-400">
            {[
              "Manual searching through long webpages",
              "Chatbots hallucinating answers",
              "No control over data source",
            ].map((text, index) => (
              <li
                key={index}
                data-aos="fade-up"
                data-aos-delay={1000 + index * 1000} // 👈 1 second gap
                data-aos-duration="700"
                className="flex items-start gap-3"
              >
                <span className="text-red-500 text-xl">❌</span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Solution */}
        <div
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-duration="900"
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
        >

          <FadeContent blur={true} duration={1000} initialOpacity={0}>
   <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900 dark:text-white">
            The Solution
          </h2></FadeContent>
       

          <ul className="space-y-6 text-lg text-gray-700 dark:text-gray-300">
            {[
              "Answers only from scraped pages",
              "Vector-based semantic search",
              "Reliable, source-grounded responses",
            ].map((text, index) => (
              <li
                key={index}
                data-aos="fade-down"
                data-aos-delay={1000 + index * 1000} // 👈 1 second gap
                data-aos-duration="700"
                className="flex items-start gap-3"
              >
                <span className="text-green-500 text-xl">✅</span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
