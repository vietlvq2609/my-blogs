"use client";

import { motion } from "motion/react";
import { funFacts, hobbies, personalInfo, techStack } from "../_data";
import { BentoCard } from "./bento-card";

export function BentoGridSection() {
  return (
    <section className="py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-10 text-center"
      >
        Get to Know Me
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-min">
        {/* Profile Card - Large */}
        <BentoCard className="md:col-span-2 lg:row-span-2" delay={0}>
          <div className="flex flex-col h-full">
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2">
              📖 My Story
            </span>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed flex-1">
              {personalInfo.story}
            </p>
            <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                &quot;Code is poetry written for machines to execute and humans
                to understand.&quot;
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Location Card */}
        <BentoCard delay={0.1}>
          <span className="text-3xl mb-3 block">📍</span>
          <h3 className="font-semibold text-lg mb-1">Location</h3>
          <p className="text-slate-600 dark:text-slate-400">
            {personalInfo.location}
          </p>
        </BentoCard>

        {/* Age Card */}
        <BentoCard delay={0.15}>
          <span className="text-3xl mb-3 block">🎂</span>
          <h3 className="font-semibold text-lg mb-1">Age</h3>
          <p className="text-slate-600 dark:text-slate-400">
            {personalInfo.age} years young
          </p>
        </BentoCard>

        {/* Hobbies Card */}
        <BentoCard className="md:col-span-2" delay={0.2}>
          <span className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-3 block">
            🎯 Hobbies & Interests
          </span>
          <div className="flex flex-wrap gap-3">
            {hobbies.map((hobby) => (
              <span
                key={hobby.label}
                className="px-4 py-2 bg-slate-100 dark:bg-slate-700 rounded-full text-sm font-medium"
              >
                {hobby.emoji} {hobby.label}
              </span>
            ))}
          </div>
        </BentoCard>

        {/* Tech Stack Card */}
        <BentoCard className="md:col-span-2" delay={0.25}>
          <span className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-3 block">
            💻 Tech Stack
          </span>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 rounded-lg text-sm font-medium border border-blue-200/50 dark:border-blue-500/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </BentoCard>

        {/* Fun Facts Card */}
        <BentoCard className="lg:col-span-2" delay={0.3}>
          <span className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-3 block">
            ✨ Fun Facts
          </span>
          <ul className="space-y-2">
            {funFacts.map((fact) => (
              <li
                key={fact}
                className="text-slate-700 dark:text-slate-300 text-sm"
              >
                {fact}
              </li>
            ))}
          </ul>
        </BentoCard>
      </div>
    </section>
  );
}
