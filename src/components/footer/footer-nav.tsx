"use client";

import { SITE } from "@/lib/constants";
import { Github, Linkedin, Mail } from "lucide-react";
import FooterLink from "./footer-link";

type FooterNavProps = {
  className?: string;
};

export default function FooterNav({ className }: FooterNavProps) {
  const links = [
    { href: SITE.github, label: "GitHub", Icon: Github },
    { href: SITE.linkedin, label: "LinkedIn", Icon: Linkedin },
    { href: `mailto:${SITE.email}`, label: "Enviar e-mail", Icon: Mail },
  ];

  return (
    <nav
      className={["flex flex-wrap items-center gap-4", className]
        .filter(Boolean)
        .join(" ")}
    >
      {links.map(({ href, label, Icon }) => (
        <FooterLink key={href} href={href} label={label}>
          <Icon className="h-5 w-5" aria-hidden />
        </FooterLink>
      ))}
    </nav>
  );
}
