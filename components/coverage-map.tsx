"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { stateLabel } from "@/lib/mapdata";
import { obras, obrasInState, type Obra } from "@/lib/obras";
import { cn } from "@/lib/utils";

const MAP_SRC = "/maps/brazil.svg";

type Tooltip = {
  x: number;
  y: number;
  title: string;
  obras: Obra[];
};

export function CoverageMap({
  selectedState,
  onSelectState,
  onHoverState,
}: {
  selectedState: string | null;
  onSelectState: (stateId: string | null) => void;
  onHoverState?: (stateId: string | null) => void;
}) {
  const mapRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [tooltip, setTooltip] = useState<Tooltip | null>(null);

  const applyStateStyles = useCallback(
    (root: HTMLElement) => {
      const activeIds = new Set<string>();
      for (const obra of obras) {
        if (obra.stateId) activeIds.add(obra.stateId);
      }
      root.querySelectorAll<SVGPathElement>("#features path[id]").forEach((path) => {
        const isActive = activeIds.has(path.id);
        const isSelected = selectedState === path.id;
        path.dataset.active = isActive ? "true" : "false";
        path.dataset.selected = isSelected ? "true" : "false";
        path.setAttribute("tabindex", "0");
        path.setAttribute("role", "button");
        path.setAttribute(
          "aria-label",
          path.getAttribute("name") ?? stateLabel(path.id),
        );
      });
    },
    [selectedState],
  );

  useEffect(() => {
    const container = mapRef.current;
    if (!container) return;

    let cancelled = false;

    async function load() {
      const response = await fetch(MAP_SRC);
      const svg = await response.text();
      if (cancelled || !container) return;

      container.innerHTML = svg;
      const root = container.querySelector("svg");
      if (!root) return;

      root.removeAttribute("width");
      root.removeAttribute("height");
      root.setAttribute("width", "100%");
      root.setAttribute("preserveAspectRatio", "xMidYMid meet");
      root.setAttribute("role", "img");
      root.setAttribute("aria-label", "Mapa de cobertura do Brasil");
      root.querySelector("#points")?.remove();
      root.querySelector("#label_points")?.remove();

      const features = root.querySelector("#features");
      if (features instanceof SVGGraphicsElement) {
        const box = features.getBBox();
        const pad = 10;
        root.setAttribute(
          "viewBox",
          `${box.x - pad} ${box.y - pad} ${box.width + pad * 2} ${box.height + pad * 2}`,
        );
      } else {
        root.setAttribute(
          "viewBox",
          root.getAttribute("viewBox") ?? "0 0 1000 912",
        );
      }
      setReady(true);
    }

    void load();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const container = mapRef.current;
    if (!container || !ready) return;
    applyStateStyles(container);
  }, [applyStateStyles, ready, selectedState]);

  useEffect(() => {
    const mapEl = mapRef.current;
    if (!mapEl || !ready) return;
    const root = mapEl;
    const wrap = wrapRef.current;

    function pathFromEvent(event: Event) {
      const target = event.target as Element | null;
      return target?.closest<SVGPathElement>("#features path[id]") ?? null;
    }

    function showTooltip(path: SVGPathElement, event: MouseEvent) {
      if (!wrap) return;
      const rect = wrap.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const maxW = Math.min(280, rect.width - 16);
      setTooltip({
        x: Math.max(8, Math.min(x + 14, rect.width - maxW - 8)),
        y: Math.max(8, y + 14),
        title: path.getAttribute("name") ?? stateLabel(path.id),
        obras: obrasInState(path.id),
      });
    }

    function onClick(event: Event) {
      const path = pathFromEvent(event);
      if (!path) return;
      onSelectState(selectedState === path.id ? null : path.id);
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "Enter" && event.key !== " ") return;
      const path = pathFromEvent(event);
      if (!path) return;
      event.preventDefault();
      onSelectState(selectedState === path.id ? null : path.id);
    }

    function onMove(event: MouseEvent) {
      const path = pathFromEvent(event);
      if (!path || !wrap) {
        setTooltip(null);
        onHoverState?.(null);
        return;
      }
      onHoverState?.(path.id);
      showTooltip(path, event);
    }

    function onLeave() {
      setTooltip(null);
      onHoverState?.(null);
    }

    root.addEventListener("click", onClick);
    root.addEventListener("keydown", onKeyDown);
    root.addEventListener("mousemove", onMove);
    root.addEventListener("mouseleave", onLeave);

    return () => {
      root.removeEventListener("click", onClick);
      root.removeEventListener("keydown", onKeyDown);
      root.removeEventListener("mousemove", onMove);
      root.removeEventListener("mouseleave", onLeave);
    };
  }, [onHoverState, onSelectState, ready, selectedState]);

  return (
    <div
      ref={wrapRef}
      className="relative max-[980px]:mx-[calc(8px-clamp(20px,5vw,72px))]"
    >
      {!ready ? (
        <div className="flex aspect-1000/912 min-h-[280px] items-center justify-center border border-line-strong bg-panel-3 font-mono text-[11px] tracking-[0.08em] text-muted-dim uppercase min-[981px]:min-h-[640px]">
          Carregando mapa…
        </div>
      ) : null}
      <div
        id="map"
        ref={mapRef}
        className={cn("coverage-map", !ready && "hidden")}
      />
      {tooltip ? (
        <div
          className="pointer-events-none absolute z-10 w-[min(280px,calc(100%-24px))] border border-line-strong bg-panel-3/95 px-3 py-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.35)] backdrop-blur-sm"
          style={{
            left: tooltip.x,
            top: tooltip.y,
          }}
        >
          <div className="font-heading text-sm font-extrabold">{tooltip.title}</div>
          {tooltip.obras.length === 0 ? (
            <p className="mt-1 font-mono text-[10px] tracking-[0.06em] text-muted-dim uppercase">
              Sem obras ativas neste estado
            </p>
          ) : (
            <ul className="mt-2 flex flex-col gap-2">
              {tooltip.obras.map((obra, index) => (
                <li key={`${index}-${obra.tag}-${obra.title}-${obra.detail}`}>
                  <div className="font-mono text-[9px] tracking-[0.08em] text-trace uppercase">
                    {obra.tag}
                  </div>
                  <div className="text-[13px] leading-tight text-foreground">
                    {obra.title}
                  </div>
                  <div className="font-mono text-[10px] text-muted-dim">
                    {obra.detail}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : null}
    </div>
  );
}
