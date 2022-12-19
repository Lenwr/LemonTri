import { useTranslation } from "react-i18next";

import Wrapper from "../../hooks/Wrapper";
import { DataBottle as dataBottle } from "../../data/DataCategories";

import {
	CategoryTitle,
	Infos,
	Banned,
	Lsv,
} from "../../components";
import { SeeMore } from "../../containers";

import "./categories.css";

const Biowaste = () => {
	const { t } = useTranslation();
	const data = dataBottle(t);

	return (
		<Wrapper>
			<div className="categories-container">
				<CategoryTitle
					icon={data?.icon}
					title={data?.title}
					color={data?.color}
				/>

				<Infos
					infos={data?.infos}
					color={data?.color}
				/>

				<Banned banned={data?.banned} />

				<Lsv color={data?.color} />

				<SeeMore
					color={data?.color}
					data={data?.cycleData}
				/>
			</div>
		</Wrapper>
	);
};

export default Biowaste;
