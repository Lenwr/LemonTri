import React, { useEffect, useState } from "react";

import { Button, Cycle } from "../../components";

import "./seeMore.css";

const SeeMore = ({ color, data }) => {
	const [ showMore, setShowMore ] = useState(false);

	useEffect(() => {
		if (showMore) window.scrollTo({
			top: 1000,
			left: 0,
			behavior: "smooth"
		})
	}, [ showMore ]);

	return (
		<div className="see-more-container">
			{
				data && <div className="see-more-button" onClick={() => setShowMore(!showMore)} >
					<Button color={color} />
				</div>
			}

			{
				showMore && data
					? <React.Fragment>
						<Cycle data={data} />
						<span className="see-more-hide see-more-hide-2"></span>
						<span className="see-more-hide see-more-hide-1"></span>
					</React.Fragment>
					: null
			}
		</div>
	);
};

export default SeeMore;
