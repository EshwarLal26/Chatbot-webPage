

"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-800 fixed w-full z-50 top-5 left-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-3">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-extrabold dark:text-white">
            RAG<span className="text-primary-600">Bot</span>
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center p-2 text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row md:items-center md:space-x-8 mt-4 md:mt-0 font-medium">
            <li>
              <Link
                href="#about"
                className="block py-2 px-3 text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-white"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                href="#how-it-works"
                className="block py-2 px-3 text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-white"
              >
                How It Works
              </Link>
            </li>

            <li>
              <Link
                href="/chat"
                className="block py-2 px-3 text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-white"
              >
                Chat
              </Link>
            </li>

            <li>
              <Link
                href="/chat"
                className="inline-flex items-center justify-center px-5 py-2 text-white bg-primary-700 rounded-lg hover:bg-primary-800"
              >
                Try Now
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
