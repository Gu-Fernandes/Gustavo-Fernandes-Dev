"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { Button } from "@/components/button";

type FooterLinkProps = {
  href: string;
  label: string;
  children: ReactNode;
  className?: string;
};

export default function FooterLink({
  href,
  label,
  children,
  className,
}: FooterLinkProps) {
  const isExternal =
    href.startsWith("http") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:");

  return (
    <Button
      variant="icon"
      className={["justify-start", className].filter(Boolean).join(" ")}
    >
      <Link
        href={href}
        aria-label={label}
        title={label}
        {...(isExternal
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        prefetch={false}
      >
        {children}
      </Link>
    </Button>
  );
}
