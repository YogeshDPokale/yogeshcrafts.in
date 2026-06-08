"use client";

import * as React from "react";
import { skillGroups, SkillItem } from "@/data/skills";
import { TechChip } from "@/components/shared/tech-chip";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/shared/reveal";
import { Shield } from "lucide-react";

export function Skills() {
  const getItemName = (item: SkillItem): string => {
    return typeof item === "string" ? item : item.label;
  };

  return (
    <section id="skills" className="py-16 md:py-24 border-t border-border/60 bg-background">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        
        {/* Section Heading */}
        <div className="mb-12 md:mb-16">
          <Reveal>
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-primary mb-2">
              Expertise
            </h3>
            <h2 className="heading-serif text-3xl md:text-4xl font-normal text-foreground">
              Technical Capabilities
            </h2>
          </Reveal>
        </div>

        {/* Skills Stacked Rows */}
        <StaggerContainer className="flex flex-col gap-8 md:gap-10">
          {skillGroups.map((group) => {
            const isEmphasized = group.emphasis;
            return (
              <StaggerItem
                key={group.label}
                className={`grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-8 border-b border-border/20 pb-8 last:border-0 last:pb-0 ${
                  isEmphasized
                    ? "bg-accent/10 -mx-4 px-4 py-6 rounded-lg border border-primary/10 shadow-sm"
                    : ""
                }`}
              >
                {/* Left: Category Label */}
                <div className="md:col-span-3 flex items-center gap-2">
                  {isEmphasized && (
                    <Shield size={16} className="text-primary shrink-0" />
                  )}
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                    {group.label}
                  </h4>
                </div>

                {/* Right: Wrapped chips */}
                <div className="md:col-span-9 flex flex-wrap gap-2.5">
                  {group.items.map((item, idx) => {
                    const itemName = getItemName(item);
                    return (
                      <TechChip
                        key={idx}
                        name={itemName}
                        size={isEmphasized ? "md" : "sm"}
                      />
                    );
                  })}
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

      </div>
    </section>
  );
}
