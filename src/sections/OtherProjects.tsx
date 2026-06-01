import { Section } from "../components/ui/Section";
import { ProjectCard } from "../components/ui/ProjectCard";

const projects = [
  {
    title: "ShopEase",
    description: "Modern e-commerce platform for seamless product discovery and checkout.",
    outcome: "Enabled fast, intuitive shopping for real users.",
    link: "https://shopease-psi-gray.vercel.app/",
    image: "/projects/shopease.png",
  },
  {
    title: "TaskForce",
    description: "Full-stack task management platform with auth, Kanban workflows, and backend-driven filtering.",
    outcome: "Built to help teams plan, track, and ship work faster with secure API-backed collaboration.",
    link: "https://github.com/ManLikeLee/task_manager",
    image: "/images/taskforce.jpeg",
  },
];

export default function OtherProjects() {
  return (
    <Section className="bg-white" id="work">
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Other Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </Section>
  );
}
