"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    name: "Laundaland",
    liveUrl: "https://laundaland.vercel.app",
    codeUrl: "https://github.com/yourusername/laundaland", // Replace with actual repo if public
    image: "/projects/laundaland.png", // Add image to public/projects/
    description:
      "A modern laundry service platform that allows users to schedule pickups, track orders, and get their laundry cleaned and delivered within 24 hours.",
    features: [
      "Pickup scheduling",
      "Order tracking interface",
      "Clean, conversion-focused landing page",
      "Service pricing flow",
    ],
    focus: [
      "User experience and simplicity",
      "Real-world usability",
      "Performance and responsiveness",
    ],
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    name: "ShopEase",
    liveUrl: "https://shopease-psi-gray.vercel.app/",
    codeUrl: "https://github.com/yourusername/shopease", // Replace with actual repo if public
    image: "/projects/shopease.png", // Add image to public/projects/
    description:
      "A modern e-commerce web application focused on performance, clean UI, and intuitive shopping experience.",
    features: [
      "Product browsing interface",
      "Clean product layout",
      "Responsive design",
      "Optimized performance",
    ],
    focus: [
      "UI clarity and structure",
      "Smooth user flow",
      "Scalable frontend architecture",
    ],
    tech: ["Next.js", "Tailwind CSS", "JavaScript"],
  },
  {
    name: "TaskForce",
    liveUrl: "https://github.com/ManLikeLee/task_manager",
    codeUrl: "https://github.com/ManLikeLee/task_manager",
    image: "/images/taskforce.jpeg",
    description:
      "A full-stack task management platform with secure auth, Kanban workflows, and backend-driven filtering and sorting.",
    features: [
      "Kanban board with drag-and-drop task flow",
      "JWT auth with refresh cookie rotation",
      "Task filters, sorting, and search",
      "Task detail drawer and create-task modal",
    ],
    focus: [
      "Team workflow clarity",
      "Scalable API architecture",
      "Responsive, modern product UX",
    ],
    tech: ["React", "TypeScript", "Vite", "Express", "Prisma", "PostgreSQL"],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-20 px-4 bg-gradient-to-b from-white to-blue-50/60">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 place-items-center">
          {projects.map((project, idx) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="w-full md:w-96 bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 border border-gray-100 flex flex-col py-8 px-6 group focus-within:ring-2 focus-within:ring-blue-400"
              tabIndex={0}
            >
              <div className="relative w-full h-48 rounded-xl overflow-hidden bg-blue-100 flex items-center justify-center mb-6">
                {/* Replace with actual images in /public/projects/ */}
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ minHeight: 192 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-50/60 to-transparent pointer-events-none" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                {project.name}
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed" style={{ lineHeight: 1.7 }}>
                {project.description}
              </p>
              <ul className="mb-3 text-sm text-gray-500 list-disc list-inside">
                {project.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <div className="mb-3">
                <span className="font-medium text-gray-700">What I focused on:</span>
                <ul className="text-sm text-gray-500 list-disc list-inside ml-4">
                  {project.focus.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 mb-4 mt-2">
                {project.tech.map((t) => (
                  <motion.span
                    key={t}
                    whileHover={{ scale: 1.04 }}
                    className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer hover:bg-blue-100 hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    tabIndex={0}
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
              <div className="flex gap-3 mt-auto pt-2">
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  className="rounded-xl bg-blue-600 text-white px-6 py-2.5 font-semibold shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 text-base hover:bg-blue-700 hover:shadow-lg"
                  style={{ color: '#fff' }}
                >
                  Live Demo
                </motion.a>
                <motion.a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="rounded-xl bg-gray-900 text-white px-6 py-2.5 font-semibold shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 text-base hover:bg-gray-800 hover:shadow-lg"
                >
                  View Code
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
