import React from 'react'
import Section from './common/Section'

import {FaGithub, FaExternalLinkSquareAlt} from "react-icons/fa"
import { MdExposurePlus1 } from 'react-icons/md'

import p1 from "../assets/p1.png"
import p2 from "../assets/p2.jpg"

const Portfolio = () => {

    const PROJECTS = [
        {
            id: 1,
            image: p1,
            title: "Discord Bot for Bridge 2 Engineering",
            github: "https://github.com/simonMarcotte",
            demo: "https://github.com/simonMarcotte"
        },
        {
            id: 2,
            image: p2,
            title: "Destiny Stats Site",
            github: "https://github.com/simonMarcotte",
            demo: "https://github.com/simonMarcotte"
        }
    ];


  return (
    <div name="portfolio">
        <Section 
            title="📖 Portfolio 📖" 
            subtitle="Here are all of the projects I have worked on so far, but there are more to come!">
            
            <div className="grid gap-8 lg:gap-14 lg:grid-cols-2">

                {PROJECTS.map(({id, image, title, github, demo}) => (
                    <div key={id} className="max-w-lg flex shadow-lg shadow-gray-300 rounded-2xl overflow-hidden">
                        <img src={image} alt={title} className="w-2/3"></img>
                        <div className='w-1/3 flex flex-col items-center justify-evenly p-1'>
                            <h2>{title}</h2>
                            <a className="text-2xl cursor-pointer duration-150 hover:scale-110" href={github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                            <a className="text-2xl cursor-pointer duration-150 hover:scale-110" href={demo} target="_blank" rel="noopener noreferrer"><FaExternalLinkSquareAlt /></a>
                        </div>

                    </div>
                ))}

            </div>
            
        </Section>
    </div>
  )
}

export default Portfolio
