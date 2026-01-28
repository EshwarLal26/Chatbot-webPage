export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-gray-50 dark:bg-gray-800 py-16 min-h-screen flex items-center"
    >
      <div className="max-w-screen-xl mx-auto px-4">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
            About the RAG Chatbot
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Our chatbot uses Retrieval-Augmented Generation (RAG) to deliver
            accurate, up-to-date, and context-aware answers from your own data.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          
          <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-3 dark:text-white">
              🔍 Smart Retrieval
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Relevant documents are retrieved from a vector database using
              semantic search and embeddings.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-3 dark:text-white">
              🧠 Context-Aware Answers
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              The LLM generates responses using retrieved content, ensuring
              answers are grounded in your knowledge base.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-3 dark:text-white">
              🔐 Secure & Private
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Your documents stay private and are never mixed with public
              data or other users’ content.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
