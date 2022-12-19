import React from "react";
import { useTranslation } from "react-i18next";

import Wrapper from "../../hooks/Wrapper";
import DataScore from "../../data/DataScore";
import { getColorNote, getMessageNote } from "../../utils/utils";

import { Title } from "../../components";


import Calendar from "../../assets/icons/calendar.svg";
import Triangle from "../../assets/icons/triangle.svg";
import Star from "../../assets/icons/star.svg";

import "./score.css";

const Score = () => {
	const { t } = useTranslation();
	const dataScore = DataScore(t);

	return (
		<Wrapper>
			<div className="scoring-container">
				<Title title={t("WithdrawalHistory")} />

				{
					dataScore && dataScore?.map((el, index) => (
						<div key={index} className="scoring-data-container">
							<div className="scoring-date">
								<img src={Calendar} alt="" />
								<span className="scoring-date-label">{el?.date}</span>
							</div>

							<div
								className="scoring-note"
								style={{ backgroundColor: getColorNote(el?.note) }}
							>
								<div className="scoring-stars">{ [...Array(el?.note).keys()].map((el, i) =>
									<img className="scoring-star" src={Star} alt="" key={i} />
								) }</div>
								<span>{getMessageNote(el?.note, t)}</span>
							</div>

							{
								el?.note < 3 && <div className="scoring-error">
									<img src={Triangle} alt="" />
									<span>{t("ErrorMessageHistory")}</span>
								</div>
							}
						</div>
					))
				}
			</div>
		</Wrapper>
	);
};

export default Score;
