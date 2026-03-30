"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Footer() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  return (
    <footer className="footer">
      <div className="container footerInner">
        <div className="footerCopy">
          © {new Date().getFullYear()} Berber Spirit Tours.{" "}
          {isEnglish ? "All rights reserved." : "Todos os direitos reservados."}
        </div>
      </div>
    </footer>
  );
}