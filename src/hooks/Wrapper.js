import { Footer } from "../containers";

import Camera from "../assets/icons/camera-solid.svg";

const Wrapper = ({ children, icon, onClick }) => (
	<div>
		{children}
		<Footer onClick={onClick} icon={icon || Camera} />
	</div>
);

export default Wrapper;
