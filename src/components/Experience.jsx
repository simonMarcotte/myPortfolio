import React from 'react'
import Section from './common/Section'

import cpluspluspng from "../assets/logos/cplusplus.png";
import javascriptpng from "../assets/logos/javascript.png";
import pythonpng from "../assets/logos/python.png";
import reactpng from "../assets/logos/react.png";
import tailwindpng from "../assets/logos/tailwind.png";
import gitpng from "../assets/logos/github.png";
import appsscriptspng from "../assets/logos/appsscripts.png";
import sqlitepng from "../assets/logos/sqlite.png";


const Experience = () => {


    const technologies = [
        {
            id:1,
            src: pythonpng,
            title: "Python",
            style: "shadow-yellow-500"
        },
        {
            id:2,
            src: cpluspluspng,
            title: "C++",
            style: "shadow-blue-200"
        },
        {
            id:3,
            src: javascriptpng,
            title: "JavaScript",
            style: "shadow-orange-500"
        },
        {
            id:4,
            src: reactpng,
            title: "ReactJS",
            style: "shadow-blue-500"
        },
        {
            id:5,
            src: tailwindpng,
            title: "Tailwind CSS",
            style: "shadow-blue-800"
        },
        {
            id:6,
            src: gitpng,
            title: "Github",
            style: "shadow-gray-500"
        },
        {
            id:7,
            src: appsscriptspng,
            title: "Google Apps Scripts",
            style: "shadow-green-400"
        },
        {
            id:8,
            src: sqlitepng,
            title: "SQLite",
            style: "shadow-teal-200"
        }

    ];

  return (
    <div name="experience">
        <Section
            title="⌨️ Experience ⌨️"
            subtitle="Here are some of the technologies I am proficient with:"
        >
            <div className="w-full grid gap-8 lg:gap-14 lg:grid-cols-4 sm:grid-cols-2">

                {technologies.map(({id, src, title, style}) => (
                    <div key={id} className={`shadow-lg hover:scale-105 duration-500 py-2 rounded-lg ${style} overflow-hidden`}>
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
