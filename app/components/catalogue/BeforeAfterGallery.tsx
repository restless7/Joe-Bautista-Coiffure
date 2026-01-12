"use client";

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Transformation {
    id: string;
    image: string; // Single merged before/after image
    name: string;
    description: string;
}

const transformations: Transformation[] = [
    {
        id: "1",
        image: "/images/catalogue/transformation-1.jpg",
        name: "Marc, 52 ans",
        description: "Retrouver la densité naturelle"
    },
    {
        id: "2",
        image: "/images/catalogue/transformation-2.jpg",
        name: "Philippe, 45 ans",
        description: "Ligne frontale indétectable"
    },
    {
        id: "3",
        image: "/images/catalogue/transformation-3.jpg",
        name: "Laurent, 38 ans",
        description: "Transformation complète"
    },
    {
        id: "4",
        image: "/images/catalogue/transformation-4.jpg",
        name: "David, 48 ans",
        description: "Rajeunissement instantané"
    },
    {
        id: "5",
        image: "/images/catalogue/transformation-5.jpg",
        name: "Antoine, 41 ans",
        description: "Confiance retrouvée"
    },
    {
        id: "6",
        image: "/images/catalogue/transformation-6.jpg",
        name: "Nicolas, 55 ans",
        description: "Naturel et discret"
    },
    {
        id: "7",
        image: "/images/catalogue/transformation-7.jpg",
        name: "François, 43 ans",
        description: "Style moderne et élégant"
    }
];

export function BeforeAfterGallery() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % transformations.length);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + transformations.length) % transformations.length);
    }, []);

    // Auto-play logic
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            nextSlide();
        }, 4000); // Change slide every 4 seconds

        return () => clearInterval(interval);
    }, [isAutoPlaying, nextSlide]);

    // Pause autoplay on hover
    const handleMouseEnter = () => setIsAutoPlaying(false);
    const handleMouseLeave = () => setIsAutoPlaying(true);

    return (
        <section className="py-24 bg-stone-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-light text-stone-900 tracking-tight mb-4">
                        Transformations Réelles
                    </h2>
                    <p className="text-stone-600 max-w-2xl mx-auto font-light">
                        Découvrez les résultats authentiques de nos clients.
                    </p>
                </div>

                {/* Slideshow Container */}
                <div
                    className="relative max-w-5xl mx-auto"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {/* Main Slide */}
                    <div className="relative aspect-[16/9] md:aspect-[2/1] overflow-hidden bg-stone-200 rounded-lg shadow-xl">
                        {transformations.map((item, index) => (
                            <div
                                key={item.id}
                                className={`absolute inset-0 transition-all duration-700 ease-in-out ${index === currentIndex
                                    ? 'opacity-100 translate-x-0'
                                    : index < currentIndex
                                        ? 'opacity-0 -translate-x-full'
                                        : 'opacity-0 translate-x-full'
                                    }`}
                            >
                                <Image
                                    src={item.image}
                                    alt={`Transformation ${item.name}`}
                                    fill
                                    sizes="(max-width: 1280px) 100vw, 1280px"
                                    className="object-cover"
                                    priority={index === 0}
                                />

                                {/* Before/After Labels */}
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 md:p-8">
                                    <div className="flex justify-between items-end">
                                        <div>
                                            <span className="text-white/80 text-sm uppercase tracking-widest">Avant / Après</span>
                                            <h3 className="text-white text-xl md:text-2xl font-light mt-1">{item.name}</h3>
                                            <p className="text-white/70 text-sm font-light">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 z-10"
                        aria-label="Image précédente"
                    >
                        <ChevronLeft className="w-6 h-6 text-stone-900" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 z-10"
                        aria-label="Image suivante"
                    >
                        <ChevronRight className="w-6 h-6 text-stone-900" />
                    </button>

                    {/* Dot Indicators */}
                    <div className="flex justify-center gap-3 mt-6">
                        {transformations.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentIndex
                                    ? 'bg-stone-900 w-8'
                                    : 'bg-stone-300 hover:bg-stone-400'
                                    }`}
                                aria-label={`Aller à l'image ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                <div className="text-center mt-8">
                    <p className="text-stone-400 text-sm font-light">
                        * Résultats réels. Les résultats individuels peuvent varier.
                    </p>
                </div>
            </div>
        </section>
    );
}
