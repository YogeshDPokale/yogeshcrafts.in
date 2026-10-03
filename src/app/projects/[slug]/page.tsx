import { Keywords } from "@/components/shared/keywords";
import * as React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { ProjectLinks } from "@/components/shared/project-links";
import { TechChip } from "@/components/shared/tech-chip";
import { ArrowLeft } from "lucide-react";

interface CaseStudyProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectCaseStudyPage({ params }: CaseStudyProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-background min-h-screen py-16 px-6 md:py-24">
      <div className="mx-auto max-w-3xl">
        
        {/* Back Link */}
        <div className="mb-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Back to Projects</span>
          </Link>
        </div>

        {/* Header */}
        <header className="mb-12 border-b border-border/40 pb-6">
          <div className="flex items-center gap-2 mb-3 text-xs font-mono text-muted-foreground">
            <span>{project.year}</span>
            <span>•</span>
            <span>{project.ownership}</span>
          </div>
          <h1 className="heading-serif text-3xl md:text-5xl font-normal text-foreground mb-4">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tech.map((t) => (
              <TechChip key={t} name={t} />
            ))}
          </div>
        </header>

        <div className="space-y-8">
          <p className="text-base text-muted-foreground leading-relaxed"><Keywords text={project.description || project.blurb} /></p>
          {project.caseStudy?.map((section) => (
            <section key={section.heading}>
              <h2 className="text-xl font-semibold mb-3">{section.heading}</h2>
              <p className="text-base text-muted-foreground leading-relaxed"><Keywords text={section.body} /></p>
            </section>
          ))}
          <ProjectLinks project={project} />
        </div>
      </div>
    </div>
  );
}
