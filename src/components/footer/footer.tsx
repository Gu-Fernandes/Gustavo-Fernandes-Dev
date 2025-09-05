import FooterCopyright from "./footer-copy-rigth";
import FooterNav from "./footer-nav";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200/50 dark:border-zinc-800/50">
      <div className="container py-10 text-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <Copyright />
          <FooterNav />
        </div>
      </div>
    </footer>
  );
}

function Copyright() {
  return <FooterCopyright />;
}
