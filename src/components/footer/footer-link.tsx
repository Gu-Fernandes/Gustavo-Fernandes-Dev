"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { Button } from "@/components/button";

type FooterLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export default function FooterLink({
  href,
  children,
  className,
}: FooterLinkProps) {
  const isExternal =
    href.startsWith("http") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:");

  return (
    <Link
      href={href}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <Button
        variant="icon"
        className={["justify-start", className].filter(Boolean).join(" ")}
      >
        {children}
      </Button>
    </Link>
  );
}
