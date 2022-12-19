import "./cycleCard.css";

const CycleCard = ({ label, image }) => {
	return (
		<div className="cycle-card-container">
			<img src={image} alt="" />
			<span>{label}</span>
		</div>
	);
};

export default CycleCard;
