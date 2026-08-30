"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";

import { Eyebrow } from "@/components/eyebrow";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { buttonVariants } from "@/components/ui/button";
import { heroActions, heroSlides } from "@/lib/site";
import { cn } from "@/lib/utils";

function HeroTraces() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-90"
      viewBox="0 0 1440 900"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        className="trace-path"
        d="M -50 620 C 300 560, 480 700, 760 560 S 1200 480, 1500 540"
      />
      <path
        className="trace-path"
        d="M -50 760 C 260 820, 620 700, 880 780 S 1300 720, 1500 760"
      />
      <path
        className="trace-path"
        d="M -50 460 C 380 400, 560 520, 900 420 S 1250 340, 1500 400"
      />
      <path
        className="trace-pulse p1"
        d="M -50 620 C 300 560, 480 700, 760 560 S 1200 480, 1500 540"
      />
      <path
        className="trace-pulse p2"
        d="M -50 460 C 380 400, 560 520, 900 420 S 1250 340, 1500 400"
      />
      <path
        className="trace-pulse p3"
        d="M -50 760 C 260 820, 620 700, 880 780 S 1300 720, 1500 760"
      />
    </svg>
  );
}

export function Hero() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const onSelect = useCallback((carousel: CarouselApi) => {
    if (!carousel) return;
    setCurrent(carousel.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  useEffect(() => {
    if (!api) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    const id = window.setInterval(() => {
      api.scrollNext();
    }, 6000);

    return () => window.clearInterval(id);
  }, [api, current]);

  return (
    <section
      id="hero"
      className="relative flex min-h-svh flex-col overflow-x-hidden bg-[radial-gradient(120%_90%_at_82%_8%,rgba(79,209,197,0.10),transparent_55%),radial-gradient(90%_70%_at_15%_100%,rgba(240,169,58,0.08),transparent_60%),var(--ink)] min-[981px]:justify-end"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(var(--line)_1px,transparent_1px),linear-gradient(90deg,var(--line)_1px,transparent_1px)] bg-size-[64px_64px] mask-[linear-gradient(to_bottom,black,transparent_92%)]"
        aria-hidden
      />
      <HeroTraces />

      <div className="wrap relative z-[2] flex flex-1 flex-col justify-center pt-[108px] pb-8 min-[981px]:flex-none min-[981px]:justify-end min-[981px]:pt-[150px] min-[981px]:pb-0">
        <Eyebrow className="max-w-full">
          <span className="sm:hidden">Redes ópticas / Goiânia</span>
          <span className="hidden sm:inline">
            Engenharia de redes ópticas / Goiânia, Brasil
          </span>
        </Eyebrow>

        <Carousel
          className="mt-0 min-w-0"
          opts={{ loop: true, align: "start", duration: 28 }}
          setApi={setApi}
        >
          <CarouselContent className="-ml-0">
            {heroSlides.map((slide) => (
              <CarouselItem key={slide.index} className="pl-0">
                <div className="grid min-w-0 items-end gap-6 pt-3 min-[981px]:grid-cols-[1fr_auto] min-[981px]:gap-10 min-[981px]:pt-3.5">
                  <div className="min-w-0">
                    <div className="font-mono text-[12px] tracking-[0.1em] text-muted-dim min-[981px]:text-[13px]">
                      <b className="font-semibold text-foreground">{slide.index}</b> / 03 —{" "}
                      {slide.label}
                    </div>
                    <h1 className="mt-3 max-w-[16ch] text-[clamp(32px,8.4vw,92px)] leading-[1.08] min-[981px]:mt-3.5 min-[981px]:max-w-[14ch] min-[981px]:leading-[1.02]">
                      {slide.titleBefore}
                      <em className="not-italic text-trace">{slide.titleEm}</em>
                      {slide.titleAfter}
                    </h1>
                    <p className="mt-4 max-w-[44ch] text-[15px] leading-[1.65] text-muted-foreground min-[981px]:mt-5 min-[981px]:text-base">
                      {slide.description}
                    </p>
                  </div>

                  <div className="w-full rounded-[var(--radius)] border border-line-strong bg-panel-2/55 px-4 py-3.5 backdrop-blur-[6px] min-[981px]:min-w-[220px] min-[981px]:w-auto min-[981px]:px-[26px] min-[981px]:py-[22px]">
                    <div className="bg-[linear-gradient(180deg,#fff,var(--amber))] bg-clip-text font-heading text-[32px] font-black text-transparent min-[981px]:text-[40px]">
                      {slide.stat.value}
                      {slide.stat.suffix ? (
                        <span className="font-mono text-[16px] min-[981px]:text-[20px]">
                          {slide.stat.suffix}
                        </span>
                      ) : null}
                    </div>
                    <div className="mt-1 font-mono text-[10px] tracking-[0.1em] text-muted-foreground uppercase min-[981px]:mt-1.5 min-[981px]:text-[11px]">
                      {slide.stat.label}
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="mt-6 flex flex-col gap-2.5 min-[480px]:flex-row min-[480px]:flex-wrap min-[480px]:gap-3.5 min-[981px]:mt-8">
          <Link
            href={heroActions.primary.href}
            className={cn(
              buttonVariants({ variant: "default", size: "lg" }),
              "w-full min-[480px]:w-auto",
            )}
          >
            {heroActions.primary.label}
          </Link>
          <Link
            href={heroActions.secondary.href}
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "w-full min-[480px]:w-auto",
            )}
          >
            {heroActions.secondary.label}
          </Link>
        </div>
      </div>

      <div className="relative z-[2] mt-auto border-t border-line min-[981px]:mt-16">
        <div className="wrap flex items-center justify-between py-3.5 min-[981px]:py-[18px]">
          <div className="flex gap-2.5">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.index}
                type="button"
                aria-label={`Ir para o slide ${slide.index}`}
                className={cn(
                  "h-[3px] w-[34px] border-0 transition-colors",
                  index === current ? "bg-trace" : "bg-line-strong",
                )}
                onClick={() => api?.scrollTo(index)}
              />
            ))}
          </div>
          <div className="hidden font-mono text-[11px] tracking-[0.1em] text-muted-dim sm:block">
            SCROLL ↓
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Slide anterior"
              className="flex size-[38px] items-center justify-center border border-line-strong bg-transparent text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
              onClick={() => api?.scrollPrev()}
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Próximo slide"
              className="flex size-[38px] items-center justify-center border border-line-strong bg-transparent text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
              onClick={() => api?.scrollNext()}
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
