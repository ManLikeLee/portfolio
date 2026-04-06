"use client";
import { motion } from "framer-motion";

const skills = [
  {
    group: "Frontend",
    items: ["HTML", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    group: "Backend",
    items: ["Node.js", "REST APIs", "Firebase / Supabase"],
  },
  {
    group: "Tools",
    items: ["Git", "GitHub", "Figma", "VS Code"],
  },
];

export default function SkillsSection() {
  return (
    <section className="w-full py-20 px-4 bg-blue-50">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center"
        >
          Skills
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((group, idx) => (
            <motion.div
              key={group.group}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center"
            >
              <h3 className="text-lg font-semibold text-blue-700 mb-4">{group.group}</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {group.items.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ y: -4, boxShadow: "0 4px 16px 0 rgba(0, 123, 255, 0.08)" }}
                    className="px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-800 text-sm font-medium transition-all duration-200 cursor-pointer hover:bg-blue-100 hover:border-blue-300 hover:text-blue-900"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
