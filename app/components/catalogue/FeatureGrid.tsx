"use client";

import Image from 'next/image';

const features = [
    {
        title: "Cheveux Européens",
        description: "Sélectionnés main pour leur texture soyeuse et leur mouvement naturel.",
        image: "/images/catalogue/texture-detail.jpg"
    },
    {
        title: "Implantation Main",
        description: "Chaque cheveu est noué individuellement pour recréer la densité naturelle.",
        image: "/images/catalogue/process-tools.jpg"
    },
    {
        title: "Base Indétectable",
        description: "Une transparence totale qui laisse apparaître votre propre peau.",
        image: "/images/catalogue/feature-base.jpg"
    },
    {
        title: "Design Sur Mesure",
        description: "Moulage précis de votre crâne pour un confort absolu et une tenue parfaite.",
        image: "/images/catalogue/feature-mold.jpg"
    }
];

export function FeatureGrid() {
    return (
        <section className="py-24 bg-stone-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                    <div className="lg:col-span-4 text-center mb-8">
                        <h2 className="text-3xl font-light tracking-tight mb-2">L'Excellence du Détail</h2>
                        <div className="w-12 h-px bg-stone-500 mx-auto" />
                    </div>

                    {features.map((feature, idx) => (
                        <div key={idx} className="group cursor-default">
                            <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-stone-800">
                                {/* Placeholder overlay */}
                                <div className="absolute inset-0 flex items-center justify-center text-stone-600 font-light text-sm">
                                    Image: {feature.title}
                                </div>

                                {/* 
                           Uncomment for real images
                           <Image 
                              src={feature.image} 
                              alt={feature.title} 
                              fill 
                              className="object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-700" 
                           />
                         */}
                            </div>
                            <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
                            <p className="text-stone-400 font-light leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
