import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import TestimonialsList from "@/components/TestimonialsList";
import {
  ArrowRight,
  CalendarCheck,
  Camera,
  Check,
  Clock,
  Gift,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
} from "lucide-react";
import {
  faqs,
  galleryImages,
  getWhatsappBookingUrl,
  maiHaven,
  services,
  wellnessTogether,
} from "@/lib/mai-haven";

const whatsappUrl = getWhatsappBookingUrl();

const signatureTreatments = [
  {
    name: "Head Spa",
    eyebrow: "Kopfhaut & Haar",
    image: "/images/mai-haven/head-spa.png",
    href: "#service-head-spa",
    price: "ab 60 €",
    duration: "45-90 Minuten",
    bullets: [
      "Kopf-, Nacken- und Schultermassage",
      "Gesichtsmassage, Peeling und Maske",
      "Haarkur und Kräuterdampf",
    ],
  },
  {
    name: "Massage",
    eyebrow: "Body Treatment",
    image: "/images/mai-haven/spa-room-03.png",
    href: "#service-body-massage",
    price: "ab 70 €",
    duration: "60-120 Minuten",
    bullets: [
      "Ganzkörpermassage zur tiefen Entspannung",
      "Löst Verspannungen",
      "Belebt Körper und Geist",
    ],
  },
  {
    name: "Wellness Together",
    eyebrow: "Für zwei Personen",
    image: "/images/mai-haven/services/cặp đôi.png",
    href: "#wellness-together",
    price: "ab 90 €",
    duration: "45 Min. - ca. 3 Stunden",
    bullets: [
      "Alle Behandlungen finden gleichzeitig statt",
      "Individuell auf Ihre Wünsche abgestimmt",
      "Ideal als Gutschein",
    ],
  },
];

const extras = [
  {
    title: "Geschenkgutschein",
    value: "Ideal",
    body: "Perfekt als Geschenk zum Geburtstag, Hochzeitstag, Valentinstag, Muttertag oder Weihnachten.",
  },
  {
    title: "Tee oder Erfrischungsgetränk",
    value: "Inklusive",
    body: "Teil des Wellness Deluxe for Two mit gemeinsamer Auszeit und ruhigem Abschluss.",
  },
  {
    title: "Fußpflege for Two",
    value: "ab 90 €",
    body: "Professionelle Fußpflege für zwei Personen - hygienisch, entspannend und mit viel Liebe zum Detail.",
  },
  {
    title: "Rundum Wohlfühl Paket",
    value: "ab 190 €",
    body: "Head Spa, Ganzkörpermassage und Fußpflege als komplettes Erlebnis von Kopf bis Fuß.",
  },
];

function Hero() {
  return (
    <section id="home" className="mh-hero">
      <Image
        src="/images/mai-haven/anhbiadautrangdesktop.png"
        alt="Massagebehandlung im Mai Haven Spa"
        fill
        priority
        sizes="100vw"
        className="mh-hero-bg mh-hero-bg-desktop"
      />
      <Image
        src="/images/mai-haven/anhbiadautrang.png"
        alt="Massagebehandlung im Mai Haven Spa"
        fill
        priority
        sizes="(max-width: 760px) 100vw, 1px"
        className="mh-hero-bg mh-hero-bg-mobile"
      />
      <div className="mh-hero-shade" />
      <div className="mh-hero-inner">
        <div className="mh-hero-copy mh-reveal">
          <p className="mh-kicker">Mai Haven Spa</p>
          <h1>Ihre Auszeit.<br />Nur für Sie.</h1>
          <p className="mh-hero-services">Massage · Head Spa · Fußpflege in Berlin</p>
          <p className="mh-hero-text">
            Entspannen. Abschalten. Neue Energie tanken.<br />
            Individuelle Behandlungen mit Herz, Ruhe und Erfahrung.
          </p>
          <div className="mh-actions">
            <a href={whatsappUrl} className="mh-button mh-button-primary" target="_blank" rel="noopener noreferrer">
              <CalendarCheck aria-hidden="true" />
              Jetzt buchen
            </a>
          </div>
        </div>
      </div>
      <div className="mh-google-proof mh-reveal" aria-label="5,0 von 5 Sternen bei Google Bewertungen">
        <span aria-hidden="true">★★★★★</span>
        <strong>5,0</strong>
        <small>Google Bewertungen</small>
      </div>
      <div className="mh-scroll-note">Ihre Wohlfühlzeit in Berlin</div>
    </section>
  );
}

function InfoStrip() {
  return (
    <section className="mh-info-strip" aria-label="Kontakt Kurzinfo">
      <div>
        <MapPin aria-hidden="true" />
        <span>{maiHaven.station}</span>
      </div>
      <div>
        <Clock aria-hidden="true" />
        <span>Mo.-Sa. 10:00-20:00 Uhr</span>
      </div>
      <div className="mh-info-phone">
        <Phone aria-hidden="true" />
        <span>
          <a href={`tel:${maiHaven.phoneTel[0]}`} target="_top">{maiHaven.phones[0]}</a>
          <span aria-hidden="true"> / </span>
          <a href={`tel:${maiHaven.phoneTel[1]}`} target="_top">{maiHaven.phones[1]}</a>
        </span>
      </div>
    </section>
  );
}

function Highlights() {
  return (
    <section className="mh-section mh-welcome" aria-labelledby="welcome-title">
      <div className="mh-welcome-copy">
        <p className="mh-kicker">Willkommen im Mai Haven Spa</p>
        <h2 id="welcome-title">
          Ein Ort, an dem Körper und Seele<br />
          zur Ruhe kommen.
        </h2>
        <p>
          Mit achtsamen Berührungen, individueller Betreuung und einer entspannten
          Atmosphäre schenken wir Ihnen Zeit zum Loslassen, neue Kraft und echtes
          Wohlbefinden.
        </p>
        <a href={whatsappUrl} className="mh-button mh-button-primary" target="_blank" rel="noopener noreferrer">
          ✨ Jetzt Termin buchen
          <ArrowRight aria-hidden="true" />
        </a>
      </div>
      <ul className="mh-benefits" aria-label="Was Sie bei uns erwartet">
        {[
          "Individuelle Behandlungen",
          "Ruhige Wohlfühlatmosphäre",
          "Hochwertige Pflegeprodukte",
          "Liebe zum Detail",
        ].map((item) => (
          <li key={item}><Check aria-hidden="true" />{item}</li>
        ))}
      </ul>
    </section>
  );
}

function SignatureTreatments() {
  return (
    <section id="behandlungen" className="mh-section mh-signature">
      <div className="mh-section-head mh-section-head-wide">
        <p className="mh-kicker">Unsere Behandlungen</p>
        <h2>Private Auszeit im Mai Haven Spa</h2>
        <p>
          Buchen Sie Ihre Behandlung für Kopfhaut, Körper, Haut und Füße.
          Jede Anwendung wird individuell auf Ihre Wünsche abgestimmt.
        </p>
      </div>
      <div className="mh-signature-grid">
        {signatureTreatments.map((treatment) => (
          <a key={treatment.name} href={treatment.href} className="mh-signature-card">
            <div className="mh-card-media">
              <Image src={treatment.image} alt={treatment.name} fill sizes="(min-width: 900px) 30vw, 100vw" />
            </div>
            <div className="mh-signature-body">
              <p className="mh-card-eyebrow">{treatment.eyebrow}</p>
              <h3>{treatment.name}</h3>
              <p className="mh-price-line">
                <strong>{treatment.price}</strong>
                <span>{treatment.duration}</span>
              </p>
              <ul>
                {treatment.bullets.map((bullet) => (
                  <li key={bullet}>
                    <Check aria-hidden="true" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="mh-stats" aria-label="Mai Haven Spa Zahlen">
      <div>
        <span>Wellness Pakete</span>
      </div>
      <div>
        <span>Behandlungen</span>
      </div>
      <div>
        <span>Personen gleichzeitig</span>
      </div>
    </section>
  );
}

function Atmosphere() {
  return (
    <section className="mh-atmosphere">
      <Image
        src="/images/mai-haven/gallery-wide.png"
        alt="Empfangsbereich im Mai Haven Spa"
        fill
        sizes="100vw"
      />
      <div>
        <p>HEAD SPA</p>
        <p>MASSAGE</p>
        <p>HIGH CLASS</p>
        <p>BEAUTY</p>
      </div>
    </section>
  );
}

function StudioNote() {
  return (
    <section id="inhaberin" className="mh-section mh-studio-note">
      <div className="mh-note-media">
        <Image
          src="/images/mai-haven/gallery-portrait.png"
          alt="Ruhige Atmosphäre im Mai Haven Spa"
          fill
          sizes="(min-width: 900px) 38vw, 100vw"
        />
      </div>
      <div>
        <p className="mh-kicker">Über die Inhaberin</p>
        <h2>Willkommen bei Mai Haven Spa.</h2>
        <p>
          Mit langjähriger Erfahrung und viel Leidenschaft begleiten wir unsere Gäste
          auf dem Weg zu mehr Entspannung und Wohlbefinden.
        </p>
      </div>
    </section>
  );
}

function Extras() {
  return (
    <section className="mh-section mh-extras">
      <div className="mh-section-head">
        <p className="mh-kicker">Unsere Zusatzleistungen</p>
        <h2>Extras</h2>
        <p>
          Von Gutschein bis Wellness Together - alles für gemeinsame Zeit,
          Entspannung und unvergessliche Momente.
        </p>
      </div>
      <div className="mh-extras-grid">
        {extras.map((extra) => (
          <article key={extra.title}>
            <p>{extra.title}</p>
            <strong>{extra.value}</strong>
            <span>{extra.body}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function WellnessTogether() {
  return (
    <section id="wellness-together" className="mh-together">
      <div className="mh-together-visual">
        <Image
          src="/images/mai-haven/services/cặp đôi.png"
          alt="Wellness-Behandlung für zwei Personen im Mai Haven Spa"
          fill
          sizes="(min-width: 900px) 50vw, 100vw"
        />
      </div>
      <div className="mh-together-content">
        <p className="mh-kicker">Überraschen Sie Ihre Liebsten</p>
        <h2>{wellnessTogether.headline}</h2>
        <p className="mh-together-lead">{wellnessTogether.subheadline}</p>
        {wellnessTogether.intro.map((line) => (
          <p key={line}>{line}</p>
        ))}
        <div className="mh-feature-line">
          <Sparkles aria-hidden="true" />
          <span>Alle Behandlungen finden gleichzeitig statt.</span>
        </div>
      </div>
    </section>
  );
}

function Packages() {
  return (
    <section className="mh-section mh-packages">
      <div className="mh-section-head">
        <p className="mh-kicker">Preisliste</p>
        <h2>Wellness Together</h2>
        <p>Gemeinsam entspannen. Gemeinsam genießen.</p>
      </div>
      <div className="mh-package-list">
        {wellnessTogether.packages.map((item, index) => (
          <article key={item.name} className={index === 4 ? "mh-package mh-package-featured" : "mh-package"}>
            <div className="mh-package-info">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              {item.includes ? (
                <ul>
                  {item.includes.map((include) => (
                    <li key={include}>
                      <Check aria-hidden="true" />
                      {include}
                    </li>
                  ))}
                </ul>
              ) : null}
              <a href={getWhatsappBookingUrl(item.name)} target="_blank" rel="noopener noreferrer">
                Jetzt buchen
                <ArrowRight aria-hidden="true" />
              </a>
            </div>
            <div className="mh-prices">
              {item.prices.map((price) => (
                <p key={`${item.name}-${price.duration}`}>
                  <span>{price.duration}</span>
                  <strong>{price.price}</strong>
                </p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Treatments() {
  return (
    <section id="leistungen" className="mh-section mh-treatments">
      <div className="mh-section-head">
        <p className="mh-kicker">Weitere Behandlungen</p>
        <h2>Menü</h2>
        <p>Ein sorgfältig ausgewähltes Menü für Kopfhaut, Körper, Haut und Füße.</p>
      </div>
      <div className="mh-service-grid">
        {services.map((service) => (
          <article
            key={service.name}
            id={service.id}
            className={service.image ? "mh-service" : "mh-service mh-service-no-media"}
          >
            {service.image ? (
              <div className="mh-service-media">
                <Image
                  src={service.image}
                  alt={`${service.name} im Mai Haven Spa`}
                  fill
                  sizes="(min-width: 900px) 26vw, 100vw"
                />
              </div>
            ) : null}
            <div className="mh-service-content">
              <h3>{service.name}</h3>
              {service.description ? <p>{service.description}</p> : null}
              <div className="mh-service-prices">
                {service.prices.map((price) => (
                  <p key={`${service.name}-${price.duration}`}>
                    <span>{price.duration}</span>
                    <strong>{price.price}</strong>
                  </p>
                ))}
              </div>
              <a href={getWhatsappBookingUrl(service.name)} target="_blank" rel="noopener noreferrer">
                Jetzt buchen
                <ArrowRight aria-hidden="true" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function GiftSection() {
  return (
    <section className="mh-gift">
      <div>
        <Gift aria-hidden="true" />
        <p className="mh-kicker">Ideal als Gutschein</p>
        <h2>Schenken Sie gemeinsame Zeit.</h2>
        <p>
          Perfekt als Geschenk zum Geburtstag, Hochzeitstag, Valentinstag,
          Muttertag oder Weihnachten.
        </p>
      </div>
      <a href={whatsappUrl} className="mh-button mh-button-primary" target="_blank" rel="noopener noreferrer">
        Gutschein anfragen
        <ArrowRight aria-hidden="true" />
      </a>
    </section>
  );
}

function Gallery() {
  return (
    <section id="galerie" className="mh-section mh-gallery-section">
      <div className="mh-section-head">
        <p className="mh-kicker">Fotogalerie</p>
        <h2>Ruhige Räume. Sanfte Details.</h2>
      </div>
      <div className="mh-gallery">
        {galleryImages.map((image, index) => (
          <figure key={image.src} className={index === 0 ? "mh-gallery-wide" : ""}>
            <Image src={image.src} alt={image.alt} fill sizes="(min-width: 900px) 33vw, 100vw" />
          </figure>
        ))}
      </div>
    </section>
  );
}

function ReviewsAndFaq() {
  return (
    <section id="faq" className="mh-section mh-reviews-faq">
      <div>
        <p className="mh-kicker">FAQs</p>
        <h2>Eure Fragen, unsere Antworten</h2>
        <div className="mh-faq-list">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
      <div>
        <p className="mh-kicker">Bewertungen</p>
        <h2>Was Gäste sagen</h2>
        <TestimonialsList />
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="kontakt" className="mh-contact">
      <div className="mh-contact-copy">
        <p className="mh-kicker">Kontakt</p>
        <h2>Bereit für Ihre Auszeit?</h2>
        <p>{maiHaven.address}</p>
        <p className="mh-location-note">
          <MapPin aria-hidden="true" />
          Nur wenige Schritte von der U6 Platz der Luftbrücke entfernt.
        </p>
        <div className="mh-contact-lines">
          <a href={`tel:${maiHaven.phoneTel[1]}`} target="_top">
            <Phone aria-hidden="true" />
            {maiHaven.phones[1]}
          </a>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <MessageCircle aria-hidden="true" />
            WhatsApp: {maiHaven.phones[0]}
          </a>
          <a href={`mailto:${maiHaven.email}`} target="_top">
            <Mail aria-hidden="true" />
            {maiHaven.email}
          </a>
          <a href={maiHaven.social.instagram} target="_blank" rel="noreferrer">
            <Camera aria-hidden="true" />
            Instagram
          </a>
          <a href={maiHaven.social.facebook} target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H17V3.6c-.3-.04-1.3-.13-2.46-.13-2.43 0-4.1 1.48-4.1 4.2v2.34H7.7V13h2.74v8h3.06z" />
            </svg>
            Facebook
          </a>
        </div>
        <div className="mh-hours">
          {maiHaven.hours.map((hour) => (
            <p key={hour.days}>
              <span>{hour.days}</span>
              <strong>{hour.value}</strong>
            </p>
          ))}
        </div>
        <a href={whatsappUrl} className="mh-button mh-button-primary" target="_blank" rel="noopener noreferrer">
          Termin per WhatsApp anfragen
        </a>
      </div>
      <iframe
        title="Mai Haven Spa Google Maps"
        src={maiHaven.mapsEmbed}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
}

function Footer() {
  return (
    <footer className="mh-footer">
      <div>
        <strong>Mai Haven Spa</strong>
        <p>{maiHaven.address}</p>
      </div>
      <nav aria-label="Footer Navigation">
        <Link href="#home">Home</Link>
        <Link href="#galerie">Galerie</Link>
        <Link href="#kontakt">Kontakt</Link>
        <Link href={maiHaven.social.instagram} target="_blank" rel="noreferrer">
          Instagram
        </Link>
        <Link href={maiHaven.social.facebook} target="_blank" rel="noreferrer">
          Facebook
        </Link>
      </nav>
      <p>Copyright © 2026 Hoangcaster</p>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="mh-site">
      <SiteHeader />
      <main>
        <Hero />
        <InfoStrip />
        <Highlights />
        <SignatureTreatments />
        <Stats />
        <Atmosphere />
        <StudioNote />
        <Extras />
        <WellnessTogether />
        <Packages />
        <Treatments />
        <GiftSection />
        <Gallery />
        <ReviewsAndFaq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
