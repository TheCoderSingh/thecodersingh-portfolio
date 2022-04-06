import Diamond from "../../assets/Diamond.png";
import Jas from "../../assets/Jas.png";
import "./Home.scss";

const Home = () => {
    return (
        <div className="home">
            <div className="home-sections">
                <div className="home-left">
                    <div className="diamond">
                        <img src={Diamond} alt="Diamond" className="diamond-image" />
                        <div className="diamond-text">
                            <h3>Hi! I&apos;m Jaskaran</h3>
                            <h2>
                                <span className="light-text">I develop</span> high{" "}<br />
                                <span className="light-text">quality web</span> and{" "}<br />
                                <span className="light-text">mobile</span>{" "}<br />
                                <span className="light-text">applica</span>tions
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="home-right">
                    <div className="jas-picture-area">
                        <img src={Jas} alt="Jas" className="jas-picture" />
                        <div className="jas-picture-bg" />
                    </div>
                </div>
            </div>
            <div className="contact-btn">
                <span>Get in touch</span>
            </div>
        </div >
    );
};

export default Home;
