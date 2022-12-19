import { Link } from "react-router-dom";

import Search from "../../assets/icons/search-solid.svg";
import Home from "../../assets/icons/home-solid.svg";
import Virtual from "../../assets/icons/virtual.svg";
import Refresh from "../../assets/icons/refresh-ccw.svg";

import "./footer.css";

const Footer = ({ icon, onClick }) => (
	<div className="footer-container">
		<div className="footer-icons">
			<Link to="/"><img className="footer-icon" src={Home} alt="" /></Link>
			<Link to="/recherche"><img className="footer-icon" src={Search} alt="" /></Link>

			<div className="footer-main-icon">
				<Link to="/photo" onClick={onClick}><img className="footer-icon" src={icon} alt="" /></Link>
				<span className="footer-circle"></span>
				<span className="footer-dot"></span>
			</div>

			<Link to="/virtual-reality"><img className="footer-icon" src={Virtual} alt="" /></Link>
			<Link to="/settings"><img className="footer-icon" src={Refresh} alt="" /></Link>
		</div>
	</div>
);

export default Footer;
