"use client";

import { motion, useReducedMotion } from "motion/react";

import { Eyebrow } from "@/components/eyebrow";
import { Parallax } from "@/components/parallax";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

function YearBars() {
  const reduce = useReducedMotion();

  return (
    <div className="flex h-[46px] items-end gap-1 border-b border-line-strong">
      {Array.from({ length: 25 }, (_, i) => {
        const last = i === 24;
        const fifth = (i + 1) % 5 === 0;
        return (
          <motion.span
            key={i}
            className={cn(
              "flex-1 origin-bottom",
              last
                ? "bg-amber shadow-[0_0_14px_rgba(240,169,58,0.7)]"
                : fifth
                  ? "bg-muted-dim"
                  : "bg-line-strong",
            )}
            style={{ height: last ? "100%" : fifth ? "60%" : "34%" }}
            initial={reduce ? false : { scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.45,
              delay: i * 0.028,
              ease: [0.2, 0.8, 0.2, 1],
            }}
          />
        );
      })}
    </div>
  );
}

export function ExperienciaSection() {
  return (
    <section
      id="experiencia"
      className="scroll-mt-[78px] overflow-hidden border-y border-line bg-[radial-gradient(70%_120%_at_8%_50%,rgba(240,169,58,0.07),transparent_60%),var(--ink)] py-[120px]"
    >
      <div className="wrap">
        <div className="grid items-center gap-8 md:grid-cols-[auto_1fr] md:gap-14">
          <Parallax offset={120} className="relative">
            <div className="bg-[linear-gradient(160deg,#fff_10%,var(--amber)_60%,var(--amber-dim)_100%)] bg-clip-text font-heading text-[clamp(280px,34vw,520px)] leading-[0.82] font-black text-transparent">
              25
            </div>
            <span className="absolute bottom-[0.16em] left-1 font-mono text-sm font-semibold tracking-[0.3em] text-trace">
              ANOS
            </span>
          </Parallax>
          <Reveal delay={0.08}>
            <Eyebrow>Trajetória</Eyebrow>
            <h2 className="mt-3.5 max-w-[18ch] text-[clamp(26px,3vw,36px)]">
              25 anos de experiência a serviço da conexão.
            </h2>
            <p className="mt-[18px] max-w-[48ch] text-[15px] leading-[1.75] text-muted-foreground">
              Com 25 anos de mercado, a Scalar Telecom presta os mais variados serviços de
              engenharia para o setor de telecomunicações, sempre superando as expectativas dos
              nossos clientes.
            </p>
          </Reveal>
        </div>

        <Reveal className="relative mt-[72px]">
          <div className="mb-2.5 flex justify-between font-mono text-[11px] tracking-[0.08em] text-muted-dim uppercase">
            <span>Fundação</span>
            <span className="text-amber">Hoje — 25 anos</span>
          </div>
          <YearBars />
        </Reveal>
      </div>
    </section>
  );
}
