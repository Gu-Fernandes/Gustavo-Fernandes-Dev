import { Project } from "@/types/project.type";

export const projects: Project[] = [
  {
    title: "infoCripto",
    description:
      "Sistema Web, responsivo e educacional sobre o mundo das criptomoedas.",
    stack: ["Next.js", "Tailwind", "Python"],
    href: "https://pfc-si.vercel.app/",
  },
  {
    title: "Projeto B",
    description: "Dashboard de dados com gráficos e integração de API pública.",
    stack: ["Next.js", "React Query", "Chart.js"],
    href: "https://github.com/seuusuario/projeto-b",
  },
  {
    title: "Projeto C",
    description:
      "Landing page performática com SEO e testes de acessibilidade.",
    stack: ["Next.js", "Tailwind", "Lighthouse"],
    href: "https://github.com/seuusuario/projeto-c",
  },
];
