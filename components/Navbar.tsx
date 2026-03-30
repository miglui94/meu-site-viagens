"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Se NÃO for homepage → mostrar logo
    if (pathname !== "/") {
      setShowNavbar(true);
      return;
    }

    const handleScroll = () => {
      setShowNavbar(window.scrollY > window.innerHeight * 0.7);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <header className={`navbar ${showNavbar ? "navbarVisible" : "navbarHidden"}`}>
      <div className="container navbarInner">
        <a href="#" className="logo">
          MoroccoDream
        </a>

        <nav className="navLinks">
          <a href="#">Início</a>
          <a href="#circuitos">Circuitos</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <a href="#contacto" className="navButton">
          Pedir orçamento
        </a>
      </div>
    </header>
  );
}