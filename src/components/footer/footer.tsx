import FooterCopyright from "./footer-copy-rigth";
import FooterNav from "./footer-nav";

export default function Footer() {
  return (
    <footer className="border-t border-gray-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 text-sm">
        {/* Uma coluna em todas as telas, itens centralizados */}
        <div className="grid grid-cols-1 gap-4 sm:gap-6 place-items-center">
          {/* Links acima e centralizados */}
          <nav
            className="w-full flex justify-center"
            aria-label="Links do rodapé"
          >
            {/* Scroll horizontal só se precisar (ex.: muitos links) */}
            <div className="w-full max-w-full overflow-x-auto px-2 sm:px-0">
              <FooterNav />
            </div>
          </nav>

          {/* Copyright abaixo e centralizado */}
          <div className="text-center">
            <Copyright />
          </div>
        </div>
      </div>
    </footer>
  );
}

function Copyright() {
  return <FooterCopyright />;
}
