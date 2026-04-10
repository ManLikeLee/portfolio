"use client";
import { motion } from "framer-motion";

export default function TrustStrip() {
  return (
    <section className="relative z-10 -mt-10">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid gap-6 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-8 py-6 shadow-xl shadow-slate-200/50 dark:shadow-black/20 lg:grid-cols-4"
        >
          <div className="flex items-center gap-3">
            <div className="h-2.5 w-2.5 rounded-full bg-blue-600"></div>
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Built real-world platform (Laundaland)
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-2.5 w-2.5 rounded-full bg-blue-600"></div>
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
              MVP-ready systems
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-2.5 w-2.5 rounded-full bg-blue-600"></div>
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Designed for real markets
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-2.5 w-2.5 rounded-full bg-blue-600"></div>
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Performance & scalability
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
