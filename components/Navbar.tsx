"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const slugMapPtToEn: Record<string, string> = {
  "marrakech-deserto": "marrakech-desert",
  "cidades-imperiais": "imperial-cities",
  "marrocos-completo": "complete-morocco",
};

const slugMapEnToPt: Record<string, string> = {
  "marrakech-desert": "marrakech-deserto",
  "imperial-cities": "cidades-imperiais",
  "complete-morocco": "marrocos-completo",
};

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const pathname = usePathname();

  const isEnglish = pathname.startsWith("/en");
  const isHomePage = pathname === "/pt" || pathname === "/en";

  useEffect(() => {
    if (!isHomePage) {
      setShowNavbar(true);
      return;
    }

    const handleScroll = () => {
      setShowNavbar(window.scrollY > window.innerHeight * 0.7);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const homeLink = isEnglish ? "/en" : "/pt";
  const toursLink = isEnglish ? "/en#tours" : "/pt#circuitos";
  const contactLink = isEnglish ? "/en#contact" : "/pt#contacto";

  let switchLanguageLink = isEnglish ? "/pt" : "/en";

  if (pathname.startsWith("/pt/circuitos/")) {
    const slug = pathname.replace("/pt/circuitos/", "");
    const englishSlug = slugMapPtToEn[slug] || slug;
    switchLanguageLink = `/en/circuits/${englishSlug}`;
  } 
  else if (pathname.startsWith("/en/circuits/")) {
    const slug = pathname.replace("/en/circuits/", "");
    const portugueseSlug = slugMapEnToPt[slug] || slug;
    switchLanguageLink = `/pt/circuitos/${portugueseSlug}`;
  }

  return (
    <header className={`navbar ${showNavbar ? "navbarVisible" : "navbarHidden"}`}>
      <div className="container navbarInner">
        <Link href={homeLink} className="logo">
          Berber Spirit Tours
        </Link>

        <div className="navRight">
          <nav className="navLinks">
            <Link href={homeLink}>{isEnglish ? "Home" : "Início"}</Link>
            <Link href={toursLink}>{isEnglish ? "Tours" : "Circuitos"}</Link>
            <Link href={contactLink}>{isEnglish ? "Contact" : "Contacto"}</Link>
          </nav>

          <div className="langSwitch">
            <Link href={switchLanguageLink} className="langButton">
              {isEnglish ? (
                <>
                  <img
                    src="https://flagcdn.com/w20/pt.png"
                    alt="Português"
                    className="flag"
                  />
                  PT
                </>
              ) : (
                <>
                  <img
                    src="https://flagcdn.com/w20/gb.png"
                    alt="English"
                    className="flag"
                  />
                  EN
                </>
              )}
            </Link>
          </div>
        </div>

        <Link href={contactLink} className="navButton">
          {isEnglish ? "Request a quote" : "Pedir orçamento"}
        </Link>
      </div>
    </header>
  );
}