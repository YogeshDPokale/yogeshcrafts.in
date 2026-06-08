"use client";

import * as React from "react";
import { experiences } from "@/data/experience";
import { TechChip } from "@/components/shared/tech-chip";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/shared/reveal";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 border-t border-border/60 bg-background">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        
        {/* Section Heading */}
        <div className="mb-12 md:mb-16">
          <Reveal>
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-primary mb-2">
              Career Path
            </h3>
            <h2 className="heading-serif text-3xl md:text-4xl font-normal text-foreground">
              Professional Experience
            </h2>
          </Reveal>
        </div>

        {/* Timeline Stack */}
        <div className="relative border-l border-border pl-6 ml-3 md:ml-4 flex flex-col gap-16">
          {experiences.map((company, companyIdx) => (
            <div key={company.name} className="relative">
              
              {/* Timeline dot badge */}
              <div className="absolute -left-[35px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-background border border-primary shadow-sm">
                <Briefcase size={12} className="text-primary" />
              </div>

              {/* Company Meta */}
              <Reveal className="flex flex-col gap-2 mb-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="heading-serif text-2xl font-semibold text-foreground">
                    {company.name}
                  </h3>
                  <div className="flex items-center gap-3 text-xs font-mono text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin size={12} className="opacity-80" />
                      {company.location}
                    </span>
                  </div>
                </div>
              </Reveal>

              {/* Roles Under Company */}
              <StaggerContainer className="flex flex-col gap-8">
                {company.roles.map((role, roleIdx) => (
                  <StaggerItem
                    key={role.title}
                    className="relative border-l-2 border-border/40 pl-4 md:pl-6 py-1 ml-1"
                  >
                    {/* Role Header */}
                    <div className="flex flex-col gap-1.5 md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h4 className="text-base font-semibold text-foreground flex items-baseline gap-2">
                          {role.title}
                          <span className="inline-block rounded bg-secondary px-1.5 py-0.5 text-[10px] font-mono font-medium text-muted-foreground">
                            {role.type}
                          </span>
                        </h4>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground/80">
                        <Calendar size={12} />
                        <span>
                          {role.start} — {role.end}
                        </span>
                      </div>
                    </div>

                    {/* Impact Bullets */}
                    <ul className="list-disc list-outside space-y-2.5 pl-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                      {role.bullets.map((bullet, bulletIdx) => (
                        <li key={bulletIdx} className="hover:text-foreground transition-colors duration-150">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              {/* Combined Tech Tags for Company */}
              {company.techTags && company.techTags.length > 0 && (
                <Reveal delay={0.2} className="mt-8 pl-4 md:pl-6 ml-1 flex flex-wrap gap-2">
                  {company.techTags.map((tag) => (
                    <TechChip key={tag} name={tag} />
                  ))}
                </Reveal>
              )}
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
