import {PrismaClient, User, Role, Project} from "@prisma/client"
import { findAllUser, findUserIdByMail, createUser, deleteUser, linkUserToRole } from "./models/user";
import {Perms, findAllRoles, createRoles, findRoleByName} from "./models/roles";

const prisma = new PrismaClient();

/*
    ? Access to an element by a relation : table?.relation[index].row
 */

// ? Crud for user : OK
// Todo Crud for roles and link to user : In progress
// Todo Crud for project and link to user
async function main() {
//    await createUser({mail: "mdrsdfqsdfg", token: "mdrqsdfghgfds"});
    let perm: Perms = {
        admin: false,
        create_pro: false,
        write: true,
        recommend: true,
        add_member: false,
        add_role: true
    };
//    await createRoles(perm, "test2");
//    let users: User[] = await findAllUser();
//    users.forEach(obj => console.log(obj));
//    return;
  // ? test link user à role
    let role: Role | null = await findRoleByName("test2")
    console.log(role?.name)
    let user: User | null = await findUserIdByMail("mdr");
    console.log(user?.id)
    if (role?.name != null && user?.id != null)
        console.log(await linkUserToRole(role?.name, user?.id))
 //   let result = await findUserIdByMail("mdr")
 //   console.log(result)
 //   console.log(await findAllUser())
    let all = await findRoleByName("test2");
    console.dir(all?.users[0].mail);
 //   console.log(await findAllRoles())
}

main()
    .catch((e: any) => {
        console.log(e);
        throw e;
    })
    .finally(async () => {
        await prisma.disconnect()
        console.log("Disconnect");
    });