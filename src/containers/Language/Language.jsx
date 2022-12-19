import i18next from "i18next";
import { useState } from "react";

import { Switch } from "../../components";

import EnglishFlag from "../../assets/icons/english.svg";
import FrenchFlag from "../../assets/icons/french.svg";

import "./language.css";

const Language = () => {
	const [ checked, setChecked ] = useState(i18next?.language);

	const changeLanguage = () => i18next.changeLanguage(i18next?.language === "fr" ? "en" : "fr");

	return (
		<div className="language-container">
			<Switch
				onChange={() => {
					changeLanguage();
					setChecked(checked !== "fr" ? "fr" : "en")
				}}
				icon={FrenchFlag}
				colorOn="#97B21B"
				colorOff="#D94140"
				checked={checked === "fr"}
				backgroundColor="#EFEFEF"
			/>
			<Switch
				onChange={() => {
					changeLanguage();
					setChecked(checked !== "en" ? "en" : "fr")
				}}
				icon={EnglishFlag}
				colorOn="#97B21B"
				colorOff="#D94140"
				checked={checked === "en"}
				backgroundColor="#EFEFEF"
			/>
		</div>
	)
};

export default Language;
