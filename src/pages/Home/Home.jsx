import { useTranslation } from "react-i18next";

import Wrapper from "../../hooks/Wrapper";
import dataRouting from "../../data/DataRouting";

import { ListCategories } from "../../containers";
import { Title, Lsv } from "../../components";

import LemonFoot from "../../assets/images/lemon-foot.png";

import "./home.css";

const Home = () => {
    const { t } = useTranslation();
    const data = dataRouting();

    return (
        <Wrapper>
			<div className="home-container">
				<Lsv />
				<Title title={t("SortingInstructions")} image={LemonFoot} />
				<ListCategories data={data} />
			</div>
		</Wrapper>
    );
};

export default Home;
