import { User } from "@prisma/client";
import { findAllUser, findUserIdByMail, createUser, deleteUser, UserInfo } from "../models/model_user";

// ? --------------------------- TEST --------------------------- ? //
async function testCreation(newUser: UserInfo) {
    let result: User = await createUser(newUser);

    if (newUser.mail != result.mail || newUser.token != result.token) {
        console.error("Error on Creation");
        return 1;
    }
    return 0;
}

async function testFindUserIdByMail(mail: string) {
    let result = await findUserIdByMail(mail);

    if (result == null || mail != result.mail) {
        console.error("Error on finUserIdByMail");
        return 1;
    }
    return 0;
}

async function testFindAllUser(newUser: UserInfo, newUser2: UserInfo) {
    let result = await findAllUser();

    if (newUser.mail != result[0].mail || newUser.token != result[0].token) {
        console.error("Error on findAllUser");
        return 1;
    }
    if (newUser2.mail != result[1].mail || newUser2.token != result[1].token) {
        console.error("Error on findAllUser");
        return 1;
    }
    return 0;
}

// ? ----------------------------------------------------------- ? //

// ? Clean my Db
async function clearDB(newUser: UserInfo, newUser2: UserInfo) {
    let user1 = await findUserIdByMail(newUser.mail);
    let user2 = await findUserIdByMail(newUser2.mail);

    if (user1 != null && user1.id != null && user2 != null && user2.id != null) {
        await deleteUser(user1?.id);
        await deleteUser(user2.id);
        return 0;
    } else
        console.error("Error on cleaning of the DB");
    return 1;
}

async function testUserModel() {
    let score: number = 0;
    let newUser: UserInfo = { mail: "test4", token: "token4" };
    let newUser2: UserInfo = { mail: "test5", token: "token5" };

    console.log("---- TEST USER ----");
    score += await testCreation(newUser);
    score += await testCreation(newUser2);
    score += await testFindUserIdByMail(newUser.mail);
    score += await testFindAllUser(newUser, newUser2);
    score += await clearDB(newUser, newUser2);

    console.log(score == 0 ? "\nEverything worked good" : "\nError find");
    console.log("---- DB ----");
    console.log(await findAllUser());
}

export { testUserModel };