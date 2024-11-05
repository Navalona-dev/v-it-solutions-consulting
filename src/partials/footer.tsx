import { useEffect } from 'react';

const Footer = () => {
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
    };

    return (
        <div className="footer wow" data-aos="fade-in" data-aos-delay="100" data-aos-duration="1500">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-3">
                        <div className="footer-contact">
                            <h2>Contactez-nous</h2>
                            <p><i className="fa fa-map-marker-alt"></i>Antananarivo, Madagascar</p>
                            <p><i className="fa fa-phone-alt"></i>+261 34 90 536 88</p>
                            <p><i className="fa fa-envelope"></i>service@visco.com</p>
                            <div className="footer-social">
                                <a href="" className="text-decoration-none"><i className="bi bi-facebook"></i></a>
                                <a href="" className="text-decoration-none"><i className="bi bi-whatsapp"></i></a>
                                <a href="" className="text-decoration-none"><i className="bi bi-youtube"></i></a>
                                <a href="" className="text-decoration-none"><i className="bi bi-instagram"></i></a>
                                <a href="" className="text-decoration-none"><i className="bi bi-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="footer-link">
                            <h2>Domaines de services</h2>
                            <a href="" className="text-decoration-none">Developpement web et mobile</a>
                            <a href="" className="text-decoration-none">Consulting IT</a>
                            <a href="" className="text-decoration-none">Cybersécurité</a>
                            <a href="" className="text-decoration-none">Cloud computing</a>
                            <a href="" className="text-decoration-none">Gestion de projets IT</a>
                            <a href="" className="text-decoration-none">Câblage réseau</a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="footer-link">
                            <h2>Pages utiles</h2>
                            <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="text-decoration-none">À Propos</a>
                            <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="text-decoration-none">Contact</a>
                            <a href="#team" onClick={(e) => handleNavClick(e, '#team')} className="text-decoration-none">Équipe</a>
                            <a href="#blog" onClick={(e) => handleNavClick(e, '#blog')} className="text-decoration-none">Projets</a>
                            <a href="#testimonial" onClick={(e) => handleNavClick(e, '#testimonial')} className="text-decoration-none">Témoignage</a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="newsletter">
                            <h2>Newsletter</h2>
                            <p>
                            Restez informé des dernières tendances et innovations en informatique avec la newsletter de Visco (Val IT-Solutions Consulting). Recevez des conseils, des astuces et des actualités directement dans votre boîte mail pour optimiser vos solutions IT.
                            </p>
                            <div className="form">
                                <input className="form-control" placeholder="Votre mail" />
                                <button className="btn">S'abonner</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container footer-menu">
                <div className="f-menu">
                    <a href="" className="text-decoration-none">Terms of use</a>
                    <a href="" className="text-decoration-none">Privacy policy</a>
                    <a href="" className="text-decoration-none">Cookies</a>
                    <a href="" className="text-decoration-none">Help</a>
                    <a href="" className="text-decoration-none">FQAs</a>
                </div>
            </div>
            <div className="container copyright">
                <div className="row">
                    <div className="col-md-6">
                        <p>&copy; <a href="#">VISCO</a>, All Right Reserved.</p>
                    </div>
                    <div className="col-md-6">
                        <p>Designed By <a href="#">Val IT-Solutions Consulting</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
