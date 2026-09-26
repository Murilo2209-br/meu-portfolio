export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  techs: string[];
  image: string;
  github?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "lista-de-tarefas",
    title: "Lista de Tarefas",
    shortDescription: "To-do list com salvamento automático no navegador.",
    fullDescription: "App de gerenciamento de tarefas feito em Next.js. Permitecriar, concluir e excluir tarefas, com persistência via localStorage.",
    techs: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/projetos/lista-de-tarefas.jpg",
    github: "https://github.com/Murilo2209-br/lista-de-tarefas",
    liveUrl: "https://lista-de-tarefas-iota-eight-75.vercel.app/",
  },
  {
  slug: "app-do-clima",
  title: "App do Clima",
  shortDescription: "Consulta o clima atual de qualquer cidade em tempo real.",
  fullDescription: "Aplicação que busca dados climáticos em tempo real através da API Open-Meteo. Trata erros de cidade não encontrada e exibe temperatura, condição do tempo e velocidade do vento.",
  techs: ["Next.js", "TypeScript", "API pública"],
  image: "/projetos/app-do-clima.jpg",
  github: "https://github.com/Murilo2209-br/app-do-clima",
  liveUrl: "https://app-do-clima-seven.vercel.app/",
  },
    {
  slug: "landing-page",
  title: "Landing Page Responsiva",
  shortDescription: "Página de apresentação de produto com animações e layout 100% responsivo.",
  fullDescription: "Landing page fictícia para um app de produtividade, com seções de hero, funcionalidades e call-to-action. Animações de entrada com Framer Motion e layout totalmente responsivo com Tailwind CSS.",
  techs: ["Next.js", "Tailwind CSS", "Framer Motion"],
  image: "/projetos/landing-page.jpg",
  github: "https://github.com/Murilo2209-br/landing-page",
  liveUrl: "https://landing-page-lilac-gamma-37.vercel.app/",
  },
    {
  slug: "quiz-interativo",
  title: "Quiz Interativo",
  shortDescription: "Quiz de múltipla escolha com 5 categorias e sistema de pontuação.",
  fullDescription: "Aplicação de quiz com fluxo completo de telas: identificação do jogador, seleção de categoria, 10 perguntas por categoria (1 ponto cada) e tela de resultado final. Permite jogar múltiplas vezes sem repetir a identificação.",
  techs: ["Next.js", "TypeScript", "Tailwind CSS"],
  image: "/projetos/quiz-interativo.jpg",
  github: "https://github.com/Murilo2209-br/quiz-interativo",
  liveUrl: "https://quiz-interativo-pink-chi.vercel.app/",
  },
];