"use client";

import { useState } from "react";
import Link from "next/link";
import { useMotionValueEvent, useScroll } from "motion/react";

import { BrandLogo } from "@/components/brand-logo";
import { buttonVariants } from "@/components/ui/button";
import { navLinks } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (value) => {
    setScrolled(value > 16);
  });

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b backdrop-blur-[14px] transition-[background-color,border-color] duration-300",
        scrolled
          ? "border-line bg-ink/88"
          : "border-transparent bg-ink/72",
      )}
    >
      <div className="wrap flex h-[78px] items-center justify-between">
        <BrandLogo priority />

        <nav className="hidden min-[981px]:block">
          <ul className="m-0 flex list-none items-center gap-0.5 p-0">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative block px-4 py-2.5 font-mono text-xs tracking-[0.1em] text-muted-foreground uppercase transition-colors hover:text-foreground after:absolute after:right-4 after:bottom-1.5 after:left-4 after:h-px after:origin-left after:scale-x-0 after:bg-amber after:transition-transform after:duration-200 hover:after:scale-x-100"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="#contato"
          className={cn(
            buttonVariants({ variant: "default" }),
            "h-auto shrink-0 px-3 py-2 text-[11px] tracking-[0.08em] sm:px-5 sm:py-2.5 sm:text-xs",
          )}
        >
          Fale conosco
        </Link>
      </div>
    </header>
  );
}
