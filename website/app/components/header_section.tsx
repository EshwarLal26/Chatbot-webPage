"use client";

import { useState } from "react";
import Link from "next/link";

export default function HeaderSection() {
  const [open, setOpen] = useState(false);

  return (
   <header className="sticky top-0 z-50 w-full  border-white/10 bg-transparent backdrop-blur-lg">

      <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-extrabold text-xl shadow-lg">
            R
          </div>
          <span className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            RAG Chatbot
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className=" hidden md:flex items-center gap-10 text-lg font-semibold">

          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="#demo"
            className="inline-flex items-center rounded-2xl bg-indigo-600 px-6 py-3 text-base font-extrabold text-white hover:bg-indigo-700 transition shadow-md"
          >
            Live Demo
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden inline-flex items-center justify-center rounded-xl p-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition"
        >
          <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-white dark:bg-slate-950">
          <nav className="flex flex-col gap-5 px-6 py-8 text-base font-bold">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#demo"
              className="mt-4 inline-flex justify-center rounded-2xl bg-indigo-600 px-6 py-3 font-extrabold text-white hover:bg-indigo-700 transition"
            >
              Live Demo
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "Problem & Solution", href: "#problem-solution" },
  { name: "Features", href: "#features" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Future", href: "#future" },
];
