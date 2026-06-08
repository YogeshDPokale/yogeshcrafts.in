import * as React from "react";
import Link from "next/link";
import { ArrowLeft, Home, HelpCircle } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export const metadata = {
  title: "Page Not Found · yogeshcrafts",
};

export default function NotFound() {
  return (
    <div className="bg-background flex flex-1 flex-col items-center justify-center py-20 px-6 text-center select-none">
      
      {/* Visual Indicator */}
      <div className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-secondary border border-border shadow-inner">
        <HelpCircle className="h-10 w-10 text-primary animate-pulse" />
      </div>

      {/* Header */}
      <h1 className="heading-serif text-5xl md:text-6xl font-normal text-foreground tracking-tight mb-4">
        404 — Not Found
      </h1>
      
      {/* Copy */}
      <p className="text-sm md:text-base text-muted-foreground max-w-md leading-relaxed mb-10">
        The page you are looking for doesn't exist, was moved, or is still being built. 
        You can return to the main archive or visit the companion dev blog.
      </p>

      {/* Action buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Link
          href="/"
          className={buttonVariants({
            variant: "default",
            size: "default",
            className: "rounded-lg gap-2"
          })}
        >
          <Home size={16} />
          Go Home
        </Link>
        <a
          href="https://blogs.yogeshcrafts.in"
          target="_blank"
          rel="noopener noreferrer"
          className={buttonVariants({
            variant: "outline",
            size: "default",
            className: "rounded-lg"
          })}
        >
          Visit Blog ↗
        </a>
      </div>

    </div>
  );
}
