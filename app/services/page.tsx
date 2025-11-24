import React from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BookingButton } from '../components/booking/BookingButton';
import { WhatsAppButton } from '../components/booking/WhatsAppButton';

export const metadata = {
  title: 'Services à Domicile - Joe Bautista Atelier | Coiffure & Beauté Genève',
  description: 'Services professionnels de coiffure, beauté et bien-être à domicile à Genève. Shampooing, coupe, couleur, manucure, massage. Déplacement dans toute la région métropolitaine.',
  keywords: 'coiffure domicile Genève, coiffeur mobile, beauté à domicile, manucure Genève, massage domicile',
};

export default function Services() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />

      {/* Hero Section */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-neutral-900 tracking-tight leading-tight">
              <span className="block">Services</span>
              <span className="block text-neutral-600">à domicile</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Découvrez l'art de la beauté dans le confort de votre foyer.
              Services professionnels de coiffure, bien-être et beauté à Genève et région métropolitaine.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-neutral-500">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Genève & Région métropolitaine
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
                Service à domicile
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Services */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-neutral-900 tracking-tight mb-6">
              Services Coiffure
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Expertise professionnelle dans le confort de votre domicile,
              avec des techniques modernes et des produits de qualité.
            </p>
          </div>

          <div className="space-y-24">
            {/* Shampooing & Coupe */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative w-[560px] h-[560px] mx-auto overflow-hidden rounded-none shadow-lg">
                <Image
                  src="/images/services/coupe-style.jpg"
                  alt="Shampooing et coupe professionnels à domicile"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-light text-neutral-900 mb-4">Shampooing & Coupe</h3>
                  <p className="text-neutral-700 leading-relaxed mb-6">
                    Service professionnel complet dans le confort de votre foyer.
                    Consultation personnalisée, shampooing avec produits de qualité, et coupe adaptée
                    à votre style et morphologie.
                  </p>
                  <div className="space-y-3 text-sm text-neutral-600">
                    <div className="flex justify-between">
                      <span>Shampooing + Brushing</span>
                      <span className="font-medium">70 CHF</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shampooing + Brushing + Coupe</span>
                      <span className="font-medium">100 CHF</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Coupe Homme aux Ciseaux</span>
                      <span className="font-medium">50 CHF</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Coupe Enfant</span>
                      <span className="font-medium">30 CHF</span>
                    </div>
                  </div>
                </div>
                <BookingButton size="lg">Réserver ce service</BookingButton>
              </div>
            </div>

            {/* Coloration & Techniques */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 space-y-8">
                <div>
                  <h3 className="text-3xl font-light text-neutral-900 mb-4">Coloration & Techniques</h3>
                  <p className="text-neutral-700 leading-relaxed mb-6">
                    Techniques modernes de coloration à domicile avec des produits professionnels.
                    Balayage, mèches, couleur uniforme - chaque technique est adaptée à vos cheveux
                    et réalisée dans le respect des standards professionnels.
                  </p>
                  <div className="space-y-3 text-sm text-neutral-600">
                    <div className="flex justify-between">
                      <span>Couleur + Brushing</span>
                      <span className="font-medium">120 CHF</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Mèches + Brushing</span>
                      <span className="font-medium">120 CHF</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Balayage + Brushing</span>
                      <span className="font-medium">120 CHF</span>
                    </div>
                  </div>
                </div>
                <BookingButton size="lg">Consultation couleur</BookingButton>
              </div>
              <div className="order-1 lg:order-2 relative w-[560px] h-[560px] mx-auto overflow-hidden rounded-none shadow-lg">
                <Image
                  src="/images/services/coloration.jpg"
                  alt="Techniques de coloration professionnelles à domicile"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              </div>
            </div>

            {/* Soins Spécialisés */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative w-[560px] h-[560px] mx-auto overflow-hidden rounded-none shadow-lg">
                <Image
                  src="/images/services/soins.jpg"
                  alt="Soins kératine et coiffures événementielles"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-light text-neutral-900 mb-4">Soins & Coiffures Spéciales</h3>
                  <p className="text-neutral-700 leading-relaxed mb-6">
                    Traitements professionnels pour des occasions spéciales. Lissage à la kératine
                    pour des cheveux soyeux et disciplinés, et créations de chignons élégants
                    pour vos événements importants.
                  </p>
                  <div className="space-y-3 text-sm text-neutral-600">
                    <div className="flex justify-between">
                      <span>Traitement Kératine</span>
                      <span className="font-medium">180 CHF</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Chignons (Événements)</span>
                      <span className="font-medium">100 CHF</span>
                    </div>
                  </div>
                </div>
                <BookingButton size="lg">Réserver un soin</BookingButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bien-être & Beauté */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-neutral-900 tracking-tight mb-6">
              Bien-être & Beauté
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Complétez votre expérience beauté avec nos services de bien-être et soins esthétiques à domicile.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 shadow-lg">
              <div className="mb-4">
                <svg className="w-8 h-8 text-neutral-600 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a4 4 0 001-4V5z" />
                </svg>
                <h4 className="text-xl font-medium text-neutral-900 mb-4">Massage Relaxant</h4>
              </div>
              <p className="text-neutral-600 text-sm mb-6">
                Massage thérapeutique d'une heure pour détendre et revitaliser votre corps.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-neutral-500 text-sm">1 heure</span>
                <span className="text-xl font-light">150 CHF</span>
              </div>
            </div>

            <div className="bg-white p-8 shadow-lg">
              <div className="mb-4">
                <svg className="w-8 h-8 text-neutral-600 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
                <h4 className="text-xl font-medium text-neutral-900 mb-4">Maquillage Professionnel</h4>
              </div>
              <p className="text-neutral-600 text-sm mb-6">
                Maquillage personnalisé pour événements spéciaux ou séances photo.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-neutral-500 text-sm">Séance</span>
                <span className="text-xl font-light">150 CHF</span>
              </div>
            </div>

            <div className="bg-white p-8 shadow-lg">
              <div className="mb-4">
                <svg className="w-8 h-8 text-neutral-600 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m-3-3a1.5 1.5 0 013 0" />
                </svg>
                <h4 className="text-xl font-medium text-neutral-900 mb-4">Soins des Mains & Pieds</h4>
              </div>
              <p className="text-neutral-600 text-sm mb-6">
                Manucure et pédicure professionnelles pour des mains et pieds parfaits.
              </p>
              <div className="space-y-3 text-sm text-neutral-600">
                <div className="flex justify-between">
                  <span>Manucure</span>
                  <span className="font-medium">60 CHF</span>
                </div>
                <div className="flex justify-between">
                  <span>Pédicure</span>
                  <span className="font-medium">100 CHF</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Forfaits & Zone de Service */}
      <section className="bg-neutral-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">
              Service à Domicile - Genève
            </h2>
            <p className="text-neutral-300 max-w-2xl mx-auto">
              Profitez de nos services professionnels dans le confort de votre foyer.
              Basé à Genève, nous desservons toute la région métropolitaine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-light mb-6">Avantages du Service à Domicile</h3>
              <ul className="space-y-4 text-neutral-300">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-0.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Confort et intimité de votre domicile
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-0.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Pas de déplacement ni d'attente
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-0.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Flexibilité des horaires
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-0.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Matériel professionnel transporté
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-0.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Services pour toute la famille
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-light mb-6">Zone de Service</h3>
              <div className="bg-neutral-800 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <svg className="w-6 h-6 mr-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xl font-medium">Genève & Région</span>
                </div>
                <ul className="space-y-2 text-neutral-300 text-sm">
                  <li>• Genève Centre</li>
                  <li>• Carouge, Plan-les-Ouates</li>
                  <li>• Vernier, Meyrin, Grand-Saconnex</li>
                  <li>• Onex, Lancy, Thônex</li>
                  <li>• Et autres communes métropolitaines</li>
                </ul>
              </div>
              <p className="text-sm text-neutral-400">
                Pour les zones plus éloignées, contactez-nous pour vérifier la disponibilité.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-light mb-6">Forfait Famille</h3>
            <div className="bg-neutral-800 p-8 max-w-md mx-auto rounded-lg">
              <div className="text-3xl font-light mb-4">280 CHF</div>
              <ul className="space-y-2 text-sm text-neutral-300 mb-6">
                <li>Coupe + Shampooing + Brushing pour 2 adultes</li>
                <li>Coupe enfant incluse</li>
                <li>Déplacement à domicile inclus</li>
                <li>Économie de 20 CHF</li>
              </ul>
              <BookingButton className="bg-white text-neutral-900 hover:bg-neutral-100 w-full">
                Réserver le Forfait Famille
              </BookingButton>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-light text-neutral-900 tracking-tight">
            Réservez votre rendez-vous à domicile
          </h2>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Profitez de nos services professionnels de beauté et bien-être dans le confort
            de votre foyer. Contactez-nous pour organiser votre séance personnalisée.
          </p>
          <div className="bg-neutral-50 p-6 rounded-lg max-w-md mx-auto mb-8">
            <div className="text-sm text-neutral-600 space-y-2">
              <p><strong>Horaires :</strong> Lundi-Samedi, 8h-20h</p>
              <p><strong>Dimanche :</strong> Sur demande</p>
              <p><strong>Réservation :</strong> 24h à l'avance</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookingButton size="lg" className="bg-neutral-900 text-white hover:bg-neutral-800">
              Réserver maintenant
            </BookingButton>
            <WhatsAppButton variant="secondary" size="lg">
              Contacter via WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
