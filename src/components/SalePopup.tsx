"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, X } from "lucide-react";
import { getWhatsappBookingUrl } from "@/lib/mai-haven";

const whatsappUrl = getWhatsappBookingUrl("50 % Rabatt-Aktion");

export default function SalePopup() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setOpen(false), 7000);
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  if (!open) return null;

  return (
    <div className="mh-sale-overlay">
      <section
        className="mh-sale-popup"
        role="dialog"
        aria-modal="true"
        aria-labelledby="sale-popup-title"
      >
        <button
          type="button"
          className="mh-sale-close"
          aria-label="Angebot schließen"
          onClick={() => setOpen(false)}
          autoFocus
        >
          <X aria-hidden="true" />
        </button>

        <div className="mh-sale-media" aria-hidden="true">
          <Image
            src="/images/mai-haven/sale-september-head-spa-wide-v3.png"
            alt=""
            fill
            priority
            sizes="(max-width: 900px) 520px, 720px"
          />
        </div>

        <div className="mh-sale-content">
          <p className="mh-sale-label">September Special</p>
          <p className="mh-sale-discount"><strong>50</strong><span>%</span></p>
          <h2 id="sale-popup-title">Rabatt auf alle Behandlungen</h2>
          <p className="mh-sale-validity">Gültig ab sofort bis 30. September</p>
          <a
            href={whatsappUrl}
            className="mh-sale-action"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            Termin sichern
            <ArrowRight aria-hidden="true" />
          </a>
          <small>Nur für kurze Zeit</small>
        </div>

        <span className="mh-sale-timer" aria-hidden="true" />
      </section>
    </div>
  );
}
