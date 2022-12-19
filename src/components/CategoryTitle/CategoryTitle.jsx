import "./categoryTitle.css";

const CategoryTitle = ({ icon, title, color }) => {
	return (
		<div className="category-title-container">
			<img src={icon} alt="" />
			<span style={{ color: color }}>{title}</span>
		</div>
	);
};

export default CategoryTitle;
