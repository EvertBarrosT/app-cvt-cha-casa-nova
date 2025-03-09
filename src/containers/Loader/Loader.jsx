import "./Loader.css";
import backgroudMeio from "/home/evert/Projetos/app-cvt-cha-casa-nova/src/assets/videos/Central_3.webm";
import backgroudInferiorDireita from "/home/evert/Projetos/app-cvt-cha-casa-nova/src/assets/videos/Borda-Inferior-Direita.webm";
import backgroudInferiorEsquerda from "/home/evert/Projetos/app-cvt-cha-casa-nova/src/assets/videos/Borda-Inferior-Esquerda.webm";
import backgroudSuperiorDireita from "/home/evert/Projetos/app-cvt-cha-casa-nova/src/assets/videos/Borda-Superior-Direita.webm";
import backgroudSuperiorEsquerda from "/home/evert/Projetos/app-cvt-cha-casa-nova/src/assets/videos/Borda-Superior-Esquerda.webm";

const Loader = () => {
    return (
        <>
            <div className="loader-container">
                <div className="video-meio">
                    <video autoPlay muted playsInline className="video-bg">
                        <source src={backgroudMeio} type="video/webm" />
                    </video>
                </div>
                <div className="video-borda-superior-direita">
                    <video autoPlay muted playsInline className="video-bg">
                        <source src={backgroudSuperiorDireita} type="video/webm" />
                    </video>
                </div>
                <div className="video-borda-superior-esquerda">
                    <video autoPlay muted playsInline className="video-bg">
                        <source src={backgroudSuperiorEsquerda} type="video/webm" />
                    </video>
                </div>
                <div className="video-borda-inferior-direita">
                    <video autoPlay muted playsInline className="video-bg">
                        <source src={backgroudInferiorDireita} type="video/webm" />
                    </video>
                </div>
                <div className="video-borda-inferior-esquerda">
                    <video autoPlay muted playsInline className="video-bg">
                        <source src={backgroudInferiorEsquerda} type="video/webm" />
                    </video>
                </div>
            </div>
        </>
    );
};

export default Loader;