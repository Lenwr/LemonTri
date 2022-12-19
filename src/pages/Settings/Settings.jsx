import Wrapper from "../../hooks/Wrapper";

import { Language, Profil } from "../../containers";
import { ButtonParams } from "../../components";

import Award from "../../assets/icons/award.svg";

import "./settings.css";

const Settings = () => (
	<Wrapper>
		<div className="settings-container">
			<Profil />
			<ButtonParams
				icon={Award}
				color="#B18E65"
				url="/score"
			/>
			<Language />
		</div>
	</Wrapper>
);

export default Settings;
