"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Project } from "@/data/projects";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <Link href={`/projetos/${project.slug}`} className="block p-6 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:border-emerald-500/50 hover:-translate-y-1 transition-all">
        <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
        <p className="text-zinc-400 text-sm mb-4">{project.shortDescription}</p>
        <div className="flex flex-wrap gap-2">
          {project.techs.map((tech) => (
            <span key={tech} className="text-xs px-2 py-1 rounded bg-zinc-800 text-zinc-300">{tech}</span>
          ))}
        </div>
      </Link>
    </motion.div>
  );
}