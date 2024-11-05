import TeamData from "@/app/data/teamData";

const Team = () => {
    return(
        <div className="team" id="team">
                <div className="container">
                    <div className="section-header text-center">
                        <p>Nos équipes</p>
                        <h2>Découvrez Notre Équipe d'Experts</h2>
                    </div>
                   <TeamData />
                </div>
            </div>
    );
}

export default Team;