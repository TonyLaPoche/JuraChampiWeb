import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jurachampi.fr"),
  title: {
    default: "Jura Champi | Producteur et fournisseur de champignons frais dans le Jura",
    template: "%s | Jura Champi",
  },
  description:
    "Jura Champi - Producteur et fournisseur de champignons frais dans le Jura. Shiitaké, pleurote, champignon de Paris. Livraison restaurants, cantines, traiteurs et particuliers. Marchés à Lons-le-Saunier, Arbois, Saint-Claude.",
  keywords: [
    "Jura champi",
    "Jura champignons",
    "fournisseur de champignons Jura",
    "producteur champignons Jura",
    "champignons frais Jura",
    "livraison champignons Jura",
    "champignons restaurants Jura",
    "champignons cantines",
    "shiitaké Jura",
    "pleurote Jura",
    "champignons Saint-Claude",
    "champignons Lons-le-Saunier",
    "champignons Arbois",
    "producteur local Jura",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    alternateLocale: "en_GB",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://jurachampi.fr",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
