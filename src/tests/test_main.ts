import { PrismaClient } from "@prisma/client"
import { testUserModel } from "./test_user";
import { testProjectModel } from "./test_project";
import { testRoleModel } from "./test_role";

const prisma = new PrismaClient();

async function main() {
    await testUserModel();
    await testProjectModel();
    await testRoleModel();
}

main()
    .catch((e: string) => console.log(e))
    .finally(async() => {
        await prisma.disconnect();
        console.log("Disconnect");
    });