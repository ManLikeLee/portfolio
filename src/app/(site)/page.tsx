import { Hero } from "@/components/site/hero/Hero";
import { About } from "@/components/site/about/About";
import { Projects } from "@/components/site/projects/Projects";
import { Skills } from "@/components/site/skills/Skills";
import { Process } from "@/components/site/process/Process";
import { Contact } from "@/components/site/contact/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Process />
      <Contact />
    </>
  );
}
