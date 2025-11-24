'use client';

import { useState } from 'react';
import { BookingWizard } from './BookingWizard';
import Button from '../Button';

interface BookingButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'minimal';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

export function BookingButton({ children, variant, size, className }: BookingButtonProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button
                onClick={() => setIsOpen(true)}
                variant={variant}
                size={size}
                className={className}
            >
                {children}
            </Button>

            <BookingWizard isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    );
}
