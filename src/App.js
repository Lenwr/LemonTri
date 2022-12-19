import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { useTranslation } from "react-i18next";

import { renderComponent } from "./utils/utils";

import { Logo, Lottie } from "./components";

import LogoURL from "./assets/images/logo.png";

import './App.css';

const App = () => {
	const { REACT_APP_NYCKEL_ID, REACT_APP_NYCKEL_SECRET } = process.env;

    const location = useLocation();
	const { t } = useTranslation();

    const [ showLoader, setShowLoader ] = useState(true);

	useEffect(() => {
		const initConnexion = async () => {
			await fetch('https://www.nyckel.com/connect/token', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				body: `client_id=${REACT_APP_NYCKEL_ID}&client_secret=${REACT_APP_NYCKEL_SECRET}&grant_type=client_credentials`
			})
			.then(response => response.json())
			.then(data => localStorage.setItem("bearer-token", data.access_token));
		}
		initConnexion();
	}, [ REACT_APP_NYCKEL_ID, REACT_APP_NYCKEL_SECRET]);

    useEffect(() => {
        setTimeout(() => setShowLoader(false), 3000);
    }, [])

    if (showLoader) {
        return (
            <div className="app-loader">
                <div className="logo">
                    <Logo image={LogoURL} />
                </div>

                <span className="app-presentation">{t("Presentation")}</span>

                <div className="app-lottie">
                    <Lottie show={showLoader} />
                </div>
            </div>
        );
    }

    return (
        <div className="app">
            { renderComponent(location && location.pathname) }
        </div>
    );
}

export default App;
