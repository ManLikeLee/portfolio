'use client';

import {
  AtSign,
  Code2,
  FolderGit,
  Lightbulb,
  Mail,
  MessageCircle,
  PencilRuler,
  Rocket,
} from 'lucide-react';

import { PortfolioPage, PortfolioPageProps } from '@/components/ui/starfall-portfolio-landing';

const customPortfolioData: PortfolioPageProps = {
  logo: {
    initials: 'PU',
    name: 'Philip Uguru',
  },
  navLinks: [
    { label: 'Bio', href: '#about' },
    { label: 'Work', href: '#work' },
    { label: 'Expertise', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ],
  resume: {
    label: 'Download CV',
    onClick: () => {
      window.open('/Philip_Uguru_ATS_CV%20(1).pdf', '_blank');
    },
  },
  hero: {
    titleLine1: 'Full-Stack Developer',
    subtitle:
      'I build high-converting web platforms and marketplaces that turn users into paying customers.\nFrom landing pages to full-scale platforms like service marketplaces, I design and build products that actually work in real markets.',
    bulletPoints: [],
    availabilityText: 'Available for freelance projects',
  },
  ctaButtons: {
    primary: {
      label: 'Start a Project',
      onClick: () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    secondary: {
      label: 'View My Work',
      onClick: () => {
        document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
      },
    },
  },
  trustPoints: [
    'Built real-world platform (Laundaland)',
    'MVP-ready systems',
    'Designed for real markets',
    'Performance & scalability',
  ],
  featuredProject: {
    title: 'Featured Project: Laundaland',
    problem: 'Laundry services in Abuja lack convenience, structure, and digital access.',
    solution:
      'Designed and built a web-based platform that allows users to schedule pickups, track orders, and manage laundry services seamlessly.',
    impact: ['Designed for real-world use', 'Scalable partner model', 'Built as MVP for launch'],
    liveDemoUrl: 'https://laundaland.vercel.app',
    imageContent: (
      <img
        src="/images/laundaland.png"
        alt="Laundaland project preview"
        className="h-full w-full rounded-xl object-cover"
      />
    ),
  },
  projects: [
    {
      title: 'ShopEase',
      description: 'Modern e-commerce platform for seamless product discovery and checkout.',
      outcome: 'Enabled fast, intuitive shopping for real users.',
      href: 'https://shopease-psi-gray.vercel.app/',
      tags: ['Next.js', 'Tailwind CSS', 'E-commerce'],
      imageContent: (
        <img
          src="/images/shopease.png"
          alt="ShopEase project preview"
          className="h-full w-full rounded-xl object-cover"
        />
      ),
    },
    {
      title: 'TaskForce',
      description: 'Full-stack task management platform with auth, Kanban workflows, and backend-driven filtering.',
      outcome: 'Delivered a production-ready team workspace with secure sessions, drag-and-drop task flow, and scalable APIs.',
      href: 'https://github.com/ManLikeLee/task_manager',
      tags: ['React', 'TypeScript', 'Vite', 'Express', 'Prisma', 'PostgreSQL'],
      imageContent: (
        <img
          src="/images/taskforce.jpeg"
          alt="TaskForce project preview"
          className="h-full w-full rounded-xl object-cover"
        />
      ),
    },
  ],
  processSteps: [
    {
      title: 'Understand the problem',
      description: 'Start with the business goal and user needs.',
      icon: <Lightbulb className="h-6 w-6" />,
    },
    {
      title: 'Design the solution',
      description: 'Map out flows, wireframes, and system architecture.',
      icon: <PencilRuler className="h-6 w-6" />,
    },
    {
      title: 'Build and iterate',
      description: 'Develop, test, and refine for real-world use.',
      icon: <Code2 className="h-6 w-6" />,
    },
    {
      title: 'Deliver a scalable product',
      description: 'Launch, monitor, and support for growth.',
      icon: <Rocket className="h-6 w-6" />,
    },
  ],
  skills: [
    { group: 'Frontend', items: ['HTML', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS'] },
    { group: 'Backend', items: ['Node.js', 'REST APIs', 'Firebase / Supabase'] },
    { group: 'Tools', items: ['Git', 'GitHub', 'Figma', 'VS Code'] },
  ],
  finalCta: {
    headline: 'Have a project in mind? Let’s build something that actually works.',
    subtext: 'I focus on building products that are not just functional, but scalable and conversion-driven.',
    label: 'Start a Project',
    onClick: () => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    },
  },
  contact: {
    title: 'Let’s work together',
    subtitle:
      'Have a project in mind or need a reliable developer? I’m open to opportunities and collaborations.',
    links: [
      {
        label: 'Email',
        value: 'Philip.uguru09@gmail.com',
        href: 'mailto:Philip.uguru09@gmail.com',
        icon: <Mail className="h-4 w-4" />,
      },
      {
        label: 'GitHub',
        value: 'github.com/manlikelee',
        href: 'https://github.com/manlikelee',
        icon: <FolderGit className="h-4 w-4" />,
      },
      {
        label: 'LinkedIn',
        value: 'linkedin.com/in/philip-uguru-9030ab3b4',
        href: 'https://www.linkedin.com/in/philip-uguru-9030ab3b4',
        icon: <AtSign className="h-4 w-4" />,
      },
      {
        label: 'WhatsApp',
        value: '+2348133847043',
        href: 'https://wa.me/2348133847043',
        icon: <MessageCircle className="h-4 w-4" />,
      },
    ],
    primaryActionLabel: 'Send a Message',
    primaryActionHref: 'mailto:Philip.uguru09@gmail.com',
  },
  stats: [
    { value: '1', label: 'Featured Product Launch' },
    { value: '2+', label: 'Production Projects' },
    { value: '4', label: 'Delivery Phases' },
  ],
  showAnimatedBackground: true,
};

const DemoOne = () => {
  return <PortfolioPage {...customPortfolioData} />;
};

export { DemoOne };
