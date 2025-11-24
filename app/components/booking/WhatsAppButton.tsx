'use client';

import Link from 'next/link';
import Button from '../Button';

interface WhatsAppButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'minimal';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    phoneNumber?: string;
    message?: string;
}

export function WhatsAppButton({
    children,
    variant = 'secondary',
    size,
    className,
    phoneNumber = '+41794761781',
    message = 'Bonjour, je souhaite prendre rendez-vous pour un service de coiffure à domicile.'
}: WhatsAppButtonProps) {
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;

    return (
        <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <Button variant={variant} size={size} className={className}>
                {children}
            </Button>
        </Link>
    );
}
