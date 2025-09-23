import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Portfolio - Joe Bautista Atelier | Réalisations à Domicile Genève',
  description: 'Découvrez nos réalisations en coiffure, beauté et bien-être à domicile. Portfolio de transformations, colorations, soins et services esthétiques à Genève.',
  keywords: ['portfolio coiffeur Genève', 'réalisations beauté domicile', 'avant après coiffure', 'transformations Genève', 'portfolio services domicile'],
  openGraph: {
    title: 'Portfolio - Joe Bautista Atelier | Réalisations à Domicile Genève',
    description: 'Découvrez nos réalisations en coiffure, beauté et bien-être à domicile à Genève.',
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}