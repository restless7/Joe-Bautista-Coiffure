"use client";

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { BookingButton } from '@/app/components/booking/BookingButton';

interface ProductSlide {
    id: string;
    image: string;
    title: string;
    subtitle: string;
    features: string[];
}

const productSlides: ProductSlide[] = [
    {
        id: "1",
        image: "/images/catalogue/showcase-skin-system.jpg",
        title: "Système Ultra-Fin",
        subtitle: "Base Skin 0.03mm",
        features: ["Ligne frontale indétectable", "Idéal pour sport & natation", "Pose rapide"]
    },
    {
        id: "2",
        image: "/images/catalogue/showcase-lace-system.jpg",
        title: "Dentelle Suisse Premium",
        subtitle: "Respirabilité maximale",
        features: ["Confort longue durée", "Aspect ultra-naturel", "Pour peaux sensibles"]
    },
    {
        id: "3",
        image: "/images/catalogue/showcase-hybrid.jpg",
        title: "Système Hybride",
        subtitle: "Le meilleur des deux mondes",
        features: ["Skin frontal + Lace arrière", "Polyvalent", "Durabilité supérieure"]
    },
    {
        id: "4",
        image: "/images/catalogue/showcase-topper.jpg",
        title: "Volumateur Femme",
        subtitle: "Base Soie Invisible",
        features: ["Volume instantané", "Clips ou adhésif", "Cheveux européens 100%"]
    }
];

export function ProductShowcase() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % productSlides.length);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + productSlides.length) % productSlides.length);
    }, []);

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, nextSlide]);

    const handleMouseEnter = () => setIsAutoPlaying(false);
    const handleMouseLeave = () => setIsAutoPlaying(true);

    return (
        <section className="py-24 bg-stone-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <span className="text-xs uppercase tracking-[0.2em] text-stone-400 font-semibold">
                        Notre Collection
                    </span>
                    <h2 className="text-3xl md:text-4xl font-light tracking-tight mt-4 mb-4">
                        Systèmes Sur Mesure
                    </h2>
                    <p className="text-stone-400 max-w-2xl mx-auto font-light">
                        Chaque solution est unique, conçue pour s'adapter parfaitement à votre style de vie.
                    </p>
                </div>

                {/* Slideshow Container */}
                <div
                    className="relative max-w-6xl mx-auto"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        {/* Image Side */}
                        <div className="relative aspect-[4/5] overflow-hidden bg-stone-800 rounded-lg">
                            {productSlides.map((slide, index) => (
                                <div
                                    key={slide.id}
                                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${index === currentIndex
                                            ? 'opacity-100 scale-100'
                                            : 'opacity-0 scale-105'
                                        }`}
                                >
                                    <Image
                                        src={slide.image}
                                        alt={slide.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover"
                                        priority={index === 0}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Content Side */}
                        <div className="py-8 md:py-0">
                            {productSlides.map((slide, index) => (
                                <div
                                    key={slide.id}
                                    className={`transition-all duration-500 ${index === currentIndex
                                            ? 'opacity-100 translate-y-0'
                                            : 'opacity-0 translate-y-4 absolute pointer-events-none'
                                        }`}
                                >
                                    {index === currentIndex && (
                                        <div className="space-y-6">
                                            <div>
                                                <span className="text-stone-500 text-sm uppercase tracking-widest">
                                                    {slide.subtitle}
                                                </span>
                                                <h3 className="text-3xl md:text-4xl font-light mt-2">
                                                    {slide.title}
                                                </h3>
                                            </div>

                                            <ul className="space-y-3">
                                                {slide.features.map((feature, i) => (
                                                    <li key={i} className="flex items-center gap-3 text-stone-300 font-light">
                                                        <div className="w-1.5 h-1.5 bg-white rounded-full" />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>

                                            <div className="pt-4">
                                                <BookingButton className="bg-white text-stone-900 hover:bg-stone-100">
                                                    Découvrir ce système
                                                </BookingButton>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}

                            {/* Navigation */}
                            <div className="flex items-center gap-4 mt-12">
                                <button
                                    onClick={prevSlide}
                                    className="w-12 h-12 border border-stone-700 hover:border-white rounded-full flex items-center justify-center transition-colors"
                                    aria-label="Produit précédent"
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className="w-12 h-12 border border-stone-700 hover:border-white rounded-full flex items-center justify-center transition-colors"
                                    aria-label="Produit suivant"
                                >
                                    <ChevronRight className="w-5 h-5" />
                                </button>

                                {/* Progress Dots */}
                                <div className="flex gap-2 ml-4">
                                    {productSlides.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentIndex(index)}
                                            className={`h-1 rounded-full transition-all duration-300 ${index === currentIndex
                                                    ? 'bg-white w-8'
                                                    : 'bg-stone-600 w-4 hover:bg-stone-500'
                                                }`}
                                            aria-label={`Aller au produit ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
