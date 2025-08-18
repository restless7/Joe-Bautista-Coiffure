import React from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';

export default function About() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-neutral-900 tracking-tight leading-tight">
              <span className="block">L&apos;artisan de votre</span>
              <span className="block text-neutral-600">beauté naturelle</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Depuis plus de 15 ans, Joe Bautista cultive l&apos;art de la coiffure avec passion,
              créant des expériences uniques qui révèlent la beauté authentique de chaque client.
            </p>
            <p className="text-sm text-neutral-500 max-w-3xl mx-auto">
              (For over 15 years, Joe Bautista has cultivated the art of hairdressing with passion, 
              creating unique experiences that reveal the authentic beauty of each client.)
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/5] rounded-none overflow-hidden">
              <Image
                src="/images/about/joe-portrait.jpg"
                alt="Joe Bautista - Maître coiffeur et fondateur"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
            </div>
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-light text-neutral-900 tracking-tight">
                Une passion devenue art
              </h2>
              <div className="space-y-6 text-neutral-700 leading-relaxed">
                <p>
                  Né à Genève, Joe Bautista découvre sa passion pour la coiffure très tôt. 
                  Formé dans les plus prestigieux salons européens, il développe une approche 
                  unique alliant technique française et innovation contemporaine.
                </p>
                <p>
                  Son parcours l&apos;amène à Paris, où il affine son art auprès des maîtres
                  coiffeurs de renom. Cette expérience forge sa philosophie : chaque client 
                  mérite une attention exceptionnelle et un résultat qui transcende ses attentes.
                </p>
                <p className="text-sm text-neutral-500">
                  (Born in Geneva, Joe Bautista discovered his passion for hairdressing very early. 
                  Trained in Europe's most prestigious salons, he developed a unique approach combining 
                  French technique with contemporary innovation.)
                </p>
              </div>
              <div className="pt-4">
                <Button variant="minimal">
                  Découvrir mon parcours →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-neutral-900 tracking-tight mb-6">
              Ma philosophie
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Chaque coupe est une œuvre d&apos;art, chaque client une inspiration unique.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-neutral-900 mx-auto"></div>
              <h3 className="text-xl font-medium text-neutral-900">Écoute Authentique</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Comprendre vos désirs, votre style de vie, votre personnalité 
                pour créer la coupe parfaite.
              </p>
            </div>
            
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-neutral-900 mx-auto"></div>
              <h3 className="text-xl font-medium text-neutral-900">Excellence Technique</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Maîtrise parfaite des techniques classiques et modernes, 
                formation continue aux dernières innovations.
              </p>
            </div>
            
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-neutral-900 mx-auto"></div>
              <h3 className="text-xl font-medium text-neutral-900">Expérience Unique</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Chaque visite est un moment privilégié de détente et de transformation 
                dans un cadre d&apos;exception.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="bg-neutral-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">
              Reconnaissances & Formations
            </h2>
            <p className="text-neutral-300 max-w-2xl mx-auto">
              Un parcours jalonné d&apos;excellence et de reconnaissance internationale.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <h4 className="text-lg font-medium">Académie Vidal Sassoon</h4>
              <p className="text-neutral-400 text-sm">Formation avancée en coupe</p>
            </div>
            
            <div className="text-center space-y-4">
              <h4 className="text-lg font-medium">École Française de Coiffure</h4>
              <p className="text-neutral-400 text-sm">Spécialisation coloration</p>
            </div>
            
            <div className="text-center space-y-4">
              <h4 className="text-lg font-medium">Prix Innovation 2022</h4>
              <p className="text-neutral-400 text-sm">Meilleur salon émergent Paris</p>
            </div>
            
            <div className="text-center space-y-4">
              <h4 className="text-lg font-medium">Certification Bio</h4>
              <p className="text-neutral-400 text-sm">Produits naturels & durables</p>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-light text-neutral-900 tracking-tight">
                Un écrin d&apos;exception
              </h2>
              <div className="space-y-6 text-neutral-700 leading-relaxed">
                <p>
                  Notre salon, situé dans le cœur de Paris, a été conçu comme un havre de paix 
                  où luxe et simplicité se rencontrent. Chaque détail a été pensé pour votre confort 
                  et votre bien-être.
                </p>
                <p>
                  L&apos;architecture minimaliste et les matériaux nobles créent une atmosphère sereine,
                  propice à la détente et à la créativité. Un espace où le temps s&apos;arrête.
                </p>
                <p className="text-sm text-neutral-500">
                  (Our salon, located in the heart of Paris, has been designed as a haven of peace 
                  where luxury and simplicity meet. Every detail has been designed for your comfort and well-being.)
                </p>
              </div>
              <Button variant="secondary">
                Visite virtuelle
              </Button>
            </div>
            <div className="relative aspect-square rounded-none overflow-hidden">
              <Image
                src="/images/about/salon-interior.jpg"
                alt="Intérieur du salon Joe Bautista Coiffure - Design minimaliste et luxueux"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
