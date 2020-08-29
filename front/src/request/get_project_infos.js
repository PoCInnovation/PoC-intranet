import backRequester from "../backRequester";
import getUsername from "./get_username";

const getProjectInfo = async (mail) => {
    const userId = (await getUsername(mail)).data.user.id

    if (!userId) return null;

    return (await backRequester.get(`users/${userId}/projects`)).data;
}

export default getProjectInfo;
