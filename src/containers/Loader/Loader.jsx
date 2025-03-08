import "./Loader.css";
import Lottie from "lottie-react";
import BG0013 from "/home/evert/Projetos/app-cvt-cha-casa-nova/src/assets/animations/logo.json";
import backgroudMeio from "/home/evert/Projetos/app-cvt-cha-casa-nova/src/assets/videos/Wreath 04.webm";
import backgroudBordaDireita from "/home/evert/Projetos/app-cvt-cha-casa-nova/src/assets/videos/Borda Direita.webm";
import backgroudBordaEsquerda from "/home/evert/Projetos/app-cvt-cha-casa-nova/src/assets/videos/Borda Esquerda.webm";
import { useEffect, useRef } from "react";

const Loader = () => {

    const videoMeioRef = useRef(null);
    const videoDireitaRef = useRef(null);
    const videoEsquerdaRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (videoMeioRef.current) videoMeioRef.current.play();
            if (videoDireitaRef.current) videoDireitaRef.current.play();
            if (videoEsquerdaRef.current) videoEsquerdaRef.current.play();
        }, 2650);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div className="video-meio">
                <video ref={videoMeioRef} muted playsInline className="video-bg">
                    <source src={backgroudMeio} type="video/webm" />
                </video>
            </div>
            <div className="video-borda-direita">
                <video ref={videoDireitaRef} muted playsInline className="video-bg">
                    <source src={backgroudBordaDireita} type="video/webm" />
                </video>
            </div>
            <div className="video-borda-esquerda">
                <video ref={videoEsquerdaRef} muted playsInline className="video-bg">
                    <source src={backgroudBordaEsquerda} type="video/webm" />
                </video>
            </div>
            <div id="logo">
                <Lottie animationData={BG0013} loop={false} />
            </div>
        </>
    );
};

export default Loader;