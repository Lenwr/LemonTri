import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";

import Wrapper from "../../hooks/Wrapper";

import Camera from "../../assets/icons/camera.svg";
// import Rotate from "../../assets/icons/rotate-solid.svg";

import "./photoInput.css";

const FACING_MODE_ENVIRONMENT = "environment";

const videoConstraints = {
	facingMode: FACING_MODE_ENVIRONMENT
};

const PhotoInput = () => {
	const navigate = useNavigate();

	const videoRef = useRef(null);

	const [ imageToUpload, setImageToUpload ] = useState("");
	const [ loading, setLoading ] = useState(false);

	const capture = React.useCallback(() => {
		const imageSrc = videoRef.current.getScreenshot();
		setImageToUpload(imageSrc);
	}, [ videoRef ]);

	useEffect(() => {
		if (imageToUpload !== "") {
			setLoading(true);

			fetch('https://www.nyckel.com/v1/functions/g6kivstjrnb4niwq/invoke', {
				method: 'POST',
				headers: {
					'Authorization': `Bearer ${localStorage.getItem("bearer-token")}`,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ "data": imageToUpload })
			})
			.then(response => response.json())
			.then(data => {
				navigate(`/${decodeURIComponent(data.labelName.toLowerCase()).replaceAll(" ", "-")}`);
				setLoading(false);
			});
		}
		// eslint-disable-next-line
	}, [ imageToUpload ]);

	return (
		<Wrapper
			icon={Camera}
			onClick={capture}
		>
			<div className="photo-input-container">
				{
					!loading
						? <React.Fragment>
								<Webcam
									className="video"
									autoPlay
									audio={false}
									ref={videoRef}
									screenshotFormat="image/jpeg"
									videoConstraints={{
										...videoConstraints,
										FACING_MODE_ENVIRONMENT
									}}
								/>
						</React.Fragment>
						: <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
				}
			</div>
		</Wrapper>
	);
};

export default PhotoInput;
