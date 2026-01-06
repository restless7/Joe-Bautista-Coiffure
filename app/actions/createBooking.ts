'use server';

import { z } from 'zod';
import { prisma } from '@/app/lib/prisma';
import { revalidatePath } from 'next/cache';

const bookingSchema = z.object({
    serviceType: z.string().min(1, "Service type is required"),
    appointmentDate: z.string().refine((date) => new Date(date) > new Date(), {
        message: "Appointment date must be in the future",
    }),
    clientName: z.string().min(2, "Name must be at least 2 characters"),
    clientAddress: z.string().min(5, "Address is required"),
    clientPhone: z.string().min(10, "Phone number must be at least 10 characters"), // Relaxed validation
});

export type BookingState = {
    success?: boolean;
    error?: string;
    bookingId?: string;
    data?: {
        serviceType: string;
        appointmentDate: string;
        clientName: string;
        clientAddress: string;
        clientPhone: string;
    };
    errors?: {
        [K in keyof z.infer<typeof bookingSchema>]?: string[];
    };
};

export async function createBooking(prevState: BookingState, formData: FormData): Promise<BookingState> {
    const rawData = {
        serviceType: formData.get('serviceType'),
        appointmentDate: formData.get('appointmentDate'),
        clientName: formData.get('clientName'),
        clientAddress: formData.get('clientAddress'),
        clientPhone: formData.get('clientPhone'),
    };

    const validatedFields = bookingSchema.safeParse(rawData);

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            error: "Please check your inputs.",
        };
    }

    const { serviceType, appointmentDate, clientName, clientAddress, clientPhone } = validatedFields.data;

    try {
        // Check for double booking (simple check: exact time match)
        // In a real app, you'd check ranges.
        const date = new Date(appointmentDate);
        const existingBooking = await prisma.booking.findFirst({
            where: {
                appointmentDate: date,
                status: 'CONFIRMED',
            },
        });

        if (existingBooking) {
            return { error: "This time slot is already booked. Please choose another." };
        }

        const booking = await prisma.booking.create({
            data: {
                serviceType,
                appointmentDate: date,
                clientName,
                clientAddress,
                clientPhone,
                status: 'PENDING',
            },
        });

        revalidatePath('/');
        return {
            success: true,
            bookingId: booking.id,
            data: {
                serviceType,
                appointmentDate: date.toISOString(), // Ensure serialized
                clientName,
                clientAddress,
                clientPhone
            }
        };
    } catch (error) {
        console.error('Booking error:', error);
        return { error: "Something went wrong. Please try again." };
    }
}
