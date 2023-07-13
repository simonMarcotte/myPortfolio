import React from 'react'
import {FaInstagram, FaGithub, FaLinkedin, FaArrowDown} from "react-icons/fa"
import avatar from "../assets/simonpng.jpg"
import resumepdf from "../assets/Resume2024.pdf"

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
            style:"hover:text-gray-700"
        },
        {
            id: 3,
            link: "https://www.linkedin.com/in/simon-marcotte-914795251/",
            icon: <FaLinkedin />,
            style: "hover:text-blue-500"
        }   
    ]

    window.addEventListener("scroll", function () {
        const downArrow = document.querySelector(".down-arrow");

        if(this.scrollY >= 170) downArrow.classList.add("hide-down-arrow");
        else downArrow.classList.remove("hide-down-arrow");
    });

    
  return (
   
    <section className="min-h-screen flex flex-col justify-start items-center p-5 text-center">
        <h2 className="text-5xl dark:text-white text-zinc-900 uppercase font-bold duration-500">Simon Marcotte</h2>
        <h3 className="py-3 text-2xl">{"<"}BSc Computer Engineering Co-op{"/>"} </h3>
        <p className="max-w-xl font-light text-gray-400"> "Hello!, My name is Simon Marcotte and I am a computer engineering co-op student at the University of Alberta. I am super interested in everything to do with computers and programming and I am always looking for new things to learn!"</p>
    
        {/*SOCIAL ICONS*/}
        <div className="flex justify-evenly py-8 lg:py-10np text-3xl w-full md:w-1/3 z-20">
            {SOCIAL.map(({id, link, icon, style}) => (
                <a 
                    href={link} 
                    key={id}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`cursor-pointer duration-300 hover:scale-110 ${style}`}
                >
                    {icon}
                </a>
                
            ))}
        </div>

        {/*AVATAR AND RESUME*/}
        <div>

            <img src={avatar} alt="avatar" className="w-60 h-60 md:w-72 md:h-72 object-cover object-top rounded-xl"></img>
            <a href={resumepdf} 
                target='_blank' 
                rel="noopener noreferrer"
                className="flex items-center justify-center mt-10 dark:bg-zinc-900 bg-white text-zinc-900 dark:text-white outline py-2 rounded-lg font-bold hover:bg-zinc-300 dark:hover:bg-zinc-600 duration-500"
            >Resume
            </a>

        </div>

        {/*ARROW DOWN*/}
        <div className="mt-10 down-arrow">
            <FaArrowDown className="text-gray-400 text-2xl animate-bounce"/>
        </div>
    
    </section>
  )
}

export default Hero
