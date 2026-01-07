"use client";

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import { WhatsAppButton } from '@/app/components/booking/WhatsAppButton';
import { BookingButton } from '@/app/components/booking/BookingButton';
import { ProductCard } from '@/app/components/catalogue/ProductCard';
import { FilterSidebar } from '@/app/components/catalogue/FilterSidebar';
import { Testimonials } from '@/app/components/catalogue/Testimonials';
import { ProcessSteps } from '@/app/components/catalogue/ProcessSteps';
import { FAQ } from '@/app/components/catalogue/FAQ';
import { FeatureGrid } from '@/app/components/catalogue/FeatureGrid';
import { products } from '@/app/lib/products';

export default function CataloguePage() {
    const [filters, setFilters] = useState({
        category: null as string | null,
        baseMaterial: null as string | null,
        baseSize: null as string | null,
    });

    const filteredProducts = useMemo(() => {
        return products.filter(product => {
            if (filters.category && product.category !== filters.category) return false;
            if (filters.baseMaterial && product.base_design !== filters.baseMaterial) return false;
            if (filters.baseSize && product.base_size !== filters.baseSize) return false;
            return true;
        });
    }, [filters]);

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* 1. The Header Hero */}
            <section className="relative pt-32 pb-40 px-4 sm:px-6 lg:px-8 text-center bg-stone-50 overflow-hidden">
                {/* Background Decoration (optional) */}
                <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
                    <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-stone-200 blur-[80px]" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-stone-200 blur-[60px]" />
                </div>

                <div className="relative max-w-4xl mx-auto space-y-8 z-10">
                    <span className="text-xs uppercase tracking-[0.2em] text-stone-500 font-semibold">
                        Atelier Joe Bautista
                    </span>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-stone-900 tracking-tight leading-tight">
                        L&apos;Art de la<br />
                        <span className="italic font-normal">Transformation Capillaire</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-stone-600 font-light max-w-2xl mx-auto leading-relaxed">
                        Des solutions indétectables, conçues sur mesure pour
                        révéler votre authenticité.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
                        <BookingButton size="lg" className="bg-stone-900 text-white hover:bg-stone-800 px-8 py-4">
                            Réserver une Consultation
                        </BookingButton>
                        <WhatsAppButton variant="secondary" size="lg" className="bg-transparent border-stone-300 text-stone-900 hover:border-stone-900 px-8 py-4">
                            Discuter sur WhatsApp
                        </WhatsAppButton>
                    </div>
                </div>
            </section>

            {/* 2. The Educational Split (Refined) */}
            <section className="py-24 border-b border-stone-100 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 lg:gap-32 items-center">
                        <div className="space-y-6">
                            <h3 className="text-3xl font-light text-stone-900">Compléments Capillaires Homme</h3>
                            <p className="text-stone-600 leading-relaxed font-light text-lg">
                                Conçus pour une ligne frontale indétectable et une fixation sécurisée.
                                Nos systèmes pour hommes privilégient un rendu 100% naturel grâce à des matériaux
                                comme la Nano Skin et la dentelle suisse, fusionnant invisiblement avec votre cuir chevelu.
                            </p>
                            <ul className="space-y-2 font-light text-stone-500">
                                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-stone-900 rounded-full" /> Indétectable au toucher</li>
                                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-stone-900 rounded-full" /> Résistant à l&apos;eau et au sport</li>
                            </ul>
                            <div className="pt-4">
                                <BookingButton variant="secondary" className="border border-stone-200 bg-transparent hover:bg-stone-50">
                                    Diagnostic Homme
                                </BookingButton>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <h3 className="text-3xl font-light text-stone-900">Volumateurs Femme</h3>
                            <p className="text-stone-600 leading-relaxed font-light text-lg">
                                Axés sur le volume et l&apos;intégration parfaite. Nos volumateurs utilisent
                                des bases en soie qui imitent le cuir chevelu, apportant de la densité
                                précisément là où vous en avez besoin, tout en laissant votre chevelure respirer.
                            </p>
                            <ul className="space-y-2 font-light text-stone-500">
                                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-stone-900 rounded-full" /> Volume instantané</li>
                                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-stone-900 rounded-full" /> Intégration invisible</li>
                            </ul>
                            <div className="pt-4">
                                <BookingButton variant="secondary" className="border border-stone-200 bg-transparent hover:bg-stone-50">
                                    Diagnostic Femme
                                </BookingButton>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. The Atelier Difference (Feature Grid) */}
            <FeatureGrid />

            {/* 4. The Collection (Grid) */}
            <section id="collection" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12 text-center md:text-left">
                    <h2 className="text-2xl font-light uppercase tracking-widest text-stone-900">La Collection</h2>
                </div>

                <div className="flex flex-col md:flex-row gap-12">
                    {/* Sidebar */}
                    <FilterSidebar
                        products={products}
                        filters={filters}
                        onFilterChange={setFilters}
                        className="flex-shrink-0"
                    />

                    {/* Grid */}
                    <div className="flex-grow">
                        {filteredProducts.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {filteredProducts.map(product => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        ) : (
                            <div className="py-20 text-center text-stone-500 font-light">
                                Aucun produit ne correspond à vos filtres.
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* 5. Client Stories */}
            <Testimonials />

            {/* 6. The Journey (Process) */}
            <ProcessSteps />

            {/* 7. Lifestyle (Active Life) */}
            <section className="relative h-[600px] flex items-center">
                {/* Background Image Placeholder */}
                <div className="absolute inset-0 bg-stone-200">
                    {/* 
              Real image would be: <Image src="/images/catalogue/lifestyle-active.jpg" ... />
            */}
                    <div className="absolute inset-0 flex items-center justify-center text-stone-400 font-light text-2xl tracking-widest uppercase">
                        Lifestyle / Sport / Liberté
                    </div>
                    <div className="absolute inset-0 bg-black/20" /> {/* Overlay */}
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="max-w-xl bg-white/95 backdrop-blur-sm p-12 md:p-16 shadow-2xl">
                        <h3 className="text-3xl font-light text-stone-900 mb-6">Vivez Sans Compromis</h3>
                        <p className="text-stone-600 leading-relaxed mb-8 font-light text-lg">
                            Sport, baignade, vent... Oubliez que vous portez une prothèse.
                            Nos solutions sont conçues pour résister à une vie active et intense,
                            vous offrant une liberté de mouvement totale et une tranquillité d&apos;esprit absolue.
                        </p>
                        <BookingButton className="bg-stone-900 text-white hover:bg-stone-800 w-full md:w-auto">
                            Je veux ma liberté
                        </BookingButton>
                    </div>
                </div>
            </section>

            {/* 8. FAQ */}
            <FAQ />

            {/* 9. The Consultation Footer */}
            <section className="bg-stone-900 py-32 text-center text-white px-4">
                <div className="max-w-3xl mx-auto space-y-10">
                    <h2 className="text-4xl md:text-5xl font-light tracking-tight">Votre Nouvelle Image Commence Ici</h2>
                    <p className="text-stone-400 font-light text-xl max-w-2xl mx-auto leading-relaxed">
                        Chaque cas est unique. Venez nous rencontrer à Genève pour un diagnostic gratuit
                        et découvrez la solution qui changera votre quotidien.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6 pt-4">
                        <BookingButton size="lg" className="bg-white text-stone-900 hover:bg-stone-50 px-10 py-4 text-lg">
                            Réserver mon Créneau
                        </BookingButton>
                        <WhatsAppButton variant="secondary" size="lg" className="border-stone-700 text-stone-300 hover:border-white hover:text-white px-10 py-4 text-lg">
                            Question Rapide ?
                        </WhatsAppButton>
                    </div>
                    <p className="text-stone-500 text-sm mt-8">
                        Discrétion assurée. Cabinet privé.
                    </p>
                </div>
            </section>

            <Footer />
        </div>
    );
}
