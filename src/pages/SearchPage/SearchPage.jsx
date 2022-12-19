import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import SearchBar from "./Search";
import Wrapper from "../../hooks/Wrapper";
import DataRouting from "../../data/DataRouting";

import Search from "../../assets/icons/search-solid-black.svg";

import "./searchPage.css";

const SearchPage = () => {
	const { t } = useTranslation();
	const data = DataRouting(t);

	const [ result, setResult ] = useState(data);

	return (
		<Wrapper>
			<div className="search-bar-container">
				<div className="search">
					<img id="search-bar" src={Search} alt=""/>

					<SearchBar
						id="searchBar"
						className="search-bar"
						placeholder="Recherche"
						filterField={(item) => item.label}
						list={data}
						setList={setResult}
					/>
				</div>

				{
					result && result.map((item, index) => (
						<div className="result-search" key={index}>
							<Link className="link" to={item.url}><p>{item.label}</p></Link>
						</div>
					))
				}
			</div>
		</Wrapper>
	);
};

export default SearchPage;


