import React from 'react';
import { FaInstagram, FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";
import avatar from "../assets/simonm.png";
import resumepdf from "../assets/Resume2024.pdf";

const Hero = () => {

    const SOCIAL = [
        {
            id: 1,
            link: "https://www.instagram.com/simon.marcotte/",
            icon: <FaInstagram />,
            style: "hover:text-pink-500"
        },
        {
            id: 2,
            link: "https://github.com/simonMarcotte",
            icon: <FaGithub />,
            style: "hover:text-gray-700"
        },
        {
            id: 3,
            link: "https://www.linkedin.com/in/simon-marcotte-914795251/",
            icon: <FaLinkedin />,
            style: "hover:text-blue-500"
        }
    ];

    window.addEventListener("scroll", function () {
        const downArrow = document.querySelector(".down-arrow");

        if (this.scrollY >= 170) downArrow.classList.add("hide-down-arrow");
        else downArrow.classList.remove("hide-down-arrow");
    });

    return (
        <section className="min-h-screen flex flex-col justify-start items-center p-5 text-center">
            <h2 className="text-5xl dark:text-white text-zinc-900 uppercase font-bold duration-500">Simon Marcotte</h2>
            <h3 className="py-3 text-2xl">{"<"}BSc Computer Engineering Co-op{"/>"} </h3>
            <p className="max-w-xl font-light text-gray-400"> "I am a dedicated 4th year Computer Engineering student at the University of Alberta with a passion for technology and problem-solving. I excel in software engineering, firmware development, project management, and in collaborative environments. I am eager to continuously learn and contribute my skills to help improve our society."</p>

            {/* SOCIAL ICONS */}
            <div className="flex justify-evenly py-8 lg:py-10np text-3xl w-full md:w-1/3 z-20">
                {SOCIAL.map(({ id, link, icon, style }) => (
                    <a
                        href={link}
                        key={id}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`cursor-pointer hover:duration-300 hover:scale-110 ${style}`}
                    >
                        {icon}
                    </a>
                ))}
            </div>

            {/* AVATAR AND RESUME */}
            <div className="relative">
                <img src={avatar} alt="avatar" className="md:w-auto md:h-80 object-top rounded-xl"></img>
                <a href={resumepdf}
                    target='_blank'
                    rel="noopener noreferrer"
                    className="cursor-pointer flex z-50 items-center justify-center mt-10 bg-gray-200 dark:bg-zinc-900 text-zinc-900 dark:text-white outline py-2 rounded-lg font-bold hover:bg-zinc-400 dark:hover:bg-zinc-700 duration-500 relative"
                    style={{ zIndex: 50 }}
                > Resume
                </a>
            </div>

            {/* ARROW DOWN */}
            <div className="mt-10 down-arrow">
                <FaArrowDown className="text-gray-400 text-2xl animate-bounce" />
            </div>
        </section>
    );
}

export default Hero;
