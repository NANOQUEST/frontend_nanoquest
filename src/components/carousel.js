import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Static Next Arrow
const CustomNextArrow = (props) => {
    const { className, onClick } = props;
    return (
        <div
            className={`${className} custom-arrow slick-next mr-3`}
            onClick={onClick}
            style={{
                background: "rgba(0, 0, 0, 0.2)",
                color: "white",
                borderRadius: "50%",
                zIndex: 1,
            }}
        ></div>
    );
};

// Static Previous Arrow
const CustomPrevArrow = (props) => {
    const { className, onClick } = props;
    return (
        <div
            className={`${className} custom-arrow slick-prev ml-3`}
            onClick={onClick}
            style={{
                background: "rgba(0, 0, 0, 0.2)",
                color: "white",
                borderRadius: "50%",
                zIndex: 1,
            }}
        ></div>
    );
};

// Reusable Carousel Component
const Carousel = ({
    data = [], // Array of data for the carousel items
    renderCard, // Custom layout function for each carousel item
    settings = {}, // Optional custom slider settings
}) => {
    // Determine the maximum slides to show based on the data length
    const maxSlidesToShow = Math.min(4, data.length); // Default 4 slides, but only show as many as data items

    // Default slider settings
    const defaultSettings = {
        dots: false,
        infinite: data.length > maxSlidesToShow, // Enable infinite scroll only if more items than slides
        speed: 500,
        slidesToShow: maxSlidesToShow,
        slidesToScroll: Math.min(4, data.length), // Ensure slidesToScroll doesn't exceed data length
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: data.length > maxSlidesToShow,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: Math.min(4, data.length),
                    slidesToScroll: Math.min(4, data.length),
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: Math.min(2, data.length),
                    slidesToScroll: Math.min(2, data.length),
                },
            },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: Math.min(1, data.length),
                    slidesToScroll: Math.min(1, data.length),
                },
            },
        ],
        ...settings,
    };

    return (
        <div className="slider-container">
            <Slider {...defaultSettings}>
                {data.map((item, index) => (
                    <div key={index} className="w-full p-3 bg-white">
                        {renderCard(item, index)}
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
