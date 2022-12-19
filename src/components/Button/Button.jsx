import { useTranslation } from "react-i18next";

import "./button.css";

const Button = ({ color }) => {
	const { t } = useTranslation();

	return (
		<button className="button-see-more" style={{ backgroundColor: color }}>
			<span>{t("FindOutMore")}</span>
		</button>
	)
};

export default Button;
