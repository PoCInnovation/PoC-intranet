import { Project } from "@prisma/client";
import { findAllProject, findProjectByName, createProject,
    updateProjectAirtable, updateProjectGithub, updateProjectName,
    updateProjectStatus, deleteProject } from "../models/project";

// ? --------------------------- TEST --------------------------- ? //
async function testCreation(newProject: Project) {
    let result: Project = await createProject(newProject)

    if (result.name != newProject.name && result.status != newProject.status &&
        result.github != newProject.github && result.airtable != newProject.airtable) {
        console.error("Error on creation")
        return 1;
    }
    return 0;
}

async function testFindProjectByName(name: string) {
    let result = await findProjectByName(name);

    if (result == null || name != result.name) {
        console.log(name, result?.name);
        console.error("Error on FindProjectByName");
        return 1;
    }
    return 0;
}

async function testFindAllProject(project1: Project, project2: Project) {
    let result = await findAllProject();

    if (project1.airtable != result[0].airtable || project1.github != result[0].github ||
        project1.status != result[0].status || project1.name != result[0].name) {
        console.log("Error on findAllProject");
        return 1;
    }
    if (project2.airtable != result[1].airtable || project2.github != result[1].github ||
        project2.status != result[1].status || project2.name != result[1].name) {
        console.error("Error on findAllProject");
        return 1;
    }
    return 0;
}

async function testUpdateProjectAirtable(project: Project) {
    let value = await findProjectByName(project.name);
    let result;

    if (value != null && value.id != null)
         result = await updateProjectAirtable(value.id, "new")
    if (result == null || result.airtable == project.airtable) {
        console.error("Error on project airtable");
        return 1;
    }
    return 0;
}

async function testUpdateProjectName(project: Project) {
    let value = await findProjectByName(project.name);
    let result;

    if (value != null && value.id != null)
        result = await updateProjectName(value.id, "NewName")
    if (result == null || result.name == project.name) {
        console.error("Error on update Name");
        return 1;
    }
    return 0;
}

async function testUpdateProjectGithub(project: Project) {
    let value = await findProjectByName(project.name);
    let result;

    if (value != null && value.id != null)
        result = await updateProjectGithub(value.id, "NewGitHub");
    if (result == null || result.github == project.github) {
        console.error("Error on update github");
        return 1;
    }
    return 0;
}

async function testUpdateProjectStatus(project: Project) {
    let value = await findProjectByName(project.name)
    let result;

    if (value != null && value.id != null)
        result = await updateProjectStatus(value.id, "Done")
    if (result == null || result.status == project.status) {
        console.error("Error on update status");
        return 1;
    }
    return 0;
}
// ? ----------------------------------------------------------- ? //

// ? Clean my Db
async function cleanDB(newProject1: Project) {
    let project1 = await findProjectByName(newProject1.name);
    let project2 = await findProjectByName("NewName");

    if (project1 != null && project1.id != null && project2 != null && project2.id != null) {
        await deleteProject(project1?.id);
        await deleteProject(project2.id);
        return 0;
    }
    console.error("Error on clean");
    return 1;
}

async function testProjectModel() {
    let score: number = 0;
    let project1: Project = { id: "", name: "test", airtable: "airtable", github: "github", status: "InProgress"};
    let project2: Project = { id: "", name: "test2", airtable: "airtable2", github: "githu2", status: "InProgress"};

    console.log("---- TEST USER ----")
    score += await testCreation(project1);
    score += await testCreation(project2);
    score += await testFindProjectByName("test");
    score += await testFindAllProject(project1, project2);
    score += await testUpdateProjectName(project2);
    score += await testUpdateProjectAirtable(project1);
    score += await testUpdateProjectGithub(project1);
    score += await testUpdateProjectStatus(project1);
    score += await cleanDB(project1);
    console.log(score == 0 ? "\nEverything worked good" : "\nError find");
    console.log("---- DB ----")
    console.log(await findAllProject());
}

export { testProjectModel };