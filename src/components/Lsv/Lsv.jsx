import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import dataLSVGeneral from '../../data/DataLSVGeneral';

import Help from "../../assets/icons/help";
import LemonQuestion from "../../assets/images/lemon-question.png";

import "./lsv.css";

const Lsv = ({ color }) => {
    const { t, i18n } = useTranslation();
    const data = dataLSVGeneral(t);

	const [ currentLanguage, setCurrentLanguage ] = useState(i18n?.language);
    const [ currentLSV, setCurrentLSV ] = useState(data[0]);
	const [ selectedLSV, setSelectedLSV ] = useState(0);

	useEffect(() => {
		if (currentLanguage !== i18n?.language) {
			setCurrentLanguage(i18n.language);
			setCurrentLSV(data[selectedLSV]);
		}
	}, [ currentLanguage, data, i18n.language, selectedLSV ])

    useEffect(() => {
        const interval = setInterval(() => {
            const random = Math.floor(Math.random() * data.length);

            setCurrentLSV(data[random]);
			setSelectedLSV(random);
        }, 30000);

        return () => clearInterval(interval);
    }, [ data ]);

    return (
        <div className="lsv-container">
            <div className="lsv-title">
				<Help color={color || "#A462C3"} />

				<span style={{ color: color }}>{t("DidUKnow")}</span>

				<div className="lsv-lemon">
					<img src={LemonQuestion} alt="" />
				</div>
			</div>

			<div className="lsv-data">
				<span style={{ color: color }}>{ currentLSV }</span>
			</div>
        </div>
    );
};

export default Lsv;
