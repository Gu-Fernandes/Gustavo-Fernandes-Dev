import { SITE } from "@/lib/constants";

type FooterCopyrightProps = {
  className?: string;
  year?: number;
};

export default function FooterCopyright({
  className,
  year,
}: FooterCopyrightProps) {
  const displayYear = year ?? new Date().getFullYear();
  return (
    <p className={["text-zinc-500", className].filter(Boolean).join(" ")}>
      © {displayYear} {SITE.name}. Todos os direitos reservados.
    </p>
  );
}
