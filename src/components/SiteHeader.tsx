"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Menu, X } from "lucide-react";
import { getWhatsappBookingUrl, navItems } from "@/lib/mai-haven";

const whatsappUrl = getWhatsappBookingUrl();

export default function SiteHeader() {
  const [solid, setSolid] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <>
      <header className={`mh-header${solid || menuOpen ? " mh-header-solid" : ""}`}>
        <Link href="#home" className="mh-brand" aria-label="Mai Haven Spa Home" onClick={() => setMenuOpen(false)}>
          <span className="mh-brand-mark">
            <Image src="/images/logo.png" alt="" fill sizes="56px" />
          </span>
          <span>Mai Haven Spa</span>
        </Link>
        <nav id="mobile-navigation" className={`mh-nav${menuOpen ? " mh-nav-open" : ""}`} aria-label="Hauptnavigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </Link>
          ))}
        </nav>
        <a href={whatsappUrl} className="mh-header-cta" target="_blank" rel="noopener noreferrer">
          Jetzt buchen
        </a>
        <button
          type="button"
          className="mh-menu-toggle"
          aria-label={menuOpen ? "Navigation schließen" : "Navigation öffnen"}
          aria-controls="mobile-navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </header>
      <a
        href={whatsappUrl}
        className="mh-mobile-booking"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Jetzt Termin über WhatsApp buchen"
      >
        <CalendarDays aria-hidden="true" />
        Jetzt buchen
      </a>
    </>
  );
}
