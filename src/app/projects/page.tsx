import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects"; 
export default function ProjectPage() {

  return (
    <section className="container mx-auto px-16">
      <h2 className="text-3xl font-bold mb-8"> Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}
