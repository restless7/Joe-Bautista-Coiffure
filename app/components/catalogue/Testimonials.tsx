"use client";

import Image from 'next/image';

interface Testimonial {
    id: string;
    name: string;
    quote: string;
    story: string;
    image: string;
    outcome: string[];
}

const testimonials: Testimonial[] = [
    {
        id: "1",
        name: "Alexandre",
        quote: "Si je l'avais su plus tôt, je n'aurais pas attendu si longtemps.",
        story: "Alexandre cherchait une solution depuis des années. En une journée, il a retrouvé la confiance qu'il pensait perdue.",
        image: "/images/catalogue/client-alexandre.jpg",
        outcome: ["Rajeunissement instantané", "Indétectable au toucher", "Confiance retrouvée"]
    },
    {
        id: "2",
        name: "David",
        quote: "Le résultat dépasse tout ce que j'avais imaginé. C'est simplement moi.",
        story: "À 50 ans, David souhaitait retrouver la densité de sa jeunesse. Le résultat est spectaculaire de naturel.",
        image: "/images/catalogue/client-david.jpg",
        outcome: ["Densité naturelle", "Totalement respirant", "Style sur mesure"]
    },
    {
        id: "3",
        name: "Thomas",
        quote: "Personne ne soupçonne que ce n'est pas mes cheveux naturels.",
        story: "Thomas mène une vie active et sportive. Sa prothèse fait partie intégrante de lui, sans aucune contrainte.",
        image: "/images/catalogue/client-thomas.jpg", // Assuming a 3rd for grid balance
        outcome: ["Vie active sans limite", "Fixation sécurisée", "Liberté totale"]
    }
];

export function Testimonials() {
    return (
        <section className="py-24 bg-stone-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-light text-stone-900 tracking-tight mb-4">
                        Histoires de Métamorphose
                    </h2>
                    <p className="text-stone-600 max-w-2xl mx-auto font-light">
                        Découvrez comment nos solutions sur mesure ont transformé la vie et la confiance de nos clients.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t) => (
                        <div key={t.id} className="bg-white p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center group">
                            <div className="relative w-32 h-32 mb-6 rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 ring-4 ring-stone-50">
                                {/* 
                  Using a placeholder if image fails or for initial setup.
                  In production, these would be real Next/Image components.
                */}
                                <div className="absolute inset-0 bg-stone-200 flex items-center justify-center text-stone-400">
                                    <span className="text-xs">Image {t.name}</span>
                                </div>
                                {/* Uncomment when images are available
                <Image 
                  src={t.image} 
                  alt={`Témoignage de ${t.name}`} 
                  fill 
                  className="object-cover"
                />
                */}
                            </div>

                            <blockquote className="text-lg font-medium text-stone-900 mb-4 italic">
                                "{t.quote}"
                            </blockquote>

                            <p className="text-stone-600 text-sm mb-6 leading-relaxed font-light">
                                {t.story}
                            </p>

                            <div className="mt-auto pt-6 border-t border-stone-100 w-full">
                                <ul className="text-xs text-stone-500 space-y-2">
                                    {t.outcome.map((o, i) => (
                                        <li key={i} className="flex items-center justify-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-stone-400 rounded-full" />
                                            {o}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
