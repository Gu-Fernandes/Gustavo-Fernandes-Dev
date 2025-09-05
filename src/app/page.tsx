import ContactSection from "@/components/sections/contact-section";
import Hero from "@/components/sections/hero";
import ProjectsSection from "@/components/sections/project-section";
import { projects } from "@/data/projects";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProjectsSection projects={projects} />
      <ContactSection />
    </>
  );
}
