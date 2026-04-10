"use client";
import { motion } from "framer-motion";
import Image from "next/image";

type ProjectCardProps = {
  title: string;
  description: string;
  outcome: string;
  link: string;
  image?: string;
};

export function ProjectCard({ title, description, outcome, link, image }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1.5 transition-all duration-200 border border-gray-100 flex flex-col p-6 w-full max-w-md mx-auto"
    >
      {image && (
        <div className="relative w-full h-40 mb-4 rounded-xl overflow-hidden bg-blue-50">
          <Image src={image} alt={title} fill className="object-cover object-top" />
        </div>
      )}
      <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">{title}</h3>
      <p className="text-gray-700 mb-3 leading-relaxed">{description}</p>
      <div className="text-sm text-blue-700 font-medium mb-4">{outcome}</div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline font-semibold"
      >
        View Project
      </a>
    </motion.div>
  );
}
