import { Eyebrow } from "@/components/eyebrow";
import { Reveal } from "@/components/reveal";
import { services } from "@/lib/site";

export function ServicosSection() {
  return (
    <section id="servicos" className="scroll-mt-[78px] bg-ink py-[120px]">
      <div className="wrap">
        <Reveal className="mb-16 flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <div>
            <Eyebrow>O que fazemos</Eyebrow>
            <h2 className="mt-3.5 max-w-[16ch] text-[clamp(30px,3.6vw,48px)]">
              Do projeto à operação contínua.
            </h2>
          </div>
          <p className="max-w-[38ch] text-[15px] leading-[1.7] text-muted-foreground">
            Cobrimos todo o ciclo de vida da rede óptica — para operadoras, fabricantes e
            integradoras.
          </p>
        </Reveal>

        <div className="border-t border-line">
          {services.map((service, index) => (
            <Reveal
              key={service.index}
              delay={index * 0.1}
              className="group grid items-start gap-3.5 border-b border-line py-[52px] min-[981px]:grid-cols-[90px_1fr_1.1fr] min-[981px]:gap-10"
            >
              <div className="pt-0 font-mono text-sm text-trace transition-colors group-hover:text-amber min-[981px]:pt-2.5">
                {service.index}
              </div>
              <div className="text-[clamp(26px,3vw,38px)] font-heading font-extrabold tracking-[-0.01em] leading-[1.02]">
                {service.name}
              </div>
              <div>
                <p className="max-w-[52ch] text-[15px] leading-[1.75] text-muted-foreground">
                  {service.body.split(service.highlight).map((part, i, arr) => (
                    <span key={i}>
                      {part}
                      {i < arr.length - 1 ? (
                        <strong className="font-semibold text-foreground">
                          {service.highlight}
                        </strong>
                      ) : null}
                    </span>
                  ))}
                </p>
                <div className="mt-[18px] flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-line-strong px-2.5 py-1.5 font-mono text-[10.5px] tracking-[0.05em] text-muted-foreground uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
