const Fact = () => {
    return(
        <div className="fact">
            <div className="container-fluid">
                <div className="row counters">
                    <div className="col-md-6 fact-left wow " data-aos="fade-right" data-aos-delay="100" data-aos-duration="1500">
                        <div className="row">
                            <div className="col-6">
                                <div className="fact-icon">
                                    <i className="bi bi-laptop"></i>
                                </div>
                                <div className="fact-text">
                                    <h2 data-toggle="counter-up">10</h2>
                                    <p>Expert en informatique</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="fact-icon">
                                    <i className="bi bi-emoji-smile"></i>
                                </div>
                                <div className="fact-text">
                                    <h2 data-toggle="counter-up">20</h2>
                                    <p>Clients Hereux</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 fact-right wow" data-aos="fade-left" data-aos-delay="100" data-aos-duration="1500">
                        <div className="row">
                            <div className="col-6">
                                <div className="fact-icon">
                                    <i className="bi bi-check-circle"></i>
                                </div>
                                <div className="fact-text">
                                    <h2 data-toggle="counter-up">20</h2>
                                    <p>Projets Complets</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="fact-icon">
                                    <i className="bi bi-arrow-repeat"></i>
                                </div>
                                <div className="fact-text">
                                    <h2 data-toggle="counter-up">25</h2>
                                    <p>Projets en cours</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Fact;