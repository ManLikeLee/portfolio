"use client";
import { Button } from "./Button";
import { motion } from "framer-motion";

type CTASectionProps = {
  headline: string;
  subtext: string;
  ctaText: string;
  ctaHref: string;
};

export function CTASection({ headline, subtext, ctaText, ctaHref }: CTASectionProps) {
  return (
    <section className="w-full py-20 px-4 flex justify-center bg-white">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl text-center bg-blue-50 rounded-2xl p-10 mx-auto shadow-md"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{headline}</h2>
        <p className="text-lg text-gray-700 mb-8">{subtext}</p>
        <Button as="a" href={ctaHref} variant="primary">
          {ctaText}
        </Button>
      </motion.div>
    </section>
  );
}
