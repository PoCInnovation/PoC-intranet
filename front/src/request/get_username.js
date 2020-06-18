/* Todo
 * Faire une request graph qui récupère l'username
 * et le return
 *
*/
import getCookie from "../get_cookie";
import getUserInfoFromMSGraph from "./call_ms_api";


const getUsername = async () => {
    const token = getCookie('token')

    if (token) {
        const userInfo = await getUserInfoFromMSGraph(token)
        if (userInfo.displayName !== undefined)
            return userInfo.displayName
    }
    return 'Unknown dude';
}

export default getUsername;