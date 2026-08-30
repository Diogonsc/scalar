import Link from "next/link";

import { BrandLogo } from "@/components/brand-logo";
import { navLinks } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-ink">
      <div className="wrap flex flex-wrap items-center justify-between gap-4 py-7 font-mono text-[11px] tracking-[0.04em] text-muted-dim">
        <div className="flex flex-wrap items-center gap-4">
          <BrandLogo imageClassName="h-8 sm:h-8" />
          <span>© 2026 Scalar Telecom — Todos os direitos reservados.</span>
        </div>
        <div className="flex gap-5">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-foreground">
              {link.label}
            </Link>
          ))}
          <Link href="#contato" className="hover:text-foreground">
            Contato
          </Link>
        </div>
      </div>
    </footer>
  );
}
