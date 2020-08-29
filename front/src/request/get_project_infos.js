import backRequester from "../backRequester";
import getUsername from "./get_username";

const getProjectInfo = async (mail) => {
    const user = (await getUsername(mail)).data.user

    if (!user) return null;

    return (await backRequester.get(`users/${user.id}/projects`)).data;
}

export default getProjectInfo;
