import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-neutral-900 tracking-tight">
              Joe Bautista Coiffure
            </h3>
            <p className="text-neutral-600 text-sm leading-relaxed">
              Coiffure d&apos;exception et soins personnalisés.<br />
              Savoir-faire traditionnel et techniques modernes.
            </p>
            <p className="text-neutral-500 text-xs">
              (Exceptional hairdressing and personalized care. Traditional expertise and modern techniques.)
            </p>
          </div>

          {/* Services Section */}
          <div className="space-y-4">
            <h4 className="font-medium text-neutral-900">Services</h4>
            <nav className="space-y-2">
              <Link 
                href="/services/creation" 
                className="block text-sm text-neutral-600 hover:text-neutral-900 transition-colors duration-200"
              >
                Création sur mesure
              </Link>
              <Link 
                href="/services/restauration" 
                className="block text-sm text-neutral-600 hover:text-neutral-900 transition-colors duration-200"
              >
                Restauration
              </Link>
              <Link 
                href="/services/consultation" 
                className="block text-sm text-neutral-600 hover:text-neutral-900 transition-colors duration-200"
              >
                Consultation
              </Link>
            </nav>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h4 className="font-medium text-neutral-900">Contact</h4>
            <div className="space-y-2 text-sm text-neutral-600">
              <p>contact@joebautistaatelier.com</p>
              <p>+33 (0)1 23 45 67 89</p>
              <p className="leading-relaxed">
                Paris, France
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-neutral-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-neutral-500">
              © {currentYear} Joe Bautista Coiffure. Tous droits réservés.
            </p>
            <nav className="flex space-x-6">
              <Link 
                href="/legal/mentions" 
                className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors duration-200"
              >
                Mentions légales
              </Link>
              <Link 
                href="/legal/privacy" 
                className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors duration-200"
              >
                Confidentialité
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
