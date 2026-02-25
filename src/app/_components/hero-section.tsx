import { AUTHOR_FULL_NAME, LOCATION } from "@/lib/constants";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-20 md:mb-28">
      <div className="max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-4">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Viktok Le
          </span>
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 dark:text-slate-200">
          Fullstack Developer
        </h2>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-slate-400 mb-4">
          {AUTHOR_FULL_NAME}
        </p>
        <p className="text-lg md:text-xl text-gray-500 dark:text-slate-500 mb-8 flex items-center">
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          {LOCATION}
        </p>
        <p className="text-lg md:text-xl text-gray-700 dark:text-slate-300 leading-relaxed mb-8">
          Passionate about building scalable web applications with modern
          technologies. Specializing in React, Laravel, and full-stack
          development.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/blogs"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
          >
            View Blogs
          </Link>
          <a
            href="#contact"
            className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-slate-900 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
