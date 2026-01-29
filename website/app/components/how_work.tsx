export default function HowItWorksSection() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-24 min-h-screen flex items-center">
      <div className="max-w-screen-xl mx-auto px-6">

        {/* Section Header */}
        <div
          data-aos="fade-up"
         
          data-aos-duration="800"
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            A retrieval-augmented pipeline powered by embeddings and your website’s content.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-10 md:grid-cols-7">
          {steps.map((step, index) => (
            <div
              key={step.number}
              data-aos="fade-zoom-in"
              data-aos-delay={1200 + index * 200} // 👈 stagger
              data-aos-duration="800"
              className="flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-indigo-600 text-white font-extrabold mb-4">
                {step.number}
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}


const steps = [
  {
    number: 1,
    title: "Get the Script",
    description: "We provide a lightweight JavaScript snippet for your website.",
  },
  {
    number: 2,
    title: "Install on Website",
    description: "Add the script to your site — no backend setup required.",
  },
  {
    number: 3,
    title: "Scrape Page Content",
    description: "The script extracts clean, readable content from the current page.",
  },
  {
    number: 4,
    title: "Create Embeddings",
    description: "An embedding model converts page content into semantic vectors.",
  },
  {
    number: 5,
    title: "Store Vector Data",
    description: "Embeddings are stored in a vector database for fast retrieval.",
  },
  {
    number: 6,
    title: "User Asks a Question",
    description: "Visitors ask questions using the embedded chatbot.",
  },
  {
    number: 7,
    title: "Retrieve & Answer",
    description: "The AI responds strictly using that page’s content.",
  },
];
