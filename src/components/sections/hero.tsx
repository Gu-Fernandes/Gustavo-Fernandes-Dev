"use client";

import Link from "next/link";
import { SITE } from "@/lib/constants";
import { Button } from "@/components/button";

export default function Hero() {
  return (
    <section id="sobre" className="py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Olá, eu sou {SITE.name} —{" "}
          <span className="text-primary">{SITE.role}</span>
        </h1>

        <p className="m-5">
          {SITE.description} Aqui você encontra uma seleção dos meus principais
          trabalhos, tecnologias que utilizo e formas de contato.
        </p>

        <div className="mt-6 flex items-center justify-center gap-3">
          <Button>
            <Link href="#projetos" title="Ir para a seção de projetos">
              Ver projetos
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
