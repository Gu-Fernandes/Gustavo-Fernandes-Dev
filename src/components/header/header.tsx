"use client";

import Link from "next/link";
import { useState } from "react";
import { SITE } from "@/lib/constants";
import { Button } from "../button";

export default function Header() {
  const [open, setOpen] = useState(false);

  const NavLinks = () => (
    <ul className="flex flex-col gap-4 p-4 md:p-0 md:flex-row md:items-center">
      <li>
        <Link
          href="#sobre"
          className="inline-block px-2 py-1 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800"
          onClick={() => setOpen(false)}
        >
          Sobre
        </Link>
      </li>
      <li>
        <Link
          href="#projetos"
          className="inline-block px-2 py-1 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800"
          onClick={() => setOpen(false)}
        >
          Projetos
        </Link>
      </li>
      <li>
        <Link
          href="#contato"
          className="inline-block px-2 py-1 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800"
          onClick={() => setOpen(false)}
        >
          Contato
        </Link>
      </li>
    </ul>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/50 bg-white/70 backdrop-blur dark:border-zinc-800/50 dark:bg-zinc-950/70">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo/Nome */}
        <Link href="/" className="font-semibold tracking-tight">
          {SITE.name} <span className="text-zinc-500">/ {SITE.role}</span>
        </Link>

        {/* Desktop */}
        <nav className="hidden md:block">
          <NavLinks />
        </nav>

        {/* Mobile: botão hambúrguer */}
        <Button
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            // Ícone "X"
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
              <path
                d="M6 6l12 12M18 6l-12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            // Ícone hambúrguer (três linhas)
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
              <path
                d="M3 6h18M3 12h18M3 18h18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
          <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
        </Button>
      </div>

      {/* Drawer Mobile */}
      {open && (
        <div className="border-t border-zinc-200/50 bg-white dark:border-zinc-800/50 dark:bg-zinc-950 md:hidden">
          <nav className="container">
            <NavLinks />
          </nav>
        </div>
      )}
    </header>
  );
}
