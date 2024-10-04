import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import desktopImg from "../../assets/desktop-landing-image.jpg";
import serviceImg1 from "../../assets/service-img-1.avif";
import serviceImg2 from "../../assets/service-img-2.avif";
import serviceImg3 from "../../assets/service-img-3.avif";
import wcu1 from "../../assets/wcu-1.avif";
import wcu2 from "../../assets/wcu-2.avif";
import Carousel from "../Carousel";
import { useNavigate } from "react-router-dom";
import { useInView } from "framer-motion";
import StaticNumber from "../StaticNumber";
import RecipeReviewCard from "../RecipeReviewCard";
// import LoginPopup from '../LoginPopup';
// import ContactUs from '../Contactus';

const Hero = ({ toggleLoginPopup }) => {
    const [typedText, setTypedText] = useState("");
    const [startTyping, setStartTyping] = useState(false);

    const navigate = useNavigate();

    const blognavigate = (event) => {
        const btnid = event.target.id;
        if (btnid === "button1") {
            navigate("/blog1");
        } else if (btnid === "button2") {
            navigate("/blog2");
        }
    };

    // Start typing effect when component mounts
    useEffect(() => {
        setStartTyping(true);
    }, []);

    // Typing effect logic
    useEffect(() => {
        const texts = ["Nanoquest", "skill learning platform"];
        let currentTextIndex = 0;
        let index = 0;
        let typingIntervalId;
        let clearTextTimeoutId;

        const typeText = () => {
            typingIntervalId = setInterval(() => {
                if (index <= texts[currentTextIndex].length) {
                    setTypedText(texts[currentTextIndex].slice(0, index));
                    index++;
                } else {
                    clearInterval(typingIntervalId);
                    clearTextTimeoutId = setTimeout(() => {
                        index = 0;
                        setTypedText("");
                        currentTextIndex =
                            (currentTextIndex + 1) % texts.length;
                        typeText(); // Start typing the next text
                    }, 1000);
                }
            }, 300);
        };

        if (startTyping) {
            typeText();
        }

        return () => {
            clearInterval(typingIntervalId);
            clearTimeout(clearTextTimeoutId);
        };
    }, [startTyping]);

    function checkLocalStorage() {
        const emailExists = localStorage.getItem("email");
        if (emailExists) {
            navigate("/Courses");
        } else {
            toggleLoginPopup(true);
        }
    }

    return (
        <div className="px-4 md:px-8 lg:px-16 overflow-hidden">
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
                        Welcome To {typedText}
                        <span className="typing-cursor"></span>
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

            <RecipeReviewCard />

            <div className="mt-20">
                <h2 className="text-center text-gray-500 text-2xl md:text-3xl lg:text-4xl">
                    Trending Skills
                </h2>
                <Carousel />
            </div>

            <div className="services-container">
                <div className="service-cards-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="service-card  p-6 rounded-lg ">
                        <div className="service-card-content mb-4">
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
                                className="text-xl font-semibold"
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
                        <div className="service-card-image">
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
                                className="service-img w-full h-auto rounded-lg"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    <div className="service-card  p-6 rounded-lg ">
                        <div className="service-card-content mb-4">
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
                                className="text-xl font-semibold"
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
                        <div className="service-card-image">
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
                                className="service-img w-full h-auto rounded-lg"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    <div className="service-card  p-6 rounded-lg ">
                        <div className="service-card-image mb-4">
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
                                className="service-img w-full h-auto rounded-lg"
                            />
                        </div>
                        <div className="service-card-content">
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
                                className="text-xl font-semibold"
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

                    <div className="service-card  p-6 rounded-lg ">
                        <div className="service-card-image mb-4">
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
                                className="service-img w-full h-auto rounded-lg"
                                loading="lazy"
                            />
                        </div>
                        <div className="service-card-content">
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
                                className="text-xl font-semibold"
                            >
                                Personalised and invent new learning expierence
                            </motion.h4>
                            <motion.p
                                initial={{ x: -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{
                                    delay: 0.3,
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

            <div className="testimonials-container">
                <motion.h4
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                        delay: 0.5,
                        duration: 0.5,
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                    }}
                    className="testimonials-heading text-2xl md:text-3xl lg:text-4xl font-bold text-center"
                >
                    Testimonials
                </motion.h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                    <motion.figure
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{
                            delay: 0.6,
                            duration: 0.5,
                            type: "spring",
                            stiffness: 100,
                            damping: 10,
                        }}
                        className="snip1533 bg-white p-6 rounded-lg shadow-md"
                    >
                        <figcaption>
                            <blockquote>
                                <p className="text-black">
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
                            delay: 0.8,
                            duration: 0.5,
                            type: "spring",
                            stiffness: 100,
                            damping: 10,
                        }}
                        className="snip1533 bg-white p-6 rounded-lg shadow-md"
                    >
                        <figcaption>
                            <blockquote>
                                <p className="text-black">
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
                        className="snip1533 bg-white p-6 rounded-lg shadow-md"
                    >
                        <figcaption>
                            <blockquote>
                                <p className="text-black">
                                    The only skills I have the patience to learn
                                    are those that have no real application in
                                    life.{" "}
                                </p>
                            </blockquote>
                        </figcaption>
                    </motion.figure>
                </div>
            </div>

            {/* card section */}
            <div className="flex flex-col md:flex-row justify-between p-6 bg-background">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: false }}
                    className="bg-card rounded-lg  p-4 mb-6 md:mb-0 md:w-1/2 md:mr-4"
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
                        <button id="button1" onClick={blognavigate}>
                            {" "}
                            Read More
                        </button>
                    </span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: false }}
                    className="bg-card rounded-lg  p-4 md:w-1/2 md:ml-4"
                >
                    <img
                        alt="Revolutionizing elearning"
                        src={wcu2}
                        className="rounded-lg mb-4"
                    />
                    <h2 className="text-xl font-bold text-foreground">
                        How NanoQuest Revolutionizes elearning
                    </h2>
                    <p className="text-black mb-2">
                        Experience a new era of elearning with NanoQuest. Our
                        skillbased interactive platform offers a unique and
                        effective way to learn. Discover the features that make
                        NanoQuest the leading choice for online education.
                    </p>
                    <span className="text-muted-foreground">
                        <button id="button2" onClick={blognavigate}>
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
