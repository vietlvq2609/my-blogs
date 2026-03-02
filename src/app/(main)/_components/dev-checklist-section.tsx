"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { type ChecklistItem, devChecklist } from "../_data";

function ChecklistCard({
  item,
  index,
}: {
  item: ChecklistItem;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex items-start gap-4 p-5 bg-white dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700/50 hover:shadow-md transition-shadow"
    >
      {/* Animated checkbox */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{
          delay: index * 0.1 + 0.3,
          type: "spring",
          stiffness: 300,
          damping: 15,
        }}
        className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center"
      >
        <motion.svg
          className="w-5 h-5 text-green-600 dark:text-green-400"
          viewBox="0 0 20 20"
          fill="currentColor"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ delay: index * 0.1 + 0.4, duration: 0.4 }}
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </motion.svg>
      </motion.div>

      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xl">{item.icon}</span>
          <h3 className="font-semibold text-lg">{item.title}</h3>
        </div>
        <p className="text-slate-600 dark:text-slate-400 text-sm">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

export function DevChecklistSection() {
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true });

  return (
    <section className="py-24">
      <div className="container mx-auto px-5">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 dark:text-blue-400 font-medium text-sm uppercase tracking-wider">
            Process
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-4">
            How I Build
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Every project follows these core principles. Quality isn&apos;t
            negotiable.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="grid gap-4">
            {devChecklist.map((item, index) => (
              <ChecklistCard key={item.id} item={item} index={index} />
            ))}
          </div>

          {/* Summary stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 p-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl text-white text-center"
          >
            <p className="text-lg font-medium mb-2">
              Ready to build something amazing together?
            </p>
            <p className="text-white/80 text-sm mb-4">
              Let&apos;s discuss your next project
            </p>
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-full font-medium hover:scale-105 transition-transform"
            >
              Get in Touch
              <span>✉️</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
