import React from 'react'
import Section from './common/Section'

import {FaGithub} from "react-icons/fa"
import {BiFolder} from "react-icons/bi"

import p1 from "../assets/p1.png"
import p2 from "../assets/p2.jpg"
import p3 from "../assets/Bungie.png"

const Portfolio = () => {
    
    const iconLogo = {
        icon1: <BiFolder/>
    }

    const PROJECTS = [
        {
            id: 1,
            image: p1,
            title: "Discord Bot for Bridge 2 Engineering",
            github: "https://github.com/simonMarcotte/Bot2Engg",
            demo: "Includes slash commands, games, formatting, and more!"
        },
        {
            id: 2,
            image: p3,
            title: "Destiny 2 Statistics Web App",
            github: "https://github.com/simonMarcotte/d2StatsWebapp",
            demo: "Tool to find statistics about players in Destiny 2 by Bungie."
        },
        {
            id: 3,
            image: p2,
            title: "Personal Portfolio Web App",
            github: "https://github.com/simonMarcotte/myPortfolio/tree/main",
            demo: "This website right here!"
        }
    ];


  return (
    <div name="portfolio">
        <Section 
            title="Portfolio" 
            subtitle="Here are all of the projects I have worked on so far, but there are more to come!"
            icon={iconLogo.icon1}>
            
            <div className="grid gap-8 lg:gap-14 lg:grid-cols-2">

                {PROJECTS.map(({id, image, title, github, demo}) => (
                    <div key={id} className="max-w-lg flex shadow-lg shadow-gray-300 rounded-2xl overflow-hidden">
                        <img src={image} alt={title} className="w-2/3"></img>
                        <div className='w-1/3 flex flex-col items-center justify-evenly p-1'>
                            <h2 className="font-semibold">{title}</h2>
                            <a className="text-2xl cursor-pointer hover:scale-125 hover:text-blue-500 duration-300" href={github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                            <p className="font-extralight">{demo}</p>
                        </div>

                    </div>
                ))}

            </div>
            
        </Section>
    </div>
  )
}

export default Portfolio
