"use client";

import { Keywords } from "@/components/shared/keywords";

import * as React from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { ProjectLinks } from "@/components/shared/project-links";
import { TechChip } from "@/components/shared/tech-chip";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/shared/reveal";
import { ArrowLeft } from "lucide-react";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = React.useState<"All" | "Web" | "Blockchain" | "AI" | "Tool" | "Infrastructure">("All");

  const categories = ["All", "AI", "Tool", "Web", "Infrastructure", "Blockchain"] as const;

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All") return true;
    return project.tags.includes(activeFilter);
  });

  const showFilterBar = projects.length >= 4;

  return (
    <div className="bg-background min-h-screen py-16 px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        
        {/* Back navigation */}
        <div className="mb-10">
          <Reveal>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft size={16} />
              <span>Back to Home</span>
            </Link>
          </Reveal>
        </div>

        {/* Heading */}
        <div className="mb-12 border-b border-border/40 pb-6">
          <Reveal>
            <h1 className="heading-serif text-4xl md:text-5xl font-normal text-foreground mb-3">
              Selected Work & Archive
            </h1>
            <p className="text-sm md:text-base text-muted-foreground max-w-xl leading-relaxed">
              Applied AI, developer tooling, and a personal portfolio, alongside earlier academic projects.
            </p>
          </Reveal>
        </div>

        {/* Client-side filter bar (Conditionally rendered) */}
        {showFilterBar && (
          <Reveal className="mb-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium border transition-all duration-200 ${
                    activeFilter === category
                      ? "bg-primary border-primary text-primary-foreground"
                      : "bg-card border-border text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </Reveal>
        )}

        {/* Grid display */}
        <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <StaggerItem
              key={project.slug}
              className="group flex flex-col justify-between rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 hover:translate-y-[-2px]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-medium text-muted-foreground/80">
                    {project.year}
                  </span>
                  <div className="flex items-center gap-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block rounded bg-secondary px-1.5 py-0.5 text-[9px] font-mono font-medium text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="heading-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-200 mb-2">
                  {project.title}
                </h3>

                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-6">
                  <Keywords text={project.description || project.blurb} />
                </p>
              </div>

              <div className="mt-auto flex flex-col gap-5">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <TechChip key={t} name={t} />
                  ))}
                </div>

                <ProjectLinks project={project} />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </div>
  );
}
