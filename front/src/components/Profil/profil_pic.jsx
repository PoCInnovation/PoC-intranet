import React, {Component} from "react";
import styled from "styled-components";
import getProfilPic from "../../request/get_profil_pic";
import {uploadProfilPic} from "../../request/uploadImage";
import axios from 'axios';
import conf from "../../config";

const StyledProfilPicture = styled.img`
    border-radius: 50%;
    width: 180px;
    height: 180px;
    border: solid 3px black;
`;

class ProfilPicture extends Component {
    constructor(props) {
        super(props);
        this.state = {selectedFile: null};
        this.changeHandler = this.changeHandler.bind(this);
        this.imageUploader = React.createRef();
    }

    async componentDidMount() {
        this.setState({
            selectedFile: await getProfilPic(sessionStorage.getItem('mail'))
        });
    }

    async changeHandler(event) {
        const file = event.target.files[0];
        const data = new FormData();
        data.append('file', file);

        // * Send file to server
        await axios.post(`${conf.back}/upload`, data, {})
            .then(async (res) => {
                await uploadProfilPic(res.data.filename, sessionStorage.getItem('mail'));
            });

        // * Reader img and set state
        const reader = await new FileReader();
        reader.onload = (event) => {
            this.setState({selectedFile: event.target.result});
        };
        await reader.readAsDataURL(file);
    }

    render() {
        return (
            <>
                <input type={"file"}
                       accept={"image/*"}
                       multiple={false}
                       ref={this.imageUploader}
                       style={{display: "none"}}
                       onChange={this.changeHandler}/>
                <StyledProfilPicture
                    src={this.state.selectedFile}
                    alt="profil picture"
                    onClick={() => this.imageUploader.current.click()}
                />
            </>
        );
    }
}

export default ProfilPicture;