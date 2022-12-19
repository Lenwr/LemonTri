
import { Link } from "react-router-dom";

import "./HomeCategory.css";

const HomeCategory = ({ image, url }) => <Link to={url}>
	<img src={image} alt="" className="category-image" />
</Link>;

export default HomeCategory;
