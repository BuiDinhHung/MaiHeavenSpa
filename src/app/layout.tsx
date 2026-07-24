import type { Metadata } from "next";
import { Cormorant_Upright, Montserrat } from "next/font/google";
import { maiHaven } from "@/lib/mai-haven";
import "./globals.css";

const cormorant = Cormorant_Upright({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(maiHaven.url),
  title: "Mai Haven Spa - Schönheit & Wellness in Berlin",
  description: `${maiHaven.name}, ${maiHaven.address}. Head Spa, Massage, Fußpflege, Beauty-Behandlungen und Wellness Together für zwei Personen.`,
  icons: {
    icon: maiHaven.logo,
    shortcut: maiHaven.logo,
    apple: maiHaven.logo,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "DaySpa",
  name: maiHaven.name,
  url: maiHaven.url,
  logo: `${maiHaven.url}${maiHaven.logo}`,
  image: `${maiHaven.url}${maiHaven.logo}`,
  telephone: maiHaven.phoneTel[0],
  email: maiHaven.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: maiHaven.streetAddress,
    postalCode: maiHaven.postalCode,
    addressLocality: maiHaven.city,
    addressCountry: "DE",
  },
  sameAs: [maiHaven.social.instagram, maiHaven.social.facebook],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
