import { useEffect } from 'react';
import Isotope from 'isotope-layout';
import GLightbox from 'glightbox';
import Swiper from 'swiper';
import PortfolioData from "@/app/data/PortfolioData";
import 'swiper/swiper-bundle.css';
import AOS from 'aos'; 

const Portfolio = () => {
    useEffect(() => {
        // Initialisation de l'isotope pour filtrer le portfolio
        const portfolioContainer = document.querySelector('.portfolio-container') as HTMLElement; // Utilisation d'une assertion de type
        if (portfolioContainer) {
            const portfolioIsotope = new Isotope(portfolioContainer, {
                itemSelector: '.portfolio-item'
            });

            const portfolioFilters = document.querySelectorAll('#portfolio-flters li');

            portfolioFilters.forEach((filter) => {
                filter.addEventListener('click', (e) => {
                    e.preventDefault();
                    portfolioFilters.forEach((el) => {
                        el.classList.remove('filter-active');
                    });
                    filter.classList.add('filter-active');

                    // Récupérer le filtre et s'assurer qu'il n'est pas null
                    const filterValue = filter.getAttribute('data-filter');
                    if (filterValue) {
                        portfolioIsotope.arrange({
                            filter: filterValue // Le filtre est maintenant garanti d'être une chaîne
                        });
                        AOS.refresh();
                    }
                });
            });
        }

        // Initialisation de GLightbox pour la lightbox des images du portfolio
        const portfolioLightbox = GLightbox({
            selector: '.portfolio-lightbox'
        });

        // Initialisation du slider pour les détails du portfolio
        new Swiper('.portfolio-details-slider', {
            speed: 400,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
            }
        });
    }, []); // useEffect with empty dependency array to ensure it runs once

    return (
        <section id="portfolio" className="portfolio">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>Portfolio</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem...</p>
                </div>

                <ul id="portfolio-flters" className="d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
                    <li data-filter="*" className="filter-active">All</li>
                    <li data-filter=".filter-app">App</li>
                    <li data-filter=".filter-card">Card</li>
                    <li data-filter=".filter-web">Web</li>
                </ul>

                <PortfolioData />

            </div>
        </section>
    );
}

export default Portfolio;
