import "./Loader.css"
import Lottie from "lottie-react";
import BG0013 from "C:/Projetos/app-cvt-cha-casa-nova/src/assets/animations/Watercolor_BG_0013.json"

const Loader = () => {
    return (
        <div style={{ width: 300, height: 300 }}>
            <Lottie animationData={BG0013} loop={true} />
        </div>
    );
}

export default Loader;