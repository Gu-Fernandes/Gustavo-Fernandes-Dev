"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import type { Project } from "@/types/project.type";
import { ProjectCard } from "./project-card";

type ProjectsSectionProps = { projects: Project[] };

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start", skipSnaps: false, dragFree: false },
    [
      Autoplay({
        delay: 4500,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  return (
    <section id="projetos" className="not-prose space-y-6 py-8">
      <div className="flex items-end justify-between">
        <h2 className="text-lg font-semibold">Projetos em destaque</h2>
      </div>

      <div className="relative">
        <div
          className="overflow-hidden"
          ref={emblaRef}
          aria-roledescription="carousel"
        >
          <ul className="flex list-none p-0 m-0">
            {projects.map((p) => (
              <li
                key={p.title}
                role="group"
                className="
                  min-w-0
                  pr-4 md:pr-6
                  flex-[0_0_100%]
                  sm:flex-[0_0_50%]
                  lg:flex-[0_0_33.333333%]
                "
              >
                <ProjectCard project={p} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
