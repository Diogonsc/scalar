/**
 * Obras por estado — edite este array para alimentar o mapa e a lista ao lado.
 *
 * stateId usa o código do SVG (ex.: BRSP = São Paulo).
 * Códigos: BRAC BRAL BRAM BRAP BRBA BRCE BRDF BRES BRGO BRMA BRMG
 *          BRMS BRMT BRPA BRPB BRPE BRPI BRPR BRRJ BRRN BRRO BRRR
 *          BRRS BRSC BRSE BRSP BRTO
 */

export type Obra = {
  tag: string;
  title: string;
  detail: string;
  /** Código do estado no mapa. Sem stateId, a obra só aparece em "todas". */
  stateId?: string;
};

export const obras: Obra[] = [
  {
    tag: "TIM",
    title: "Bauru — SP",
    detail: "Construção de rede FO",
    stateId: "BRSP",
  },
  {
    tag: "TIM",
    title: "Bragança Paulista — SP",
    detail: "Construção de rede FO",
    stateId: "BRSP",
  },
  {
    tag: "TIM",
    title: "Imperatriz — MA",
    detail: "Construção de rede FO",
    stateId: "BRMA",
  },
  {
    tag: "Siga Antenado",
    title: "São Luiz — MA",
    detail: "Construção de rede FO",
    stateId: "BRMA",
  },
  {
    tag: "Embratel",
    title: "Diversas cidades",
    detail: "Construção de rede subterrânea",
  },
  {
    tag: "Claro",
    title: "Palmas — TO",
    detail: "Construção de rede FO",
    stateId: "BRTO",
  },
  {
    tag: "Claro",
    title: "Gurupi — TO",
    detail: "Construção de rede FO",
    stateId: "BRTO",
  },
  {
    tag: "Claro",
    title: "Diversas cidades — TO",
    detail: "Construção de rede subterrânea FO",
    stateId: "BRTO",
  },
  {
    tag: "Claro",
    title: "Pqquizeiro — TO",
    detail: "Construção de rede FO",
    stateId: "BRTO",
  },
  {
    tag: "Claro",
    title: "Gurupi — TO",
    detail: "Manutenção rede GPON",
    stateId: "BRTO",
  },
  {
    tag: "Claro",
    title: "Paraíso do Tocantins — TO",
    detail: "Manutenção rede GPON",
    stateId: "BRTO",
  },
  {
    tag: "Claro",
    title: "Todo o estado — TO",
    detail: "Manutenção de Infraestrutura",
    stateId: "BRTO",
  },
  {
    tag: "Siga Antenado",
    title: "Palmas — TO",
    detail: "Construção de rede FO",
    stateId: "BRTO",
  },
  {
    tag: "Claro",
    title: "Rondonópolis — MT",
    detail: "Construção de rede FO",
    stateId: "BRMT",
  },
  {
    tag: "TIM",
    title: "Diversas cidades — MT",
    detail: "Construção de rede FO",
    stateId: "BRMT",
  },
  {
    tag: "TIM",
    title: "Cuiabá — MT",
    detail: "Construção de rede FO",
    stateId: "BRMT",
  },
  {
    tag: "Claro",
    title: "Diversas cidades — MT",
    detail: "Abordagem de Sites",
    stateId: "BRMT",
  },
  {
    tag: "Claro",
    title: "Diversas cidades — MT",
    detail: "Construção de rede FO",
    stateId: "BRMT",
  },
  {
    tag: "Siga Antenado",
    title: "São Luiz — MA",
    detail: "Construção de rede FO",
    stateId: "BRMA",
  },
];

export function obrasInState(stateId: string) {
  return obras.filter((obra) => obra.stateId === stateId);
}
