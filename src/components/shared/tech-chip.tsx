"use client";

import * as React from "react";
import { TECH, TechKey } from "@/data/tech-registry";
import {
  SiDotnet,
  SiSharp,
  SiAngular,
  SiTypescript,
  SiJavascript,
  SiReactivex,
  SiNodedotjs,
  SiPython,
  SiMysql,
  SiPostgresql,
  SiGooglecloud,
  SiAnthropic,
  SiOpenai,
  SiPhp,
  SiSolidity,
  SiC,
  SiCplusplus,
  SiOpenjdk
} from "react-icons/si";
import { TbBrandAzure } from "react-icons/tb";

const ICON_MAP: Record<string, any> = {
  SiDotnet,
  SiSharp,
  SiAngular,
  SiTypescript,
  SiJavascript,
  SiReactivex,
  SiNodedotjs,
  SiPython,
  SiMysql,
  SiPostgresql,
  SiGooglecloud,
  SiAnthropic,
  SiOpenai,
  SiPhp,
  SiSolidity,
  SiC,
  SiCplusplus,
  SiOpenjdk,
  TbBrandAzure,
};

export interface TechChipProps {
  name: TechKey | string;
  size?: "sm" | "md";
}

export function TechChip({ name, size = "sm" }: TechChipProps) {
  // Check if name is in registry
  const isKey = name in TECH;
  const config = isKey ? TECH[name as TechKey] : null;

  const label = config ? config.label : name;
  const color = config ? config.color : "#78716c"; // Default to stone-500 gray
  const IconComponent = config?.icon ? ICON_MAP[config.icon] : null;

  // Visual sizes
  const paddingClass = size === "sm" ? "px-2 py-0.5 text-xs" : "px-3 py-1 text-sm";
  const iconSize = size === "sm" ? 12 : 14;

  // Custom inline styles to support brand colors dynamically
  const style = {
    "--chip-color": color,
  } as React.CSSProperties;

  return (
    <span
      style={style}
      className={`
        inline-flex items-center gap-1.5 rounded-md border font-mono font-medium transition-all duration-200
        bg-[var(--chip-color)]/10 border-[var(--chip-color)]/25 text-[var(--chip-color)]
        dark:bg-[var(--chip-color)]/15 dark:border-[var(--chip-color)]/30
        ${paddingClass}
      `}
    >
      {IconComponent && (
        <IconComponent size={iconSize} className="shrink-0" />
      )}
      <span>{label}</span>
    </span>
  );
}
