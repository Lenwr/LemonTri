import { useTranslation } from "react-i18next";

import Wrapper from "../../hooks/Wrapper";
import { DataCan as dataCan } from "../../data/DataCategories";

import {
	CategoryTitle,
	Infos,
	Banned,
	Lsv,
} from "../../components";
import { SeeMore } from "../../containers";

import "./categories.css";

const Can = () => {
	const { t } = useTranslation();
	const data = dataCan(t);

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

export default Can;
