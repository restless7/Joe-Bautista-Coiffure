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
              <span className="block">Prenons</span>
              <span className="block text-neutral-600">rendez-vous</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Réservez votre moment d'exception au cœur de Paris. 
              Chaque consultation commence par une écoute attentive de vos désirs.
            </p>
            <p className="text-sm text-neutral-500 max-w-3xl mx-auto">
              (Book your exceptional moment in the heart of Paris. 
              Each consultation begins with careful listening to your desires.)
            </p>
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
                    <h3 className="text-lg font-medium text-neutral-900 mb-3">Adresse</h3>
                    <p className="text-neutral-600 leading-relaxed">
                      12 Rue de la Paix<br />
                      75002 Paris, France
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-neutral-900 mb-3">Contact</h3>
                    <p className="text-neutral-600 leading-relaxed">
                      Téléphone: +33 (0)1 42 86 57 30<br />
                      Email: contact@joebautistacoiffure.com
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-neutral-900 mb-3">Horaires d'ouverture</h3>
                    <div className="space-y-2 text-neutral-600">
                      <div className="flex justify-between">
                        <span>Mardi - Vendredi</span>
                        <span>9h00 - 19h00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Samedi</span>
                        <span>9h00 - 18h00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Dimanche - Lundi</span>
                        <span className="text-neutral-400">Fermé</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-neutral-900 mb-3">Métro</h3>
                    <p className="text-neutral-600">
                      Ligne 3, 7, 8 - Station Opéra<br />
                      Ligne 1, 8, 12 - Station Châtelet
                    </p>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-neutral-50 p-8">
                <h3 className="text-lg font-medium text-neutral-900 mb-4">Rendez-vous urgent</h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                  Pour les urgences capillaires ou les demandes de dernière minute, 
                  contactez-nous directement par téléphone.
                </p>
                <Button variant="secondary">
                  Appeler maintenant
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
                    placeholder="+33 (0)1 23 45 67 89"
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
                    <option value="consultation">Consultation (gratuite)</option>
                    <option value="coupe-femme">Coupe Femme</option>
                    <option value="coupe-homme">Coupe Homme</option>
                    <option value="coloration">Coloration</option>
                    <option value="balayage">Balayage Signature</option>
                    <option value="soins">Soins Capillaires</option>
                    <option value="transformation">Transformation Complète</option>
                    <option value="evenementiel">Styling Événementiel</option>
                    <option value="forfait">Forfait Privilège</option>
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
                    placeholder="Décrivez vos attentes, votre type de cheveux, ou toute information utile..."
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

      {/* Map Section (Placeholder) */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-neutral-900 tracking-tight mb-4">
              Nous trouver
            </h2>
            <p className="text-neutral-600">
              Au cœur du 2ème arrondissement, proche de l'Opéra et des Grands Boulevards.
            </p>
          </div>

          {/* Map Placeholder */}
          <div className="aspect-[16/9] bg-neutral-200 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-4">📍</div>
              <p className="text-neutral-600">
                Carte interactive Google Maps
              </p>
              <p className="text-sm text-neutral-500 mt-2">
                12 Rue de la Paix, 75002 Paris
              </p>
            </div>
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
                Nous recommandons de réserver 2 à 3 semaines à l'avance, particulièrement 
                pour les services longs comme les transformations complètes.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-neutral-900 mb-3">
                Puis-je annuler ou reporter mon rendez-vous ?
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Oui, jusqu'à 48h avant votre rendez-vous sans frais. 
                Au-delà, 50% du montant pourrait être facturé.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-neutral-900 mb-3">
                Acceptez-vous les cartes de crédit ?
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Nous acceptons toutes les cartes de crédit, les espèces, 
                et les virements bancaires pour les forfaits.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-neutral-900 mb-3">
                Proposez-vous des services à domicile ?
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Oui, pour nos clients VIP et les événements spéciaux. 
                Contactez-nous pour connaître nos conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
