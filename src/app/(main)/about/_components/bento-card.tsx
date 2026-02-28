"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

type BentoCardProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function BentoCard({
  children,
  className = "",
  delay = 0,
}: BentoCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      className={`bg-white dark:bg-gray-800/50 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700/50 hover:shadow-md transition-shadow ${className}`}
    >
      {children}
    </motion.div>
  );
}
