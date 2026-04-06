"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const contactLinks = [
  {
    label: "Email",
    value: "Philip.uguru09@gmail.com",
    href: "mailto:Philip.uguru09@gmail.com",
    icon: <FaEnvelope className="text-blue-600" />,
  },
  {
    label: "GitHub",
    value: "github.com/manlikelee",
    href: "https://github.com/manlikelee",
    icon: <FaGithub className="text-blue-600" />,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/philip-uguru-9030ab3b4",
    href: "https://www.linkedin.com/in/philip-uguru-9030ab3b4",
    icon: <FaLinkedin className="text-blue-600" />,
  },
  {
    label: "WhatsApp",
    value: "+2348133847043",
    href: "https://wa.me/2348133847043",
    icon: <FaWhatsapp className="text-blue-600" />,
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-20 px-4 bg-white">
      <div className="max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center"
        >
          Let’s work together
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-gray-700 mb-10 text-center max-w-xl mx-auto"
        >
          Have a project in mind or need a reliable developer? I’m open to opportunities and collaborations.
        </motion.p>
        <div className="flex flex-col gap-4 mb-10">
          {contactLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.label === "Email" ? undefined : "_blank"}
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -2, boxShadow: "0 4px 16px 0 rgba(0, 123, 255, 0.08)" }}
              className="flex items-center gap-4 px-5 py-3 rounded-xl bg-blue-50 border border-blue-100 text-blue-900 font-medium shadow-sm transition-all duration-200 hover:bg-blue-100 hover:border-blue-300 hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-200"
            >
              {link.icon}
              <span className="truncate">{link.value}</span>
            </motion.a>
          ))}
        </div>
        <motion.a
          href="mailto:Philip.uguru09@gmail.com"
          whileHover={{ scale: 1.05, boxShadow: "0 4px 24px 0 rgba(0, 123, 255, 0.10)" }}
          className="block w-full text-center rounded-full bg-blue-600 text-white px-7 py-3 font-semibold shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg"
          style={{ color: '#fff' }}
        >
          Send a Message
        </motion.a>
      </div>
    </section>
  );
}
