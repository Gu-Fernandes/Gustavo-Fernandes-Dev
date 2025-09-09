"use client";

import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import { Button } from "@/components/button";

export default function Hero() {
  return (
    <section id="sobre" className="py-16">
      <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Texto */}
        <div className="text-center md:text-left max-w-3xl mx-auto md:mx-0">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Olá, eu sou {SITE.name} —{" "}
            <span className="text-primary">{SITE.role}</span>
          </h1>

          <p className="mx-5 my-5 md:mx-0">
            {SITE.description} Aqui você encontra uma seleção dos meus
            principais trabalhos, tecnologias que utilizo e formas de contato.
          </p>

          <div className="mt-6 flex items-center justify-center md:justify-start gap-3">
            <Link href="#projetos" title="Ir para a seção de projetos">
              <Button>Ver projetos</Button>
            </Link>
          </div>
        </div>

        {/* Imagem com hover colorido */}
        <div className="flex justify-center md:justify-end">
          <div className="group relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[400px] md:h-[400px] rounded-3xl shadow-lg overflow-hidden border-t-2 border-b-[5px] border-t-primary border-b-primary border-l-primary">
            <Image
              src="/images/img-gu-color.jpg"
              alt={`Foto de ${SITE.name}`}
              fill
              sizes="(min-width: 768px) 400px, 80vw"
              className="object-cover select-none img-no-drag transition duration-300 ease-out grayscale group-hover:grayscale-0"
              priority
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
