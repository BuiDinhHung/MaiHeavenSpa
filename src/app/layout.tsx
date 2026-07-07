import type { Metadata } from "next";
import { Cormorant_Upright, Montserrat } from "next/font/google";
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
  title: "Mai Haven Spa - Schönheit & Wellness in Berlin",
  description:
    "Mai Haven Spa in Berlin Tempelhof: Head Spa, Massage, Fußpflege, Beauty-Behandlungen und Wellness Together für zwei Personen.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
