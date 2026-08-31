export const navLinks = [
  { href: "#empresa", label: "Empresa" },
  { href: "#servicos", label: "Serviços" },
  { href: "#obras", label: "Obras" },
  { href: "#clientes", label: "Clientes" },
] as const;

export const heroActions = {
  primary: { href: "#servicos", label: "Ver serviços →" },
  secondary: { href: "#obras", label: "Cobertura nacional" },
} as const;

export const heroSlides = [
  {
    index: "01",
    label: "Experiência",
    titleBefore: "25 anos de ",
    titleEm: "engenharia",
    titleAfter: " a serviço da conexão.",
    description:
      "Com 25 anos de experiência a Scalar Telecom presta os mais variados serviços para o mercado de telecomunicações. sempre superando as expectativas de nossos clientes.",
    stat: { value: "25", suffix: "", label: "Anos de mercado" },
  },
  {
    index: "02",
    label: "Qualidade",
    titleBefore: "Conectamos o Brasil, ",
    titleEm: "fibra por fibra.",
    titleAfter: "",
    description:
      "Buscamos sempre a excelência em nossos serviços, estabelecendo a cada dia padrões mais altos de qualidade.",
    stat: { value: "7.000", suffix: "km+", label: "Rede óptica construída" },
  },
  {
    index: "03",
    label: "Comprometimento",
    titleBefore: "Operação ",
    titleEm: "24×7",
    titleAfter: ", em todo o território nacional.",
    description:
      "Compromisso com a técnica apurada aliado ao atendimento aos prazos estabelecidos, garantem que sua empresa esteja sempre conectada com o que há de melhor no mercado.",
    stat: { value: "24", suffix: "/7", label: "Operação contínua" },
  },
 
] as const;

export const services = [
  {
    index: "01",
    name: "Implantação",
    body: "A Scalar é especialista na construção de redes ópticas, com mais de 7.000 km de redes de fibra construídas. Cobrimos todas as etapas: projeto, licenciamento, construção e testes.",
    highlight: "7.000 km",
    tags: [
      "Projeto",
      "Licenciamento",
      "Construção",
      "Testes de rede",
      "Subterrânea",
      "Aérea",
    ],
  },
  {
    index: "02",
    name: "Manutenção",
    body: "Atuação forte no segmento de manutenção de redes ópticas aéreas e subterrâneas, com serviço 24×7 em todo o país — de uma equipe dedicada a uma operação completa e estruturada.",
    highlight: "24×7",
    tags: [
      "Operação 24×7",
      "Cobertura nacional",
      "Equipe dedicada",
      "Resposta rápida",
    ],
  },
] as const;

export { obras } from "@/lib/obras";

export const clients = [
  { name: "Claro", color: "#DA291C", logo: "/clientes/claro.png" },
  { name: "TIM", color: "#0B2C7A", logo: "/clientes/tim.png" },
  { name: "Siga Antenado", color: "#2E8B57", logo: "/clientes/siga-antenado.png" },
  { name: "Ligga", color: "#F7941D", logo: "/clientes/ligga.png" },
  { name: "Sercomtel", color: "#1B75BC", logo: "/clientes/sercomtel.png" },
  { name: "Fibrasil", color: "#2CA6A4", logo: "/clientes/fibrasil-logo.png" },
  { name: "Telebras", color: "#1D4E89", logo: "/clientes/telebras-logo.png" },
  { name: "Embratel", color: "#0057A3", logo: "/clientes/embratel.png" },
  { name: "Oi", color: "#7AC142", logo: "/clientes/oi.png" },
  { name: "Vivo", color: "#660099", logo: "/clientes/vivo.png" },
  { name: "Age Fibra", color: "#F7941D", logo: "/clientes/age.png" },
  { name: "Nokia Siemens", color: "#7B2D8E", logo: "/clientes/nokia-siemens-logo.png" },
  { name: "NEC", color: "#0033A0", logo: "/clientes/nec-logo.png" },
  { name: "Ericsson", color: "#0092C7", logo: "/clientes/ericsson-logo.png" },
  { name: "Alcatel-Lucent", color: "#1E3A8A", logo: "/clientes/alcatel-lucent.png" },
] as const;
