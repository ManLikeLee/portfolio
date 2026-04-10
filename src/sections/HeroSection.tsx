"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900 transition-all duration-300">
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="mb-6 inline-flex items-center rounded-full border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400 shadow-sm backdrop-blur">
              Product Engineer  Marketplace Builder
            </div>
            <h1 className="max-w-3xl text-5xl font-bold leading-[0.95] tracking-tight text-slate-900 dark:text-white sm:text-6xl lg:text-7xl transition-all duration-300">
              I build high-converting web platforms and marketplaces that turn users into paying customers.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300 transition-all duration-300">
              From landing pages to full-scale platforms like service marketplaces, I design and build products that actually work in real markets.
            </p>
            <ul className="mt-8 space-y-4 text-base text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-600"></span>
                Conversion-focused landing pages
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-600"></span>
                Full-stack platforms (marketplaces, SaaS)
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-600"></span>
                Scalable UI systems
              </li>
            </ul>
            <div className="mt-10 flex flex-wrap gap-4">
              <button className="group inline-flex items-center rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-blue-500/30">
                Start a Project
              </button>
              <button className="inline-flex items-center rounded-2xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-8 py-4 text-base font-semibold text-slate-700 dark:text-slate-200 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-50 dark:hover:bg-slate-800">
                View My Work
              </button>
            </div>
            <p className="mt-5 text-sm font-medium text-blue-600 dark:text-blue-400">
              Available for freelance projects
            </p>
          </motion.div>
          {/* RIGHT SIDE VISUAL */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="relative hidden lg:block"
          >
            {/* background glow */}
            <div className="absolute -left-16 top-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"></div>
            <div className="relative rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 p-6 shadow-2xl backdrop-blur-xl">
              {/* fake window top */}
              <div className="mb-6 flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-400"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                <div className="h-3 w-3 rounded-full bg-green-400"></div>
              </div>
              {/* code block */}
              <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-950 p-6 shadow-inner">
                <pre className="overflow-x-auto text-sm leading-7 text-slate-300">
{`const buildProduct = ({
  idea,
  market,
  users
}) => {
  const strategy = validate(idea, market);

  return scalablePlatform({
    ux: optimise(strategy),
    conversion: maximise(users),
    growth: enable()
  });
};`}
                </pre>
              </div>
              {/* small project cards */}
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-4 transition-all duration-300">
                  <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                    Featured Project
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">
                    Laundaland
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    Marketplace platform for laundry pickup, delivery and partner onboarding in Abuja.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-4 transition-all duration-300">
                  <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                    Focus
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">
                    Product Thinking
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    Conversion, scalability, UX and business-first engineering.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
