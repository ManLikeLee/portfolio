"use client";
import { Section } from "../components/ui/Section";
import { motion } from "framer-motion";
import { HiOutlineLightBulb, HiOutlinePencil, HiOutlineQrCode, HiOutlineRocketLaunch } from "react-icons/hi2";

const steps = [
  {
    icon: <HiOutlineLightBulb className="w-7 h-7 text-blue-600" />,
    title: "Understand the problem",
    desc: "Start with the business goal and user needs."
  },
  {
    icon: <HiOutlinePencil className="w-7 h-7 text-blue-600" />,
    title: "Design the solution",
    desc: "Map out flows, wireframes, and system architecture."
  },
  {
    icon: <HiOutlineQrCode className="w-7 h-7 text-blue-600" />,
    title: "Build and iterate",
    desc: "Develop, test, and refine for real-world use."
  },
  {
    icon: <HiOutlineRocketLaunch className="w-7 h-7 text-blue-600" />,
    title: "Deliver a scalable product",
    desc: "Launch, monitor, and support for growth."
  },
];

export default function ProcessSection() {
  return (
    <Section className="bg-white">
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">How I Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center text-center bg-blue-50 rounded-2xl p-6 shadow-sm"
            >
              <div className="mb-3">{step.icon}</div>
              <div className="font-semibold text-gray-900 mb-1">{step.title}</div>
              <div className="text-gray-700 text-sm">{step.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
