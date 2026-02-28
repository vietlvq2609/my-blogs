"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import type { WorkExperience } from "../_data";

type ExperienceCardProps = {
  experience: WorkExperience;
  index: number;
};

export function ExperienceCard({ experience, index }: ExperienceCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={
        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }
      }
      transition={{ duration: 0.6, delay: 0.1 }}
      className="relative pl-8 md:pl-0"
    >
      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="absolute left-0 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full -translate-x-1/2 mt-1.5 ring-4 ring-blue-500/20"
      />

      <div
        className={`md:w-1/2 ${isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"}`}
      >
        <div className="bg-white dark:bg-gray-800/50 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700/50 hover:shadow-md transition-all">
          <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
            {experience.duration}
          </span>
          <h3 className="text-xl font-bold mt-1">{experience.role}</h3>
          <p className="text-gray-600 dark:text-gray-400 font-medium">
            {experience.company}
          </p>
          <p className="text-gray-700 dark:text-gray-300 mt-3 text-sm leading-relaxed">
            {experience.description}
          </p>
          <div
            className={`flex flex-wrap gap-2 mt-4 ${isEven ? "md:justify-end" : ""}`}
          >
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
