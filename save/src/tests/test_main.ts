import { PrismaClient } from "@prisma/client";
import { testUserModel } from "./test_user";
import { testProjectModel } from "./test_project";
import { testRoleModel } from "./test_role";
import { testLinking, cleanDB } from "./test_link";

const prisma = new PrismaClient();

async function main() {
    await cleanDB();
    await testUserModel();
    await testProjectModel();
    await testRoleModel();
    await testLinking();
}

main()
    .catch((e: string) => console.log(e))
    .finally(async () => {
        await prisma.disconnect();
        console.log("Disconnect");
    });