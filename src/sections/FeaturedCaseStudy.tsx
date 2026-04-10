import { Section } from "../components/ui/Section";
import { CaseStudyBlock } from "../components/ui/CaseStudyBlock";

export default function FeaturedCaseStudy() {
  return (
    <Section className="bg-white" id="laundaland">
      <CaseStudyBlock
        title="Featured Project: Laundaland"
        problem="Laundry services in Abuja lack convenience, structure, and digital access."
        solution="Designed and built a web-based platform that allows users to schedule pickups, track orders, and manage laundry services seamlessly."
        impact={[
          "Designed for real-world use",
          "Scalable partner model",
          "Built as MVP for launch",
        ]}
        image="/projects/laundaland.png"
        caseStudyUrl="#"
        liveDemoUrl="https://laundaland.vercel.app"
      />
    </Section>
  );
}
