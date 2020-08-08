const getCookie = (cname) => {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let char = ca[i];
        while (char.charAt(0) === ' ') {
            char = char.substring(1);
        }
        if (char.indexOf(name) === 0) {
            return char.substring(name.length, char.length);
        }
    }
    return null;
}

export default getCookie;