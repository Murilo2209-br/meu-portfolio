import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/projetos" className="text-emerald-400 text-sm hover:underline">← Voltar para projetos</Link>
      <h1 className="text-3xl font-bold mt-4 mb-4">{project.title}</h1>
      <div className="relative w-full h-72 mb-6 rounded-xl overflow-hidden">
        <Image src={project.image} alt={project.title} fill className="object-cover" />
      </div>
      <p className="text-zinc-300 leading-relaxed mb-6">{project.fullDescription}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.techs.map((tech) => (
          <span key={tech} className="text-xs px-2 py-1 rounded bg-zinc-800 text-zinc-300">{tech}</span>
        ))}
      </div>
      <div className="flex gap-4">
        {project.github && <a href={project.github} target="_blank" className="underline text-emerald-400">Ver código no GitHub</a>}
        {project.liveUrl && <a href={project.liveUrl} target="_blank" className="underline text-emerald-400">Ver online</a>}
      </div>
    </section>
  );
}