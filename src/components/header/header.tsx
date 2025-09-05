"use client";

import Link from "next/link";
import { SITE } from "@/lib/constants";
import { Button } from "../button";
import { useHeaderMenu } from "./use-header-menu";
import { NavLinks } from "./nav-link";
import { MobileMenu } from "./mobile-menu";

export default function Header() {
  const { open, toggle, close } = useHeaderMenu();

  return (
    <header className=" w-full">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo/Nome */}
        <Link href="/" className="font-semibold">
          {SITE.name}
        </Link>

        {/* Desktop */}
        <nav className="hidden md:block">
          <NavLinks />
        </nav>

        {/* Mobile: botão hambúrguer */}
        <Button
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border"
          onClick={toggle}
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
            // Ícone hambúrguer
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
      {open && <MobileMenu onClose={close} />}
    </header>
  );
}
