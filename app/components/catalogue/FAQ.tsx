"use client";

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/app/lib/utils';

const faqs = [
    {
        question: "Est-ce que le résultat est vraiment indétectable ?",
        answer: "Absolument. Nos prothèses utilisent des bases en Nano Skin ou en dentelle suisse ultra-fine (0.04mm) qui imitent parfaitement le cuir chevelu. Les cheveux sont implantés un par un pour reproduire une implantation naturelle, rendant la ligne frontale invisible même de très près."
    },
    {
        question: "Puis-je faire du sport et nager avec ma prothèse ?",
        answer: "Oui, sans aucune restriction. Grâce à nos adhésifs chirurgicaux de haute performance, la fixation résiste à la transpiration, à l'eau et aux mouvements brusques. Vous pouvez nager, courir et vivre intensément sans crainte."
    },
    {
        question: "Quelle est la durée de vie d'un complément capillaire ?",
        answer: "La durée de vie varie selon la finesse de la base. Une base ultra-fine (très indétectable) dure entre 2 et 4 mois, tandis qu'une base plus robuste (monofilament) peut durer 6 à 9 mois. Nous vous conseillerons le meilleur équilibre selon votre mode de vie."
    },
    {
        question: "Comment se déroule l'entretien ?",
        answer: "L'entretien est simple et peut être réalisé en salon ou chez vous. Il consiste à nettoyer le cuir chevelu et la base, puis à remplacer l'adhésif. Cette routine s'effectue généralement toutes les 3 à 4 semaines."
    },
    {
        question: "Est-ce douloureux ou invasif ?",
        answer: "Non, c'est une solution 100% non-chirurgicale et indolore. Aucun médicament, aucune greffe. C'est simplement une seconde peau capillaire qui s'intègre à la vôtre."
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-stone-50">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-light text-stone-900 tracking-tight mb-4">
                        Questions Fréquentes
                    </h2>
                    <p className="text-stone-600 font-light">
                        Tout ce que vous devez savoir pour franchir le pas en toute sérénité.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={cn(
                                "bg-white border text-stone-900 transition-all duration-300 overflow-hidden",
                                openIndex === index ? "border-stone-800 shadow-md" : "border-stone-200 hover:border-stone-400"
                            )}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className={cn("font-medium text-lg leading-tight pr-8", openIndex === index ? "text-stone-900" : "text-stone-700")}>
                                    {faq.question}
                                </span>
                                <span className={cn("flex-shrink-0 transition-transform duration-300", openIndex === index && "rotate-180")}>
                                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                </span>
                            </button>

                            <div
                                className={cn(
                                    "px-6 pb-6 text-stone-600 font-light leading-relaxed transition-all duration-300 ease-in-out",
                                    openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pb-0"
                                )}
                            >
                                {faq.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
