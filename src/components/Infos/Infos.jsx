import "./infos.css";

const Infos = ({ infos, color }) => {
	console.log('infos: ', infos);
	return (
		<div className="infos-container">
			<div className="info-container">
				<img src={infos?.image} alt="" />
				<span className="title" style={{ color: color }}>{infos?.subtitle}</span>
				<span className="text" style={{ color: color }}>{infos?.text}</span>
			</div>
		</div>
	);
};

export default Infos;
