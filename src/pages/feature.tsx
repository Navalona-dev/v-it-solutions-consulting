import FeatureData from "@/app/data/featureData";

const Feature = () => {
    
    return(
        <div className="feature wow " data-aos="fade-up" data-aos-delay="100" data-aos-duration="1500">
                <div className="container-fluid">
                    <FeatureData />
                </div>
            </div>
    );
}

export default Feature;