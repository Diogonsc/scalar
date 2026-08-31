"use client";

import { useMemo, useState } from "react";

import { CoverageMap } from "@/components/coverage-map";
import { Eyebrow } from "@/components/eyebrow";
import { Reveal } from "@/components/reveal";
import { stateLabel } from "@/lib/mapdata";
import { obras, obrasInState, type Obra } from "@/lib/obras";

function groupByTag(list: Obra[]) {
  const groups = new Map<string, Obra[]>();
  for (const obra of list) {
    const items = groups.get(obra.tag);
    if (items) items.push(obra);
    else groups.set(obra.tag, [obra]);
  }
  return [...groups.entries()];
}

export function ObrasCoverage({ mapSvg }: { mapSvg?: string }) {
  const [selectedState, setSelectedState] = useState<string | null>("BRGO");
  const [hoveredState, setHoveredState] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  const displayState = hoveredState ?? selectedState;

  const visibleObras = useMemo(() => {
    const source = displayState ? obrasInState(displayState) : obras;
    const q = query.trim().toLowerCase();
    if (!q) return source;
    return source.filter(
      (obra) =>
        obra.tag.toLowerCase().includes(q) ||
        obra.title.toLowerCase().includes(q) ||
        obra.detail.toLowerCase().includes(q),
    );
  }, [displayState, query]);

  const groups = useMemo(() => groupByTag(visibleObras), [visibleObras]);

  return (
    <div className="grid items-start gap-8 min-[981px]:grid-cols-[minmax(0,1.55fr)_minmax(280px,0.95fr)] min-[981px]:items-stretch min-[981px]:gap-10">
      <Reveal className="min-w-0">
        <CoverageMap
          selectedState={selectedState}
          onSelectState={setSelectedState}
          onHoverState={setHoveredState}
          mapSvg={mapSvg}
        />
        <p className="mt-3.5 text-center font-mono text-[10px] tracking-[0.12em] text-muted-dim uppercase">
          Passe o mouse ou clique em um estado para ver as obras
        </p>
        <p className="mt-1 text-center font-mono text-[10px] text-muted-dim/70">
          Mapa:{" "}
          <a
            href="https://simplemaps.com"
            className="hover:text-trace"
            target="_blank"
            rel="noreferrer"
          >
            SimpleMaps
          </a>
        </p>
      </Reveal>

      <Reveal className="flex min-h-0 min-w-0 flex-col border border-line-strong bg-panel-3/40 min-[981px]:h-full">
        <div className="shrink-0 border-b border-line px-4 py-3.5">
          <div className="flex items-baseline justify-between gap-3">
            <Eyebrow className="m-0 min-w-0">
              <span className="truncate">
                {displayState
                  ? `Obras · ${stateLabel(displayState)}`
                  : "Registro de obras"}
              </span>
            </Eyebrow>
            <div className="shrink-0 font-mono text-[11px] text-muted-dim">
              {String(visibleObras.length).padStart(2, "0")}
            </div>
          </div>
          <label className="sr-only" htmlFor="obras-filter">
            Filtrar obras
          </label>
          <input
            id="obras-filter"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Filtrar cidade, cliente ou serviço"
            className="mt-3 h-9 w-full border border-line bg-ink/40 px-3 font-mono text-[12px] text-foreground outline-none placeholder:text-muted-dim/80 focus:border-trace"
          />
        </div>

        <div className="obras-scroll min-h-0 flex-1 overflow-y-auto max-h-[min(52vh,420px)] min-[981px]:max-h-none">
          {visibleObras.length === 0 ? (
            <p className="px-4 py-6 text-[14px] text-muted-foreground">
              {query
                ? "Nenhuma obra corresponde ao filtro."
                : "Nenhuma obra ativa neste estado no momento."}
            </p>
          ) : (
            groups.map(([tag, items]) => (
              <section key={tag} className="border-b border-line last:border-b-0">
                <header className="sticky top-0 z-[1] flex items-center justify-between gap-3 border-b border-line bg-panel-3/95 px-4 py-2 backdrop-blur-sm">
                  <span className="font-mono text-[10px] tracking-[0.12em] text-trace uppercase">
                    {tag}
                  </span>
                  <span className="font-mono text-[10px] text-muted-dim">
                    {String(items.length).padStart(2, "0")}
                  </span>
                </header>
                <ul>
                  {items.map((obra, index) => (
                    <li
                      key={`${index}-${obra.title}-${obra.detail}`}
                      className="flex items-start justify-between gap-3 border-b border-line/70 px-4 py-2.5 last:border-b-0"
                    >
                      <div className="min-w-0">
                        <div className="truncate text-[13.5px] leading-snug text-foreground">
                          {obra.title}
                        </div>
                        <div className="mt-0.5 font-mono text-[10px] text-muted-dim">
                          {obra.detail}
                        </div>
                      </div>
                      <span
                        className="mt-1.5 size-1.5 shrink-0 rounded-full bg-trace shadow-[0_0_8px_var(--trace)]"
                        aria-hidden
                      />
                    </li>
                  ))}
                </ul>
              </section>
            ))
          )}
        </div>

        {selectedState ? (
          <button
            type="button"
            className="shrink-0 border-t border-line px-4 py-3 text-left font-mono text-[11px] tracking-[0.08em] text-muted-dim uppercase transition-colors hover:text-trace"
            onClick={() => {
              setSelectedState(null);
              setQuery("");
            }}
          >
            Ver todas as obras →
          </button>
        ) : null}
      </Reveal>
    </div>
  );
}
