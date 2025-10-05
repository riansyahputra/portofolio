import Hero from "@/components/Hero";
import ProjectPage from "./projects/page";
import Contact from "./contact/page";
import Skill from "./skill/page";

export default function Home() {
  return (
    <>
      <Hero />
      <Skill />
      <section id="projects" className="py-20">
        <ProjectPage />
      </section>
      <Contact />
    </>
  );
}
