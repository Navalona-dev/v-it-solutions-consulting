import WhyData from "@/app/data/WhyData";

const Why = () => {
    return(
        <section id="why-us" className="why-us section-bg">
        <div className="container-fluid" data-aos="fade-up">
  
          <div className="row">
  
            <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
  
              <div className="content">
                <h3><strong>Pourquoi Nous Choisir ?</strong></h3>
                <p>
                Découvrez ce qui nous distingue des autres. Nous mettons un point d’honneur à offrir des services de qualité supérieure, adaptés à vos besoins spécifiques. Notre expertise, notre engagement envers l'excellence et notre attention aux détails font de nous le partenaire idéal pour vous accompagner dans vos projets. Faites confiance à notre équipe dédiée pour vous fournir des solutions innovantes et un service client exceptionnel.
                </p>
              </div>
  
              <WhyData />
  
            </div>
  
            <div className="col-lg-5 align-items-stretch order-1 order-lg-2 img why-us-right" data-aos="zoom-in" data-aos-delay="150">&nbsp;</div>
          </div>
  
        </div>
      </section>
    );
}

export default Why;