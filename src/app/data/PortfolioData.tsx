import Image from 'next/image'; 

import image1 from '../../assets/images/portfolio/portfolio-1.jpg';
import image2 from '../../assets/images/portfolio/portfolio-2.jpg';
import image3 from '../../assets/images/portfolio/portfolio-3.jpg';
import image4 from '../../assets/images/portfolio/portfolio-4.jpg';
import image5 from '../../assets/images/portfolio/portfolio-5.jpg';
import image6 from '../../assets/images/portfolio/portfolio-6.jpg';
import image7 from '../../assets/images/portfolio/portfolio-7.jpg';
import image8 from '../../assets/images/portfolio/portfolio-8.jpg';
import image9 from '../../assets/images/portfolio/portfolio-9.jpg';

const PortfolioData = () => {
    const data = [
        {image: image1, title: "App 1", para: "App", link:"../../assets/images/portfolio/portfolio-1.jpg", filter: "app"},
        {image: image2, title: "Web 3", para: "Web", link: "../../assets/images/portfolio/portfolio-2.jpg", filter: "web"},
        {image: image3, title: "App 2", para: "App", link: "../../assets/images/portfolio/portfolio-3.jpg", filter: "app"},
        {image: image4, title: "Card 2", para: "Card", link: "../../assets/images/portfolio/portfolio-4.jpg", filter: "card"},
        {image: image5, title: "Web 2", para: "Web", link: "../../assets/images/portfolio/portfolio-5.jpg", filter: "web"},
        {image: image6, title: "App 3", para: "App", link: "../../assets/images/portfolio/portfolio-6.jpg", filter: "app"},
        {image: image7, title: "Card 1", para: "Card", link: "../../assets/images/portfolio/portfolio-7.jpg", filter: "card"},
        {image: image8, title: "Card 3", para: "Card", link: "../../assets/images/portfolio/portfolio-8.jpg", filter: "card"},
        {image: image9, title: "Web 3", para: "Web", link: "../../assets/images/portfolio/portfolio-9.jpg", filter: "web"},

    ]
    return(
        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
            {data.map((item, index) => (
                <div className={`col-lg-4 col-md-6 portfolio-item filter-${item.filter}`}>
                    <div className="portfolio-img">
                        <Image src={item.image} className="img-fluid" alt="" />
                    </div>
                    <div className="portfolio-info">
                        <h4>{item.title}</h4>
                        <p>{item.para}</p>
                        <a href={item.link} data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 1"><i className="bi bi-plus"></i></a>
                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bi bi-link"></i></a>
                    </div>
                </div>
            ))}
            
      </div>
    );
}

export default PortfolioData;