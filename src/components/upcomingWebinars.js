import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { webinarDetails } from "../constants";
import Carousel from "./carousel";
import { format, isAfter } from "date-fns";
import Loader from "./loader";

const UpcomingWebinar = () => {
    const [upcomingWebinars, setUpcomingWebinars] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchUpcomingWebinars = () => {
        setLoading(true);
        const currentDate = new Date();
        const filteredWebinars = webinarDetails.filter((webinar) => {
            const webinarDateTime = new Date(
                `${webinar.date}T${webinar.startTime}`
            );
            return isAfter(webinarDateTime, currentDate);
        });
        setUpcomingWebinars(filteredWebinars);
        setLoading(false);
    };

    useEffect(() => {
        fetchUpcomingWebinars();
    }, []);

    const handleClick = (url) => {
        window.location.href = url;
    };

    const renderCustomCarouselWebinarCard = (item, index) => {
        const webinarStartTime = new Date(`${item.date}T${item.startTime}`);
        const webinarEndTime = new Date(`${item.date}T${item.endTime}`);
        const formattedDate = format(webinarStartTime, "EEEE, MMMM do, yyyy");
        const formattedStartTime = format(webinarStartTime, "h:mm a");
        const formattedEndTime = format(webinarEndTime, "h:mm a");

        return (
            <div
                key={index}
                className="rounded-xl shadow-md overflow-hidden w-full bg-white max-w-sm"
            >
                <img
                    className="w-full object-cover"
                    src={item.img}
                    alt={item.title}
                />

                <div className="p-6 min-h-56 flex flex-col justify-between">
                    <div>
                        <h2 className="text-xl font-bold text-black capitalize">
                            {item.title}
                        </h2>
                        <p className="text-gray-400 mt-3 capitalize">
                            {item.description}
                        </p>
                        <p className="text-gray-500 mt-1">
                            Date: {formattedDate}
                        </p>
                        <p className="text-gray-500">
                            Time: {formattedStartTime} - {formattedEndTime}
                        </p>
                    </div>

                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 w-full rounded focus:outline-none"
                        onClick={() => handleClick(item.registerUrl)}
                    >
                        Register NOW!!
                    </button>
                </div>
            </div>
        );
    };

    const renderUpcomingWebinars = () => {
        if (loading) {
            return <Loader />;
        }
        return (
            <>
                {upcomingWebinars.length > 0 ? (
                    <Carousel
                        data={upcomingWebinars}
                        renderCard={renderCustomCarouselWebinarCard}
                    />
                ) : (
                    <p className="text-center text-gray-500">
                        No upcoming webinars available
                    </p>
                )}
            </>
        );
    };
    console.log("upcomingWebinars", upcomingWebinars);
    return (
        <div className="mt-20">
            <motion.h1
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                    delay: 0.5,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                }}
                className="text-center text-3xl font-semibold capitalize text-gray-500"
            >
                Upcoming Webinars
            </motion.h1>
            {renderUpcomingWebinars()}
        </div>
    );
};

export default UpcomingWebinar;
