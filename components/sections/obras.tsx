import { Eyebrow } from "@/components/eyebrow";
import { ObrasCoverage } from "@/components/obras-coverage";
import { Reveal } from "@/components/reveal";

export function ObrasSection() {
  return (
    <section
      id="obras"
      className="scroll-mt-[78px] border-y border-line bg-panel py-[120px]"
    >
      <div className="wrap">
        <Reveal className="mb-16 flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <div>
            <Eyebrow>Cobertura</Eyebrow>
            <h2 className="mt-3.5 max-w-[16ch] text-[clamp(30px,3.6vw,48px)]">
              Obras em execução, ponta a ponta.
            </h2>
          </div>
          <p className="max-w-[38ch] text-[15px] leading-[1.7] text-muted-foreground">
            Mapa interativo das regiões de operação e registro das obras mais recentes.
          </p>
        </Reveal>

        <ObrasCoverage />
      </div>
    </section>
  );
}
