"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";

interface CopyableEmailProps {
  email: string;
}

export function CopyableEmail({ email }: CopyableEmailProps) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="group inline-flex items-center gap-2.5 rounded-lg border border-border bg-card px-4.5 py-2.5 text-sm font-medium transition-all duration-200 hover:bg-secondary hover:border-primary/30 active:scale-95"
      title="Click to copy email address"
    >
      <span className="font-mono text-foreground tracking-tight select-all">{email}</span>
      <span className="flex items-center justify-center w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors">
        {copied ? (
          <Check size={14} className="text-emerald-600 dark:text-emerald-400" />
        ) : (
          <Copy size={14} />
        )}
      </span>
    </button>
  );
}
