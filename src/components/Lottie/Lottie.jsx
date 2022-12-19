import Lottie from "lottie-react";
import loaderAnimation from "../../assets/lottie/lemon.json";
import { useEffect, useRef } from "react";

const Loader = ({ show }) => {
  const loader = useRef(null);

    useEffect(() => {
        !show && loader.current.classList.add("fadeOut");
        setTimeout(() => !show && loader.current.remove(), 700);
    }, [show]);
    
    return (
        <div ref={loader} className="">
            <Lottie animationData={loaderAnimation} />
        </div>
    );
};

export default Loader;