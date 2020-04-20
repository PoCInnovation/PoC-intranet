import { PrismaClient, Role } from "@prisma/client"

const prisma = new PrismaClient();

// ! -----------  Read  -----------
async function findAllUser() {
    return await prisma.user.findMany({
        include: {
           roles: true,
           projects: true,
        }
    });
}

async function findUserIdByMail(mail: string) {
    return prisma.user.findOne({
        where: {mail: mail},
        include: {
            roles: true,
            projects: true,
        }
    });
}

interface UserInfo {
    mail: string
    token?: string
}

// ! ----------- Create -----------
async function createUser(user: UserInfo) {
    return prisma.user.create({
        data: {
            mail: user.mail,
            token: user.token
        }
    });
}

// ! ----------- Delete -----------
async function deleteUser(id: string) {
    return prisma.user.delete({
        where: {id}
    });
}

// ! ----------- Update -----------
async function linkUserToRole(role: string, id: string)
{
    return prisma.user.update({
        where: {id},
        data: {
            roles: { connect: { name: role } }
        }
    });
}
export {findAllUser, findUserIdByMail, createUser, deleteUser, linkUserToRole};