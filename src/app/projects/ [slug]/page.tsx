import * as React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { TechChip } from "@/components/shared/tech-chip";
import { ArrowLeft, Clock, Construction } from "lucide-react";

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
            <span>Back to Projects Archive</span>
          </Link>
        </div>

        {/* Header */}
        <header className="mb-12 border-b border-border/40 pb-6">
          <div className="flex items-center gap-2 mb-3 text-xs font-mono text-muted-foreground">
            <span>{project.year}</span>
            <span>•</span>
            <span>Case Study</span>
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

        {/* Temporary coming soon body */}
        <div className="flex flex-col items-center justify-center text-center p-12 border border-dashed border-border rounded-xl bg-card">
          <Construction className="h-10 w-10 text-primary mb-4" />
          <h2 className="text-lg font-semibold text-foreground mb-1.5">
            Case study is under construction
          </h2>
          <p className="text-sm text-muted-foreground max-w-sm">
            I am compiling metrics, architecture diagrams, and lessons learned for {project.title}. Check back soon!
          </p>
        </div>

      </div>
    </div>
  );
}
