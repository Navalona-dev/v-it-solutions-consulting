import { useState } from 'react';

const FaqData = () => {
    const data = [
        { index: "1", question: "Non consectetur a erat nam at lectus urna duis?", response: "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non." },
        { index: "2", question: "Feugiat scelerisque varius morbi enim nunc?", response: "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui." },
        { index: "3", question: "Dolor sit amet consectetur adipiscing elit?", response: "Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis" },
        { index: "4", question: "Tempus quam pellentesque nec nam aliquam sem et tortor consequat?", response: "Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in." },
        { index: "5", question: "Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor?", response: "Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque." },
    ];

    const [activeIndex, setActiveIndex] = useState<string | null>("1"); 

    const handleToggle = (index: string) => {
        setActiveIndex(activeIndex === index ? null : index); 
    };

    return (
        <ul>
            {data.map((item, key) => (
                <li key={item.index} data-aos="fade-up" data-aos-delay="100">
                    <i className="bi bi-question-circle icon-help"></i>
                    <a 
                        onClick={() => handleToggle(item.index)} 
                        style={{ cursor: 'pointer' }} 
                        className={` ${activeIndex === item.index ? 'collapse' : 'collapsed'}`}
                    >
                        {item.question}
                        <i className={`bi ${activeIndex === item.index ? "bi-chevron-up icon-close" : "bi-chevron-down icon-show"}`}></i>
                    </a>
                    <div 
                        id={`faq-list-${item.index}`} 
                        className={`collapse ${activeIndex === item.index ? 'show' : ''}`} 
                        data-bs-parent=".faq-list"
                    >
                        <p>{item.response}</p>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default FaqData;
