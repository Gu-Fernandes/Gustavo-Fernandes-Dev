"use client";

import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import { Button } from "@/components/button";

const GRID =
  "mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-10 md:gap-y-0 md:items-start";

const COL = "text-center md:text-left max-w-3xl mx-auto md:mx-0";

const PHOTO_WRAPPER =
  "group relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[400px] md:h-[400px] rounded-3xl shadow-lg overflow-hidden border-t-2 border-b-[5px] border-t-primary border-b-primary border-l-primary";

export default function Hero() {
  return (
    <section id="sobre" className="py-16">
      <div className={GRID}>
        {/* 1) Apresentação */}
        <div
          className={`order-1 md:order-none md:col-start-1 md:row-start-1 md:mt-12 lg:mt-16 ${COL}`}
        >
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Olá, eu sou {SITE.name} —{" "}
            <span className="text-primary">{SITE.role}</span>
          </h1>
        </div>

        {/* 2) Foto */}
        <div className="order-2 md:order-none md:col-start-2 md:row-start-1 md:row-span-2 flex justify-center md:justify-end">
          <div className={PHOTO_WRAPPER}>
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

        {/* 3) Texto + botão */}
        <div
          className={`order-3 md:order-none md:col-start-1 md:row-start-2 ${COL}`}
        >
          <p className="m-5 md:mx-0 md:mt-2 md:mb-0">
            {SITE.description} Aqui você encontra uma seleção dos meus
            principais trabalhos, tecnologias que utilizo e formas de contato.
          </p>

          <div className="mt-6 flex items-center justify-center md:justify-start gap-3">
            <Link href="#projetos" title="Ir para a seção de projetos">
              <Button>Ver projetos</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
