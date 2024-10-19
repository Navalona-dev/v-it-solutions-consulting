import { useEffect, useState } from 'react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    // Fonction pour faire défiler vers l'élément cible
    const scrollto = (el: string) => {
        const header = document.getElementById('header');
        const offset = header ? header.offsetHeight : 0;

        const element = document.querySelector(el) as HTMLElement;
        if (element) {
            const elementPos = element.offsetTop;
            window.scrollTo({
                top: elementPos - offset,
                behavior: 'smooth'
            });
        }
    };

    // Gestionnaire d'événements pour les liens de navigation
    const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, el: string) => {
        event.preventDefault();
        scrollto(el);
    };

    // Gestionnaire de défilement
    const handleScroll = () => {
        if (window.scrollY > 50) { // Ajustez la valeur selon vos besoins
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    // Fonction pour gérer les liens de la barre de navigation active
    const navbarlinksActive = () => {
        const navbarlinks = document.querySelectorAll<HTMLAnchorElement>('#navbar .scrollto'); // Caster ici
        let position = window.scrollY + 200;

        navbarlinks.forEach(navbarlink => {
            if (!navbarlink.hash) return; // Ici, navbarlink est reconnu comme HTMLAnchorElement
            const section = document.querySelector(navbarlink.hash) as HTMLElement; // Caster ici
            if (!section) return;
            if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
                navbarlink.classList.add('active');
            } else {
                navbarlink.classList.remove('active');
            }
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('load', navbarlinksActive);
        window.addEventListener('scroll', navbarlinksActive);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('load', navbarlinksActive);
            window.removeEventListener('scroll', navbarlinksActive);
        };
    }, []);

    return (
        <header id="header" className={`fixed-top ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container d-flex align-items-center">
                <h1 className="logo me-auto"><a href="index.html">VISCO</a></h1>
                <a href="index.html" className="logo me-auto">
                    <img src="assets/img/logo.png" alt="" className="img-fluid" />
                </a>

                <nav id="navbar" className="navbar">
                    <ul>
                        <li><a className="nav-link scrollto active" href="#hero" onClick={(e) => handleNavClick(e, '#hero')}>Accueil</a></li>
                        <li><a className="nav-link scrollto" href="#about" onClick={(e) => handleNavClick(e, '#about')}>À propos</a></li>
                        <li><a className="nav-link scrollto" href="#services" onClick={(e) => handleNavClick(e, '#services')}>Services</a></li>
                        <li><a className="nav-link scrollto" href="#portfolio" onClick={(e) => handleNavClick(e, '#portfolio')}>Blog</a></li>
                        <li><a className="nav-link scrollto" href="#team" onClick={(e) => handleNavClick(e, '#team')}>Équipe</a></li>
                        <li className="dropdown">
                            <a href="#"><span>Offres</span> <i className="bi bi-chevron-down"></i></a>
                            <ul>
                                <li><a href="#">Drop Down 1</a></li>
                                <li><a href="#">Drop Down 2</a></li>
                                <li><a href="#">Drop Down 3</a></li>
                                <li><a href="#">Drop Down 4</a></li>
                            </ul>
                        </li>
                        <li><a className="nav-link scrollto" href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a></li>
                        <li><a className="getstarted scrollto" href="#about" onClick={(e) => handleNavClick(e, '#about')}>Commencer</a></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>
            </div>
        </header>
    );
};

export default Header;
