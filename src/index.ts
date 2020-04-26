import { PrismaClient } from "@prisma/client";
import { api } from "./view/routes.js";

const prisma = new PrismaClient();

async function main() {
    await api();
}

main()
    .catch((e: any) => {
        console.log(e);
        throw e;
    })
    .then(async () => {
        await prisma.disconnect();
    });