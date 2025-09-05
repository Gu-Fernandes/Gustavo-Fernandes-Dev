"use client";

import { SITE } from "@/lib/constants";
import { Button } from "@/components/button";
import { Mail, MessageCircle } from "lucide-react";

export default function ContactSection() {
  const waNumber = SITE.whatsapp?.replace(/\D/g, "") ?? "";

  const waText = encodeURIComponent(
    "Olá, Gustavo! Vim pelo site do seu portfólio e gostaria de conversar."
  );

  return (
    <section id="contato" className="py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-semibold tracking-tight">
          Vamos conversar?
        </h2>

        <p className="mt-3">
          Está trabalhando em algo interessante? Me escreva e vamos trocar uma
          ideia.
        </p>

        <div className="mt-6 flex justify-center gap-3">
          {/* E-mail */}
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

          {/* WhatsApp */}
          <Button
            variant="outline"
            icon={<MessageCircle className="h-4 w-4" aria-hidden="true" />}
          >
            <a
              href={`https://wa.me/${waNumber}?text=${waText}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
