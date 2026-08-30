import { Eyebrow } from "@/components/eyebrow";
import { Reveal } from "@/components/reveal";

export function EmpresaSection() {
  return (
    <section
      id="empresa"
      className="scroll-mt-[78px] border-y border-line bg-panel py-[120px]"
    >
      <div className="wrap">
        <Reveal className="mb-16">
          <Eyebrow>A empresa</Eyebrow>
          <h2 className="section-title mt-3.5 max-w-[16ch] text-[clamp(30px,3.6vw,48px)]">
            Parceira de engenharia das maiores redes do país.
          </h2>
        </Reveal>

        <div className="grid items-start gap-12 min-[981px]:grid-cols-[1.1fr_0.9fr] min-[981px]:gap-20">
          <Reveal className="text-base leading-[1.8] text-muted-foreground">
            <p className="mb-5">
              Somos uma empresa <strong className="font-semibold text-foreground">brasileira</strong>,
              com atuação em todo o território nacional, dedicada ao fornecimento de serviços de
              engenharia no segmento de telecomunicações.
            </p>
            <p className="mb-5">
              Com sede em <strong className="font-semibold text-foreground">Goiânia (GO)</strong>, a
              Scalar atua como parceira das maiores empresas de telecomunicações do país na
              prestação de serviços de projeto, construção e manutenção de redes de fibra óptica.
            </p>
            <p>
              Fundada por{" "}
              <strong className="font-semibold text-foreground">
                três engenheiros de telecomunicações
              </strong>
              , com vários anos de experiência somados, a Scalar vem se destacando como uma das
              melhores opções para a terceirização de serviços de infraestrutura no país.
            </p>
          </Reveal>

          <Reveal className="relative border border-line-strong bg-[linear-gradient(var(--line)_1px,transparent_1px)_0_0/100%_24px,linear-gradient(90deg,var(--line)_1px,transparent_1px)_0_0/24px_100%,var(--panel-3)] p-8">
            <span className="absolute top-[-1px] left-[-1px] size-3.5 border border-r-0 border-b-0 border-trace" />
            <span className="absolute right-[-1px] bottom-[-1px] size-3.5 border border-t-0 border-l-0 border-trace" />

            <div className="mb-6 flex justify-between font-mono text-[10px] tracking-[0.14em] text-muted-dim uppercase">
              <span>SCALAR // FICHA TÉCNICA</span>
              <span>GOIÂNIA · GO</span>
            </div>

            <div className="mb-[26px] flex gap-2.5">
              <div className="flex-1 border border-line-strong px-3.5 py-4 text-center">
                <div className="font-mono text-[10px] tracking-[0.08em] text-trace uppercase">
                  Fundação
                </div>
                <div className="mt-1.5 font-heading text-[26px] font-extrabold">3</div>
                <div className="mt-0.5 text-[11px] text-muted-dim">Engenheiros</div>
              </div>
              <div className="flex-1 border border-line-strong px-3.5 py-4 text-center">
                <div className="font-mono text-[10px] tracking-[0.08em] text-trace uppercase">
                  Sede
                </div>
                <div className="mt-1.5 font-heading text-[26px] font-extrabold">GO</div>
                <div className="mt-0.5 text-[11px] text-muted-dim">Goiânia</div>
              </div>
              <div className="flex-1 border border-line-strong px-3.5 py-4 text-center">
                <div className="font-mono text-[10px] tracking-[0.08em] text-trace uppercase">
                  Atuação
                </div>
                <div className="mt-1.5 font-heading text-[26px] font-extrabold">BR</div>
                <div className="mt-0.5 text-[11px] text-muted-dim">Nacional</div>
              </div>
            </div>

            <div className="grid grid-cols-2 border-t border-line-strong sm:grid-cols-3">
              <div className="pt-[18px]">
                <div className="font-heading text-[28px] font-black text-amber">25</div>
                <div className="mt-1 font-mono text-[10px] tracking-[0.06em] text-muted-foreground uppercase">
                  Anos de mercado
                </div>
              </div>
              <div className="pt-[18px]">
                <div className="font-heading text-[28px] font-black text-amber">7K+</div>
                <div className="mt-1 font-mono text-[10px] tracking-[0.06em] text-muted-foreground uppercase">
                  Km de rede
                </div>
              </div>
              <div className="pt-[18px]">
                <div className="font-heading text-[28px] font-black text-amber">24/7</div>
                <div className="mt-1 font-mono text-[10px] tracking-[0.06em] text-muted-foreground uppercase">
                  Manutenção
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
