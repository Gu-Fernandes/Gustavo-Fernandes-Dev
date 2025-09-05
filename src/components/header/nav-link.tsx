"use client";

import Link from "next/link";
import { Button } from "../button";

type NavLinksProps = {
  onClick?: () => void;
};

export function NavLinks({ onClick }: NavLinksProps) {
  const links = [
    { href: "#sobre", label: "Sobre" },
    { href: "#projetos", label: "Projetos" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <ul className="flex flex-col gap-4 p-4 md:p-0 md:flex-row md:items-center">
      {links.map(({ href, label }) => (
        <li key={href}>
          <Link href={href} onClick={onClick}>
            <Button variant="icon" className="w-full justify-start">
              {label}
            </Button>
          </Link>
        </li>
      ))}
    </ul>
  );
}
