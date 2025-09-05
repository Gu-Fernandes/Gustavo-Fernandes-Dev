import Link from "next/link";
import { SITE } from "@/lib/constants";

/**
 * Rodapé simples com créditos e links sociais.
 */
export default function Footer() {
  return (
    <footer className="border-t border-zinc-200/50 dark:border-zinc-800/50">
      <div className="container py-10 text-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-zinc-500">
            © {new Date().getFullYear()} {SITE.name}. Todos os direitos
            reservados.
          </p>
          <nav className="flex flex-wrap items-center gap-4">
            <Link
              className="hover:underline"
              href={SITE.github}
              target="_blank"
            >
              GitHub
            </Link>
            <Link
              className="hover:underline"
              href={SITE.linkedin}
              target="_blank"
            >
              LinkedIn
            </Link>
            <Link className="hover:underline" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
