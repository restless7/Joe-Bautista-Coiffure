'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { StickyBookingButton } from './booking/StickyBookingButton';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-neutral-50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-medium text-neutral-900 tracking-tight">
              Joe Bautista Coiffure
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-2 items-center">
            <Link
              href="/about"
              className="px-4 py-2 text-neutral-700 hover:bg-neutral-900 hover:text-white transition-all duration-300 rounded-none"
            >
              À propos
            </Link>
            <Link
              href="/services"
              className="px-4 py-2 text-neutral-700 hover:bg-neutral-900 hover:text-white transition-all duration-300 rounded-none"
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              className="px-4 py-2 text-neutral-700 hover:bg-neutral-900 hover:text-white transition-all duration-300 rounded-none"
            >
              Portfolio
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 text-neutral-700 hover:bg-neutral-900 hover:text-white transition-all duration-300 rounded-none"
            >
              Contact
            </Link>
            <div className="ml-4">
              <StickyBookingButton />
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-700 hover:text-neutral-900 focus:outline-none focus:text-neutral-900"
              aria-label="Menu"
            >
              <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <nav className="px-2 pt-2 pb-6 space-y-4 border-t border-neutral-200">
              <Link
                href="/about"
                className="block text-neutral-700 hover:text-neutral-900 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                À propos
              </Link>
              <Link
                href="/services"
                className="block text-neutral-700 hover:text-neutral-900 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/portfolio"
                className="block text-neutral-700 hover:text-neutral-900 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                href="/contact"
                className="block text-neutral-700 hover:text-neutral-900 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
