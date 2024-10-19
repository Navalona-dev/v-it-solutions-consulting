import CustomerData from "@/app/data/customerData";

const Customer = () => {
    return(
        <section id="cliens" className="cliens section-bg">
          <div className="container">
            <CustomerData />
          </div>
        </section>
    );
};

export default Customer;