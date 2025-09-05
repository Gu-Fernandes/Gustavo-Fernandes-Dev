"use client";

import type { Project } from "@/types/project.type";
import { ProjectCard } from "./project-card";

type ProjectsSectionProps = {
  projects: Project[];
};

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projetos" className="space-y-6 py-8">
      <div className="flex items-end justify-between">
        <h2 className="text-2xl font-semibold tracking-tight">
          Projetos em destaque
        </h2>
        <span className="text-sm text-zinc-500">
          {projects.length} projetos
        </span>
      </div>

      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </ul>
    </section>
  );
}
