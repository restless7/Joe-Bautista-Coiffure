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
              Joe Bautista Atelier
            </h3>
            <p className="text-neutral-600 text-sm leading-relaxed">
              Services de beauté et bien-être à domicile.<br />
              Expertise professionnelle dans le confort de votre foyer.
            </p>
            <div className="flex items-center space-x-3 mt-3">
              <span className="text-xs text-neutral-500">Langues parlées:</span>
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  <span className="text-lg">🇫🇷</span>
                  <span className="text-xs text-neutral-600">FR</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="text-lg">🇬🇧</span>
                  <span className="text-xs text-neutral-600">EN</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="text-lg">🇪🇸</span>
                  <span className="text-xs text-neutral-600">ES</span>
                </div>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="space-y-4">
            <h4 className="font-medium text-neutral-900">Services à Domicile</h4>
            <nav className="space-y-2">
              <Link 
                href="/services" 
                className="block text-sm text-neutral-600 hover:text-neutral-900 transition-colors duration-200"
              >
                Coiffure & Coloration
              </Link>
              <Link 
                href="/services" 
                className="block text-sm text-neutral-600 hover:text-neutral-900 transition-colors duration-200"
              >
                Bien-être & Massage
              </Link>
              <Link 
                href="/services" 
                className="block text-sm text-neutral-600 hover:text-neutral-900 transition-colors duration-200"
              >
                Beauté & Maquillage
              </Link>
              <Link 
                href="/services" 
                className="block text-sm text-neutral-600 hover:text-neutral-900 transition-colors duration-200"
              >
                Manucure & Pédicure
              </Link>
            </nav>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h4 className="font-medium text-neutral-900">Contact</h4>
            <div className="space-y-2 text-sm text-neutral-600">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:joesam6@hotmail.com" className="hover:text-neutral-900 transition-colors">
                  joesam6@hotmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a href="tel:+41794761781" className="hover:text-neutral-900 transition-colors">
                  +41 79 476 17 81
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>Genève & Région métropolitaine</span>
              </div>
              <div className="text-xs text-neutral-500 mt-3">
                Service à domicile uniquement
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-neutral-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-neutral-500">
              © {currentYear} Joe Bautista Atelier. Tous droits réservés.
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
