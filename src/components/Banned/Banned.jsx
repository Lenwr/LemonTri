import { useTranslation } from "react-i18next";
import AlertTriangle from "../../assets/icons/alert-triangle.svg";

import "./banned.css";

const Banned = ({ banned }) => {
	const { t } = useTranslation();

	return (
		<div className="banned-container">
			<div className="banned-text">
				<img src={AlertTriangle} alt="" />
				<span>{t("Banned")}</span>
			</div>

			<span>{banned}</span>
		</div>
	);
};

export default Banned;
