import React, {Component} from "react";
import styled from "styled-components";
import getProfilPic from "../../request/get_profil_pic";
import axios from 'axios';
import conf from "../../config";
import getUsername from "../../request/get_username";

const StyledProfilPicture = styled.img`
    border-radius: 50%;
    width: 180px;
    height: 180px;
    border: solid 3px black;
	@media screen and (max-width: 700px), screen and (max-height: 500px) {
    	display: none;
  }
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
		const user = await getUsername(sessionStorage.getItem('mail'));

		const data = new FormData();
		data.append('file', file);
		data.append('name', user.data.user.id);

		try {
			// Send file
			await axios.post(`${conf.back}/upload`, data, {
				headers: {
					'Content-Type': 'multipart/form-data',
					'Access-Control-Allow-Origin': '*'
				}
			});

			// Read image
			const reader = await new FileReader();
			reader.onload = (event) => {
				this.setState({selectedFile: event.target.result});
			};
			await reader.readAsDataURL(file);
		} catch (e) {
			console.log(e);
		}

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
