import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-start gap-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-trace sm:text-xs sm:tracking-[0.22em]",
        className,
      )}
    >
      <span className="mt-[0.65em] h-px w-[22px] shrink-0 bg-trace" aria-hidden />
      <span className="min-w-0 text-pretty leading-snug">{children}</span>
    </div>
  );
}
