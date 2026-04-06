"use client";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="w-full py-20 px-4 bg-white">
      <div className="max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center"
        >
          How I Think
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg md:text-xl text-gray-700 leading-relaxed text-center max-w-xl mx-auto"
        >
          I build products with clarity in mind — simple where possible, powerful where needed.<br /><br />
          I focus on real-world usability, not just code. That means clean interfaces, fast performance, and flows that make sense without explanation.<br /><br />
          I approach every project like a product, not a demo — balancing design, logic, and user experience from the start.
        </motion.p>
      </div>
    </section>
  );
}
