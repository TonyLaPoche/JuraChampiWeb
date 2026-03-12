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
    default: "Jura Champi | Producteur de champignons frais dans le Jura",
    template: "%s | Jura Champi",
  },
  description:
    "Jura Champi - Producteur de champignons frais dans le Jura. Fournisseur pour restaurants, cantines, traiteurs et particuliers. Livraison locale.",
  keywords: [
    "champignons",
    "Jura",
    "producteur",
    "champignons frais",
    "restaurant",
    "cantine",
    "livraison",
    "local",
    "shiitaké",
    "pleurote",
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
