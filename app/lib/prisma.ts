import { PrismaClient as BasePrismaClient } from '@prisma/client';
import type { Booking, BookingStatus } from './prisma-types';

// Extend PrismaClient with our models
type ExtendedPrismaClient = BasePrismaClient & {
    booking: {
        findFirst(args: {
            where: Partial<Omit<Booking, 'id' | 'createdAt'>>;
        }): Promise<Booking | null>;

        create(args: {
            data: Omit<Booking, 'id' | 'createdAt'>;
        }): Promise<Booking>;
    };
};

const globalForPrisma = globalThis as unknown as {
    prisma: ExtendedPrismaClient | undefined;
};

export const prisma =
    globalForPrisma.prisma ??
    (new BasePrismaClient({
        log: ['query'],
    }) as unknown as ExtendedPrismaClient);

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export type { Booking, BookingStatus };
