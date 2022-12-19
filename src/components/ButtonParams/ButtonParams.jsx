import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import "./buttonParams.css";

const ButtonParams = ({ color, icon, url }) => {
	const { t } = useTranslation();
	return (
		<Link to={url}>
			<button className="params-button" style={{ backgroundColor: color }}>
				{ icon && <img src={icon} alt="" /> }
				<span>{t("SortingScore")}</span>
			</button>
		</Link>
	)
};

export default ButtonParams;
