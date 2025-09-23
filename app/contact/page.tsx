'use client';

import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    preferredDate: '',
    preferredTime: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-neutral-900 tracking-tight leading-tight">
              <span className="block">Réservez</span>
              <span className="block text-neutral-600">à domicile</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Profitez de nos services professionnels de beauté et bien-être 
              dans le confort de votre foyer genevois.
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-neutral-500">
              <div className="flex items-center space-x-2">
                <span className="text-lg">🇫🇷</span>
                <span>Français</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-lg">🇬🇧</span>
                <span>English</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-lg">🇪🇸</span>
                <span>Español</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-light text-neutral-900 mb-8">Informations</h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-medium text-neutral-900 mb-3">Zone de Service</h3>
                    <p className="text-neutral-600 leading-relaxed">
                      Genève Centre, Carouge, Plan-les-Ouates<br />
                      Vernier, Meyrin, Grand-Saconnex<br />
                      Onex, Lancy, Thônex<br />
                      <span className="text-sm text-neutral-500">Et autres communes métropolitaines</span>
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-neutral-900 mb-3">Contact</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-neutral-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        <a href="tel:+41794761781" className="text-neutral-600 hover:text-neutral-900 transition-colors">
                          +41 79 476 17 81
                        </a>
                      </div>
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-neutral-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        <a href="mailto:joesam6@hotmail.com" className="text-neutral-600 hover:text-neutral-900 transition-colors">
                          joesam6@hotmail.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-neutral-900 mb-3">Horaires de Service</h3>
                    <div className="space-y-2 text-neutral-600">
                      <div className="flex justify-between">
                        <span>Tous les jours</span>
                        <span>8h00 - 20h00</span>
                      </div>
                      <div className="text-sm text-neutral-500 mt-3">
                        Réservation 24h à l'avance recommandée
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-neutral-900 mb-3">Avantages à Domicile</h3>
                    <ul className="space-y-2 text-neutral-600 text-sm">
                      <li className="flex items-center space-x-2">
                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>Confort de votre foyer</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>Matériel professionnel transporté</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>Services pour toute la famille</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Consultation Info */}
              <div className="bg-neutral-50 p-8">
                <h3 className="text-lg font-medium text-neutral-900 mb-4">Consultation Gratuite</h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                  Profitez d'une consultation gratuite et sans engagement à domicile 
                  pour définir vos besoins et planifier vos services.
                </p>
                <div className="space-y-2 text-sm text-neutral-600 mb-4">
                  <p>• Analyse personnalisée</p>
                  <p>• Devis détaillé</p>
                  <p>• Conseils professionnels</p>
                </div>
                <Button variant="secondary">
                  <a href="tel:+41794761781">Appeler maintenant</a>
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-light text-neutral-900 mb-8">Réservation</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-900 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-300 focus:border-neutral-900 focus:outline-none transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-900 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-300 focus:border-neutral-900 focus:outline-none transition-colors"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-neutral-900 mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-neutral-300 focus:border-neutral-900 focus:outline-none transition-colors"
                      placeholder="+41 79 476 17 81"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-neutral-900 mb-2">
                    Service souhaité *
                  </label>
                  <select
                    name="service"
                    id="service"
                    required
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-neutral-300 focus:border-neutral-900 focus:outline-none transition-colors"
                  >
                    <option value="">Sélectionnez un service</option>
                    <option value="consultation">Consultation gratuite</option>
                    <option value="shampooing-brushing">Shampooing + Brushing (70 CHF)</option>
                    <option value="shampooing-coupe">Shampooing + Coupe + Brushing (100 CHF)</option>
                    <option value="coupe-homme">Coupe Homme aux Ciseaux (50 CHF)</option>
                    <option value="coupe-enfant">Coupe Enfant (30 CHF)</option>
                    <option value="couleur">Couleur + Brushing (120 CHF)</option>
                    <option value="meches">Mèches + Brushing (120 CHF)</option>
                    <option value="balayage">Balayage + Brushing (120 CHF)</option>
                    <option value="keratine">Traitement Kératine (180 CHF)</option>
                    <option value="chignon">Chignons Événementiels (100 CHF)</option>
                    <option value="massage">Massage Relaxant 1h (150 CHF)</option>
                    <option value="maquillage">Maquillage Professionnel (150 CHF)</option>
                    <option value="manucure">Manucure (60 CHF)</option>
                    <option value="pedicure">Pédicure (100 CHF)</option>
                    <option value="forfait-famille">Forfait Famille (280 CHF)</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="preferredDate" className="block text-sm font-medium text-neutral-900 mb-2">
                      Date souhaitée
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      id="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-300 focus:border-neutral-900 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="preferredTime" className="block text-sm font-medium text-neutral-900 mb-2">
                      Heure préférée
                    </label>
                    <select
                      name="preferredTime"
                      id="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-300 focus:border-neutral-900 focus:outline-none transition-colors"
                    >
                      <option value="">Flexible</option>
                      <option value="9h00">9h00</option>
                      <option value="10h00">10h00</option>
                      <option value="11h00">11h00</option>
                      <option value="12h00">12h00</option>
                      <option value="14h00">14h00</option>
                      <option value="15h00">15h00</option>
                      <option value="16h00">16h00</option>
                      <option value="17h00">17h00</option>
                      <option value="18h00">18h00</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-900 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-neutral-300 focus:border-neutral-900 focus:outline-none transition-colors"
                    placeholder="Décrivez vos attentes, l'adresse de votre domicile à Genève, ou toute information utile pour organiser la séance..."
                  />
                </div>

                <div className="bg-neutral-50 p-4 text-sm text-neutral-600">
                  <p className="mb-2">
                    * Champs obligatoires
                  </p>
                  <p>
                    Nous vous confirmerons votre rendez-vous par email ou téléphone dans les 24h. 
                    Pour les consultations, aucun engagement d'achat n'est requis.
                  </p>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-neutral-900 text-white hover:bg-neutral-800"
                >
                  Envoyer ma demande
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-neutral-900 tracking-tight mb-4">
              Zone de Service
            </h2>
            <p className="text-neutral-600">
              Nous venons directement chez vous dans toute la région métropolitaine genevoise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-center">
                <div className="text-3xl mb-3">🏢</div>
                <h3 className="text-lg font-medium text-neutral-900 mb-3">Genève Centre</h3>
                <p className="text-sm text-neutral-600">Tous quartiers du centre-ville</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-center">
                <div className="text-3xl mb-3">🏡</div>
                <h3 className="text-lg font-medium text-neutral-900 mb-3">Communes Limitrophes</h3>
                <p className="text-sm text-neutral-600">Carouge, Plan-les-Ouates, Onex, Lancy</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-center">
                <div className="text-3xl mb-3">🇫🇷</div>
                <h3 className="text-lg font-medium text-neutral-900 mb-3">Région Frontalière</h3>
                <p className="text-sm text-neutral-600">Annemasse, Gaillard (sur demande)</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-sm text-neutral-500">
              Zone non listée ? Contactez-nous pour vérifier la disponibilité de nos services.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-neutral-900 tracking-tight mb-6">
              Questions Fréquentes
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Retrouvez les réponses aux questions les plus courantes concernant nos services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-neutral-900 mb-3">
                Combien de temps à l'avance dois-je réserver ?
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Nous recommandons de réserver 24h à l'avance minimum. 
                Pour les services longs ou les forfaits, 2-3 jours de préavis sont préférables.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-neutral-900 mb-3">
                Que dois-je préparer à domicile ?
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Rien ! Nous apportons tout l'équipement professionnel nécessaire. 
                Il suffit d'avoir un espace avec électricité et point d'eau à proximité.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-neutral-900 mb-3">
                Quels modes de paiement acceptez-vous ?
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Nous acceptons les espèces (CHF, EUR), cartes bancaires, 
                Twint, et virements bancaires suisses.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-neutral-900 mb-3">
                Y a-t-il des frais de déplacement ?
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Non, tous nos tarifs incluent le déplacement dans la zone de service genevoise. 
                C'est notre engagement qualité pour un service transparent.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-neutral-900 mb-3">
                Proposez-vous des services en anglais/espagnol ?
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Oui ! Nous parlons français, anglais et espagnol pour 
                mieux vous accompagner dans votre langue préférée.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-neutral-900 mb-3">
                Puis-je réserver pour toute la famille ?
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Absolument ! Notre forfait famille (280 CHF) est parfait pour 
                2 adultes + 1 enfant. Économique et pratique.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
