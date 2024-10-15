import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import desktopImg from "../../assets/desktop-landing-image.jpg";
import serviceImg1 from "../../assets/service-img-1.avif";
import serviceImg2 from "../../assets/service-img-2.avif";
import serviceImg3 from "../../assets/service-img-3.avif";
import wcu1 from "../../assets/wcu-1.avif";
import wcu2 from "../../assets/wcu-2.avif";
import Carousel from "../carousel";
import { useNavigate } from "react-router-dom";
import { useInView } from "framer-motion";
import StaticNumber from "../StaticNumber";
import UpcomingWebinar from "../upcomingWebinars";
// import LoginPopup from '../LoginPopup';
// import ContactUs from '../Contactus';

const trendingSkills = [
    {
        image: "https://res.cloudinary.com/dyjkp0r0x/image/upload/v1716349097/Default_artificial_inteliigence_1_eui3pb.jpg",
        title: "Artificial Intelligence",
        description: "Description for Artificial Intelligence",
    },
    {
        image: "https://res.cloudinary.com/dyjkp0r0x/image/upload/v1716349179/Default_internetof_things_1_x8jdr0.jpg",
        title: "Full Stack Development",
        description: "Description for Full Stack Development",
    },
    {
        image: "https://res.cloudinary.com/dyjkp0r0x/image/upload/v1716349750/Default_fintech_0_lpvjrj.jpg",
        title: "Fintech",
        description: "Description for Fintech",
    },
    {
        image: "https://res.cloudinary.com/dyjkp0r0x/image/upload/v1716347189/Default_virtual_reaity_1_v4tgtp.jpg",
        title: "Game Tech",
        description: "Description for Game Tech",
    },
    {
        image: "https://res.cloudinary.com/dyjkp0r0x/image/upload/v1716349240/Default_gaming_technology_1_zrlzc1.jpg",
        title: "Generative AI",
        description: "Description for Generative AI",
    },
];

const Hero = ({ toggleLoginPopup }) => {
    const navigate = useNavigate();

    const blognavigate = (event) => {
        const btnid = event.target.id;
        if (btnid === "button1") {
            navigate("/blog1");
        } else if (btnid === "button2") {
            navigate("/blog2");
        }
    };

    function checkLocalStorage() {
        const emailExists = localStorage.getItem("email");
        if (emailExists) {
            navigate("/Courses");
        } else {
            toggleLoginPopup(true);
        }
    }

    const renderCustomCarouselTrendingSkillsCard = (item) => (
        <div className="flex flex-col h-full rounded-xl shadow-md overflow-hidden p-2 gap-2">
            <img
                src={item.image}
                alt={item.title}
                className="rounded-xl w-full object-cover"
            />
            <h2 className="mt-2 text-lg sm:text-xl text-nowrap truncate text-center">
                {item.title}
            </h2>
        </div>
    );

    const typeWriter = () => {
        const text = ["NanoQuest", "skill learning platform"];
        return (
            <Typewriter
                words={text}
                loop={true}
                cursor
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1000}
            />
        );
    };

    return (
        <div className="relative px-4 md:px-8 lg:px-16 overflow-hidden">
            <div className="my-14 flex flex-col sm:flex-row sm:mt-28 sm:items-center sm:justify-around">
                <div className="self-center sm:order-1">
                    <motion.img
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            delay: 0.2,
                            x: { type: "string", stiffness: 60 },
                            opacity: { duration: 1 },
                            ease: "easeIn",
                            duration: 1,
                        }}
                        src={desktopImg}
                        alt="dresses to be noticed"
                        className="w-full max-w-lg"
                        loading="lazy"
                    />
                </div>

                <div className="mt-3 sm:mt-0 sm:w-2/3 sm:max-w-screen-md">
                    <motion.h1
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            delay: 0.2,
                            x: { type: "string", stiffness: 60 },
                            opacity: { duration: 1 },
                            ease: "easeIn",
                            duration: 1,
                        }}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 capitalize"
                    >
                        Welcome To{" "}
                        <span className="capitalize">{typeWriter()}</span>
                    </motion.h1>

                    <motion.p
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            delay: 0.3,
                            x: { type: "string", stiffness: 60 },
                            opacity: { duration: 1 },
                            ease: "easeIn",
                            duration: 1,
                        }}
                        className="text-lg md:text-xl mt-4 text-black"
                    >
                        Explore our wide range of skill courses to enhance your
                        knowledge and expertise. Learn at your own pace with our
                        E-learning platform.
                    </motion.p>
                    <motion.button
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            delay: 0.4,
                            x: { type: "string", stiffness: 60 },
                            opacity: { duration: 0.6 },
                            ease: "easeIn",
                            duration: 1,
                        }}
                        className="glow-on-hover mt-4 px-6 py-2 bg-blue-900 text-white rounded-lg text-sm"
                        type="button"
                        onClick={checkLocalStorage}
                    >
                        Upgrade Your Skills
                    </motion.button>
                </div>
            </div>
            <StaticNumber />
            <UpcomingWebinar />

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
                    Trending Skills
                </motion.h1>

                <Carousel
                    data={trendingSkills}
                    renderCard={renderCustomCarouselTrendingSkillsCard}
                />
            </div>

            <div className="mt-20 bg-blue-950 p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="rounded-lg flex flex-col gap-3 sm:flex-row sm:items-center">
                        <div className="sm:order-1">
                            <motion.img
                                initial={{ scale: 0.5, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{
                                    delay: 0.4,
                                    scale: {
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20,
                                    },
                                    opacity: { duration: 1 },
                                    ease: "easeInOut",
                                    duration: 1,
                                }}
                                src={serviceImg1}
                                alt="service-img"
                                className="w-full h-auto rounded-lg"
                                loading="lazy"
                            />
                        </div>

                        <div className="">
                            <motion.h4
                                initial={{ x: -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{
                                    delay: 0.2,
                                    x: { type: "string", stiffness: 60 },
                                    opacity: { duration: 1 },
                                    ease: "easeIn",
                                    duration: 1,
                                }}
                                className="text-xl font-semibold text-white"
                            >
                                Skill Courses
                            </motion.h4>

                            <motion.p
                                initial={{ x: -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{
                                    delay: 0.4,
                                    x: { type: "string", stiffness: 60 },
                                    opacity: { duration: 1 },
                                    ease: "easeIn",
                                    duration: 1,
                                }}
                                className="text-base"
                            >
                                Choose from a wide range of skill courses
                                designed to help you develop and master new
                                skills.
                            </motion.p>
                        </div>
                    </div>

                    <div className="rounded-lg flex flex-col gap-3 sm:flex-row sm:items-center">
                        <div className="">
                            <motion.img
                                initial={{ scale: 0.5, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{
                                    delay: 0.4,
                                    scale: {
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20,
                                    },
                                    opacity: { duration: 1 },
                                    ease: "easeInOut",
                                    duration: 1,
                                }}
                                src={serviceImg2}
                                alt="service-img"
                                className="w-full h-auto rounded-lg"
                                loading="lazy"
                            />
                        </div>

                        <div className="">
                            <motion.h4
                                initial={{ x: -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{
                                    delay: 0.2,
                                    x: { type: "string", stiffness: 60 },
                                    opacity: { duration: 1 },
                                    ease: "easeIn",
                                    duration: 1,
                                }}
                                className="text-xl font-semibold text-white"
                            >
                                Real-time Feedback
                            </motion.h4>

                            <motion.p
                                initial={{ x: -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{
                                    delay: 0.4,
                                    x: { type: "string", stiffness: 60 },
                                    opacity: { duration: 1 },
                                    ease: "easeIn",
                                    duration: 1,
                                }}
                                className="text-base"
                            >
                                Get instant feedback and personalized
                                recommendations to improve your learning.
                            </motion.p>
                        </div>
                    </div>

                    <div className="rounded-lg flex flex-col gap-3 sm:flex-row sm:items-center">
                        <div className="sm:order-1">
                            <motion.img
                                initial={{ scale: 0.5, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{
                                    delay: 0.4,
                                    scale: {
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20,
                                    },
                                    opacity: { duration: 1 },
                                    ease: "easeInOut",
                                    duration: 1,
                                }}
                                src={serviceImg3}
                                alt="service-img"
                                className="w-full h-auto rounded-lg"
                                loading="lazy"
                            />
                        </div>

                        <div className="">
                            <motion.h4
                                initial={{ x: -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{
                                    delay: 0.2,
                                    x: { type: "string", stiffness: 60 },
                                    opacity: { duration: 1 },
                                    ease: "easeIn",
                                    duration: 1,
                                }}
                                className="text-xl font-semibold text-white"
                            >
                                Interactive Quizzes
                            </motion.h4>

                            <motion.p
                                initial={{ x: -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{
                                    delay: 0.4,
                                    x: { type: "string", stiffness: 60 },
                                    opacity: { duration: 1 },
                                    ease: "easeIn",
                                    duration: 1,
                                }}
                                className="text-base"
                            >
                                Test your knowledge and track your progress with
                                our interactive quizzes.
                            </motion.p>
                        </div>
                    </div>

                    <div className="rounded-lg flex flex-col gap-3 sm:flex-row sm:items-center">
                        <div className="">
                            <motion.img
                                initial={{ scale: 0.5, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{
                                    delay: 0.4,
                                    scale: {
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20,
                                    },
                                    opacity: { duration: 1 },
                                    ease: "easeInOut",
                                    duration: 1,
                                }}
                                src={serviceImg1}
                                alt="service-img"
                                className="w-full h-auto rounded-lg"
                                loading="lazy"
                            />
                        </div>

                        <div className="">
                            <motion.h4
                                initial={{ x: -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{
                                    delay: 0.2,
                                    x: { type: "string", stiffness: 60 },
                                    opacity: { duration: 1 },
                                    ease: "easeIn",
                                    duration: 1,
                                }}
                                className="text-xl font-semibold text-white"
                            >
                                Personalized and invent new learning experience
                            </motion.h4>

                            <motion.p
                                initial={{ x: -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{
                                    delay: 0.4,
                                    x: { type: "string", stiffness: 60 },
                                    opacity: { duration: 1 },
                                    ease: "easeIn",
                                    duration: 1,
                                }}
                                className="text-base"
                            >
                                Personalized skill learner expirence with high
                                relevant content and products
                            </motion.p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Testimonials */}
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
                    className="text-center text-3xl font-semibold capitalize text-gray-500 mb-4"
                >
                    Testimonials
                </motion.h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
                    <motion.figure
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{
                            delay: 0.9,
                            duration: 0.5,
                            type: "spring",
                            stiffness: 100,
                            damping: 10,
                        }}
                        className="relative w-full bg-white rounded-lg shadow-lg border-t-4 border-[#253e86] text-center md:max-w-sm"
                    >
                        <figcaption className="relative pt-[13%] pb-[12%] px-[10%]">
                            <div className="absolute top-[-36px] left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center text-[#081F62] text-2xl">
                                <i className="fa fa-quote-right"></i>
                            </div>

                            <blockquote className="italic text-gray-600 text-base">
                                <p className="text-black capitalize">
                                    If you do the job badly enough, sometimes
                                    you don't get asked to do it again.
                                </p>
                            </blockquote>
                        </figcaption>
                    </motion.figure>

                    <motion.figure
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{
                            delay: 0.9,
                            duration: 0.5,
                            type: "spring",
                            stiffness: 100,
                            damping: 10,
                        }}
                        className="relative w-full bg-white rounded-lg shadow-lg border-t-4 border-[#253e86] text-center md:max-w-sm"
                    >
                        <figcaption className="relative pt-[13%] pb-[12%] px-[10%]">
                            <div className="absolute top-[-36px] left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center text-[#081F62] text-2xl">
                                <i className="fa fa-quote-right"></i>
                            </div>

                            <blockquote className="italic text-gray-600 text-base">
                                <p className="text-black capitalize">
                                    I'm killing time while I wait for life to
                                    shower me with meaning and happiness.
                                </p>
                            </blockquote>
                        </figcaption>
                    </motion.figure>

                    <motion.figure
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{
                            delay: 0.9,
                            duration: 0.5,
                            type: "spring",
                            stiffness: 100,
                            damping: 10,
                        }}
                        className="relative w-full bg-white rounded-lg shadow-lg border-t-4 border-[#253e86] text-center md:max-w-sm"
                    >
                        <figcaption className="relative pt-[13%] pb-[12%] px-[10%]">
                            <div className="absolute top-[-36px] left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center text-[#081F62] text-2xl">
                                <i className="fa fa-quote-right"></i>
                            </div>

                            <blockquote className="italic text-gray-600 text-base">
                                <p className="text-black capitalize">
                                    The only skills I have the patience to learn
                                    are those that have no real application in
                                    life.
                                </p>
                            </blockquote>
                        </figcaption>
                    </motion.figure>
                </div>
            </div>

            {/* card section */}
            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 p-6 gap-4 justify-items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className="rounded-lg p-4 shadow-md max-w-lg bg-white"
                >
                    <img
                        alt="Skillbased elearning"
                        src={wcu1}
                        className="rounded-lg mb-4"
                    />
                    <h2 className="text-xl font-bold text-foreground">
                        Why Choose NanoQuest for Skillbased elearning
                    </h2>
                    <p className="text-black mb-2">
                        Discover the power of skillbased interactive elearning
                        with NanoQuest. Enhance your knowledge and expertise in
                        a fun and engaging way. Join our platform today!
                    </p>
                    <span className="text-muted-foreground">
                        <button
                            id="button1"
                            onClick={blognavigate}
                            className="bg-blue-500 text-white p-2 rounded-xl 
                            hover:bg-blue-700
                            "
                        >
                            Read More
                        </button>
                    </span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className="rounded-lg p-4 shadow-md max-w-lg bg-white"
                >
                    <img
                        alt="Revolutionizing e-learning"
                        src={wcu2}
                        className="rounded-lg mb-4"
                    />
                    <h2 className="text-xl font-bold text-foreground">
                        How NanoQuest Revolutionizes learning
                    </h2>
                    <p className="text-black mb-2">
                        Experience a new era of e-learning with NanoQuest. Our
                        skillbased interactive platform offers a unique and
                        effective way to learn. Discover the features that make
                        NanoQuest the leading choice for online education.
                    </p>
                    <span className="text-muted-foreground">
                        <button
                            id="button2"
                            onClick={blognavigate}
                            className="bg-blue-500 text-white p-2 rounded-xl 
                            hover:bg-blue-700
                            "
                        >
                            Read More
                        </button>
                    </span>
                </motion.div>
            </div>
            {/* <ContactUs></ContactUs> */}
        </div>
    );
};

export default Hero;
