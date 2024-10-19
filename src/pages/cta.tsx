const Cta = () => {
    return(
        <section id="cta" className="cta">
            <div className="container" data-aos="zoom-in">

                <div className="row">
                <div className="col-lg-9 text-center text-lg-start">
                    <h3>Prêt à démarrer ?</h3>
                    <p>
                        Vous avez un projet en tête ou vous cherchez des solutions 
                        informatiques adaptées à vos besoins ? 
                        Chez VAL IT-SOLUTIONS CONSULTING, nous sommes là pour vous accompagner 
                        à chaque étape. Que ce soit pour la création de votre site web, 
                        la gestion de vos infrastructures, ou l'optimisation de vos processus, 
                        notre équipe est prête à relever le défi. N'attendez plus pour donner 
                        un nouvel élan à vos ambitions !
                    </p>
                </div>
                <div className="col-lg-3 cta-btn-container text-center">
                    <a className="cta-btn align-middle" href="#">Commencez dès maintenant</a>
                </div>
                </div>

            </div>
        </section>
    );
}

export default Cta;