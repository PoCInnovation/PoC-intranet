import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface Perms {
    admin:         boolean
    add_role:      boolean
    recommend:     boolean
    write:         boolean
    add_member:    boolean
    create_pro:    boolean
}

// ! -----------  Read  -----------
async function findAllRoles() {
    return await prisma.role.findMany({
        include: { users: true }
    });
}

async function findRoleByName(name: string) {
    return prisma.role.findOne({
        where: { name },
        include: { users: true }
    });
}

// ! ----------- Create -----------
async function createRoles(perms: Perms, name: string) {
    return prisma.role.create({
        data: {
            name: name,
            admin: perms.admin,
            add_role: perms.add_role,
            recommend: perms.add_member,
            write: perms.write,
            add_member: perms.add_member,
            create_pro: perms.create_pro
        }
    })
}

// ! ----------  Update  ----------
async function updateRoleName(id: string, name: string) {
    return prisma.role.update({
        where: { id },
        data: { name: name }
    });
}

async function updateRolePerm(id: string, perms: Perms) {
    return prisma.role.update({
        where: { id },
        data: {
            admin: perms.admin,
            add_role: perms.add_role,
            recommend: perms.add_member,
            write: perms.write,
            add_member: perms.add_member,
            create_pro: perms.create_pro
        }
    });
}

// ! ----------- Delete -----------
async function deleteRole(id: string) {
    return prisma.role.delete({
        where: { id }
    });
}

// * Export
export {
    findAllRoles,
    findRoleByName,
    createRoles,
    updateRoleName,
    updateRolePerm,
    deleteRole,
    Perms
};

