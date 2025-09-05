"use client";

import { Button } from "@/components/button";
import { Menu, X } from "lucide-react";

type MenuToggleProps = {
  open: boolean;
  onToggle: () => void;
  className?: string;
};

export default function MenuToggle({
  open,
  onToggle,
  className = "",
}: MenuToggleProps) {
  const Icon = open ? X : Menu;
  const label = open ? "Fechar menu" : "Abrir menu";

  return (
    <Button
      variant="default"
      className={`md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg ${className}`}
      onClick={onToggle}
      aria-expanded={open}
      aria-controls="mobile-menu"
      aria-label={label}
      title={label}
    >
      <Icon width={22} height={22} aria-hidden="true" />
    </Button>
  );
}
