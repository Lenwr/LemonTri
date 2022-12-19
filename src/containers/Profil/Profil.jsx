import ProfilImage from "../../assets/images/lemon192.png";

import "./profil.css";

const Profil = () => {
	return (
		<div className="profil-container">
			<img src={ProfilImage} alt="" />
			<span>LemonTri</span>
		</div>
	);
};

export default Profil;
