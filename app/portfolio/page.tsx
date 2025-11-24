'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const memoryItems = [
    { 
      id: 1, 
      image: '/images/portafolio/first-salon-moment.jpg', 
      title: 'Premier jour', 
      caption: 'Mon tout premier jour en salon...\nQue de souvenirs !',
      year: '2018',
      rotation: '-3deg'
    },
    { 
      id: 2, 
      image: '/images/portafolio/award-ceremony.jpg', 
      title: 'Reconnaissance', 
      caption: 'Prix du meilleur coiffeur\nde Genève 2021',
      year: '2021',
      rotation: '2deg'
    },
    { 
      id: 3, 
      image: '/images/portafolio/masterclass-paris.jpg', 
      title: 'Formation Paris', 
      caption: 'Masterclass avec les plus\ngrands noms de la coiffure',
      year: '2020',
      rotation: '-1deg'
    },
    { 
      id: 4, 
      image: '/images/portafolio/celebrity-client.jpg', 
      title: 'Moment spécial', 
      caption: 'reine Sofia dEspagne',
      year: '2022',
      rotation: '4deg'
    },
    { 
      id: 5, 
      image: '/images/portafolio/magazine-feature.jpg', 
      title: 'Dans les magazines', 
      caption: 'Featured dans Vogue Suisse\nUn rêve devenu réalité',
      year: '2023',
      rotation: '-2deg'
    },
    { 
      id: 6, 
      image: '/images/portafolio/fashion-week-backstage.jpg', 
      title: 'Fashion Week', 
      caption: 'Backstage à la Fashion Week\nGenève - Pure magie !',
      year: '2023',
      rotation: '1deg'
    },
    { 
      id: 7, 
      image: '/images/portafolio/studio-opening.jpg', 
      title: 'Nouveau chapitre', 
      caption: 'Ouverture de mon atelier\nà domicile',
      year: '2024',
      rotation: '-4deg'
    },
    { 
      id: 8, 
      image: '/images/portafolio/teaching-moment.jpg', 
      title: 'Transmission', 
      caption: 'Former la nouvelle génération\nma plus grande fierté',
      year: '2024',
      rotation: '3deg'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-neutral-50 to-stone-100">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-neutral-900 tracking-tight leading-tight">
              <span className="block">Mes</span>
              <span className="block text-neutral-600">souvenirs</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Découvrez les moments les plus marquants de mon parcours. 
              Chaque polaroid raconte une histoire, chaque souvenir forge l'artiste que je suis devenu.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-neutral-500">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
                Une carrière en images
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Moments authentiques
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Polaroid Gallery */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-neutral-900 tracking-tight mb-6">
              Mes moments précieux
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Une collection de souvenirs authentiques qui racontent mon histoire
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {memoryItems.map((memory, index) => (
              <div
                key={memory.id}
                className="group relative cursor-pointer transform transition-all duration-500 hover:scale-105 hover:z-10"
                style={{ 
                  transform: `rotate(${memory.rotation})`,
                  animationDelay: `${index * 150}ms`,
                }}
                onClick={() => setSelectedImage(memory.image)}
              >
                {/* Polaroid Frame */}
                <div className="bg-white p-3 pb-16 shadow-xl shadow-neutral-900/20 group-hover:shadow-2xl transition-all duration-500">
                  <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100">
                    <Image
                      src={memory.image}
                      alt={memory.title}
                      fill
                      className="object-cover transition-all duration-500 group-hover:saturate-110"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    />
                    {/* Vintage Filter */}
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-100/20 via-transparent to-amber-900/10 pointer-events-none" />
                  </div>
                  
                  {/* Handwritten Caption */}
                  <div className="mt-3 text-center">
                    <div className="text-neutral-700 text-sm font-mono tracking-wide whitespace-pre-line leading-tight">
                      {memory.caption}
                    </div>
                    <div className="text-neutral-500 text-xs font-mono mt-2">
                      {memory.year}
                    </div>
                  </div>
                </div>
                
                {/* Tape Effect */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-gradient-to-b from-yellow-100 to-yellow-200 opacity-60 shadow-sm" 
                     style={{ transform: 'translateX(-50%) rotate(-5deg)' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-neutral-900 tracking-tight mb-6">
              Mon Parcours
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              De mes premiers pas en salon à l'atelier à domicile d'aujourd'hui, 
              chaque étape a façonné l'artiste que je suis devenu.
            </p>
          </div>

          <div className="space-y-24">
            {/* Journey Milestone 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                {/* Polaroid Style */}
                <div className="bg-white p-4 pb-16 shadow-2xl transform -rotate-2 max-w-md mx-auto">
                  <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100">
                    <Image
                      src="/images/portafolio/first-salon-moment.jpg"
                      alt="Premier jour en salon"
                      fill
                      className="object-cover"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-100/20 via-transparent to-amber-900/10" />
                  </div>
                  <div className="mt-3 text-center">
                    <div className="text-neutral-700 text-sm font-mono">
                      Premier jour en salon - 2018
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-light text-neutral-900">
                  Les Débuts
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  Tout a commencé par une passion. Mon premier jour en salon reste gravé 
                  dans ma mémoire - l'excitation, l'appréhension, mais surtout cette certitude 
                  que j'avais trouvé ma voie. Chaque geste appris, chaque technique maîtrisée 
                  m'a rapproché de mon rêve.
                </p>
                <div className="text-sm text-neutral-600">
                  <span className="font-medium text-neutral-900">Genève</span> • 2018
                </div>
              </div>
            </div>

            {/* Journey Milestone 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 space-y-6">
                <h3 className="text-2xl md:text-3xl font-light text-neutral-900">
                  La Reconnaissance
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  Recevoir le prix du meilleur coiffeur de Genève a été un tournant dans ma carrière. 
                  Cette reconnaissance n'était pas seulement personnelle - elle validait des années 
                  de travail acharné et de dévouement à mon art. Un moment d'émotion pure.
                </p>
                <div className="text-sm text-neutral-600">
                  <span className="font-medium text-neutral-900">Prix du Meilleur Coiffeur</span> • 2021
                </div>
              </div>
              <div className="order-1 lg:order-2 relative">
                <div className="bg-white p-4 pb-16 shadow-2xl transform rotate-1 max-w-md mx-auto">
                  <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100">
                    <Image
                      src="/images/portafolio/award-ceremony.jpg"
                      alt="Cérémonie de remise de prix"
                      fill
                      className="object-cover"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-100/20 via-transparent to-amber-900/10" />
                  </div>
                  <div className="mt-3 text-center">
                    <div className="text-neutral-700 text-sm font-mono">
                      Prix du meilleur coiffeur - 2021
                    </div>
                  </div>
                </div>
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

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" 
             onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-2xl max-h-[90vh] bg-white p-6 pb-16">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute -top-4 -right-4 w-8 h-8 bg-neutral-900 text-white rounded-full flex items-center justify-center hover:bg-neutral-700 transition-colors z-10"
            >
              ×
            </button>
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={selectedImage}
                alt="Souvenir agrandi"
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-4 text-center">
              <div className="text-neutral-700 text-sm font-mono">
                Cliquez ailleurs pour fermer
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight">
            Écrivons votre histoire ensemble
          </h2>
          <p className="text-neutral-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Chaque client devient partie de mon histoire. Laissez-moi créer pour vous 
            une expérience beauté unique dans le confort de votre foyer genevois.
          </p>
          <div className="bg-neutral-800 p-6 rounded-lg max-w-md mx-auto mb-8">
            <div className="text-sm text-neutral-300 space-y-2">
              <p><strong className="text-white">Zone de service :</strong> Genève & région métropolitaine</p>
              <p><strong className="text-white">Déplacement :</strong> Inclus dans tous nos tarifs</p>
              <p><strong className="text-white">Consultation :</strong> Gratuite et sans engagement</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-neutral-900 hover:bg-neutral-100">
              Créer votre moment
            </Button>
            <Button variant="secondary" size="lg" className="border-white text-white hover:bg-white hover:text-neutral-900">
              Découvrir mes services
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
