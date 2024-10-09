import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

// const Carousel = () => {
//     const trendingSkills = [
//         {
//             image: "https://res.cloudinary.com/dyjkp0r0x/image/upload/v1716349097/Default_artificial_inteliigence_1_eui3pb.jpg",
//             skill: "Artificial Intelligence",
//             description: "Description for Artificial Intelligence",
//         },
//         {
//             image: "https://res.cloudinary.com/dyjkp0r0x/image/upload/v1716349179/Default_internetof_things_1_x8jdr0.jpg",
//             skill: "Full Stack Development",
//             description: "Description for Full Stack Development",
//         },
//         {
//             image: "https://res.cloudinary.com/dyjkp0r0x/image/upload/v1716349750/Default_fintech_0_lpvjrj.jpg",
//             skill: "Fintech",
//             description: "Description for Fintech",
//         },
//         {
//             image: "https://res.cloudinary.com/dyjkp0r0x/image/upload/v1716347189/Default_virtual_reaity_1_v4tgtp.jpg",
//             skill: "Game Tech",
//             description: "Description for Game Tech",
//         },
//         {
//             image: "https://res.cloudinary.com/dyjkp0r0x/image/upload/v1716349240/Default_gaming_technology_1_zrlzc1.jpg",
//             skill: "Generative AI",
//             description: "Description for Generative AI",
//         },
//     ];

//     const settings = {
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 3,
//     };

//     return (
//         <div className="bg-red-300">
//             <Slider {...settings}>
//                 {trendingSkills.map((skill, index) => (
//                     <div
//                         key={index}
//                         className="mb-2 max-w-sm shadow-lg p-3 rounded-lg"
//                     >
//                         <div className="">
//                             <Link to="/courses" className="flex-shrink-0">
//                                 <img
//                                     src={skill.image}
//                                     alt={skill.skill}
//                                     className="rounded-xl w-full object-cover h-45"
//                                 />
//                             </Link>
//                         </div>
//                         <div className="text-center p-3">
//                             <h2 className="font-semibold">{skill.skill}</h2>
//                         </div>
//                     </div>
//                 ))}
//             </Slider>
//         </div>
//     );

// const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3.7,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//     className: "services-section-home",
// };

// if (window.innerWidth <= 768) {
//     settings.slidesToShow = 1.3;
// }

// function NextArrow(props) {
//     const { className, onClick } = props;
//     return (
//         <div className={className} onClick={onClick}>
//             <FontAwesomeIcon icon={faChevronRight} />
//         </div>
//     );
// }

// function PrevArrow(props) {
//     const { className, onClick } = props;
//     return (
//         <div className={className} onClick={onClick}>
//             <FontAwesomeIcon icon={faChevronLeft} />
//         </div>
//     );
// }

// return (
//     <Slider {...settings} className="services-slider">
//         {trendingSkills.map((skill, index) => (
//             <div
//                 key={index}
//                 className="service-info bg-white shadow-lg p-4 rounded-lg flex flex-row items-center space-x-4"
//             >
//                 <div>
//                     <Link to="/courses" className="flex-shrink-0">
//                         <img
//                             src={skill.image}
//                             alt={skill.skill}
//                             className="service-image rounded-lg w-32 h-32 object-cover"
//                         />
//                     </Link>
//                 </div>
//                 <div className="flex flex-col justify-center">
//                     <h2 className="service-details-title-home text-lg font-semibold">
//                         {skill.skill}
//                     </h2>
//                 </div>
//             </div>
//         ))}
//     </Slider>
// );
// };

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div className="bg-red-500">
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
                <div>
                    <h3>7</h3>
                </div>
                <div>
                    <h3>8</h3>
                </div>
                <div>
                    <h3>9</h3>
                </div>
            </Slider>
        </div>
    );
};

export default Carousel;
