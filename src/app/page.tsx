import Link from "next/link";
import { SITE } from "@/lib/constants";
import { Button } from "@/components/button";
import { Mail } from "lucide-react";
import { Project } from "@/types/project.type";

const projects: Project[] = [
  {
    title: "infoCripto",
    description: "Sistema Web, responsivo e educacional sobre criptomoedas.",
    stack: ["Next.js", "Tailwind", "Python"],
    href: "https://github.com/seuusuario/projeto-a",
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

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section id="sobre" className="py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Olá, eu sou {SITE.name} —{" "}
            <span className="text-zinc-500">{SITE.role}</span>
          </h1>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            {SITE.description} Aqui você encontra uma seleção dos meus
            principais trabalhos, tecnologias que utilizo e formas de contato.
          </p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <Link
              href="#projetos"
              className="rounded-md bg-zinc-900 px-4 py-2 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              Ver projetos
            </Link>
          </div>
        </div>
      </section>

      {/* PROJETOS */}
      <section id="projetos" className="space-y-6 py-8">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">
            Projetos em destaque
          </h2>
          <span className="text-sm text-zinc-500">
            {projects.length} projetos
          </span>
        </div>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <li
              key={p.title}
              className="group rounded-xl border border-zinc-200/60 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800/60 dark:bg-zinc-950"
            >
              <div className="flex flex-col gap-3">
                <h3 className="text-lg font-medium">{p.title}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {p.description}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <li
                      key={s}
                      className="rounded-full border px-2.5 py-0.5 text-xs text-zinc-600 dark:border-zinc-700 dark:text-zinc-300"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
                <div>
                  <Link
                    href={p.href}
                    target="_blank"
                    className="inline-block rounded-md border px-3 py-1.5 text-sm hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
                    aria-label={`Abrir ${p.title} no GitHub`}
                  >
                    Ver no GitHub →
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* CONTATO */}
      <section id="contato" className="py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight">
            Vamos conversar?
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400">
            Está trabalhando em algo interessante? Me escreva e vamos trocar uma
            ideia.
          </p>
          <div className="mt-6 flex justify-center">
            <Button
              variant="outline"
              aria-label={`Enviar e-mail para ${SITE.name}`}
              icon={<Mail className="h-4 w-4" aria-hidden="true" />}
            >
              <a href={`mailto:${SITE.email}`}>Enviar e-mail</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
