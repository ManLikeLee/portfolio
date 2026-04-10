"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./Button";

type CaseStudyBlockProps = {
  title: string;
  problem: string;
  solution: string;
  impact: string[];
  image?: string;
  caseStudyUrl?: string;
  liveDemoUrl?: string;
};

export function CaseStudyBlock({
  title,
  problem,
  solution,
  impact,
  image,
  caseStudyUrl,
  liveDemoUrl,
}: CaseStudyBlockProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col md:flex-row gap-10 items-center bg-white rounded-2xl shadow-lg p-10 border border-gray-100"
    >
      <div className="flex-1 min-w-0">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
        <div className="mb-3">
          <span className="font-semibold text-gray-700">Problem:</span>
          <span className="ml-2 text-gray-700">{problem}</span>
        </div>
        <div className="mb-3">
          <span className="font-semibold text-gray-700">Solution:</span>
          <span className="ml-2 text-gray-700">{solution}</span>
        </div>
        <div className="mb-4">
          <span className="font-semibold text-gray-700">Impact:</span>
          <ul className="list-disc list-inside ml-6 text-gray-700 mt-1">
            {impact.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="flex gap-4 mt-4">
          {caseStudyUrl && (
            <Button as="a" href={caseStudyUrl} variant="primary">
              View Case Study
            </Button>
          )}
          {liveDemoUrl && (
            <Button as="a" href={liveDemoUrl} variant="secondary">
              Live Demo
            </Button>
          )}
        </div>
      </div>
      {image && (
        <div className="flex-1 min-w-0 max-w-md w-full h-64 relative rounded-xl overflow-hidden bg-blue-50">
          <Image src={image} alt={title} fill className="object-cover object-top" />
        </div>
      )}
    </motion.div>
  );
}
