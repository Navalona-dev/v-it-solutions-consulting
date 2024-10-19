import React, { useState } from 'react';

const WhyData = () => {
    const [activeId, setActiveId] = useState("1");  // Initialisation avec l'ID de l'accordion ouvert par défaut

    const data = [
        { id: "1", title: "Expertise et Expérience", para: "Notre équipe est composée de professionnels qualifiés ayant des années d'expérience dans leur domaine. Nous avons géré avec succès de nombreux projets, ce qui nous permet de vous offrir des solutions adaptées et efficaces." },
        { id: "2", title: "Service Client Exceptionnel", para: "Nous croyons fermement à l'importance d'un service client de qualité. Notre équipe est disponible et réactive, prête à répondre à vos questions et à vous accompagner à chaque étape de votre projet." },
        { id: "3", title: "Solutions Personnalisées", para: "Chaque client est unique, et nous nous engageons à fournir des solutions sur mesure qui répondent à vos besoins spécifiques. Nous prenons le temps de comprendre vos objectifs et de vous proposer des options adaptées." },
    ];

    const toggleAccordion = (id: any) => {
        setActiveId(activeId === id ? null : id);
    };

    return (
        <div className="accordion-list">
            <ul>
                {data.map((item) => (
                    <li key={item.id}>
                        <a 
                            onClick={() => toggleAccordion(item.id)}  // Gérer le clic pour ouvrir/fermer l'accordéon
                            className={`collapse ${activeId === item.id ? '' : 'collapsed'}`}  // Afficher/masquer selon l'ID actif
                            data-bs-target={`#accordion-list-${item.id}`}
                        >
                            <span>{item.id}</span> {item.title}
                            <i className="bx bx-chevron-down icon-show"></i>
                            <i className="bx bx-chevron-up icon-close"></i>
                        </a>
                        <div 
                            id={`accordion-list-${item.id}`} 
                            className={`collapse ${activeId === item.id ? 'show' : ''}`}  // Si l'ID est actif, montrer le contenu
                            data-bs-parent=".accordion-list"
                        >
                            <p>{item.para}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WhyData;
