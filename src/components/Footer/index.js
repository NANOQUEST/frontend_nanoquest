import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMapMarkerAlt,
    faEnvelope,
    faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
    FaYoutube,
} from "react-icons/fa";

const sections = [
    {
        title: "Quick Links",
        items: ["Courses", "Blog", "AboutUs", "Teams", "Careers"],
    },
    {
        title: "Company",
        items: [
            "ContactUs",
            "Privacy-Policy",
            "Terms-and-Conditions",
            "Refund-and-Cancellation",
        ],
    },
];

const socialIcons = [
    { icon: FaFacebook, link: "https://www.facebook.com/nanoquestet" },
    {
        icon: FaInstagram,
        link: "https://www.instagram.com/nanoquesttech/?locale=us&hl=am-et",
    },
    { icon: FaYoutube, link: "https://youtube.com/shorts/2zRkc4utsLM" },
    { icon: FaTwitter, link: "https://www.twitter.com/nanoquestedtech" },
    {
        icon: FaLinkedin,
        link: "https://www.linkedin.com/company/nanoquesttech",
    },
];

const Footer = () => {
    return (
        <footer className="w-full bg-slate-900 text-gray-300 p-4 mt-20">
            <div className="flex flex-wrap md:justify-around">
                {sections.map(({ title, items }, index) => (
                    <div key={index} className="w-1/2 md:w-1/3 md:max-w-sm ">
                        <h6 className="font-bold capitalize mb-3 text-gray-400">
                            {title}
                        </h6>
                        <ul className="flex flex-col gap-1.5 p-0">
                            {items.map((item, i) => (
                                <li
                                    key={i}
                                    className="text-gray-500 hover:text-white"
                                >
                                    <Link
                                        to={`/${item.toLowerCase()}`}
                                        className="no-underline text-gray-500 hover:text-white"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

                <div className="md:w-1/3 md:max-w-sm">
                    <h6 className="font-bold capitalize mb-2 text-gray-400">
                        Contact Us
                    </h6>
                    <ul className="flex flex-col gap-1.5 p-0">
                        <li className="text-gray-500 hover:text-white">
                            <Link className="no-underline text-gray-500 hover:text-white flex items-start gap-0.5">
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                                &nbsp;Wework, Roshini Tech Hub, Bengaluru,
                                Karnataka 560037, India.
                            </Link>
                        </li>

                        <li className="text-gray-500 hover:text-white">
                            <Link className="no-underline text-gray-500 hover:text-white flex items-center gap-0.5">
                                <FontAwesomeIcon icon={faPhone} />
                                &nbsp; 080-8062181169
                            </Link>
                        </li>

                        <li className="text-gray-500 hover:text-white">
                            <Link className="no-underline text-gray-500 hover:text-white flex items-center gap-0.5">
                                <FontAwesomeIcon icon={faEnvelope} />
                                &nbsp; support@nanoquesttech.in
                            </Link>
                        </li>
                        <li>
                            <ul className="mt-2 text-2xl flex items-center ~gap-3/6 p-0">
                                {socialIcons.map(
                                    ({ icon: Icon, link }, index) => (
                                        <li
                                            key={index}
                                            className="text-white bg-slate-900 hover:text-gray-400 cursor-pointer"
                                        >
                                            <a
                                                href={link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-white"
                                            >
                                                <Icon />
                                            </a>
                                        </li>
                                    )
                                )}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="mt-4">
                <p className="capitalize text-gray-400">
                    © {new Date().getFullYear()} Nanoquest All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
