"use client";

import { FormEvent, type ReactNode } from "react";

import { Eyebrow } from "@/components/eyebrow";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const fieldClass =
  "h-auto rounded-none border-0 bg-transparent px-[18px] pt-2 pb-4 text-[14.5px] shadow-none dark:bg-transparent focus-visible:ring-0";

function Field({
  id,
  label,
  className = "",
  children,
}: {
  id: string;
  label: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`bg-panel-3 ${className}`}>
      <Label
        htmlFor={id}
        className="block px-[18px] pt-3.5 font-mono text-[10px] font-normal tracking-[0.1em] text-muted-dim uppercase"
      >
        {label}
      </Label>
      {children}
    </div>
  );
}

export function ContatoSection() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <section
      id="contato"
      className="scroll-mt-[78px] border-t border-line bg-[radial-gradient(80%_60%_at_85%_0%,rgba(240,169,58,0.08),transparent_60%),var(--panel)] py-[120px]"
    >
      <div className="wrap">
        <Reveal className="mb-16">
          <Eyebrow>Contato</Eyebrow>
          <h2 className="mt-3.5 max-w-[16ch] text-[clamp(30px,3.6vw,48px)]">
            Vamos falar sobre a sua rede.
          </h2>
        </Reveal>

        <div className="grid gap-12 min-[981px]:grid-cols-[0.9fr_1.1fr] min-[981px]:gap-20">
          <Reveal delay={0.06}>
            <div className="flex gap-4 border-b border-line py-[18px]">
              <div className="w-[90px] shrink-0 pt-0.5 font-mono text-[11px] tracking-[0.06em] text-muted-dim uppercase">
                Telefone
              </div>
              <div className="text-[15px] leading-[1.6]">
                <a href="tel:+556232596339" className="hover:text-trace">
                  +55 (62) 3259-6339
                </a>
              </div>
            </div>
            <div className="flex gap-4 border-b border-line py-[18px]">
              <div className="w-[90px] shrink-0 pt-0.5 font-mono text-[11px] tracking-[0.06em] text-muted-dim uppercase">
                E-mail
              </div>
              <div className="text-[15px] leading-[1.6]">
                <a href="mailto:scalar@scalar.com.br" className="hover:text-trace">
                  scalar@scalar.com.br
                </a>
              </div>
            </div>
            <div className="flex gap-4 border-b border-line py-[18px]">
              <div className="w-[90px] shrink-0 pt-0.5 font-mono text-[11px] tracking-[0.06em] text-muted-dim uppercase">
                Endereço
              </div>
              <div className="text-[15px] leading-[1.6]">
                Rua 3, n° 856, Jd. Sto. Antônio
                <br />
                Goiânia — GO, CEP 74.853-150
              </div>
            </div>
            <div className="flex gap-4 border-b border-line py-[18px]">
              <div className="w-[90px] shrink-0 pt-0.5 font-mono text-[11px] tracking-[0.06em] text-muted-dim uppercase">
                Rede
              </div>
              <div className="text-[15px] leading-[1.6]">
                <a href="#" aria-label="LinkedIn" className="hover:text-trace">
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-px border border-line-strong bg-line-strong min-[981px]:grid-cols-2">
                <Field id="contato-nome" label="Nome *">
                  <Input
                    id="contato-nome"
                    name="nome"
                    required
                    placeholder="Seu nome"
                    className={fieldClass}
                  />
                </Field>
                <Field id="contato-empresa" label="Empresa">
                  <Input
                    id="contato-empresa"
                    name="empresa"
                    placeholder="Sua empresa"
                    className={fieldClass}
                  />
                </Field>
                <Field id="contato-email" label="E-mail *">
                  <Input
                    id="contato-email"
                    name="email"
                    type="email"
                    required
                    placeholder="voce@empresa.com"
                    className={fieldClass}
                  />
                </Field>
                <Field id="contato-telefone" label="Telefone">
                  <Input
                    id="contato-telefone"
                    name="telefone"
                    type="tel"
                    placeholder="(00) 00000-0000"
                    className={fieldClass}
                  />
                </Field>
                <Field id="contato-mensagem" label="Mensagem" className="min-[981px]:col-span-2">
                  <Textarea
                    id="contato-mensagem"
                    name="mensagem"
                    placeholder="Conte um pouco sobre o projeto..."
                    className={`${fieldClass} min-h-16`}
                  />
                </Field>
              </div>
              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <p className="max-w-[32ch] font-mono text-[11px] text-muted-dim">
                  Respondemos em até 1 dia útil.
                </p>
                <Button type="submit" size="lg">
                  Enviar mensagem →
                </Button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
