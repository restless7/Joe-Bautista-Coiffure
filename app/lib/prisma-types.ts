// Generated types for Prisma Client
export type BookingStatus = 'PENDING' | 'CONFIRMED' | 'CANCELLED';

export type Booking = {
    id: string;
    serviceType: string;
    appointmentDate: Date;
    clientName: string;
    clientAddress: string;
    clientPhone: string;
    status: BookingStatus;
    createdAt: Date;
};
