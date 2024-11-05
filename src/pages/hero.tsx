import React, { useEffect } from 'react';
import Image from 'next/image'; 
import image from '../assets/images/hero-img.png'; 
import image1 from '../assets/images/hero-1.png'; 
import image2 from '../assets/images/hero-2.png'; 
import image3 from '../assets/images/hero-3.png'; 
import image4 from '../assets/images/carousel-1.png'; 
import image5 from '../assets/images/carousel-2.png'; 
import image6 from '../assets/images/carousel-3.png'; 
import image7 from '../assets/images/carousel-4.png'; 

const Hero = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      require('bootstrap');
    }
  }, []);
  return (
    <div id="carousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000" data-bs-wrap="true">
        <ol className="carousel-indicators">
            <li data-bs-target="#carousel" data-bs-slide-to="0" className="active"></li>
            <li data-bs-target="#carousel" data-bs-slide-to="1"></li>
            <li data-bs-target="#carousel" data-bs-slide-to="2"></li>
            <li data-bs-target="#carousel" data-bs-slide-to="3"></li>
        </ol>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <Image
                  src={image4}
                  alt="Carousel Image"
                />
                <div className="carousel-caption">
                    <p className="animate__animated animate__fadeInRight animated-slow">Expertise en développement web.</p>
                    <h1 className="animate__animated animate__fadeInLeft animated-slow">VAL IT-SOLUTIONS CONSULTING</h1>
                    <a className="btn animate__animated animate__fadeInUp animated-slow" href="https://wa.me/+261349053688">Whatsapp</a>
                </div>
            </div>
            <div className="carousel-item">
                <Image
                  src={image7}
                  alt="Carousel Image"
                />
                <div className="carousel-caption">
                    <p className="animate__animated animate__fadeInRight animated-slow">Solutions technologiques avancées.</p>
                    <h1 className="animate__animated animate__fadeInLeft animated-slow">Développez, Innovez, Transformez(DIT)</h1>
                    <a className="btn animate__animated animate__fadeInUp animated-slow" href="https://wa.me/+261349053688">Whatsapp</a>
                </div>
            </div>
           
            <div className="carousel-item">
                <Image
                  src={image6}
                  alt="Carousel Image"
                />
                <div className="carousel-caption">
                    <p className="animate__animated animate__fadeInRight animated-slow">Votre Partenaire Digital</p>
                    <h1 className="animate__animated animate__fadeInLeft animated-slow">Services sur mesure.</h1>
                    <a className="btn animate__animated animate__fadeInUp animated-slow" href="https://wa.me/+261349053688">Whatsapp</a>
                </div>
            </div>
            <div className="carousel-item">
                <Image
                  src={image5}
                  alt="Carousel Image"
                />
                <div className="carousel-caption">
                    <p className="animate__animated animate__fadeInRight animated-slow">Sécurité et performance.</p>
                    <h1 className="animate__animated animate__fadeInLeft animated-slow">Solutions Systèmes et Réseaux</h1>
                    <a className="btn animate__animated animate__fadeInUp animated-slow" href="https://wa.me/+261349053688">Whatsapp</a>
                </div>
            </div>
            
        </div>

        <a className="carousel-control-prev fw-bold" href="#carousel" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </a>
        <a className="carousel-control-next fw-bold" href="#carousel" role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </a>
    </div>
  );
};

export default Hero;
