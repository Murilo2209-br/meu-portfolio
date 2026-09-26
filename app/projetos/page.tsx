import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-3">Projetos</h1>
      <p className="text-zinc-400 mb-10">
        Alguns projetos que desenvolvi e as tecnologias utilizadas em cada um.
      </p>

      {projects.length > 0 ? (
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      ) : (
        <p className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 text-zinc-400">
          Ainda não há projetos publicados. Volte em breve.
        </p>
      )}
    </section>
  );
}
