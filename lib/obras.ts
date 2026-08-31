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
  // Tocantins
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
    title: "Pequizeiro — TO",
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

  // Distrito Federal
  {
    tag: "Age Fibra",
    title: "Distrito Federal — DF",
    detail: "Construção de rede FO",
    stateId: "BRDF",
  },
  {
    tag: "TIM",
    title: "Brasília — DF",
    detail: "Construção de rede FO",
    stateId: "BRDF",
  },
  {
    tag: "Claro",
    title: "Brasília — DF",
    detail: "MDU e projetos FO",
    stateId: "BRDF",
  },
  {
    tag: "Siga Antenado",
    title: "Brasília — DF",
    detail: "Construção de rede FO",
    stateId: "BRDF",
  },

  // Goiás
  {
    tag: "Claro",
    title: "Formosa — GO",
    detail: "Construção de rede FO",
    stateId: "BRGO",
  },
  {
    tag: "Claro",
    title: "Planaltina — GO",
    detail: "Construção de rede FO",
    stateId: "BRGO",
  },
  {
    tag: "TIM",
    title: "Anápolis — GO",
    detail: "Construção de rede FO",
    stateId: "BRGO",
  },
  {
    tag: "Claro",
    title: "Valparaíso — GO",
    detail: "Construção de rede FO",
    stateId: "BRGO",
  },
  {
    tag: "Claro",
    title: "Rio Verde — GO",
    detail: "Construção de rede FO",
    stateId: "BRGO",
  },
  {
    tag: "TIM",
    title: "Aparecida de Goiânia — GO",
    detail: "Construção de rede FO",
    stateId: "BRGO",
  },
  {
    tag: "NET",
    title: "Goiânia — GO",
    detail: "Expansão de rede HFC",
    stateId: "BRGO",
  },
  {
    tag: "NET",
    title: "Goiânia — GO",
    detail: "Gigabitização de rede HFC",
    stateId: "BRGO",
  },
  {
    tag: "TIM",
    title: "Goiânia — GO",
    detail: "Construção de rede FO",
    stateId: "BRGO",
  },
  {
    tag: "TIM",
    title: "Diversas cidades — GO",
    detail: "Construção de rede FO",
    stateId: "BRGO",
  },
  {
    tag: "Claro",
    title: "Diversas cidades — GO",
    detail: "Construção de rede FO",
    stateId: "BRGO",
  },
  {
    tag: "Claro",
    title: "Todo o estado — GO",
    detail: "Manutenção de Infraestrutura",
    stateId: "BRGO",
  },
  {
    tag: "Siga Antenado",
    title: "Goiânia — GO",
    detail: "Construção de rede FO",
    stateId: "BRGO",
  },

  // Mato Grosso
  {
    tag: "Claro",
    title: "Sorriso — MT",
    detail: "Construção de rede FO",
    stateId: "BRMT",
  },
  {
    tag: "Claro",
    title: "Rondonópolis — MT",
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
    tag: "TIM",
    title: "Diversas cidades — MT",
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

  // Mato Grosso do Sul
  {
    tag: "Claro",
    title: "Campo Grande — MS",
    detail: "Construção de rede subterrânea",
    stateId: "BRMS",
  },
  {
    tag: "Claro",
    title: "Dourados — MS",
    detail: "Construção de rede subterrânea",
    stateId: "BRMS",
  },
  {
    tag: "TIM",
    title: "Campo Grande — MS",
    detail: "Construção de rede FO",
    stateId: "BRMS",
  },
  {
    tag: "Siga Antenado",
    title: "Campo Grande — MS",
    detail: "Construção de rede FO",
    stateId: "BRMS",
  },
  {
    tag: "Claro",
    title: "Todo o estado — MS",
    detail: "Manutenção de Infraestrutura",
    stateId: "BRMS",
  },

  // Maranhão
  {
    tag: "TIM",
    title: "Imperatriz — MA",
    detail: "Construção de rede FO",
    stateId: "BRMA",
  },
  {
    tag: "Siga Antenado",
    title: "São Luís — MA",
    detail: "Construção de rede FO",
    stateId: "BRMA",
  },

  // Piauí
  {
    tag: "Siga Antenado",
    title: "Teresina — PI",
    detail: "Construção de rede FO",
    stateId: "BRPI",
  },

  // Rio Grande do Norte
  {
    tag: "Siga Antenado",
    title: "Natal — RN",
    detail: "Construção de rede FO",
    stateId: "BRRN",
  },

  // Paraíba
  {
    tag: "Siga Antenado",
    title: "João Pessoa — PB",
    detail: "Construção de rede FO",
    stateId: "BRPB",
  },

  // Pernambuco
  {
    tag: "Claro",
    title: "Todo o estado — PE",
    detail: "Manutenção de rede óptica",
    stateId: "BRPE",
  },

  // Alagoas
  {
    tag: "TIM",
    title: "Arapiraca — AL",
    detail: "Construção de rede FO",
    stateId: "BRAL",
  },
  {
    tag: "TIM",
    title: "Diversas cidades — AL",
    detail: "Manutenção de rede subterrânea",
    stateId: "BRAL",
  },
  {
    tag: "Siga Antenado",
    title: "Maceió — AL",
    detail: "Construção de rede FO",
    stateId: "BRAL",
  },

  // Sergipe
  {
    tag: "TIM",
    title: "Diversas cidades — SE",
    detail: "Construção de rede subterrânea",
    stateId: "BRSE",
  },
  {
    tag: "Siga Antenado",
    title: "Aracaju — SE",
    detail: "Construção de rede FO",
    stateId: "BRSE",
  },

  // Bahia
  {
    tag: "TIM",
    title: "Diversas cidades — BA",
    detail: "Construção de rede subterrânea",
    stateId: "BRBA",
  },

  // Rondônia
  {
    tag: "Claro",
    title: "Rolim de Moura — RO",
    detail: "Construção de rede FO",
    stateId: "BRRO",
  },
  {
    tag: "Claro",
    title: "Porto Velho — RO",
    detail: "Manutenção rede GPON",
    stateId: "BRRO",
  },

  // Minas Gerais
  {
    tag: "TIM",
    title: "Varginha — MG",
    detail: "Construção de rede FO",
    stateId: "BRMG",
  },

  // Espírito Santo
  {
    tag: "Siga Antenado",
    title: "Vitória — ES",
    detail: "Construção de rede FO",
    stateId: "BRES",
  },

  // São Paulo
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
    tag: "Embratel",
    title: "Diversas cidades — SP",
    detail: "Construção de rede subterrânea",
    stateId: "BRSP",
  },

  // Paraná
  {
    tag: "Sercomtel",
    title: "Londrina — PR",
    detail: "Construção de rede FO",
    stateId: "BRPR",
  },
  {
    tag: "Ligga",
    title: "Maringá — PR",
    detail: "Construção de rede FO",
    stateId: "BRPR",
  },
  {
    tag: "Telebras",
    title: "Campo Mourão — PR",
    detail: "Construção de rede subterrânea",
    stateId: "BRPR",
  },
  {
    tag: "Telebras",
    title: "Umuarama — PR",
    detail: "Construção de rede subterrânea",
    stateId: "BRPR",
  },
  {
    tag: "Telebras",
    title: "Araucária — PR",
    detail: "Construção de rede FO",
    stateId: "BRPR",
  },
  {
    tag: "Telebras",
    title: "Londrina — PR",
    detail: "Construção de rede FO",
    stateId: "BRPR",
  },
  {
    tag: "Ligga",
    title: "Maringá e região — PR",
    detail: "Manutenção de rede óptica",
    stateId: "BRPR",
  },
  {
    tag: "Sercomtel",
    title: "Londrina e região — PR",
    detail: "Manutenção de rede óptica",
    stateId: "BRPR",
  },

  // Santa Catarina
  {
    tag: "Telebras",
    title: "Chapecó — SC",
    detail: "Construção de rede FO",
    stateId: "BRSC",
  },
  {
    tag: "Telebras",
    title: "Xanxerê — SC",
    detail: "Construção de rede FO",
    stateId: "BRSC",
  },
  {
    tag: "Telebras",
    title: "Joinville — SC",
    detail: "Construção de rede FO",
    stateId: "BRSC",
  },
  {
    tag: "Telebras",
    title: "Blumenau — SC",
    detail: "Construção de rede FO",
    stateId: "BRSC",
  },

  // Rio Grande do Sul
  {
    tag: "Fibrasil",
    title: "Carlos Barbosa — RS",
    detail: "Construção de rede FO",
    stateId: "BRRS",
  },
  {
    tag: "Telebras",
    title: "Gravataí — RS",
    detail: "Construção de rede FO",
    stateId: "BRRS",
  },
  {
    tag: "Telebras",
    title: "Canoas — RS",
    detail: "Construção de rede FO",
    stateId: "BRRS",
  },
  {
    tag: "Telebras",
    title: "Sapucaia — RS",
    detail: "Construção de rede FO",
    stateId: "BRRS",
  },
  {
    tag: "Telebras",
    title: "Porto Alegre — RS",
    detail: "Construção de rede FO",
    stateId: "BRRS",
  },
  {
    tag: "Telebras",
    title: "Santana do Livramento — RS",
    detail: "Construção de rede FO",
    stateId: "BRRS",
  },
  {
    tag: "Telebras",
    title: "Uruguaiana — RS",
    detail: "Construção de rede FO",
    stateId: "BRRS",
  },
  {
    tag: "Telebras",
    title: "Rio Grande — RS",
    detail: "Construção de rede FO",
    stateId: "BRRS",
  },
  {
    tag: "Telebras",
    title: "Bento Gonçalves — RS",
    detail: "Construção de rede FO",
    stateId: "BRRS",
  },
  {
    tag: "Telebras",
    title: "Farroupilha — RS",
    detail: "Construção de rede FO",
    stateId: "BRRS",
  },
];

export function obrasInState(stateId: string) {
  return obras.filter((obra) => obra.stateId === stateId);
}
