"use client";
import { Section } from "../components/ui/Section";
import { Button } from "../components/ui/Button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <Section className="bg-white pt-24 pb-16 flex items-center min-h-[60vh]">
      <div className="max-w-2xl mx-auto flex flex-col gap-8">
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 text-left"
        >
          I build high-converting web platforms and marketplaces that turn users into paying customers.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-gray-700 mb-2 text-left"
        >
          From landing pages to full-scale platforms like service marketplaces, I design and build products that actually work in real markets.
        </motion.p>
        <ul className="mb-4 text-left space-y-1">
          <li className="text-base text-gray-700 flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-blue-500 rounded-full" />
            Conversion-focused landing pages
          </li>
          <li className="text-base text-gray-700 flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-blue-500 rounded-full" />
            Full-stack platforms (marketplaces, SaaS)
          </li>
          <li className="text-base text-gray-700 flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-blue-500 rounded-full" />
            Scalable UI systems
          </li>
        </ul>
        <div className="flex flex-col sm:flex-row gap-4 items-start">
          <Button as="a" href="#contact" variant="primary">
            Start a Project
          </Button>
          <Button as="a" href="#work" variant="secondary">
            View My Work
          </Button>
        </div>
        <div className="text-sm text-blue-700 mt-2">Available for freelance projects</div>
      </div>
    </Section>
  );
}
