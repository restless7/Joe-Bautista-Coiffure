import React from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export const metadata = {
    title: 'Politique de Confidentialité | Joe Bautista Atelier',
    description: 'Politique de confidentialité et protection des données de Joe Bautista Atelier',
};

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-white">
            <Header />

            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <h1 className="text-4xl font-light text-stone-900 mb-8">Politique de Confidentialité</h1>

                <div className="prose prose-stone max-w-none space-y-8">
                    <section>
                        <h2 className="text-2xl font-medium text-stone-900 mb-4">Collecte des Données</h2>
                        <p className="text-stone-600 leading-relaxed">
                            Joe Bautista Atelier collecte uniquement les données personnelles nécessaires à la
                            prise de rendez-vous et à la fourniture de nos services de coiffure à domicile.
                            Ces données incluent votre nom, numéro de téléphone et adresse.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-medium text-stone-900 mb-4">Utilisation des Données</h2>
                        <p className="text-stone-600 leading-relaxed">
                            Vos données personnelles sont utilisées exclusivement pour:
                        </p>
                        <ul className="list-disc list-inside text-stone-600 mt-2 space-y-1">
                            <li>La gestion de vos rendez-vous</li>
                            <li>La communication relative à nos services</li>
                            <li>L&apos;amélioration de nos prestations</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-medium text-stone-900 mb-4">Protection des Données</h2>
                        <p className="text-stone-600 leading-relaxed">
                            Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données
                            personnelles contre tout accès non autorisé, modification, divulgation ou destruction.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-medium text-stone-900 mb-4">Conservation des Données</h2>
                        <p className="text-stone-600 leading-relaxed">
                            Vos données personnelles sont conservées pendant la durée nécessaire à la gestion
                            de notre relation commerciale et conformément aux obligations légales en vigueur.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-medium text-stone-900 mb-4">Vos Droits</h2>
                        <p className="text-stone-600 leading-relaxed">
                            Conformément à la législation suisse sur la protection des données, vous disposez
                            des droits suivants:
                        </p>
                        <ul className="list-disc list-inside text-stone-600 mt-2 space-y-1">
                            <li>Droit d&apos;accès à vos données personnelles</li>
                            <li>Droit de rectification</li>
                            <li>Droit à l&apos;effacement</li>
                            <li>Droit d&apos;opposition au traitement</li>
                        </ul>
                        <p className="text-stone-600 leading-relaxed mt-4">
                            Pour exercer ces droits, veuillez nous contacter à: joesam6@hotmail.com
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-medium text-stone-900 mb-4">Cookies</h2>
                        <p className="text-stone-600 leading-relaxed">
                            Ce site utilise des cookies techniques essentiels au bon fonctionnement du site.
                            Aucun cookie publicitaire ou de tracking n&apos;est utilisé.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-medium text-stone-900 mb-4">Contact</h2>
                        <p className="text-stone-600 leading-relaxed">
                            Pour toute question concernant cette politique de confidentialité, vous pouvez
                            nous contacter:<br />
                            Email: joesam6@hotmail.com<br />
                            Téléphone: +41 79 476 17 81
                        </p>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}
