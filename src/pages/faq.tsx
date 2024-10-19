import FaqData from "@/app/data/faqData";

const Faq = () => {
    return(
        <section id="faq" className="faq section-bg">
            <div className="container" data-aos="fade-up">
    
            <div className="section-title">
                <h2>Questions Fréquemment Posées</h2>
                <p>
                    Dans cette section, nous avons rassemblé les questions les plus courantes 
                    que nos clients se posent au sujet de nos services et de notre entreprise. 
                    Que vous soyez un nouveau client ou que vous ayez déjà collaboré avec nous, 
                    vous trouverez ici des réponses claires et précises aux interrogations 
                    les plus fréquentes. Notre objectif est de vous fournir toutes les 
                    informations nécessaires pour vous aider à prendre des décisions éclairées. 
                    Si vous ne trouvez pas la réponse à votre question, n'hésitez pas à nous 
                    contacter directement !
                </p>
            </div>
    
            <div className="faq-list">
                <FaqData />
            </div>
    
            </div>
      </section>
    );
}

export default Faq;