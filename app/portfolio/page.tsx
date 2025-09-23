'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems = [
    { id: 1, category: 'coupe', title: 'Coupe Moderne à Domicile', image: '/images/portfolio/coupe-01.jpg' },
    { id: 2, category: 'coloration', title: 'Balayage Professionnel', image: '/images/portfolio/color-01.jpg' },
    { id: 3, category: 'transformation', title: 'Transformation Complète', image: '/images/portfolio/transform-01.jpg' },
    { id: 4, category: 'coupe', title: 'Coupe Homme aux Ciseaux', image: '/images/portfolio/coupe-02.jpg' },
    { id: 5, category: 'coloration', title: 'Mèches Naturelles', image: '/images/portfolio/color-02.jpg' },
    { id: 6, category: 'evenementiel', title: 'Chignon Élégant', image: '/images/portfolio/event-01.jpg' },
    { id: 7, category: 'keratine', title: 'Traitement Kératine', image: '/images/portfolio/keratine-01.jpg' },
    { id: 8, category: 'beaute', title: 'Maquillage Événementiel', image: '/images/portfolio/makeup-01.jpg' },
    { id: 9, category: 'coupe', title: 'Coupe Enfant Ludique', image: '/images/portfolio/coupe-03.jpg' },
    { id: 10, category: 'wellbeing', title: 'Massage Relaxant', image: '/images/portfolio/massage-01.jpg' },
    { id: 11, category: 'manucure', title: 'Manucure French', image: '/images/portfolio/manicure-01.jpg' },
    { id: 12, category: 'beaute', title: 'Mise en Beauté Mariée', image: '/images/portfolio/bridal-01.jpg' },
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
              <span className="block">Nos</span>
              <span className="block text-neutral-600">réalisations</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Découvrez nos créations beauté réalisées à domicile dans la région genevoise. 
              Coiffure, bien-être, soins esthétiques - chaque service dans le confort de votre foyer.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-neutral-500">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Services à domicile - Genève
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Résultats garantis
              </div>
            </div>
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
              Coloration
            </button>
            <button
              onClick={() => setActiveFilter('beaute')}
              className={`px-6 py-3 text-sm transition-all duration-300 ${
                activeFilter === 'beaute'
                  ? 'bg-neutral-900 text-white'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              Beauté
            </button>
            <button
              onClick={() => setActiveFilter('wellbeing')}
              className={`px-6 py-3 text-sm transition-all duration-300 ${
                activeFilter === 'wellbeing'
                  ? 'bg-neutral-900 text-white'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              Bien-être
            </button>
            <button
              onClick={() => setActiveFilter('evenementiel')}
              className={`px-6 py-3 text-sm transition-all duration-300 ${
                activeFilter === 'evenementiel'
                  ? 'bg-neutral-900 text-white'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              Événements
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
              Réalisations à Domicile
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Nos prestations les plus remarquables, réalisées dans le confort 
              des domiciles de nos clients genevois.
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
                  Transformation à Domicile
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  Une transformation complète réalisée dans le salon privé de notre cliente. 
                  Shampooing, coupe moderne et balayage naturel - tout dans le confort 
                  et l'intimité de son foyer genevois.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm text-neutral-600">
                  <div>
                    <span className="font-medium text-neutral-900">Services :</span>
                    <br />Coupe + Balayage + Brushing
                  </div>
                  <div>
                    <span className="font-medium text-neutral-900">Lieu :</span>
                    <br />Domicile - Genève Centre
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
                  Séance Beauté Complète
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  Une expérience beauté totale à domicile : mèches professionnelles, 
                  manucure French et maquillage pour un événement spécial. 
                  Notre cliente a profité d'une journée spa dans son salon privé.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm text-neutral-600">
                  <div>
                    <span className="font-medium text-neutral-900">Services :</span>
                    <br />Mèches + Manucure + Maquillage
                  </div>
                  <div>
                    <span className="font-medium text-neutral-900">Lieu :</span>
                    <br />Domicile - Carouge
                  </div>
                </div>
                <Button variant="minimal">
                  Découvrir nos forfaits →
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
                  "Le service à domicile de Joe est fantastique ! Pas besoin de se déplacer, 
                  je reçois un service professionnel dans le confort de mon salon. 
                  Mes enfants peuvent aussi faire leur coupe en même temps."
                </p>
              </div>
              <div>
                <div className="font-medium">Marie-Claire D.</div>
                <div className="text-neutral-400 text-sm">Genève Centre - Cliente depuis 3 ans</div>
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
                  "J'ai découvert le luxe d'avoir mon coiffeur personnel à la maison. 
                  Joe arrive avec tout son matériel, l'ambiance est détendue et le résultat 
                  toujours impeccable. Plus jamais je ne retournerai en salon !"
                </p>
              </div>
              <div>
                <div className="font-medium">Isabelle R.</div>
                <div className="text-neutral-400 text-sm">Carouge - Service régulier</div>
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
                  "Pour mes shootings et événements, Joe vient directement chez moi avec 
                  tout l'équipement. Coiffure, maquillage, manucure - une équipe complète 
                  dans mon dressing. C'est la solution parfaite !"
                </p>
              </div>
              <div>
                <div className="font-medium">Céline M.</div>
                <div className="text-neutral-400 text-sm">Plan-les-Ouates - Actrice</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-light text-neutral-900 tracking-tight">
            Votre transformation à domicile
          </h2>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Inspiré(e) par nos réalisations ? Profitez vous aussi de nos services 
            professionnels dans le confort de votre foyer genevois. 
            Consultation, devis et réservation personnalisés.
          </p>
          <div className="bg-neutral-50 p-6 rounded-lg max-w-md mx-auto mb-8">
            <div className="text-sm text-neutral-600 space-y-2">
              <p><strong>Zone de service :</strong> Genève & région métropolitaine</p>
              <p><strong>Déplacement :</strong> Inclus dans tous nos tarifs</p>
              <p><strong>Consultation :</strong> Gratuite et sans engagement</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-neutral-900 text-white hover:bg-neutral-800">
              Réserver à domicile
            </Button>
            <Button variant="secondary" size="lg">
              Voir nos tarifs
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
