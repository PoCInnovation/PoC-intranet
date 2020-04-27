import { createRoles, deleteRole, findAllRoles, updateRoleName } from "../models/model_roles";
import { createProject, deleteProject, findAllProject, updateProjectName } from "../models/model_project";
import {
    createUser,
    deleteUser,
    linkUserToRole,
    linkUserToProject,
    findAllUser,
    findUserIdByMail
} from "../models/model_user";

// ? --------------------------- TEST --------------------------- ? //
async function testLinkUserToProject() {
    let users: any = await findAllUser()
        .catch(e => {
            console.error(e);
            return;
        });
    let name: string[] = [];

    await findAllProject()
        .then(projects => {
            projects.forEach(
                async (project) => {
                    name.push(project.name);
                    await linkUserToProject(project.name, users[0].id)
                        .catch(e => console.error(e));
                });
        });
    await findUserIdByMail(users[0].mail)
        .then(user => {
            user?.projects.forEach(project => {
                if (name.findIndex(() => project.name) == -1)
                    console.error("Error on link project");
            });
        })
        .catch(e => console.error(e));
}

async function testUpdateProject() {
    let project = await findAllProject();
    await updateProjectName(project[1].id, "NewName"); // Update
    let users = await findAllUser();

    if (users[0].projects.findIndex(() => "NewName") == -1) {
        console.error("Error on test link project update");
        return;
    }
}

async function testLinkUserToRole() {
    let users: any = await findAllUser()
        .catch(e => {
            console.error(e);
            return;
        });
    let name: string[] = [];

    await findAllRoles()
        .then(roles => {
            roles.forEach(
                async (role) => {
                    name.push(role.name);
                    await linkUserToRole(role.name, users[0].id)
                        .catch(e => console.error(e));
                });
        });
    await findUserIdByMail(users[0].mail)
        .then(user => {
            user?.roles.forEach(role => {
                if (name.findIndex(() => role.name) == -1)
                    console.error("Error on link role");
            });
        })
        .catch(e => console.error(e));
}

async function testUpdateRole() {
    let roles = await findAllRoles();
    await updateRoleName(roles[0].id, "NewName");
    let users = await findAllUser();

    if (users[0].roles.findIndex(() => "NewName") == -1) {
        console.error("Error on test link role update");
        return;
    }
}

// ? ----------------------------------------------------------- ? //

// ? --------------------------- INIT --------------------------- ? //
async function InitTest() {
    await createUser({ mail: "mail1", token: "token1" });
    await createUser({ mail: "mail2", token: "token2" });
    await createProject({
        name: "project1", status: "Todo",
        github: "github1", airtable: "airtable1", id: ""
    });
    await createProject({
        name: "project2", status: "Todo",
        github: "github2", airtable: "airtable2", id: ""
    });
    await createRoles({
            admin: true,
            add_role: false, recommend: true,
            write: true, create_pro: false, add_member: true
        },
        "Admin");
    await createRoles({
            admin: false,
            add_role: false, recommend: true,
            write: true, create_pro: false, add_member: false
        },
        "Member");
}

// ? ----------------------------------------------------------- ? //

// ? Clear DB
async function cleanDB() {
    await findAllRoles()
        .then(roles => {
            roles.forEach(async role => await deleteRole(role.id));
        })
        .catch(e => console.error(e));
    await findAllProject()
        .then(projects => {
            projects.forEach(async project => await deleteProject(project.id));
        })
        .catch(e => console.error(e));
    await findAllUser()
        .then(users => {
            users.forEach(async user => await deleteUser(user.id));
        })
        .catch(e => console.error(e));
}

async function displayFinishedDb() {
    await findAllUser()
        .then(users => users.forEach(user => {
            console.log(user);
        }));
}

async function testLinking() {
    console.log("\n---- TEST LINK ----");
    await InitTest();
    await testLinkUserToProject();
    await testUpdateProject();
    await testLinkUserToRole();
    await testUpdateRole();
    await displayFinishedDb();
    console.log("\nTest on link finish");
    console.log("---- DB clear ----");
    await cleanDB();
    console.log(await findAllUser());
    console.log(await findAllRoles());
    console.log(await findAllProject());
}

export { testLinking, cleanDB };