import React from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export const metadata = {
    title: 'Mentions Légales | Joe Bautista Atelier',
    description: 'Mentions légales et informations juridiques de Joe Bautista Atelier',
};

export default function MentionsLegalesPage() {
    return (
        <div className="min-h-screen bg-white">
            <Header />

            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <h1 className="text-4xl font-light text-stone-900 mb-8">Mentions Légales</h1>

                <div className="prose prose-stone max-w-none space-y-8">
                    <section>
                        <h2 className="text-2xl font-medium text-stone-900 mb-4">Éditeur du Site</h2>
                        <p className="text-stone-600 leading-relaxed">
                            <strong>Joe Bautista Atelier</strong><br />
                            Service de coiffure à domicile<br />
                            Genève, Suisse<br />
                            Email: joesam6@hotmail.com<br />
                            Téléphone: +41 79 476 17 81
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-medium text-stone-900 mb-4">Hébergement</h2>
                        <p className="text-stone-600 leading-relaxed">
                            Ce site est hébergé par Vercel Inc.<br />
                            440 N Barranca Ave #4133<br />
                            Covina, CA 91723, États-Unis
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-medium text-stone-900 mb-4">Propriété Intellectuelle</h2>
                        <p className="text-stone-600 leading-relaxed">
                            L&apos;ensemble du contenu de ce site (textes, images, logos, graphismes) est la propriété
                            exclusive de Joe Bautista Atelier, sauf mention contraire. Toute reproduction,
                            représentation, modification, publication ou adaptation de tout ou partie des éléments
                            du site est interdite sans autorisation écrite préalable.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-medium text-stone-900 mb-4">Responsabilité</h2>
                        <p className="text-stone-600 leading-relaxed">
                            Joe Bautista Atelier s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des informations
                            diffusées sur ce site. Toutefois, Joe Bautista Atelier ne peut garantir l&apos;exactitude,
                            la précision ou l&apos;exhaustivité des informations mises à disposition sur ce site.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-medium text-stone-900 mb-4">Droit Applicable</h2>
                        <p className="text-stone-600 leading-relaxed">
                            Le présent site et son contenu sont régis par le droit suisse. Tout litige relatif
                            à l&apos;utilisation du site sera soumis à la compétence exclusive des tribunaux de Genève.
                        </p>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}
