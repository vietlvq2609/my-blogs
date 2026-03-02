"use client";

import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { skillsData } from "../_data";

function AnimatedCounter({
  value,
  suffix = "",
  duration = 2,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

function BentoCard({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 30, scale: 0.95 }
      }
      transition={{
        duration: 0.5,
        delay,
        type: "spring",
        stiffness: 100,
      }}
      whileHover={{ scale: 1.02, y: -5 }}
      className={`bg-white dark:bg-slate-800/50 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700/50 hover:shadow-lg transition-shadow ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function SkillsBentoSection() {
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
            Skills & Stats
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-4">
            What I Bring to the Table
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A quick overview of my technical toolkit and some fun stats along
            the way.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-min">
          {/* Years of Experience - Spans 2 cols */}
          <BentoCard className="col-span-2 row-span-1" delay={0}>
            <div className="flex items-center justify-between h-full">
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">
                  Years of Experience
                </p>
                <p className="text-5xl font-bold text-blue-600 dark:text-blue-400">
                  <AnimatedCounter
                    value={skillsData.yearsOfExperience}
                    suffix="+"
                  />
                </p>
              </div>
              <span className="text-6xl opacity-20">💼</span>
            </div>
          </BentoCard>

          {/* Tech Stack - Spans 4 cols, 2 rows */}
          <BentoCard
            className="col-span-2 md:col-span-4 row-span-2"
            delay={0.1}
          >
            <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-4">
              💻 Tech Stack
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {skillsData.techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.3 + index * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="flex flex-col items-center justify-center p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl"
                >
                  <span className="text-3xl mb-2">{tech.icon}</span>
                  <span className="text-sm font-medium">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </BentoCard>

          {/* Current Status */}
          <BentoCard className="col-span-2" delay={0.2}>
            <div className="flex items-center gap-3">
              <motion.div
                className="w-3 h-3 bg-green-500 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Current Status
                </p>
                <p className="font-semibold">{skillsData.currentStatus}</p>
              </div>
            </div>
          </BentoCard>

          {/* GitHub Stats */}
          <BentoCard className="col-span-2 md:col-span-2" delay={0.3}>
            <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-3">
              📊 GitHub Stats
            </p>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div>
                <p className="text-2xl font-bold">
                  <AnimatedCounter
                    value={skillsData.githubStats.contributions}
                  />
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Commits
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold">
                  <AnimatedCounter
                    value={skillsData.githubStats.repositories}
                  />
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Repos
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold">
                  <AnimatedCounter value={skillsData.githubStats.stars} />
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Stars
                </p>
              </div>
            </div>
          </BentoCard>

          {/* Code Philosophy */}
          <BentoCard className="col-span-2" delay={0.4}>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
              💭 Code Philosophy
            </p>
            <p className="text-lg font-medium italic">
              &ldquo;{skillsData.codePhilosophy}&rdquo;
            </p>
          </BentoCard>

          {/* Coffee Counter - Fun stat */}
          <BentoCard className="col-span-2" delay={0.5}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">
                  Cups of Coffee
                </p>
                <p className="text-3xl font-bold">
                  <AnimatedCounter
                    value={skillsData.coffeeCount}
                    duration={3}
                  />
                </p>
              </div>
              <motion.span
                className="text-5xl"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2, delay: 1 }}
              >
                ☕
              </motion.span>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}
