import { PrismaClient } from 'nexus-plugin-prisma/client';

/**
 * @description Prisma client
 * Use it to fetch request on database
 */
export const prisma = new PrismaClient();

export interface Context {
	prisma: PrismaClient;
}

export function createContext(): Context {
	return { prisma };
}
