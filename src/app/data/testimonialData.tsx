import React, { useState, useEffect, useRef } from "react";
import Image from 'next/image';
import image1 from '../../assets/images/testimonials/testimonial-1.jpg';
import image2 from '../../assets/images/testimonials/testimonial-2.jpg';
import image3 from '../../assets/images/testimonials/testimonial-3.jpg';
import image4 from '../../assets/images/testimonials/testimonial-4.jpg';
import Slider from "react-slick";

const TestimonialData = () => {
    const datas = [
        { image: image1, name: 'Customer Name', status: 'profession', comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus." },
        { image: image2, name: 'Customer Name', status: 'profession', comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus." },
        { image: image3, name: 'Customer Name', status: 'profession', comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus." },
        { image: image4, name: 'Customer Name', status: 'profession', comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus." },
        { image: image1, name: 'Customer Name', status: 'profession', comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus." },
        { image: image3, name: 'Customer Name', status: 'profession', comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus." },
        { image: image4, name: 'Customer Name', status: 'profession', comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus." },
        { image: image2, name: 'Customer Name', status: 'profession', comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus." },
    ];

    const settings = {
        infinite: true,
        autoplay: true,
        arrows: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const settingsNav = {
        arrows: false,
        dots: false,
        focusOnSelect: true,
        centerMode: true,
        centerPadding: '22px',
        slidesToShow: 3,
    };

    const sliderRef1 = useRef<Slider | null>(null);
    const sliderRef2 = useRef<Slider | null>(null);
    
    const [nav1, setNav1] = useState<Slider | null>(null);
    const [nav2, setNav2] = useState<Slider | null>(null);
    
    useEffect(() => {
        setNav1(sliderRef1.current);
        setNav2(sliderRef2.current);
    }, []);

    return (
        <div>
            <div className="row">
                <div className="col-12">
                    <div className='testimonial-slider-nav'>
                        <Slider
                            {...settingsNav}
                            asNavFor={nav2 || undefined} // Pass undefined if nav2 is null
                            ref={sliderRef1}
                        >
                            {datas.map((item, index) => (
                                <div key={index} className="slider-nav">
                                    <Image src={item.image} className="img-fluid" alt="" />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="testimonial-slider">
                        <Slider
                            {...settings}
                            asNavFor={nav1 || undefined} // Pass undefined if nav1 is null
                            ref={sliderRef2}
                        >
                            {datas.map((item, index) => (
                                <div key={index} className="slider-item">
                                    <h3>{item.name}</h3>
                                    <h4>{item.status}</h4>
                                    <p>{item.comment}</p>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TestimonialData;
