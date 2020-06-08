import React from "react";
import styled from "styled-components";
import getProfilPic from "../../request/get_profil_pic";

const StyledProfilPicture = styled.img`
    border-radius: 50%;
    width: 100%;
    height: 100%;
`;

const ProfilPicture = () => {
    let uploadedImage = React.useRef(null);
    const imageUploader = React.useRef(null);

    const editPicture = (event) => {
        let [file] = event.target.files;

        // ! image upload
        if (file) {
            const reader = new FileReader();
            const {current} = uploadedImage;
            current.file = file;
            reader.onload = (event) => {
                current.src = event.target.result;
                console.log(event.target.result);
            };
            reader.readAsDataURL(file);
        }


    };
    return (
        <>
            <input type={"file"}
                   accept={"image/*"}
                   onChange={editPicture}
                   ref={imageUploader}
                   multiple={"false"}
                   style={{display: "none"}}/>
            <StyledProfilPicture
                src={getProfilPic()}
                ref={uploadedImage}
                alt="profil picture"
                onClick={() => imageUploader.current.click()}
            />
        </>
    );
};

export default ProfilPicture;