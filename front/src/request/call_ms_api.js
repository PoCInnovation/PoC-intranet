import config from "../config";


const getUserInfoFromMSGraph = async (token) => {
    const headers = new Headers();
    const bearer = `Bearer ${token}`;

    headers.append("Authorization", bearer);

    const option = {
        method: "GET",
        headers: headers
    };

    return fetch(config.urlMS + 'me', option)
        .then(response => response.json())
        .catch(e => console.log(e));
};

export default getUserInfoFromMSGraph;