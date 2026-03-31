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
    "Jura Champi — culture de champignons frais et bio en bordure du Jura (Collonges, Ain). Shiitaké, pleurote, Black Pearl, crinière de lion. Livraison restaurants, collectivités et particuliers.",
  keywords: [
    "Jura champi",
    "champignons Collonges",
    "champignons Ain",
    "producteur champignons bio",
    "champignons frais Jura",
    "shiitaké",
    "pleurote",
    "Black Pearl",
    "crinière de lion",
    "livraison champignons",
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
