import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Joe Bautista Coiffure",
  description: "Salon de coiffure d'exception à Paris, soins personnalisés et techniques modernes. (Exceptional hair salon in Paris, personalized care and modern techniques.)",
  keywords: ["coiffure", "coiffeur", "salon", "cheveux", "coupe", "coloration", "soins", "Paris", "hairdresser"],
  authors: [{ name: "Joe Bautista" }],
  creator: "Joe Bautista",
  publisher: "Joe Bautista Coiffure",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://joebautistacoiffure.com"),
  openGraph: {
    title: "Joe Bautista Coiffure",
    description: "Salon de coiffure d'exception à Paris, soins personnalisés et techniques modernes.",
    type: "website",
    locale: "fr_FR",
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
