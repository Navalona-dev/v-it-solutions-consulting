import { useState } from 'react';

const FaqData = () => {
    const data1 = [
        {index: "One",question: "Lorem ipsum dolor sit amet?", reponse: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non."},
        {index: "Two",question: "Lorem ipsum dolor sit amet?", reponse: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non."},
        {index: "Free",question: "Lorem ipsum dolor sit amet?", reponse: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non."},
        {index: "Four",question: "Lorem ipsum dolor sit amet?", reponse: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non."},
        {index: "Five",question: "Lorem ipsum dolor sit amet?", reponse: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non."},
    ];

    const data2 = [
        {index: "Six",question: "Lorem ipsum dolor sit amet?", reponse: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non."},
        {index: "Seven",question: "Lorem ipsum dolor sit amet?", reponse: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non."},
        {index: "Eight",question: "Lorem ipsum dolor sit amet?", reponse: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non."},
        {index: "Nine",question: "Lorem ipsum dolor sit amet?", reponse: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non."},
        {index: "Ten",question: "Lorem ipsum dolor sit amet?", reponse: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non."},
    ];

    const [activeIndex, setActiveIndex] = useState<string | number | null>(null);

    const handleToggle = (index: string | number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };


    return (
        <div className="row">
            <div className="col-md-6">
                <div id="accordion-1">
                    {data1.map((item, key) => (
                        <div className="card wow" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1500" key={item.index}>
                            <div className="card-header">
                                <a
                                    className="card-link text-decoration-none collapsed"
                                    onClick={() => handleToggle(item.index)}
                                    style={{ cursor: 'pointer' }}
                                    data-toggle="collapse"
                                    aria-expanded={activeIndex === item.index ? 'true' : 'false'}
                                >
                                    {item.question}
                                </a>
                            </div>
                            <div id={`collapse${item.index}`} className={`collapse ${activeIndex === item.index ? 'show' : ''}`}>
                                <div className="card-body">
                                    {item.reponse}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="col-md-6">
                <div id="accordion-2">
                    {data2.map((item, key) => (
                        <div className="card wow" data-aos="fade-left" data-aos-delay="100" data-aos-duration="1500" key={item.index}>
                            <div className="card-header">
                                <a
                                    className="card-link text-decoration-none collapsed"
                                    onClick={() => handleToggle(item.index)}
                                    style={{ cursor: 'pointer' }}
                                    data-toggle="collapse"
                                    aria-expanded={activeIndex === item.index ? 'true' : 'false'}
                                >
                                    {item.question}
                                </a>
                            </div>
                            <div id={`collapse${item.index}`} className={`collapse ${activeIndex === item.index ? 'show' : ''}`}>
                                <div className="card-body">
                                    {item.reponse}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FaqData;
