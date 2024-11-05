import { useEffect, useState } from 'react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [showBackToTop, setShowBackToTop] = useState(false);
    const [activeMenu, setActiveMenu] = useState('#carousel'); // L'élément actif par défaut

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

    const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, el: string) => {
        event.preventDefault();
        scrollto(el);
        setActiveMenu(el); // Met à jour l'élément actif
    };

    const handleScroll = () => {
        if (window.scrollY > 90) {
            setIsScrolled(true);
            if (window.scrollY > 200) {
                setShowBackToTop(true);
            } else {
                setShowBackToTop(false);
            }
        } else {
            setIsScrolled(false);
            setShowBackToTop(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <div className={`nav-bar ${isScrolled ? 'nav-sticky' : ''}`} id='header'>
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                        <a href="#" className="navbar-brand">MENU</a>
                        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <div className="navbar-nav mr-auto">
                                <a href="#carousel" onClick={(e) => handleNavClick(e, '#carousel')} className={`nav-item nav-link ${activeMenu === '#carousel' ? 'active' : ''}`}>Accueil</a>
                                <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className={`nav-item nav-link ${activeMenu === '#about' ? 'active' : ''}`}>À Propos</a>
                                <a href="#service" onClick={(e) => handleNavClick(e, '#service')} className={`nav-item nav-link ${activeMenu === '#service' ? 'active' : ''}`}>Service</a>
                                <a href="#team" onClick={(e) => handleNavClick(e, '#team')} className={`nav-item nav-link ${activeMenu === '#team' ? 'active' : ''}`}>Équipe</a>
                                <a href="#blog" onClick={(e) => handleNavClick(e, '#blog')} className={`nav-item nav-link ${activeMenu === '#blog' ? 'active' : ''}`}>Projet</a>
                                <a href="#faq" onClick={(e) => handleNavClick(e, '#faq')} className={`nav-item nav-link ${activeMenu === '#faq' ? 'active' : ''}`}>Question</a>
                                <a href="#testimonial" onClick={(e) => handleNavClick(e, '#testimonial')} className={`nav-item nav-link ${activeMenu === '#testimonial' ? 'active' : ''}`}>Témoignage</a>
                                <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className={`nav-item nav-link ${activeMenu === '#contact' ? 'active' : ''}`}>Contact</a>
                            </div>
                            <div className="ml-auto">
                                <a className="btn" href="https://wa.me/+261349053688">Whatsapp</a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

            {showBackToTop && (
                <button className="back-to-top" onClick={scrollToTop}>
                    &#8679; {/* Vous pouvez mettre une icône ici */}
                </button>
            )}
        </>
    );
};

export default Header;
