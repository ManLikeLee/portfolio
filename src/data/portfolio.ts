import type { IconKey } from "@/lib/icons";

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: IconKey;
  external?: boolean;
}

export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  problem?: string;
  solution?: string;
  outcome?: string;
  impact?: string[];
  image: ProjectImage;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
}

export interface ProcessStep {
  title: string;
  description: string;
  icon: IconKey;
}

export interface SkillGroup {
  group: string;
  items: string[];
}

export interface Stat {
  value: string;
  label: string;
}

export const site = {
  name: "Philip Uguru",
  initials: "PU",
  role: "Full-Stack Developer",
  tagline:
    "I build high-converting web platforms and marketplaces that turn users into paying customers.",
  description:
    "From landing pages to full-scale platforms like service marketplaces, I design and build products that actually work in real markets.",
  availability: "Available for freelance projects",
  email: "philip.uguru09@gmail.com",
  url: "https://my-portfolio-philip-uguru.vercel.app",
};

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const cvFile = {
  href: "/Philip_Uguru_ATS_CV%20(1).pdf",
  downloadName: "Philip-Uguru-CV.pdf",
};

export const socialLinks: SocialLink[] = [
  { label: "Email", href: `mailto:${site.email}`, icon: "mail" },
  { label: "GitHub", href: "https://github.com/manlikelee", icon: "github", external: true },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/philip-uguru-9030ab3b4",
    icon: "linkedin",
    external: true,
  },
  { label: "WhatsApp", href: "https://wa.me/2348133847043", icon: "whatsapp", external: true },
];

export const about = {
  heading: "About",
  paragraphs: [
    "I'm a full-stack developer who cares more about whether a product actually gets used than how clever the code behind it looks. My favorite part of the job is the translation step — turning a messy real-world problem into a system that real people rely on.",
    "That's shown up in projects like Laundaland, a laundry marketplace I designed and built end-to-end for a market that had no real digital option before it, and in production tools like TaskForce, where the hard part wasn't the UI, it was getting auth, data flow, and drag-and-drop state to hold up under real usage.",
    "I'm continuously picking up whatever the problem demands next, whether that's a new framework, a cleaner data model, or just a better way to ship something an actual user will touch.",
  ],
};

export const projects: Project[] = [
  {
    slug: "laundaland",
    featured: true,
    title: "Laundaland",
    description: "A service marketplace platform connecting laundry providers with real customers.",
    problem: "Laundry services in Abuja lack convenience, structure, and digital access.",
    solution:
      "Designed and built a web-based platform that lets users schedule pickups, track orders, and manage laundry services seamlessly.",
    impact: ["Designed for real-world use", "Scalable partner model", "Built as MVP for launch"],
    image: { src: "/images/laundaland.png", alt: "Laundaland platform preview", width: 2880, height: 1800 },
    tags: ["Next.js", "Tailwind CSS", "Marketplace"],
    liveUrl: "https://laundaland.vercel.app",
  },
  {
    slug: "shopease",
    title: "ShopEase",
    description: "Modern e-commerce platform for seamless product discovery and checkout.",
    outcome: "Enabled fast, intuitive shopping for real users.",
    image: { src: "/images/shopease.png", alt: "ShopEase platform preview", width: 2880, height: 1800 },
    tags: ["Next.js", "Tailwind CSS", "E-commerce"],
    liveUrl: "https://shopease-psi-gray.vercel.app/",
  },
  {
    slug: "taskforce",
    title: "TaskForce",
    description:
      "Full-stack task management platform with auth, Kanban workflows, and backend-driven filtering.",
    outcome:
      "Delivered a production-ready team workspace with secure sessions, drag-and-drop task flow, and scalable APIs.",
    image: { src: "/images/taskforce.jpeg", alt: "TaskForce platform preview", width: 2880, height: 1616 },
    tags: ["React", "TypeScript", "Vite", "Express", "Prisma", "PostgreSQL"],
    repoUrl: "https://github.com/manlikelee/task_manager",
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: "Understand the problem",
    description: "Start with the business goal and user needs, not the tech stack.",
    icon: "lightbulb",
  },
  {
    title: "Design the solution",
    description: "Map out flows, wireframes, and system architecture before writing code.",
    icon: "pencil-ruler",
  },
  {
    title: "Build and iterate",
    description: "Develop, test, and refine against real-world use, not just the happy path.",
    icon: "code",
  },
  {
    title: "Deliver a scalable product",
    description: "Launch, monitor, and support the system as it grows.",
    icon: "rocket",
  },
];

export const skillGroups: SkillGroup[] = [
  { group: "Frontend", items: ["HTML", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"] },
  { group: "Backend", items: ["Node.js", "REST APIs", "Firebase", "Supabase"] },
  { group: "Cloud & Tools", items: ["Git", "GitHub", "Vercel", "Figma", "VS Code"] },
];

export const stats: Stat[] = [
  { value: "1", label: "Featured Product Launch" },
  { value: "2+", label: "Production Projects" },
  { value: "4", label: "Delivery Phases" },
];

export const contact = {
  heading: "Let's work together",
  subtitle: "Have a project in mind or need a reliable developer? I'm open to opportunities and collaborations.",
  primaryActionLabel: "Send a Message",
  primaryActionHref: `mailto:${site.email}`,
};

export const finalCta = {
  headline: "Have a project in mind? Let's build something that actually works.",
  subtext: "I focus on building products that are not just functional, but scalable and conversion-driven.",
  label: "Start a Project",
  href: "#contact",
};
