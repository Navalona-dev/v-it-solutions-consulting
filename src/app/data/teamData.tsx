import Image from 'next/image'; 
import image1 from '../../assets/images/team/team-1.jpg';
import image2 from '../../assets/images/team/team-2.jpg';
import image3 from '../../assets/images/team/team-3.jpg';
import image4 from '../../assets/images/team/team-4.jpg';

const TeamData = () => {
    const data = [
        {image: image1, name: "Walter White",status: "Chief Executive Officer",descritpion: "Explicabo voluptatem mollitia et repellat qui dolorum quasi", socialLink: [
            {icon: "bi bi-facebook", link:"https://white.facebook.com"},
            {icon: "bi bi-whatsapp", link: "https://white.whatsapp.com"},
            {icon: "bi bi-twitter", link: "https://white.twitter.com"},
            {icon: "bi bi-skype", link: "https://white.skype.com"}
        ]},
        {image: image2, name: "Sarah Jhonson",status: "Product Manager",descritpion: "Aut maiores voluptates amet et quis praesentium qui senda para", socialLink: [
            {icon: "bi bi-facebook", link:"https://sarah.facebook.com"},
            {icon: "bi bi-whatsapp", link: "https://sarah.whatsapp.com"},
            {icon: "bi bi-twitter", link: "https://sarah.twitter.com"},
        ]},
        {image: image3, name: "William Anderson",status: "CTO",descritpion: "Quisquam facilis cum velit laborum corrupti fuga rerum quia", socialLink: [
            {icon: "bi bi-facebook", link:"https://anderson.facebook.com"},
            {icon: "bi bi-whatsapp", link: "https://anderson.whatsapp.com"},
            {icon: "bi bi-twitter", link: "https://anderson.twitter.com"},
        ]},
        {image: image4, name: "Amanda Jepson",status: "Accountant",descritpion: "Dolorum tempora officiis odit laborum officiis et et accusamus", socialLink: [
            {icon: "bi bi-facebook", link:"https://amanda.facebook.com"},
            {icon: "bi bi-whatsapp", link: "https://amanda.whatsapp.com"},
            {icon: "bi bi-twitter", link: "https://amanda.twitter.com"},
            {icon: "bi bi-instagram", link: "https://amanda.instagram.com"},
        ]},
    ];

    return(
        <div className="row">
            {data.map((item, index) => (
                <div className="col-lg-6 mt-4">
                    <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="400">
                    <div className="pic">
                        <Image src={item.image} className="img-fluid" alt="" />
                        </div>
                    <div className="member-info">
                        <h4>{item.name}</h4>
                        <span>{item.status}</span>
                        <p>{item.descritpion}</p>
                        <div className="social">
                        {item.socialLink.map((item, index) => (
                            <a href={item.link}><i className={item.icon}></i></a>
                        ))}
                        </div>
                    </div>
                    </div>
                </div>
            ))}
          

        </div>
    );
}

export default TeamData;