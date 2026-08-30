import { Hero } from "@/components/hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ClientesSection } from "@/components/sections/clientes";
import { ContatoSection } from "@/components/sections/contato";
import { EmpresaSection } from "@/components/sections/empresa";
import { ExperienciaSection } from "@/components/sections/experiencia";
import { ObrasSection } from "@/components/sections/obras";
import { ServicosSection } from "@/components/sections/servicos";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <EmpresaSection />
        <ExperienciaSection />
        <ServicosSection />
        <ObrasSection />
        <ClientesSection />
        <ContatoSection />
      </main>
      <SiteFooter />
    </>
  );
}
