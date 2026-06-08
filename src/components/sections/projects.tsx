"use client";

import * as React from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { TechChip } from "@/components/shared/tech-chip";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/shared/reveal";
import { buttonVariants } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export function Projects() {
  // Show only featured projects on the homepage
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-16 md:py-24 border-t border-border/60 bg-background">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-12 md:mb-16">
          <Reveal>
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-primary mb-2">
              Portfolio
            </h3>
            <h2 className="heading-serif text-3xl md:text-4xl font-normal text-foreground">
              Featured Work
            </h2>
          </Reveal>
          
          <Reveal delay={0.1}>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline group"
            >
              View all projects
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        {/* Projects Grid */}
        <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <StaggerItem
              key={project.slug}
              className="group flex flex-col justify-between rounded-xl border border-border bg-card p-6 md:p-8 transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 hover:translate-y-[-2px]"
            >
              <div>
                {/* Year Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-medium text-muted-foreground/80">
                    {project.year}
                  </span>
                  <div className="flex items-center gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block rounded bg-secondary px-1.5 py-0.5 text-[10px] font-mono font-medium text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Title */}
                <h3 className="heading-serif text-2xl font-semibold text-foreground group-hover:text-primary transition-colors duration-200 mb-2">
                  {project.title}
                </h3>

                {/* Blurb */}
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
                  {project.blurb}
                </p>
              </div>

              {/* Bottom Details */}
              <div className="mt-auto flex flex-col gap-6">
                {/* Tech Chips */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <TechChip key={t} name={t} />
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-4 border-t border-border/40">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <FaGithub size={14} />
                      <span>Codebase</span>
                    </a>
                  )}
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-primary hover:underline"
                    >
                      <ExternalLink size={14} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
}
