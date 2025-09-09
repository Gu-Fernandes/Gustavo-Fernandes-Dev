"use client";

import Link from "next/link";
import { SITE } from "@/lib/constants";
import { useHeaderMenu } from "./use-header-menu";
import { NavLinks } from "./nav-link";
import { MobileMenu } from "./mobile-menu";
import MenuToggle from "./menu-toogle";

import {
  motion,
  AnimatePresence,
  cubicBezier,
  type Variants,
} from "framer-motion";

const easeOutCustom = cubicBezier(0.22, 1, 0.36, 1);

/** Reuso: estados padrão de animação e styles */
const ANIM = { initial: "hidden", animate: "visible" } as const;
const WILL_CHANGE_FADE = { willChange: "transform, opacity" } as const;

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0.15, staggerChildren: 0.12 },
  },
};

const fade: Variants = {
  hidden: { opacity: 0, y: -24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 3, ease: easeOutCustom },
  },
};

const drawer: Variants = {
  hidden: { opacity: 0, y: -24, height: 0, pointerEvents: "none" },
  visible: {
    opacity: 1,
    y: 0,
    height: "auto",
    pointerEvents: "auto",
    transition: { duration: 1, ease: easeOutCustom },
  },
};

export default function Header() {
  const { open, toggle, close } = useHeaderMenu();

  return (
    <motion.header className="w-full" variants={container} {...ANIM}>
      <div className="container flex h-16 items-center justify-between">
        {/* Logo (esquerda) */}
        <motion.span variants={fade} style={WILL_CHANGE_FADE}>
          <Link href="/" className="font-semibold">
            {SITE.name}
          </Link>
        </motion.span>

        {/* Navegação desktop (direita) */}
        <motion.nav
          className="hidden md:block md:ml-auto"
          variants={fade}
          style={WILL_CHANGE_FADE}
        >
          <NavLinks />
        </motion.nav>

        {/* Botão hambúrguer (mobile) */}
        <motion.div
          className="md:hidden"
          variants={fade}
          style={WILL_CHANGE_FADE}
        >
          <MenuToggle open={open} onToggle={toggle} />
        </motion.div>
      </div>

      {/* Drawer Mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            variants={drawer}
            {...ANIM}
            exit="hidden"
            style={{ willChange: "transform, opacity, height" }}
          >
            <MobileMenu onClose={close} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
