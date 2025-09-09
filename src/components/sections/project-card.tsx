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
    <li className="rounded-full text-gray-500 border px-2.5 py-0.5 text-xs">
      {label}
    </li>
  );
}

function ProjectCardBase({ project }: ProjectCardProps) {
  const { title, description, stack, href } = project;

  return (
    <div className="group rounded-xl bg-card p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
      <div className="flex flex-col gap-3">
        <h3 className="text-lg font-medium">{title}</h3>

        <p className="text-sm text-gray-500">{description}</p>

        <ul className="flex flex-wrap gap-2">
          {stack.map((s) => (
            <TechBadge key={s} label={s} />
          ))}
        </ul>

        <div className="mt-2">
          <Button variant="outline">
            <Link href={href} target="_blank" rel="noopener noreferrer">
              Visitar →
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export const ProjectCard = memo(ProjectCardBase);
