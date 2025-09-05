import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SITE } from "@/lib/constants";

/**
 * Layout raiz da aplicação (App Router).
 * Envolve todas as páginas com Header e Footer.
 */

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${SITE.name} — ${SITE.role}`,
  description: SITE.description,
  openGraph: {
    title: `${SITE.name} — ${SITE.role}`,
    description: SITE.description,
    locale: "pt_BR",
    type: "website",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header />
        <main className="container py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
