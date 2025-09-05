"use client";

import { NavLinks } from "./nav-link";

type MobileMenuProps = {
  onClose: () => void;
};

export function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <div className=" border rounded-2xl bg-background md:hidden">
      <nav className="container">
        <NavLinks onClick={onClose} />
      </nav>
    </div>
  );
}
