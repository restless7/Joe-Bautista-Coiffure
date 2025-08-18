import React from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';

export default function Services() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-neutral-900 tracking-tight leading-tight">
              <span className="block">Prestations</span>
              <span className="block text-neutral-600">d'exception</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Découvrez notre gamme complète de services haut de gamme, 
              conçus pour révéler et sublimer votre beauté naturelle.
            </p>
            <p className="text-sm text-neutral-500 max-w-3xl mx-auto">
              (Discover our complete range of high-end services, designed to reveal and enhance your natural beauty.)
            </p>
          </div>
        </div>
      </section>

      {/* Signature Services */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-neutral-900 tracking-tight mb-6">
              Services Signature
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Nos créations les plus emblématiques, fruit d'années d'expertise et d'innovation.
            </p>
          </div>

          <div className="space-y-24">
            {/* Coupe & Style */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative w-[560px] h-[560px] mx-auto overflow-hidden rounded-none shadow-lg">
                <Image
                  src="/images/services/coupe-style.jpg"
                  alt="Coupe et stylisme signature Joe Bautista"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-light text-neutral-900 mb-4">Coupe & Style</h3>
                  <p className="text-neutral-700 leading-relaxed mb-6">
                    Une consultation approfondie précède chaque coupe, analysant la texture de vos cheveux, 
                    la forme de votre visage et votre style personnel. Chaque coupe est unique, 
                    créée spécialement pour vous.
                  </p>
                  <div className="space-y-3 text-sm text-neutral-600">
                    <div className="flex justify-between">
                      <span>Consultation & Coupe Femme</span>
                      <span className="font-medium">180€</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Consultation & Coupe Homme</span>
                      <span className="font-medium">120€</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Coupe & Brushing</span>
                      <span className="font-medium">220€</span>
                    </div>
                  </div>
                </div>
                <Button size="lg">Réserver ce service</Button>
              </div>
            </div>

            {/* Coloration */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 space-y-8">
                <div>
                  <h3 className="text-3xl font-light text-neutral-900 mb-4">Coloration d'Exception</h3>
                  <p className="text-neutral-700 leading-relaxed mb-6">
                    Maîtrise parfaite des techniques de coloration les plus avancées : balayage, 
                    ombré, babylights, ou couleur unie. Nous utilisons exclusivement des produits 
                    de haute qualité respectueux du cheveu.
                  </p>
                  <div className="space-y-3 text-sm text-neutral-600">
                    <div className="flex justify-between">
                      <span>Coloration + Coupe + Brushing</span>
                      <span className="font-medium">320€</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Balayage Signature</span>
                      <span className="font-medium">380€</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Transformation Couleur Complète</span>
                      <span className="font-medium">450€+</span>
                    </div>
                  </div>
                </div>
                <Button size="lg">Consultation couleur</Button>
              </div>
              <div className="order-1 lg:order-2 relative w-[560px] h-[560px] mx-auto overflow-hidden rounded-none shadow-lg">
                <Image
                  src="/images/services/coloration.jpg"
                  alt="Techniques avancées de coloration"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              </div>
            </div>

            {/* Soins */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative w-[560px] h-[560px] mx-auto overflow-hidden rounded-none shadow-lg">
                <Image
                  src="/images/services/soins.jpg"
                  alt="Soins capillaires de luxe et rituels de beauté"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-light text-neutral-900 mb-4">Soins Régénérants</h3>
                  <p className="text-neutral-700 leading-relaxed mb-6">
                    Rituels de beauté personnalisés utilisant des produits biologiques et naturels. 
                    Chaque soin est adapté à vos besoins spécifiques pour nourrir, réparer et 
                    sublimer vos cheveux en profondeur.
                  </p>
                  <div className="space-y-3 text-sm text-neutral-600">
                    <div className="flex justify-between">
                      <span>Soin Restructurant Kerastase</span>
                      <span className="font-medium">85€</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Rituel Hydratation Intense</span>
                      <span className="font-medium">120€</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Cure Personnalisée (3 séances)</span>
                      <span className="font-medium">280€</span>
                    </div>
                  </div>
                </div>
                <Button size="lg">Diagnostic capillaire</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-neutral-900 tracking-tight mb-6">
              Services Complémentaires
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Perfectionnez votre look avec nos services additionnels spécialisés.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 shadow-lg">
              <h4 className="text-xl font-medium text-neutral-900 mb-4">Styling Événementiel</h4>
              <p className="text-neutral-600 text-sm mb-6">
                Coiffure sur-mesure pour vos événements spéciaux : mariages, galas, soirées.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-neutral-500 text-sm">À partir de</span>
                <span className="text-xl font-light">150€</span>
              </div>
            </div>

            <div className="bg-white p-8 shadow-lg">
              <h4 className="text-xl font-medium text-neutral-900 mb-4">Extensions Premium</h4>
              <p className="text-neutral-600 text-sm mb-6">
                Extensions cheveux naturels, pose invisible pour un volume et une longueur parfaits.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-neutral-500 text-sm">À partir de</span>
                <span className="text-xl font-light">800€</span>
              </div>
            </div>

            <div className="bg-white p-8 shadow-lg">
              <h4 className="text-xl font-medium text-neutral-900 mb-4">Conseil Image</h4>
              <p className="text-neutral-600 text-sm mb-6">
                Consultation personnalisée pour définir le style qui vous correspond parfaitement.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-neutral-500 text-sm">Séance</span>
                <span className="text-xl font-light">120€</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Forfaits */}
      <section className="bg-neutral-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">
              Forfaits Privilège
            </h2>
            <p className="text-neutral-300 max-w-2xl mx-auto">
              Des packages exclusifs pour un suivi personnalisé et des tarifs préférentiels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-neutral-800 p-8 text-center">
              <h3 className="text-2xl font-light mb-4">Entretien Classic</h3>
              <div className="text-4xl font-light mb-6">580€</div>
              <ul className="space-y-3 text-sm text-neutral-300 mb-8">
                <li>3 coupes dans l'année</li>
                <li>1 soin restructurant offert</li>
                <li>Conseil personnalisé inclus</li>
                <li>Retouches entre les rdv</li>
              </ul>
              <Button className="bg-white text-neutral-900 hover:bg-neutral-100 w-full">
                Choisir ce forfait
              </Button>
            </div>

            <div className="bg-white text-neutral-900 p-8 text-center border-2 border-neutral-300">
              <div className="bg-neutral-900 text-white text-xs px-3 py-1 inline-block mb-4">RECOMMANDÉ</div>
              <h3 className="text-2xl font-light mb-4">Transformation Plus</h3>
              <div className="text-4xl font-light mb-6">1,200€</div>
              <ul className="space-y-3 text-sm text-neutral-600 mb-8">
                <li>Consultation approfondie</li>
                <li>Coupe + Couleur signature</li>
                <li>3 soins personnalisés</li>
                <li>Suivi 6 mois inclus</li>
                <li>Styling événementiel offert</li>
              </ul>
              <Button className="bg-neutral-900 text-white hover:bg-neutral-800 w-full">
                Découvrir ce forfait
              </Button>
            </div>

            <div className="bg-neutral-800 p-8 text-center">
              <h3 className="text-2xl font-light mb-4">VIP Experience</h3>
              <div className="text-4xl font-light mb-6">2,500€</div>
              <ul className="space-y-3 text-sm text-neutral-300 mb-8">
                <li>Accès prioritaire 1 an</li>
                <li>Services illimités</li>
                <li>Produits exclusifs inclus</li>
                <li>Domicile disponible</li>
                <li>Conciergerie beauté</li>
              </ul>
              <Button className="bg-white text-neutral-900 hover:bg-neutral-100 w-full">
                Expérience VIP
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-light text-neutral-900 tracking-tight">
            Réservez votre moment d'exception
          </h2>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Prenez rendez-vous dès maintenant et découvrez l'expérience Joe Bautista Coiffure. 
            Chaque visite est un voyage vers la beauté.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-neutral-900 text-white hover:bg-neutral-800">
              Réserver en ligne
            </Button>
            <Button variant="secondary" size="lg">
              Appeler le salon
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
