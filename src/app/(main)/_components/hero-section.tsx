"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";

const roles = [
  "Full Stack Developer",
  "React Enthusiast",
  "TypeScript Advocate",
  "Problem Solver",
];

function TypewriterText() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (text.length < currentRole.length) {
            setText(currentRole.slice(0, text.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (text.length > 0) {
            setText(text.slice(0, -1));
          } else {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <span className="text-blue-600 dark:text-blue-400">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
}

function FloatingCodeSnippet({
  code,
  className,
  delay,
}: {
  code: string;
  className: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 0.6, y: 0 }}
      transition={{ delay, duration: 0.8 }}
      className={`absolute hidden lg:block font-mono text-xs bg-slate-900/80 dark:bg-slate-800/80 text-green-400 px-3 py-2 rounded-lg backdrop-blur-sm ${className}`}
    >
      {code}
    </motion.div>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0" />
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Floating code snippets */}
      <FloatingCodeSnippet
        code="const build = () => 🚀"
        className="top-1/4 left-10"
        delay={0.5}
      />
      <FloatingCodeSnippet
        code="async function solve() {}"
        className="top-1/3 right-16"
        delay={0.8}
      />
      <FloatingCodeSnippet
        code="export default Success"
        className="bottom-1/3 left-20"
        delay={1.1}
      />
      <FloatingCodeSnippet
        code="npm run awesome"
        className="bottom-1/4 right-24"
        delay={1.4}
      />

      {/* Main content */}
      <div className="container mx-auto px-5 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            👋 Welcome to my corner of the internet
          </motion.span>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          I Build Things
          <br />
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            That Matter
          </span>
        </motion.h1>

        <motion.div
          className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-4 h-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <TypewriterText />
        </motion.div>

        <motion.p
          className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Crafting performant, beautiful web experiences with modern
          technologies. Turning complex problems into elegant solutions.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Link
            href="#featured-work"
            className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-medium hover:scale-105 transition-transform shadow-lg hover:shadow-xl"
          >
            View My Work
          </Link>
          <Link
            href="/about"
            className="px-8 py-4 border-2 border-slate-900 dark:border-white text-slate-900 dark:text-white rounded-full font-medium hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all"
          >
            About Me
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
