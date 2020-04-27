import { PrismaClient, Project, Status } from "@prisma/client"

const prisma = new PrismaClient();

// ! ----------- Read -----------
async function findAllProject() {
    return prisma.project.findMany({
        include: { users: true }
    });
}

async function findProjectByName(name: string) {
    return prisma.project.findOne({
        where: { name },
        include: { users: true }
    });
}

// ! ----------- Create -----------
async function createProject(project: Project) {
    return prisma.project.create({
        data: {
            name: project.name,
            status: project.status,
            airtable: project.airtable,
            github: project.github
        }
    });
}

// ! ----------  Update  ----------
async function updateProjectName(id: string, name: string) {
    return prisma.project.update({
        where: { id },
        data: { name: name }
    });
}

async function updateProjectGithub(id: string, github: string) {
    return prisma.project.update({
        where: { id },
        data: { github: github}
    })
}

async function updateProjectAirtable(id: string, airtable: string) {
    return prisma.project.update({
        where: { id },
        data: { airtable: airtable}
    })
}

async function updateProjectStatus(id: string, status: Status) {
    return prisma.project.update({
        where: { id },
        data: { status: status }
    })
}

// ! ----------- Delete -----------
async function deleteProject(id: string)
{
    return prisma.project.delete({
        where: { id }
    });
}

// * Export
export {
    findAllProject,
    findProjectByName,
    createProject,
    updateProjectAirtable,
    updateProjectGithub,
    updateProjectName,
    updateProjectStatus,
    deleteProject,
    Status,
}
