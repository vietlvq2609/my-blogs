"use client";

import { motion, useInView } from "motion/react";
import Link from "next/link";
import { useRef } from "react";
import type { Post } from "@/interfaces/post";

function PostCard({ post, index }: { post: Post; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Calculate reading time (rough estimate: 200 words per minute)
  const wordCount = post.content?.split(/\s+/).length || 0;
  const readingTime = Math.ceil(wordCount / 200);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group"
    >
      <Link href={`/blogs/${post.slug}`}>
        <div className="bg-white dark:bg-slate-800/50 rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-700/50 hover:shadow-lg transition-all hover:-translate-y-1">
          {/* Cover Image */}
          <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20">
            {post.coverImage && (
              <motion.img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="px-3 py-1 bg-white/90 dark:bg-slate-900/90 rounded-full text-xs font-medium">
                {readingTime} min read
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <time className="text-sm text-slate-500 dark:text-slate-400">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </time>
            </div>

            <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
              {post.title}
            </h3>

            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-3">
              {post.excerpt}
            </p>

            <div className="mt-4 flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium">
              Read more
              <motion.span
                className="ml-1"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
              >
                →
              </motion.span>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

type BlogSectionProps = {
  posts: Post[];
};

export function BlogSection({ posts }: BlogSectionProps) {
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true });
  const latestPosts = posts.slice(0, 3);

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
            Blog
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-4">
            Thoughts & Tutorials
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Sharing what I learn along the way. Deep dives into code,
            architecture, and the occasional hot take.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.map((post, index) => (
            <PostCard key={post.slug} post={post} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-medium hover:scale-105 transition-transform"
          >
            View All Posts
            <span>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
