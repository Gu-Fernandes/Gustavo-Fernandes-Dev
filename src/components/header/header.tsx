"use client";

import Link from "next/link";
import { SITE } from "@/lib/constants";
import { useHeaderMenu } from "./use-header-menu";
import { NavLinks } from "./nav-link";
import { MobileMenu } from "./mobile-menu";
import MenuToggle from "./menu-toogle";

export default function Header() {
  const { open, toggle, close } = useHeaderMenu();

  return (
    <header className="w-full">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo/Nome */}
        <Link href="/" className="font-semibold ">
          {SITE.name}
        </Link>

        {/* Desktop */}
        <nav className="hidden md:block">
          <NavLinks />
        </nav>

        {/* Mobile: botão hambúrguer (componentizado) */}
        <MenuToggle open={open} onToggle={toggle} />
      </div>

      {/* Drawer Mobile */}
      {open && (
        <div id="mobile-menu">
          <MobileMenu onClose={close} />
        </div>
      )}
    </header>
  );
}
