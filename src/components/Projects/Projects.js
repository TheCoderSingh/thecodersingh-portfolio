import "./Projects.scss"
import Head from "../../assets/Head.png";
import ArrowLeft from "../../assets/ArrowLeft.png"
import ArrowRight from "../../assets/ArrowRight.png"
import Alunos from "../../assets/Alunos.png"
import Aura from "../../assets/Aura.png"
import Github from "../../assets/Github.png"
import View from "../../assets/View.png"

const Projects = () => {
    return (
        <div className="projects">
            <div className="section-head">
                <h2>Projects</h2>
                <img src={Head} alt="Head" />
            </div>
            <div className="projects-area">
                <div className="arrow">
                    <img src={ArrowLeft} alt="Left Arrow" />
                </div>
                <div className="projects-container">
                    <div className="project">
                        <img src={Alunos} alt="Alunos" />
                        <h3>Alunos</h3>
                        <div className="project-icons">
                            <img src={Github} alt="GitHub" />
                            <img src={View} alt="View" />
                        </div>
                        <p>Alunos improves homestay experiences by helping companies in Canada to manage homestay-related activities and faciliting communication.
                        </p>
                        <div className="technologies">
                            <div className="technology">HTML</div>
                            <div className="technology">SCSS</div>
                            <div className="technology">Vue.js</div>
                            <div className="technology">Laravel</div>
                            <div className="technology">Quasar</div>
                            <div className="technology">GraphQL</div>
                        </div>
                    </div>
                    <div className="project">
                        <img src={Aura} alt="Aura" />
                        <h3>Aura</h3>
                        <div className="project-icons">
                            <img src={Github} alt="GitHub" />
                            <img src={View} alt="View" />
                        </div>
                        <p>Alunos improves homestay experiences by helping companies in Canada to manage homestay-related activities and faciliting communication.
                        </p>
                        <div className="technologies">
                            <div className="technology">HTML</div>
                            <div className="technology">SCSS</div>
                            <div className="technology">Vue.js</div>
                            <div className="technology">Laravel</div>
                            <div className="technology">Quasar</div>
                            <div className="technology">GraphQL</div>
                        </div>
                    </div>
                </div>
                <div className="arrow">
                    <img src={ArrowRight} alt="Right Arrow" />
                </div>

            </div> <div className="dots">
                <div className="dot selected"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
        </div >
    )
}

export default Projects