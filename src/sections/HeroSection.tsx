"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-24 px-4 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-gray-900 text-center max-w-2xl mb-6"
      >
        I design and build fast, modern web apps that people actually use.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="text-lg md:text-xl text-gray-600 text-center max-w-xl mb-10"
      >
        From idea to deployment — clean UI, solid logic, real-world impact.
      </motion.p>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <motion.a
          whileHover={{ scale: 1.06, boxShadow: "0 4px 24px 0 rgba(0, 123, 255, 0.08)" }}
          whileTap={{ scale: 0.98 }}
          href="#projects"
          className="rounded-full bg-blue-600 text-white px-7 py-3 font-semibold shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-blue-400"
          style={{ color: '#fff' }}
        >
          View Projects
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.06, boxShadow: "0 4px 24px 0 rgba(0, 123, 255, 0.08)" }}
          whileTap={{ scale: 0.98 }}
          href="#contact"
          className="rounded-full bg-white text-blue-700 border border-blue-200 px-7 py-3 font-semibold shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-blue-200"
        >
          Contact Me
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.06, boxShadow: "0 4px 24px 0 rgba(0, 123, 255, 0.08)" }}
          whileTap={{ scale: 0.98 }}
          href="https://github.com/manlikelee"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-gray-900 text-white px-7 py-3 font-semibold shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          View GitHub
        </motion.a>
      </motion.div>
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden>
        {/* Subtle background gradient or shapes can be added here for extra polish */}
      </div>
    </section>
  );
}
