import Link from "next/link";
import { Project } from "@/data/projects";

export function ProjectLinks({ project }: { project: Project }) {
  const className = "text-xs font-mono text-primary hover:underline";
  return (
    <div className="flex flex-col gap-2 pt-4 border-t border-border/40">
      <p className="text-xs text-muted-foreground">{project.ownership} · {project.status}</p>
      <div className="flex flex-wrap gap-4">
        {project.links.caseStudy && <Link href={project.links.caseStudy} className={className}>Read overview →</Link>}
        {project.links.github && <a href={project.links.github} target="_blank" rel="noopener noreferrer" className={className}>Codebase</a>}
        {project.links.live && <a href={project.links.live} target="_blank" rel="noopener noreferrer" className={className}>Visit site</a>}
      </div>
    </div>
  );
}
