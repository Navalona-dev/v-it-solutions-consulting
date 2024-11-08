const Contact = () => {
    return(
        /*<section id="contact" className="contact">
          <div className="container" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1500">
    
            <div className="section-title">
              <h2>Contact</h2>
              <p>
                  Nous sommes là pour vous aider ! Si vous avez des questions, des commentaires 
                  ou des préoccupations, n'hésitez pas à nous contacter. Notre équipe est prête 
                  à répondre à vos demandes et à vous fournir l'assistance dont vous avez besoin. 
                  Remplissez le formulaire ci-dessous ou utilisez les coordonnées fournies pour 
                  nous joindre. Votre satisfaction est notre priorité !
              </p>
            </div>
    
            <div className="row">
    
              <div className="col-lg-5 d-flex align-items-stretch">
                <div className="info">
                  <div className="address">
                    <i className="bi bi-geo-alt"></i>
                    <h4>Localisation:</h4>
                    <p>A108 Adam Street, New York, NY 535022</p>
                  </div>
    
                  <div className="email">
                    <i className="bi bi-envelope"></i>
                    <h4>Email:</h4>
                    <p>info@example.com</p>
                  </div>
    
                  <div className="phone">
                    <i className="bi bi-phone"></i>
                    <h4>Téléphone:</h4>
                    <p>+1 5589 55488 55s</p>
                  </div>
    
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" style={{ border: '0' }} className="iframe" allowFullScreen></iframe>
                </div>
    
              </div>
    
              <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label>Votre nom</label>
                      <input type="text" name="name" className="form-control" id="name" required />
                    </div>
                    <div className="form-group col-md-6">
                      <label>Votre adresse e-mail</label>
                      <input type="email" className="form-control" name="email" id="email" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Sujet</label>
                    <input type="text" className="form-control" name="subject" id="subject" required />
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea className="form-control" name="message" rows={10} required ></textarea>
                  </div>
                  <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">Votre message a été envoyé. Merci !</div>
                  </div>
                  <div className="text-center"><button type="submit">Envoyer Message</button></div>
                </form>
              </div>
    
            </div>
    
          </div>
        </section>*/

        <div id="contact" className="contact wow" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1500">
            <div className="container">
                <div className="section-header text-center">
                    <p>Contactez-nous</p>
                    <h2>Pour toute question</h2>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="contact-info">
                            <div className="contact-item">
                                <i className="flaticon-address"></i>
                                <div className="contact-text">
                                    <h2>Localisation</h2>
                                    <p>Antananarivo, Madagascar</p>
                                </div>
                            </div>
                            <div className="contact-item">
                                <i className="flaticon-call"></i>
                                <div className="contact-text">
                                    <h2>Téléphone</h2>
                                    <p>+261 34 90 536 88</p>
                                </div>
                            </div>
                            <div className="contact-item">
                                <i className="flaticon-send-mail"></i>
                                <div className="contact-text">
                                    <h2>Email</h2>
                                    <p>service@visco.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="contact-form">
                            <div id="success"></div>
                            <form name="sentMessage" id="contactForm">
                                <div className="control-group">
                                    <input type="text" className="form-control" id="name" placeholder="Votre nom" required data-validation-required-message="Entrez votre nom s'il vous plaît" />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="control-group">
                                    <input type="email" className="form-control" id="email" placeholder="Votre mail" required data-validation-required-message="Entrer votre email s'il vous plaît" />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="control-group">
                                    <input type="text" className="form-control" id="subject" placeholder="Objet" required data-validation-required-message="Entrer un objet s'il vous plaît" />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="control-group">
                                    <textarea className="form-control" id="message" placeholder="Message" required data-validation-required-message="Entrer votre message s'il vous plaît"></textarea>
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div>
                                    <button className="btn" type="submit" id="sendMessageButton">Envoyer Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;