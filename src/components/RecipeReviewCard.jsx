import bigDataImg from "../assets/big-data.png";
import blockchainImg from "../assets/blockchain-and-fintech.png";
import { motion } from "framer-motion";

export default function RecipeReviewCard() {
    const data = [
        {
            name: "Big Data",
            description:
                "Get the best Insigths in the New Emerging technology in the World of Data Science",
            img: bigDataImg,
            url: "https://meet.zoho.in/MGLuu5aKiO",
        },
        // {
        //     id: 2,
        //     name: "Introduction to Blockchain and Cryptocurrency",
        //     description: "Dive into the latest trend in the web3 ",
        //     img: p2,
        //     url: "https://meet.zoho.in/2CC995Cfj9",
        // },
        {
            name: "Fundamentals of Fintech and Blockchain",
            description: "Know the insights of Fintech and Blockchain",
            img: blockchainImg,
            url: "https://meet.zoho.in/6vwA26klUZ",
        },
    ];

    const handleClick = (url) => {
        window.location.href = url; // Google Form URL
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
                upcoming webinars
            </motion.h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8 justify-items-center p-5 md:p-4 overflow-hidden">
                {data.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 25 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="rounded-xl shadow-md overflow-hidden w-full max-w-sm bg-white"
                    >
                        <img
                            className="w-full object-cover"
                            src={item.img}
                            alt={item.name}
                        />

                        <div className="p-6 h-56 flex flex-col justify-between">
                            <div>
                                <h2 className="text-xl font-bold text-black">
                                    {item.name}
                                </h2>
                                <p className="text-gray-400 mt-3">
                                    {item.description}
                                </p>
                            </div>

                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 w-full rounded focus:outline-none"
                                onClick={() => handleClick(item.url)}
                            >
                                Register NOW!!
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
