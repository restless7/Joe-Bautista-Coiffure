'use client';

import { useState } from 'react';
import { BookingWizard } from './BookingWizard';

export function StickyBookingButton() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Mobile Fixed Bottom Bar */}
            <div className="fixed bottom-0 left-0 right-0 z-40 p-4 bg-white border-t border-gray-200 md:hidden shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
                <button
                    onClick={() => setIsOpen(true)}
                    className="w-full py-3 text-white bg-black rounded-full font-medium text-lg shadow-lg active:scale-95 transition-transform"
                >
                    Book Appointment in Geneva
                </button>
            </div>

            {/* Desktop Button (Hidden on mobile) */}
            <button
                onClick={() => setIsOpen(true)}
                className="hidden md:block px-6 py-2 text-white bg-black rounded-full font-medium hover:bg-gray-800 transition-colors"
            >
                Book Now
            </button>

            <BookingWizard isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    );
}
