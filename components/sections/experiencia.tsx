import { Eyebrow } from "@/components/eyebrow";
import { Reveal } from "@/components/reveal";

export function ExperienciaSection() {
  return (
    <section
      id="experiencia"
      className="scroll-mt-[78px] overflow-hidden border-y border-line bg-[radial-gradient(70%_120%_at_8%_50%,rgba(240,169,58,0.07),transparent_60%),var(--ink)] py-[120px]"
    >
      <div className="wrap">
        <Reveal className="grid items-center gap-8 md:grid-cols-[auto_1fr] md:gap-14">
          <div className="relative">
            <div className="bg-[linear-gradient(160deg,#fff_10%,var(--amber)_60%,var(--amber-dim)_100%)] bg-clip-text font-heading text-[clamp(140px,17vw,260px)] leading-[0.82] font-black text-transparent">
              25
            </div>
            <span className="absolute bottom-[0.16em] left-1 font-mono text-sm font-semibold tracking-[0.3em] text-trace">
              ANOS
            </span>
          </div>
          <div>
            <Eyebrow>Trajetória</Eyebrow>
            <h2 className="mt-3.5 max-w-[18ch] text-[clamp(26px,3vw,36px)]">
              25 anos de experiência a serviço da conexão.
            </h2>
            <p className="mt-[18px] max-w-[48ch] text-[15px] leading-[1.75] text-muted-foreground">
              Com 25 anos de mercado, a Scalar Telecom presta os mais variados serviços de
              engenharia para o setor de telecomunicações, sempre superando as expectativas dos
              nossos clientes.
            </p>
          </div>
        </Reveal>

        <Reveal className="relative mt-[72px]">
          <div className="mb-2.5 flex justify-between font-mono text-[11px] tracking-[0.08em] text-muted-dim uppercase">
            <span>Fundação</span>
            <span className="text-amber">Hoje — 25 anos</span>
          </div>
          <div className="flex h-[46px] items-end gap-1 border-b border-line-strong">
            {Array.from({ length: 25 }, (_, i) => {
              const last = i === 24;
              const fifth = (i + 1) % 5 === 0;
              return (
                <span
                  key={i}
                  className={
                    last
                      ? "h-full flex-1 bg-amber shadow-[0_0_14px_rgba(240,169,58,0.7)]"
                      : fifth
                        ? "h-[60%] flex-1 bg-muted-dim"
                        : "h-[34%] flex-1 bg-line-strong"
                  }
                />
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
