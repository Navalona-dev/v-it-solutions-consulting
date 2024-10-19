const ServiceData = () => {
    const data = [
        {icon: "bi bi-laptop", title: "Développement Web et Mobile ", description: "Création de sites web performants et d’applications mobiles innovantes pour transformer votre présence en ligne."},
        {icon: "bi bi-briefcase", title: "Consulting IT", description: "Conseils stratégiques pour optimiser vos processus et aligner vos systèmes d'information avec vos objectifs d'affaires."},
        {icon: "bi bi-shield-lock", title: "Cybersécurité", description: "Mise en place de solutions robustes pour protéger vos données et garantir la sécurité de vos infrastructures."},
        {icon: "bi bi-cloud", title: "Cloud Computing", description: "Solutions cloud flexibles et évolutives pour améliorer l'efficacité de vos opérations et réduire vos coûts."},
        {icon: "bi bi-diagram-3", title: "Gestion de projets IT", description: "Accompagnement de vos projets informatiques de A à Z, en assurant respect des délais, des budgets, et de la qualité."},

    ];

    return(
        <div className="row">
            {data.map((item, index) => (
                <div key={index} className="col-xl-3 col-md-6 d-flex align-items-stretch mb-4" data-aos="zoom-in" data-aos-delay="100">
                    <div className="icon-box">
                        <div className="icon"><i className={item.icon}></i></div>
                        <h4><a href="">{item.title}</a></h4>
                        <p>{item.description}</p>
                    </div>
                </div>
            ))}
           
        </div>

    );
}

export default ServiceData;