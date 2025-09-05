"use client";

import Link from "next/link";
import { memo } from "react";
import { Button } from "@/components/button";
import type { Project } from "@/types/project.type";

type ProjectCardProps = {
  project: Project;
};

function TechBadge({ label }: { label: string }) {
  return (
    <li className="rounded-full border px-2.5 py-0.5 text-xs text-zinc-600 dark:border-zinc-700 dark:text-zinc-300">
      {label}
    </li>
  );
}

function ProjectCardBase({ project }: ProjectCardProps) {
  const { title, description, stack, href } = project;

  return (
    <li className="group rounded-xl bg-black/30 p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800/60 dark:bg-zinc-950">
      <div className="flex flex-col gap-3">
        <h3 className="text-lg font-medium">{title}</h3>

        <p className="text-sm text-zinc-600">{description}</p>

        <ul className="flex flex-wrap gap-2">
          {stack.map((s) => (
            <TechBadge key={s} label={s} />
          ))}
        </ul>

        <div className="mt-2">
          {/* Preferível: Button como <a> com asChild para semântica e acessibilidade */}
          <Button variant="outline">
            <Link href={href} target="_blank" rel="noopener noreferrer">
              VIsitar →
            </Link>
          </Button>
        </div>
      </div>
    </li>
  );
}

export const ProjectCard = memo(ProjectCardBase);
