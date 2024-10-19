import TeamData from "@/app/data/teamData";

const Team = () => {
    return(
        <section id="team" className="team section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Équipe</h2>
          <p>
            Dans notre entreprise VAL IT-SOLUTIONS CONSULTING, nous croyons que la force de n
            otre réussite réside dans la diversité et l'expertise de notre équipe. 
            Composée de professionnels passionnés et compétents, notre équipe réunit 
            des spécialistes en développement, en gestion de projets, et en cybersécurité. 
            Ensemble, nous travaillons main dans la main pour offrir des solutions innovantes 
            et adaptées aux besoins de nos clients. Notre culture d'entreprise repose 
            sur la collaboration, l'apprentissage continu et l'engagement envers l'excellence. 
            Découvrez les visages de ceux qui propulsent notre entreprise 
            vers l'avant et qui sont dédiés à transformer vos défis en opportunités.
          </p>
        </div>

        <TeamData />

      </div>
    </section>
    );
}

export default Team;