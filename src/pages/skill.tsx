import React from 'react';
import Image from 'next/image'; 
import image from '../assets/images/skills.png';
import { Waypoint } from 'react-waypoint';

const Skill = () => {

    const handleWaypointEnter = () => {
        const progressBars = document.querySelectorAll('.progress .progress-bar');
        progressBars.forEach((progressBar) => {
            const progressElement = progressBar as HTMLElement; // Cast to HTMLElement
            const valueNow = progressElement.getAttribute('aria-valuenow');
            if (valueNow) {
                progressElement.style.width = `${valueNow}%`;
            }
        });
    };

    return (
        <section id="skills" className="skills">
            <div className="container" data-aos="fade-up">
                <div className="row">
                    <div className="col-lg-6 d-flex align-items-center" data-aos="fade-right" data-aos-delay="100">
                        <Image src={image} className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left" data-aos-delay="100">
                        <h3>Nos Compétences</h3>
                        <p className="fst-italic">
                            Chez <strong>VAL IT-SOLUTIONS CONSULTING</strong>, nous nous engageons à fournir des solutions informatiques de pointe, soutenues par une expertise solide dans divers domaines. Notre équipe possède une maîtrise approfondie des technologies modernes et des meilleures pratiques, garantissant ainsi des résultats exceptionnels pour nos clients. Que ce soit en développement web, en gestion de projets ou en cybersécurité, nous sommes prêts à relever tous les défis pour propulser votre entreprise vers l'avenir. Découvrez ci-dessous nos compétences clés et notre passion pour l'innovation.
                        </p>

                        <div className="skills-content">
                            <Waypoint onEnter={handleWaypointEnter}>
                                <div>
                                    <div className="progress">
                                        <span className="skill">HTML <i className="val">100%</i></span>
                                        <div className="progress-bar-wrap">
                                            <div className="progress-bar" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}></div>
                                        </div>
                                    </div>

                                    <div className="progress">
                                        <span className="skill">CSS <i className="val">90%</i></span>
                                        <div className="progress-bar-wrap">
                                            <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}></div>
                                        </div>
                                    </div>

                                    <div className="progress">
                                        <span className="skill">JavaScript <i className="val">90%</i></span>
                                        <div className="progress-bar-wrap">
                                            <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}></div>
                                        </div>
                                    </div>

                                    <div className="progress">
                                        <span className="skill">LAMP <i className="val">75%</i></span>
                                        <div className="progress-bar-wrap">
                                            <div className="progress-bar" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}></div>
                                        </div>
                                    </div>

                                    <div className="progress">
                                        <span className="skill">Bootstrap <i className="val">80%</i></span>
                                        <div className="progress-bar-wrap">
                                            <div className="progress-bar" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}></div>
                                        </div>
                                    </div>

                                    <div className="progress">
                                        <span className="skill">PHP <i className="val">80%</i></span>
                                        <div className="progress-bar-wrap">
                                            <div className="progress-bar" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}></div>
                                        </div>
                                    </div>
                                    <div className="progress">
                                        <span className="skill">Symfony <i className="val">80%</i></span>
                                        <div className="progress-bar-wrap">
                                            <div className="progress-bar" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}></div>
                                        </div>
                                    </div>
                                </div>
                            </Waypoint>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skill;
