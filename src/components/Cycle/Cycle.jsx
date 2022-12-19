import { useState } from "react";

import CycleCard from "./CycleCard/CycleCard";

import "./cycle.css";

const Cycle = ({ data }) => {
	const numberElementsToDisplay = 360 / data?.length;
	const [ step, setStep ] = useState(0);

	return (
		<div className="cycle-container">
			{
				data && data?.map((el, index) => {
					const degreRotation = (index - step) * numberElementsToDisplay;

					return (
						<div
							key={index}
							className="cycle-card"
							style={{ transition: "all 1s", transform: `rotate(${degreRotation}deg)` }}
							onClick={() => setStep(step + 1)}
						>
							<CycleCard
								image={el?.image}
								label={el?.label}
							/>
						</div>
					)
				})
			}
		</div>
	);
};

export default Cycle;
