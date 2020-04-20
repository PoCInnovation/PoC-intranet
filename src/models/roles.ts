import { PrismaClient, Role } from "@prisma/client";

const prisma = new PrismaClient();

// ! -----------  Read  -----------
async function findAllRoles() {
    return await prisma.role.findMany({
        include: {
            users: true
        }
    })
}

async function findRoleByName(name: string)
{
    return prisma.role.findOne({
        where: {name},
        include: { users: true }
    });
}

interface Perms {
    admin:         boolean
    add_role:      boolean
    recommend:     boolean
    write:         boolean
    add_member:    boolean
    create_pro:    boolean
}

async function createRoles(perms: Perms, name: string) {
    return prisma.role.create({
        data: {
            name: name,
            admin: perms.admin,
            add_role: perms.add_role,
            recommend: perms.add_member,
            write: perms.write,
            add_member: perms.add_member,
            create_pro: perms.create_pro,
        }
    })
}

export { findAllRoles, findRoleByName, createRoles, Perms };

