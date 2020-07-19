import { PrismaClient } from 'nexus-plugin-prisma/client'

export const prisma = new PrismaClient();

export interface Context {
	prisma: PrismaClient
}

export function createContext(): Context {
	return { prisma }
}
