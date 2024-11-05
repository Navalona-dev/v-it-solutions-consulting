const FeatureData = () => {
    const datas = [
        {
            icon: 'bi bi-file-earmark-code-fill', title: 'Expert en Informatique', description: "Notre équipe d'experts en informatique met à votre disposition des compétences techniques approfondies pour développer des solutions sur mesure qui répondent parfaitement à vos besoins."
        },
        {
            icon: 'bi bi-star-fill', title: "Travail de Qualité", description: "Nous nous engageons à fournir un travail de qualité supérieure, en utilisant les meilleures pratiques et technologies pour garantir des solutions fiables et performantes qui répondent aux exigences les plus strictes."
        },
        {
            icon: "bi bi-clock-fill", title: "Support 24/7", description: "Avec notre support disponible 24 heures sur 24 et 7 jours sur 7, vous bénéficiez d'une assistance immédiate pour résoudre rapidement tous vos problèmes et garantir la continuité de vos activités."
        }

    ];
    return(
        <div className="row align-items-center">
            {datas.map((item, index) => (
                <div className="col-lg-4 col-md-12">
                    <div className="feature-item">
                        <div className="feature-icon">
                            <i className={item.icon}></i>
                        </div>
                        <div className="feature-text">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default FeatureData;