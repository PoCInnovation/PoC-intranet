import { findAllRoles, findRoleByName, createRoles,
    updateRolePerm, updateRoleName, deleteRole, Perms} from "../models/roles";

interface TestRole {
    perms: Perms;
    name: string;
}

// ? --------------------------- TEST --------------------------- ? //
async function testCreateRoles(perms: Perms, name: string) {
    let result = await createRoles(perms, name);

    if (result.name != name) {
        console.error("Error on role creation");
        return 1;
    }
    return 0;
}

async function testFindRoleByName(name: string) {
    let result = await findRoleByName(name);

    if (result == null || result.name != name) {
        console.error("Error on Find role by name");
        return 1;
    }
    return 0;
}

async function testFindAllRoles(name1: string, name2: string) {
    let result = await findAllRoles();

    if (result[0].name != name1 || result[1].name != name2) {
        console.error("Error on find all roles");
        return 1;
    }
    return 0;
}

async function testUpdateRolePerm(role: TestRole) {
    let modify = await findRoleByName(role.name);
    let result;

    role.perms.write = false;
    if (modify != null && modify.id != null)
        result = await updateRolePerm(modify.id, role.perms)
    if (result == null || result.write != role.perms.write) {
        console.error("Error on update perms");
        return 1;
    }
    return 0;
}

async function testUpdateRoleName(role: TestRole) {
    let modify = await findRoleByName(role.name);
    let result;

    role.name = "NewName";
    if (modify != null && modify.id != null)
        result = await updateRoleName(modify.id, role.name)
    if (result == null || result.name != role.name) {
        console.error("Error on update name");
        return 1;
    }
    return 0;
}
// ? ----------------------------------------------------------- ? //
// ? Clean my Db
async function cleanDB() {
    let roles = await findAllRoles();

    for (const element of roles) {
        await deleteRole(element.id)
            .catch(() => {
                console.error("Error in clean db");
                return 1 });
    }
    return 0;
}
// ? Init A role
async function initRole(turn: number) {
    let perms: Perms = { admin: false, add_role: true, recommend: true,
                        write: true, add_member: true, create_pro: true };
    let name: string = (turn == 0) ? "name1" : "name2";
    if (turn == 1)
        perms.admin = true;
    return { perms, name };

}

async function testRoleModel() {
    let score: number = 0;
    let role1: TestRole = await initRole(0);
    let role2: TestRole = await initRole(1);

    score += await testCreateRoles(role1.perms, role1.name);
    score += await testCreateRoles(role2.perms, role2.name);
    score += await testFindRoleByName(role1.name);
    score += await testFindRoleByName(role2.name);
    score += await testFindAllRoles(role1.name, role2.name);
    score += await testUpdateRolePerm(role1);
    score += await testUpdateRoleName(role1);
    score += await cleanDB();

    console.log(score == 0 ? "\nEverything worked good" : "\nError find");
    console.log("---- DB ----");
    console.log(await findAllRoles());
}

export { testRoleModel };