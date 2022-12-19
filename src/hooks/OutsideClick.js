import React from "react";
import PropTypes from "prop-types";

/**
 * Hook that alerts clicks outside of the passed ref
 */
const useOutsideAlerter = (ref, action) => {
	React.useEffect(() => {
		const handleClickOutside = (event) => {
			if (ref.current && !ref.current.contains(event.target)) {
				action();
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [ ref, action ]);
};

/**
 * Component that alerts if you click outside of it
 */
const OutsideClickAction = ({
	children,
	action,
	className
}) => {
	const wrapperRef = React.useRef(null);
	useOutsideAlerter(wrapperRef, action);

	return <div className={className} ref={wrapperRef}>{children}</div>;
};

OutsideClickAction.propTypes = {
	children: PropTypes.element,
	action: PropTypes.func,
	className: PropTypes.string
};

export default OutsideClickAction;
