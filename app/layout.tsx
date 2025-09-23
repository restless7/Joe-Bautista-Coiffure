import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Joe Bautista Atelier | Services Beauté à Domicile Genève",
  description: "Services professionnels de coiffure, beauté et bien-être à domicile à Genève. Shampooing, coupe, couleur, manucure, massage. Déplacement dans toute la région métropolitaine.",
  keywords: ["coiffure domicile Genève", "coiffeur mobile", "beauté à domicile", "manucure Genève", "massage domicile", "services beauté Genève", "coiffure à domicile Suisse"],
  authors: [{ name: "Joe Bautista" }],
  creator: "Joe Bautista",
  publisher: "Joe Bautista Atelier",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://joebautista-atelier.com"),
  openGraph: {
    title: "Joe Bautista Atelier | Services Beauté à Domicile Genève",
    description: "Services professionnels de coiffure, beauté et bien-être à domicile à Genève et région métropolitaine.",
    type: "website",
    locale: "fr_CH",
    alternateLocale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
