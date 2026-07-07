"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { maiHaven, navItems } from "@/lib/mai-haven";

const whatsappUrl = `https://wa.me/${maiHaven.whatsapp}?text=${encodeURIComponent(
  "Hallo Mai Haven Spa, ich möchte gerne einen Termin anfragen."
)}`;

export default function SiteHeader() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`mh-header${solid ? " mh-header-solid" : ""}`}>
      <Link href="#home" className="mh-brand" aria-label="Mai Haven Spa Home">
        <span className="mh-brand-mark">
          <Image src="/images/logo.png" alt="" fill sizes="56px" />
        </span>
        <span>Mai Haven Spa</span>
      </Link>
      <nav className="mh-nav" aria-label="Hauptnavigation">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <Link href={whatsappUrl} className="mh-header-cta" target="_blank" rel="noreferrer">
        Jetzt buchen
      </Link>
    </header>
  );
}
