import Image from 'next/image'; 

import image1 from '../../assets/images/clients/client-1.png';
import image2 from '../../assets/images/clients/client-2.png';
import image3 from '../../assets/images/clients/client-3.png';
import image4 from '../../assets/images/clients/client-4.png';
import image5 from '../../assets/images/clients/client-5.png';
import image6 from '../../assets/images/clients/client-6.png';

const CustomerData = () => {
    const images = [
        { src: image1, name: 'Client 1' },
        { src: image2, name: 'Client 2' },
        { src: image3, name: 'Client 3' },
        { src: image4, name: 'Client 4' },
        { src: image5, name: 'Client 5' },
        { src: image6, name: 'Client 6' },
    ];

    return (
        <div className="row" data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="ease-in-out">
            {images.map((image, index) => (
                <div key={index} className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                    <Image
                        src={image.src}
                        className="img-fluid"
                        alt=""
                    />
                </div>
            ))}
            
        </div>
    );
};

export default CustomerData;
