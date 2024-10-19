import Image from 'next/image'; 
import image from '../assets/images/hero-img.png'; 

const Hero = () => {
  return (
    <section id="hero" className="d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
            <h1>Développez, Innovez, Transformez (DIT)</h1>
            <h2>Notre engagement pour vous aider à bâtir des stratégies, adopter des solutions innovantes et transformer vos défis en succès.</h2>
            <div className="d-flex justify-content-center justify-content-lg-start">
              <a href="#about" className="btn-get-started scrollto">Commencer</a>
              <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="glightbox btn-watch-video">
                <i className="bi bi-play-circle"></i><span>Voir la vidéo</span>
              </a>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
            <Image
              src={image} // Utiliser le composant Image ici
              alt="Hero Image"
              layout="responsive" // Optionnel : ajuster la mise en page
              width={500} // Largeur souhaitée
              height={300} // Hauteur souhaitée
              className="img-fluid animated"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
