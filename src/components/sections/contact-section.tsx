"use client";

import { SITE } from "@/lib/constants";
import { Button } from "@/components/button";
import { Mail } from "lucide-react";

export default function ContactSection() {
  return (
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
          {/* Button como <a> usando asChild */}
          <Button
            variant="outline"
            icon={<Mail className="h-4 w-4" aria-hidden="true" />}
          >
            <a
              href={`mailto:${SITE.email}`}
              aria-label={`Enviar e-mail para ${SITE.name}`}
            >
              Enviar e-mail
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
