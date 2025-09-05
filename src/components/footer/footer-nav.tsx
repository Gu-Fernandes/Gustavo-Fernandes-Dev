import { SITE } from "@/lib/constants";
import FooterLink from "./footer-link";

type FooterNavProps = {
  className?: string;
};

export default function FooterNav({ className }: FooterNavProps) {
  const links = [
    { href: SITE.github, label: "GitHub" },
    { href: SITE.linkedin, label: "LinkedIn" },
    { href: `mailto:${SITE.email}`, label: SITE.email },
  ];

  return (
    <nav
      className={["flex flex-wrap items-center gap-4", className]
        .filter(Boolean)
        .join(" ")}
    >
      {links.map(({ href, label }) => (
        <FooterLink key={href} href={href}>
          {label}
        </FooterLink>
      ))}
    </nav>
  );
}
