import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    console.log("Index: run test to see what append");
}

main()
    .catch((e: any) => {
        console.log(e);
        throw e;
    })
    .finally(async () => {
        await prisma.disconnect();
        console.log("Disconnect");
    });