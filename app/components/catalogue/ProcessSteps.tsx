"use client";

import { ClipboardList, Scissors, Sparkles, HeartHandshake } from 'lucide-react';

const steps = [
    {
        icon: ClipboardList,
        title: "1. Consultation",
        description: "Une écoute attentive pour comprendre vos besoins et analyser votre morphologie."
    },
    {
        icon: Scissors,
        title: "2. Conception",
        description: "Création de l'empreinte et choix des matériaux (cheveux, base, couleur) pour un sur-mesure absolu."
    },
    {
        icon: Sparkles,
        title: "3. Intégration",
        description: "Pose experte et coupe stylisée pour fusionner la prothèse avec vos cheveux existants."
    },
    {
        icon: HeartHandshake,
        title: "4. Suivi",
        description: "Un programme d'entretien régulier pour maintenir votre style parfait au quotidien."
    }
];

export function ProcessSteps() {
    return (
        <section className="py-24 bg-white border-t border-stone-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-light text-stone-900 tracking-tight mb-4">
                        L'Expérience Atelier
                    </h2>
                    <p className="text-stone-600 max-w-2xl mx-auto font-light">
                        Un processus artisanal en quatre étapes pour un résultat naturel et durable.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
                    {/* Connecting line for desktop */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-stone-200 -z-10" />

                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center text-center bg-white">
                            <div className="w-24 h-24 rounded-full bg-stone-50 border border-stone-200 flex items-center justify-center mb-8 relative z-10 transition-transform duration-300 hover:scale-110">
                                <step.icon className="w-8 h-8 text-stone-800" strokeWidth={1} />
                            </div>
                            <h3 className="text-xl font-medium text-stone-900 mb-3">
                                {step.title}
                            </h3>
                            <p className="text-stone-500 text-sm leading-relaxed max-w-xs font-light">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
