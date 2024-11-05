import Image from 'next/image'; 
import image1 from '../../assets/images/about/about-1.png'; 
import image2 from '../../assets/images/visco1.png'; 
import image3 from '../../assets/images/service/service-1.png'; 
import image4 from '../../assets/images/service/service-2.png'; 

const ServiceData = () => {
    const data = [
        {image: image2, icon: "bi bi-laptop", title: "Développement Web et Mobile ", description: "Création de sites web performants et d’applications mobiles innovantes pour transformer votre présence en ligne."},
        {image: image3, icon: "bi bi-briefcase", title: "Consulting IT", description: "Conseils stratégiques pour optimiser vos processus et aligner vos systèmes d'information avec vos objectifs d'affaires."},
        {image: image4, icon: "bi bi-shield-lock", title: "Cybersécurité", description: "Mise en place de solutions robustes pour protéger vos données et garantir la sécurité de vos infrastructures."},
        {image: image4, icon: "bi bi-cloud", title: "Cloud Computing", description: "Solutions cloud flexibles et évolutives pour améliorer l'efficacité de vos opérations et réduire vos coûts."},
        {image: image2, icon: "bi bi-diagram-3", title: "Gestion de projets IT", description: "Accompagnement de vos projets informatiques de A à Z, en assurant respect des délais, des budgets, et de la qualité."},
        {image: image1, icon: "bi bi-plug", title: "Câblage Réseau", description: "Installation de câblage structuré pour assurer une connectivité réseau fiable et performante."},

    ];

    return(

        <div className="row">
            {data.map((item, index) => (
                <div className="col-lg-4 col-md-6 wow" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1500">
                    <div className="service-item">
                        <div className="service-img">
                            <Image
                                src={item.image} 
                                alt="Image"
                                layout="responsive"
                                className="img-fluid"
                            />
                            <div className="service-overlay">
                                <p>
                                    {item.description}
                                </p>
                            </div>
                        </div>
                        <div className="service-text">
                            <h3>{item.title}</h3>
                            <a className="btn" href={item.image.src} data-lightbox="service">+</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    );
}

export default ServiceData;