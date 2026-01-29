export default function FooterSection() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-screen-xl mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3 items-start">

          {/* Project Info */}
          <div>
            <h3 className="text-2xl font-extrabold text-white mb-3">
              RAG Website Chatbot
            </h3>
            <p className="text-gray-400 leading-relaxed">
              A retrieval-augmented AI chatbot that delivers accurate, source-grounded answers directly from website content.
            </p>
          </div>

          {/* Profile Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Built By
            </h4>
            <ul className="space-y-3">
              <li>
                <span className="block text-gray-200 font-medium">Your Name</span>
              </li>
              <li className="flex gap-4">
                <a
                  href="https://github.com/your-username"
                  target="_blank"
                  className="hover:text-white transition"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/your-profile"
                  target="_blank"
                  className="hover:text-white transition"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Tech Stack Summary */}
          
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-16 pt-6 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500">
          <span>© {new Date().getFullYear()} RAG Website Chatbot</span>
          <span className="mt-2 sm:mt-0">Built with Retrieval-Augmented Generation</span>
        </div>
      </div>
    </footer>
  );
}
