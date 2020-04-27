import { createUser, deleteUser, findAllUser, UserInfo } from "../models/model_user";
import { throws } from "assert";

async function addUserToDb(user: UserInfo) {
    await createUser(user)
        .catch((e) => throws(e));
}

async function getAllUserFromDb() {
    return await findAllUser()
        .catch((e) => throws(e));
}

async function deleteUserFromDb(userId: string) {
    await deleteUser(userId)
        .catch((e) => throws(e));
}

export { addUserToDb, getAllUserFromDb, deleteUserFromDb };