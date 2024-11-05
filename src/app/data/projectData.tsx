import Image from 'next/image';
import image1 from '../../assets/images/service/service-1.png';
import image2 from '../../assets/images/service/service-2.png';
import image3 from '../../assets/images/about/about-1.png';

const ProjectData = () => {
    const datas = [
        {image: image1, title: "Lorem ipsum dolor sit", author: "Admin", location: "Construction", description: "Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor"},
        {image: image2, title: "Lorem ipsum dolor sit", author: "Admin", location: "Construction", description: "Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor"},
        {image: image3, title: "Lorem ipsum dolor sit", author: "Admin", location: "Construction", description: "Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor"},

    ];
    return(
        <div className="row">
            {datas.map((item, index) => (
                <div className="col-lg-4 col-md-6 wow " data-aos="fade-up" data-aos-delay="100" data-aos-duration="1500">
                    <div className="blog-item">
                        <div className="blog-img">
                            <Image src={item.image} alt="Image" className='img-fluid' />
                        </div>
                        <div className="blog-title">
                            <h3>{item.title}</h3>
                            <a className="btn" href="">+</a>
                        </div>
                        <div className="blog-meta">
                            <p>By<a href="" className='text-decoration-none'>{item.author}</a></p>
                            <p>In<a href="" className='text-decoration-none'>{item.location}</a></p>
                        </div>
                        <div className="blog-text">
                            <p>
                                {item.description}
                            </p>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    );
}

export default ProjectData;