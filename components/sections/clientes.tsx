import type { CSSProperties } from "react";
import Image from "next/image";

import { Eyebrow } from "@/components/eyebrow";
import { Reveal } from "@/components/reveal";
import { clients } from "@/lib/site";

export function ClientesSection() {
  const loop = [...clients, ...clients];

  return (
    <section
      id="clientes"
      className="scroll-mt-[78px] overflow-hidden bg-ink pt-[120px] pb-[120px]"
    >
      <div className="wrap">
        <Reveal className="mb-0 flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <div>
            <Eyebrow>Quem confia</Eyebrow>
            <h2 className="mt-3.5 max-w-[16ch] text-[clamp(30px,3.6vw,48px)]">
              Parceiros de operadoras e fabricantes.
            </h2>
          </div>
          <p className="max-w-[38ch] text-[15px] leading-[1.7] text-muted-foreground">
            Passe o mouse sobre um cliente para destacar a marca.
          </p>
        </Reveal>
      </div>

      <Reveal className="relative mt-[60px] mask-[linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
        <div className="animate-marquee flex w-max hover:[animation-play-state:paused]">
          {loop.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="group flex h-[180px] w-[240px] shrink-0 items-center justify-center border-r border-line px-6 sm:h-[200px] sm:w-[320px]"
              style={{ "--c": client.color } as CSSProperties}
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={280}
                height={96}
                className="h-20 w-auto max-w-[220px] object-contain opacity-90 transition-[opacity,transform,filter] duration-300 group-hover:scale-[1.08] group-hover:opacity-100 group-hover:drop-shadow-[0_0_18px_var(--c)] sm:h-24 sm:max-w-[260px]"
              />
            </div>
          ))}
        </div>
      </Reveal>

      <div className="wrap">
        <div className="mt-9 flex justify-between font-mono text-[11px] tracking-[0.06em] text-muted-dim">
          <span>15 PARCEIROS ATIVOS</span>
          <span>OPERADORAS · FABRICANTES · INTEGRADORAS</span>
        </div>
      </div>
    </section>
  );
}
