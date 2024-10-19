const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer-newsletter">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <h4>Rejoignez notre newsletter</h4>
                            <p>
                                Inscrivez-vous pour recevoir les dernières nouvelles, mises à 
                                jour et offres exclusives directement dans votre boîte de 
                                réception. Ne manquez pas l'occasion de rester informé sur 
                                nos produits et services. Votre satisfaction est notre priorité, 
                                et nous sommes ravis de partager nos nouveautés avec vous !
                            </p>
                            <form action="" method="post">
                                <input type="email" name="email" />
                                <input type="submit" value="Subscribe" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 footer-contact">
                            <h3>VISCO</h3>
                            <p>
                                A108 Adam Street <br />
                                New York, NY 535022 <br />
                                United States <br /><br />
                                <strong>Téléphone:</strong> +1 5589 55488 55 <br />
                                <strong>Email:</strong> info@example.com <br />
                            </p>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Liens Utiles</h4>
                            <ul>
                            <li><i className="bi bi-chevron-right"></i> <a href="#">Accueil</a></li>
                            <li><i className="bi bi-chevron-right"></i> <a href="#">À propos</a></li>
                            <li><i className="bi bi-chevron-right"></i> <a href="#">Services</a></li>
                            <li><i className="bi bi-chevron-right"></i> <a href="#">Terms of service</a></li>
                            <li><i className="bi bi-chevron-right"></i> <a href="#">Privacy policy</a></li>

                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Nos Services</h4>
                            <ul>
                            <li><i className="bi bi-chevron-right"></i> <a href="#">Conception Web</a></li>
                            <li><i className="bi bi-chevron-right"></i> <a href="#">Développement Web</a></li>
                            <li><i className="bi bi-chevron-right"></i> <a href="#">Gestion de Produits</a></li>
                            <li><i className="bi bi-chevron-right"></i> <a href="#">Marketing</a></li>
                            <li><i className="bi bi-chevron-right"></i> <a href="#">Design Graphique</a></li>

                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Nos Réseaux Sociaux</h4>
                            <p>
                                Cette section présente les différents réseaux sociaux où nous 
                                sommes actifs, permettant aux utilisateurs de nous suivre et 
                                de rester connectés avec notre communauté.
                            </p>
                            <div className="social-links mt-3">
                            <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                            <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                            <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                            <a href="#" className="google-plus"><i className="bi bi-skype"></i></a>
                            <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container footer-bottom clearfix">
                <div className="copyright">
                    &copy; Copyright <strong><span>VISCO</span></strong>. All Rights Reserved
                </div>
                <div className="credits">
                    {/* All the links in the footer should remain intact. */}
                    {/* You can delete the links only if you purchased the pro version. */}
                    {/* Licensing information: https://bootstrapmade.com/license/ */}
                    {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/arsha-free-bootstrap-html-template-corporate/ */}
                    Designed by <a href="https://bootstrapmade.com/">VISCO</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
