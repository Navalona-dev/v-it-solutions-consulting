import ServiceData from "@/app/data/ServiceData";

const Service = () => {
    return(
        /*<section id="services" className="services section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Services</h2>
          <p>
            Chez VAL IT-SOLUTIONS CONSULTING, nous offrons une gamme complète de services 
            informatiques conçus pour répondre aux besoins spécifiques de chaque client. 
            Que vous ayez besoin d'une transformation digitale, d'une gestion efficace 
            de vos systèmes informatiques, ou de solutions sur mesure pour améliorer 
            la sécurité et la performance de vos infrastructures, nous sommes là pour 
            vous accompagner à chaque étape.
          </p>
        </div>

          <ServiceData />

      </div>
    </section>*/

    <div className="service" id="service">
        <div className="container">
            <div className="section-header text-center">
                <p>Nos Services</p>
                <h2>Nous fournissons des services</h2>
            </div>
            <ServiceData />
        </div>
    </div>
    );
}

export default Service;