// // import bigDataImg from "../assets/big-data.png";
// // import blockchainImg from "../assets/blockchain-and-fintech.png";
// // import { motion } from "framer-motion";
// // import Carousel from "./carousel";

// // const UpcomingWebinar = () => {
// //     const upcomingWebinarData = [
// //         {
// //             name: "Big Data",
// //             description:
// //                 "Get the best Insigths in the New Emerging technology in the World of Data Science",
// //             img: bigDataImg,
// //             url: "https://meet.zoho.in/MGLuu5aKiO",
// //         },
// //         {
// //             name: "Fundamentals of Fintech and Blockchain",
// //             description: "Know the insights of Fintech and Blockchain",
// //             img: blockchainImg,
// //             url: "https://meet.zoho.in/6vwA26klUZ",
// //         },
// //     ];

// //     const handleClick = (url) => {
// //         window.location.href = url;
// //     };

// //     const renderCustomCarouselTrendingSkillsCard = (item, index) => (
// //         <div
// //             key={index}
// //             className="rounded-xl shadow-md overflow-hidden w-full bg-white max-w-sm"
// //         >
// //             <img
// //                 className="w-full object-cover"
// //                 src={item.img}
// //                 alt={item.name}
// //             />

// //             <div className="p-6 h-56 flex flex-col justify-between">
// //                 <div>
// //                     <h2 className="text-xl font-bold text-black">
// //                         {item.name}
// //                     </h2>
// //                     <p className="text-gray-400 mt-3">{item.description}</p>
// //                 </div>

// //                 <button
// //                     className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 w-full rounded focus:outline-none"
// //                     onClick={() => handleClick(item.url)}
// //                 >
// //                     Register NOW!!
// //                 </button>
// //             </div>
// //         </div>
// //     );

// //     return (
// //         <div className="mt-20">
// //             <motion.h1
// //                 initial={{ x: -50, opacity: 0 }}
// //                 whileInView={{ x: 0, opacity: 1 }}
// //                 transition={{
// //                     delay: 0.5,
// //                     duration: 0.5,
// //                     type: "spring",
// //                     stiffness: 100,
// //                     damping: 10,
// //                 }}
// //                 className="text-center text-3xl font-semibold capitalize text-gray-500"
// //             >
// //                 upcoming webinars
// //             </motion.h1>

// //             <Carousel
// //                 data={upcomingWebinarData}
// //                 renderCard={renderCustomCarouselTrendingSkillsCard}
// //             />

// //             {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8 justify-items-center p-5 md:p-4 overflow-hidden">
// //                 {data.map((item, index) => (
// //                     <motion.div
// //                         key={index}
// //                         initial={{ opacity: 0, x: 25 }}
// //                         whileInView={{ opacity: 1, x: 0 }}
// //                         transition={{ duration: 0.6 }}
// //                         className="rounded-xl shadow-md overflow-hidden w-full max-w-sm bg-white"
// //                     >
// //                         <img
// //                             className="w-full object-cover"
// //                             src={item.img}
// //                             alt={item.name}
// //                         />

// //                         <div className="p-6 h-56 flex flex-col justify-between">
// //                             <div>
// //                                 <h2 className="text-xl font-bold text-black">
// //                                     {item.name}
// //                                 </h2>
// //                                 <p className="text-gray-400 mt-3">
// //                                     {item.description}
// //                                 </p>
// //                             </div>

// //                             <button
// //                                 className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 w-full rounded focus:outline-none"
// //                                 onClick={() => handleClick(item.url)}
// //                             >
// //                                 Register NOW!!
// //                             </button>
// //                         </div>
// //                     </motion.div>
// //                 ))}
// //             </div> */}
// //         </div>
// //     );
// // };

// // export default UpcomingWebinar;

// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { webinarDetails } from "../constants";
// import Carousel from "./carousel";

// const UpcomingWebinar = () => {
//     const [upcomingWebinars, setUpcomingWebinars] = useState([]);

//     useEffect(() => {
//         const currentDate = new Date();
//         // Filter webinars that are in the future
//         const filteredWebinars = webinarDetails.filter((webinar) => {
//             const webinarDate = new Date(`${webinar.date}T${webinar.time}`);
//             return webinarDate >= currentDate;
//         });

//         setUpcomingWebinars(filteredWebinars);
//     }, []);

//     const handleClick = (url) => {
//         window.location.href = url;
//     };

//     const renderCustomCarouselWebinarCard = (item, index) => {
//         const webinarDate = new Date(`${item.date}T${item.time}`);
//         const formattedDate = webinarDate.toLocaleDateString(undefined, {
//             weekday: "long",
//             year: "numeric",
//             month: "long",
//             day: "numeric",
//         });

//         const formattedTime = webinarDate.toLocaleTimeString(undefined, {
//             hour: "numeric",
//             minute: "numeric",
//             hour12: true,
//         });

//         return (
//             <div
//                 key={index}
//                 className="rounded-xl shadow-md overflow-hidden w-full bg-white max-w-sm"
//             >
//                 <img
//                     className="w-full object-cover"
//                     src={item.img}
//                     alt={item.title}
//                 />

//                 <div className="p-6 min-h-56 flex flex-col justify-between">
//                     <div>
//                         <h2 className="text-xl font-bold text-black">
//                             {item.title}
//                         </h2>
//                         <p className="text-gray-400 mt-3">{item.description}</p>
//                         <p className="text-gray-500 mt-1">
//                             Date: {formattedDate}
//                         </p>
//                         <p className="text-gray-500">Time: {formattedTime}</p>
//                     </div>

//                     <button
//                         className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 w-full rounded focus:outline-none"
//                         onClick={() => handleClick(item.registerUrl)}
//                     >
//                         Register NOW!!
//                     </button>
//                 </div>
//             </div>
//         );
//     };

//     return (
//         <div className="mt-20">
//             <motion.h1
//                 initial={{ x: -50, opacity: 0 }}
//                 whileInView={{ x: 0, opacity: 1 }}
//                 transition={{
//                     delay: 0.5,
//                     duration: 0.5,
//                     type: "spring",
//                     stiffness: 100,
//                     damping: 10,
//                 }}
//                 className="text-center text-3xl font-semibold capitalize text-gray-500"
//             >
//                 Upcoming Webinars
//             </motion.h1>

//             {upcomingWebinars.length > 0 ? (
//                 <Carousel
//                     data={upcomingWebinars}
//                     renderCard={renderCustomCarouselWebinarCard}
//                 />
//             ) : (
//                 <p className="text-center text-gray-500">
//                     No upcoming webinars available
//                 </p>
//             )}
//         </div>
//     );
// };

// export default UpcomingWebinar;

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { webinarDetails } from "../constants";
import Carousel from "./carousel";
import { format, isAfter } from "date-fns";

const UpcomingWebinar = () => {
    const [upcomingWebinars, setUpcomingWebinars] = useState([]);

    useEffect(() => {
        const currentDate = new Date();
        // Filter webinars that are in the future using `date-fns`
        const filteredWebinars = webinarDetails.filter((webinar) => {
            const webinarDateTime = new Date(
                `${webinar.date}T${webinar.startTime}`
            );
            return isAfter(webinarDateTime, currentDate);
        });

        setUpcomingWebinars(filteredWebinars);
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
        </div>
    );
};

export default UpcomingWebinar;
