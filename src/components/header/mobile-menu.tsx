"use client";

import { NavLinks } from "./nav-link";

type MobileMenuProps = {
  onClose: () => void;
};

export function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <div className="border-t border-zinc-200/50 bg-white dark:border-zinc-800/50 dark:bg-zinc-950 md:hidden">
      <nav className="container">
        <NavLinks onClick={onClose} />
      </nav>
    </div>
  );
}
