'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems = [
    { id: 1, category: 'coupe', title: 'Coupe Géométrique Moderne', image: '/images/portfolio/coupe-01.jpg' },
    { id: 2, category: 'coloration', title: 'Balayage Caramel Signature', image: '/images/portfolio/color-01.jpg' },
    { id: 3, category: 'transformation', title: 'Transformation Complète', image: '/images/portfolio/transform-01.jpg' },
    { id: 4, category: 'coupe', title: 'Bob Asymétrique', image: '/images/portfolio/coupe-02.jpg' },
    { id: 5, category: 'coloration', title: 'Blond Polaire Intense', image: '/images/portfolio/color-02.jpg' },
    { id: 6, category: 'evenementiel', title: 'Chignon de Mariage', image: '/images/portfolio/event-01.jpg' },
    { id: 7, category: 'transformation', title: 'Du Long au Carré', image: '/images/portfolio/transform-02.jpg' },
    { id: 8, category: 'coloration', title: 'Ombré Rose Gold', image: '/images/portfolio/color-03.jpg' },
    { id: 9, category: 'coupe', title: 'Pixie Cut Élégant', image: '/images/portfolio/coupe-03.jpg' },
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-neutral-900 tracking-tight leading-tight">
              <span className="block">Notre</span>
              <span className="block text-neutral-600">portfolio</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Découvrez nos créations les plus remarquables, témoignages de notre passion 
              pour l'art capillaire et la transformation beauté.
            </p>
            <p className="text-sm text-neutral-500 max-w-3xl mx-auto">
              (Discover our most remarkable creations, testimonials to our passion 
              for hair artistry and beauty transformation.)
            </p>
          </div>
        </div>
      </section>

      {/* Filter Navigation */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-6 py-3 text-sm transition-all duration-300 ${
                activeFilter === 'all'
                  ? 'bg-neutral-900 text-white'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              Tout voir
            </button>
            <button
              onClick={() => setActiveFilter('coupe')}
              className={`px-6 py-3 text-sm transition-all duration-300 ${
                activeFilter === 'coupe'
                  ? 'bg-neutral-900 text-white'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              Coupes
            </button>
            <button
              onClick={() => setActiveFilter('coloration')}
              className={`px-6 py-3 text-sm transition-all duration-300 ${
                activeFilter === 'coloration'
                  ? 'bg-neutral-900 text-white'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              Colorations
            </button>
            <button
              onClick={() => setActiveFilter('transformation')}
              className={`px-6 py-3 text-sm transition-all duration-300 ${
                activeFilter === 'transformation'
                  ? 'bg-neutral-900 text-white'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              Transformations
            </button>
            <button
              onClick={() => setActiveFilter('evenementiel')}
              className={`px-6 py-3 text-sm transition-all duration-300 ${
                activeFilter === 'evenementiel'
                  ? 'bg-neutral-900 text-white'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              Événementiel
            </button>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative aspect-[4/5] overflow-hidden bg-neutral-100 cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
                <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/60 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                    <p className="text-sm opacity-80">Voir le détail</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-neutral-900 tracking-tight mb-6">
              Créations Signature
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Nos réalisations les plus emblématiques, fruit d'années d'innovation et de maîtrise technique.
            </p>
          </div>

          <div className="space-y-24">
            {/* Featured Work 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/portfolio/featured-01.jpg"
                  alt="Transformation signature - Avant/Après spectaculaire"
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-light text-neutral-900">
                  Métamorphose Complète
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  Une transformation radicale qui illustre parfaitement notre approche personnalisée. 
                  De cheveux longs et ternes à une coupe moderne structurée, accompagnée d'une 
                  coloration subtile qui sublime le teint naturel.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm text-neutral-600">
                  <div>
                    <span className="font-medium text-neutral-900">Technique :</span>
                    <br />Coupe géométrique + Balayage
                  </div>
                  <div>
                    <span className="font-medium text-neutral-900">Durée :</span>
                    <br />4 heures
                  </div>
                </div>
                <Button variant="minimal">
                  Voir plus de détails →
                </Button>
              </div>
            </div>

            {/* Featured Work 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 space-y-6">
                <h3 className="text-2xl md:text-3xl font-light text-neutral-900">
                  Coloration d'Art
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  Une création couleur unique mêlant plusieurs techniques avancées. 
                  Ce travail de précision démontre notre maîtrise des nuances et 
                  notre capacité à créer des effets uniques et personnalisés.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm text-neutral-600">
                  <div>
                    <span className="font-medium text-neutral-900">Technique :</span>
                    <br />Ombré + Babylights + Glossing
                  </div>
                  <div>
                    <span className="font-medium text-neutral-900">Durée :</span>
                    <br />5 heures
                  </div>
                </div>
                <Button variant="minimal">
                  Découvrir le processus →
                </Button>
              </div>
              <div className="order-1 lg:order-2 relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/portfolio/featured-02.jpg"
                  alt="Coloration artistique - Techniques avancées"
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-neutral-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">
              Témoignages
            </h2>
            <p className="text-neutral-300 max-w-2xl mx-auto">
              Les mots de nos clients, notre plus belle récompense.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-neutral-800 p-8">
              <div className="mb-6">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  "Joe a complètement transformé ma vision de la coiffure. Son approche artistique 
                  et son attention aux détails sont exceptionnels."
                </p>
              </div>
              <div>
                <div className="font-medium">Marie-Claire D.</div>
                <div className="text-neutral-400 text-sm">Cliente depuis 3 ans</div>
              </div>
            </div>

            <div className="bg-neutral-800 p-8">
              <div className="mb-6">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  "Un salon d'exception où chaque visite est un moment de pur bonheur. 
                  La qualité du service et le résultat sont toujours parfaits."
                </p>
              </div>
              <div>
                <div className="font-medium">Isabelle R.</div>
                <div className="text-neutral-400 text-sm">Cliente VIP</div>
              </div>
            </div>

            <div className="bg-neutral-800 p-8">
              <div className="mb-6">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  "Joe comprend immédiatement ce que je veux. C'est un véritable artiste 
                  qui sublime la beauté naturelle avec une élégance rare."
                </p>
              </div>
              <div>
                <div className="font-medium">Céline M.</div>
                <div className="text-neutral-400 text-sm">Actrice</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-light text-neutral-900 tracking-tight">
            Créons votre prochaine transformation
          </h2>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Inspiré par notre portfolio ? Prenez rendez-vous pour une consultation personnalisée 
            et découvrez votre potentiel beauté.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-neutral-900 text-white hover:bg-neutral-800">
              Consultation gratuite
            </Button>
            <Button variant="secondary" size="lg">
              Voir nos services
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
