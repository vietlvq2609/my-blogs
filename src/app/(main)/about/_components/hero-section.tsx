"use client";

import { motion } from "motion/react";
import { personalInfo } from "../_data";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export function HeroSection() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center py-20">
      <motion.div
        className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.div
          variants={scaleIn}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden ring-4 ring-blue-500/30 dark:ring-blue-400/30 shadow-xl">
            <img
              src={personalInfo.avatar}
              alt={personalInfo.name}
              className="w-full h-full object-cover"
            />
          </div>
          <motion.div
            className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-white dark:border-gray-900"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </motion.div>

        <div className="text-center md:text-left">
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2"
          >
            {personalInfo.name}
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-medium mb-4"
          >
            {personalInfo.title}
          </motion.p>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-600 dark:text-slate-400 max-w-md"
          >
            {personalInfo.tagline}
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
