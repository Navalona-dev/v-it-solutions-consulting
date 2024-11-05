import Image from 'next/image'; 
import image from '../assets/images/about/about-3.png'; 

const About = () => {
    return(
        <div className="about wow" id='about'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-6" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1500">
                        <div className="about-img">
                            <Image
                                src={image} 
                                alt="Image"
                                layout="responsive"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-6" data-aos="fade-left" data-aos-delay="100" data-aos-duration="1500">
                        <div className="section-header text-left">
                            <p>Bienvenue chez VAL IT-SOLUTIONS CONSULTING</p>
                            <h2>10 Années d'Expérience</h2>
                        </div>
                        <div className="about-text">
                            <p>
                            VAL IT-SOLUTIONS CONSULTING est une entreprise de services numériques (ESN) récemment créée, spécialisée dans le développement informatique et la résolution de problèmes technologiques. Notre mission est de fournir des solutions innovantes et adaptées aux besoins spécifiques de nos clients, en les accompagnant à chaque étape de leurs projets.
                            </p>
                            <p>
                            Nous mettons à votre disposition une équipe d'experts passionnés, prêts à relever tous les défis pour optimiser vos processus et garantir la réussite de vos initiatives digitales. Que ce soit pour le développement d'applications sur mesure, l'intégration de systèmes ou la gestion de projets informatiques, VAL IT-SOLUTIONS CONSULTING s'engage à transformer vos idées en réalités.
                            </p>
                            <a className="btn btn-learn-more" href="#">Lire plus</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;