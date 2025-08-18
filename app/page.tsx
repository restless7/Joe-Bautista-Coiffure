import React from 'react';
import Image from 'next/image';
import Header from './components/Header';
import Footer from './components/Footer';
import Button from './components/Button';

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative">
        {/* Hero Background Image */}
        <div className="relative h-screen flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero/atelier-hero-main.jpg"
              alt="Atelier Joe Bautista - Espace de création artisanale"
              fill
              className="object-cover"
              priority
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/30 via-neutral-900/40 to-neutral-900/60"></div>
          </div>
          
          {/* Hero Content Overlay */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-tight leading-tight">
                <span className="block text-shadow-lg">
                  L&apos;art de la coiffure
                </span>
                <span className="block text-neutral-200 text-shadow-lg">
                  d&apos;exception
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white max-w-2xl mx-auto leading-relaxed text-shadow-md">
                Chaque coupe raconte votre histoire. Découvrez un savoir-faire d&apos;exception 
                où tradition et modernité se rencontrent.
              </p>
              <p className="text-sm text-neutral-200 max-w-2xl mx-auto text-shadow-md">
                (Each cut tells your story. Discover exceptional expertise where tradition and modernity meet.)
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
                <Button size="lg" className="bg-white text-neutral-900 hover:bg-neutral-100">
                  Découvrir nos créations
                </Button>
                <Button variant="secondary" size="lg" className="border-white text-white hover:bg-white hover:text-neutral-900">
                  Prendre rendez-vous
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-light text-neutral-900 tracking-tight">
                Notre philosophie
              </h2>
              <div className="space-y-4 text-neutral-700 leading-relaxed">
                <p>
                  Dans notre salon, chaque coupe est unique. Nous privilégions la qualité 
                  du service, l&apos;écoute et le conseil personnalisé.
                </p>
                <p>
                  Nos créations capillaires naissent d&apos;un dialogue entre vos envies et notre expertise, 
                  entre techniques traditionnelles et tendances modernes.
                </p>
                <p className="text-sm text-neutral-500">
                  (In our salon, every cut is unique. We prioritize service quality, 
                  listening and personalized advice. Our hair creations are born from a dialogue 
                  between your desires and our expertise, between traditional techniques and modern trends.)
                </p>
              </div>
              <Button variant="minimal" className="mt-6">
                En savoir plus →
              </Button>
            </div>
            <div className="relative aspect-square rounded-none overflow-hidden">
              <Image
                src="/images/philosophy/atelier-workspace.jpg"
                alt="Atelier de travail - Outils et matériaux de création artisanale"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-neutral-900 tracking-tight mb-4">
              Nos services
            </h2>
            <p className="text-neutral-600 max-w-xl mx-auto">
              Des prestations d'exception pour sublimer votre beauté naturelle.
            </p>
          </div>
          
          <div className="space-y-24">
            {/* Service 1 - Coupe & Style */}
            <div className="group text-center space-y-8">
              <div className="relative w-[560px] h-[560px] mx-auto overflow-hidden rounded-none shadow-lg">
                <Image
                  src="/images/services/coupe-style.jpg"
                  alt="Coupe et stylisme - Créations capillaires sur mesure"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-medium text-neutral-900">Coupe & Style</h3>
                <p className="text-neutral-600 leading-relaxed max-w-lg mx-auto">
                  Créations capillaires sur mesure qui révèlent votre personnalité unique.
                </p>
              </div>
            </div>
            
            {/* Service 2 - Coloration */}
            <div className="group text-center space-y-8">
              <div className="relative w-[560px] h-[560px] mx-auto overflow-hidden rounded-none shadow-lg">
                <Image
                  src="/images/services/coloration.jpg"
                  alt="Coloration - Techniques avancées et produits haut de gamme"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-medium text-neutral-900">Coloration</h3>
                <p className="text-neutral-600 leading-relaxed max-w-lg mx-auto">
                  Techniques avancées et produits haut de gamme pour des couleurs éclatantes.
                </p>
              </div>
            </div>
            
            {/* Service 3 - Soins */}
            <div className="group text-center space-y-8">
              <div className="relative w-[560px] h-[560px] mx-auto overflow-hidden rounded-none shadow-lg">
                <Image
                  src="/images/services/soins.jpg"
                  alt="Soins capillaires - Traitements personnalisés et rituels de beauté"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-medium text-neutral-900">Soins Capillaires</h3>
                <p className="text-neutral-600 leading-relaxed max-w-lg mx-auto">
                  Traitements personnalisés pour nourrir, réparer et sublimer vos cheveux.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button variant="secondary">
              Voir tous nos services
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-neutral-900 text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight">
            Prenons soin de vous
          </h2>
          <p className="text-neutral-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Réservez votre rendez-vous et laissez-nous sublimer votre beauté naturelle 
            avec notre expertise d'exception.
          </p>
          <p className="text-sm text-neutral-400">
            (Book your appointment and let us enhance your natural beauty with our exceptional expertise.)
          </p>
          <Button size="lg" className="bg-white text-neutral-900 hover:bg-neutral-100">
            Prendre contact
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
