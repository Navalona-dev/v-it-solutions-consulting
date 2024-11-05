import FaqData from "@/app/data/faqData";

const Faq = () => {
    return(
      <div className="faqs" id="faq">
      <div className="container">
          <div className="section-header text-center">
              <p>Questions fréquemment posées</p>
              <h2>Vous pouvez demander</h2>
          </div>
         <FaqData />
      </div>
  </div>
    );
}

export default Faq;