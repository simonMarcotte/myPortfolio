import React from 'react'
import {FaTwitter, FaGithub, FaLinkedin, FaArrowDown} from "react-icons/fa"
import avatar from "../assets/simonpng.jpg"
import resumepdf from "../assets/SimonM-ResumeB2E.pdf"

const Hero = () => {


    const SOCIAL = [
        {
            id: 1,
            link: "https://twitter.com/Krabziee",
            icon: <FaTwitter />
        },
        {
            id: 2,
            link: "https://github.com/simonMarcotte",
            icon: <FaGithub />
        },
        {
            id: 3,
            link: "https://www.linkedin.com/in/simon-marcotte-914795251/",
            icon: <FaLinkedin />
        }   
    ]

    window.addEventListener("scroll", function () {
        const downArrow = document.querySelector(".down-arrow");

        if(this.scrollY >= 90) downArrow.classList.add("hide-down-arrow");
        else downArrow.classList.remove("hide-down-arrow");
    });

  return (
    <section className="min-h-screen flex flex-col justify-start items-center p-5 text-center">
        <h2 className="text-5xl text-teal-400 uppercase font-bold">Simon Marcotte</h2>
        <h3 className="py-3 text-2xl">BSc Computer Engineering Co-op</h3>
        <p className="max-w-xl font-light text-gray-400"><span className='animate-pulse text-3xl z-0'>💻</span> Hello!, My name is Simon Marcotte and I am a student at the University of Alberta, in BSc Computer Engineering Coop!<span className='animate-pulse text-3xl z-0'>💻</span></p>
    
        {/*SOCIAL ICONS*/}
        <div className="flex justify-evenly py-8 lg:py-10np text-3xl w-full md:w-1/3">
            {SOCIAL.map(({id, link, icon}) => (
                <a 
                    href={link} 
                    key={id}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer duration-300 hover:text-blue-500"
                >
                    {icon}
                </a>
                

            ))}
        </div>

        {/*AVATAR AND RESUME*/}
        <div>

            <img src={avatar} alt="avatar" className="w-60 h-60 md:w-72 md:h-72 object-cover object-top bg-gradient-to-b from-rose-600 rounded-xl"></img>
            <a href={resumepdf} target='_blank' rel="noopener noreferrer"
                className="flex items-center justify-center mt-10 bg-gradient-to-r from-teal-200 to-blue-600 text-gray-800 dark:text-white py-2 rounded-lg duration-500"
            >Resume <span></span>
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
