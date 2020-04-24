import { createRoles, deleteRole, findAllRoles } from "../models/roles";
import { createProject, deleteProject, findAllProject } from "../models/project";
import { createUser, deleteUser, linkUserToRole, linkUserToProject, findAllUser } from "../models/user";

// ? --------------------------- TEST --------------------------- ? //

// ? ----------------------------------------------------------- ? //

// ? --------------------------- INIT --------------------------- ? //
async function InitTest() {
    await createUser({ mail: "mail1", token: "token1" });
    await createUser({ mail: "mail2", token: "token2" });
    await createProject({ name: "project1", status: "Todo",
        github: "github1", airtable: "airtable1", id: ""});
    await createProject({ name: "project2", status: "Todo",
        github: "github2", airtable: "airtable2", id: ""});
    await createRoles({ admin: true,
        add_role: false, recommend: true,
        write: true, create_pro: false, add_member: true},
        "Admin");
    await createRoles({ admin: false,
            add_role: false, recommend: true,
            write: true, create_pro: false, add_member: false},
        "Member");
}
// ? ----------------------------------------------------------- ? //

// ? Clear DB
async function cleanDB() {
    await findAllRoles()
        .then(roles => {
            roles.forEach(role => deleteRole(role.id));
        })
        .catch(e => console.error(e));
    await findAllProject()
        .then(projects => {
            projects.forEach(project => deleteProject(project.id));
        })
        .catch(e => console.error(e));
    await findAllUser()
        .then(users => {
            users.forEach(user => deleteUser(user.id));
        })
        .catch(e => console.error(e));
}

async function testLinking() {
    console.log("---- TEST LINK ----");
    await InitTest();
    console.log("---- DB filled ----");
    console.log(await findAllUser());
    console.log(await findAllRoles());
    console.log(await findAllProject());
    console.log("---- DB clear ----");
    await cleanDB();
    console.log(await findAllUser());
    console.log(await findAllRoles());
    console.log(await findAllProject());
}

export { testLinking };