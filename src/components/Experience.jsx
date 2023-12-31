import React from 'react'
import Section from './common/Section'

import {BsGearWide} from "react-icons/bs"

import cpluspluspng from "../assets/logos/cplusplus.png";
import javascriptpng from "../assets/logos/javascript.png";
import pythonpng from "../assets/logos/python.png";
import reactpng from "../assets/logos/react.png";
import tailwindpng from "../assets/logos/tailwind.png";
import gitpng from "../assets/logos/github.png";
import appsscriptspng from "../assets/logos/appsscripts.png";
import sqlitepng from "../assets/logos/sqlite.png";


const Experience = () => {

    const iconsExp ={
            icon1: <BsGearWide/>
        }



    const technologies = [
        {
            id:1,
            src: pythonpng,
            title: "Python",
            style: "hover:shadow-yellow-400",
            detail: "I used Python and the discord.py library to program my Discord Bot for Brige2Engg."
        },
        {
            id:2,
            src: cpluspluspng,
            title: "C++",
            style: "hover:shadow-blue-300",
            detail: "I used C++ and Dijkstra's Algorithm to find a shortest path between 2 points in Edmonton using a Client-Server App."
        },
        {
            id:3,
            src: javascriptpng,
            title: "JavaScript",
            style: "hover:shadow-yellow-500",
            detail: "I used JavaScript to program this Web App, along with the Destiny 2 Statistics Web App."
        },
        {
            id:4,
            src: reactpng,
            title: "ReactJS",
            style: "hover:shadow-sky-300",
            detail: "I used the React framework to create and design this Web App, and the Destiny 2 Statistics Web App."
        },
        {
            id:5,
            src: tailwindpng,
            title: "Tailwind CSS",
            style: "hover:shadow-teal-200",
            detail: "I used Tailwind CSS to style this Web App, and the Destiny 2 Statistics Web App."
        },
        {
            id:6,
            src: gitpng,
            title: "Github",
            style: "hover:shadow-gray-500",
            detail: "I use Github within the Linux environment to easily share and access my projects."
        },
        {
            id:7,
            src: appsscriptspng,
            title: "Google Apps Scripts",
            style: "hover:shadow-green-400",
            detail: "I used Google Apps Scripts to interpret and send results from a google from to a user via e-mail."
        },
        {
            id:8,
            src: sqlitepng,
            title: "SQLite",
            style: "hover:shadow-sky-700",
            detail: "I use SQLite to operate and manage databases."
        }

    ];

  return (
    <div name="experience">
        
        <Section
            title="Experience"
            subtitle="Here are some of the technologies I am proficient with:"
            icon = {iconsExp.icon1}
        >
            <div className="w-full grid gap-8 lg:gap-14 lg:grid-cols-4 sm:grid-cols-2">

                {technologies.map(({id, src, title, style, detail}) => (
                    <div key={id} className={`shadow-lg hover:scale-105 duration-500 py-2 rounded-lg ${style} shadow-gray-300 overflow-hidden`}>
                        <div class="opacity-0 hover:opacity-100 hover:bg-zinc-500 hover:bg-opacity-60 duration-300 inset-0 z-10 absolute flex justify-center items-center text-sm text-white font-semibold">{detail}</div>
                            <img src={src} alt={title} className="w-20 mx-auto"></img>
                            <div className='flex flex-col items-center justify-evenly p-1'>
                                <h2>{title}</h2>
                            </div>
                        
                    </div>
                ))}

            </div> 
            
        </Section>
    </div>
  )
}

export default Experience
