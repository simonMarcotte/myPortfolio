import React from 'react'
import Section from './common/Section'

import {FaGithub} from "react-icons/fa"
import {BiFolder} from "react-icons/bi"

import b2e from "../assets/b2e.png"
import mylogo from "../assets/mylogo.jpg"
import bungie from "../assets/Bungie.png"
import Litcode from "../assets/litcode.png"

const Portfolio = () => {
    
    const iconLogo = {
        icon1: <BiFolder/>
    }

    const PROJECTS = [
        {
            id: 1,
            image: b2e,
            title: "B2E Discord Bot",
            github: "https://github.com/simonMarcotte/Bot2Engg",
            demo: "Automated Discord Bot for the B2E discord, including slash commands, games and more!"
        },
        {
            id:2,
            image: Litcode,
            title: "Litcode Social",
            github: "https://github.com/simonMarcotte/Litcode",
            demo: "A social Coding Interview Prep Tracking tool to compete with friends."
        },
        {
            id: 4,
            image: mylogo,
            title: "Personal Portfolio Web App",
            github: "https://github.com/simonMarcotte/myPortfolio/tree/main",
            demo: "The website you're looking at right now!"
        },
        {
            id: 3,
            image: bungie,
            title: "Destiny 2 Statistics Web App",
            github: "https://github.com/simonMarcotte/d2StatsWebapp",
            demo: "Tool to find statistics about players in Bungie's Destiny 2."
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
                    <div key={id} className="max-w-lg flex shadow-lg shadow-gray-300 dark:shadow-gray-500 dark:bg-zinc-900 bg-gray-200 rounded-2xl overflow-hidden duration-500">
                        <img src={image} alt={title} className="w-2/3"></img>
                        <div className='w-1/3 flex flex-col items-center justify-evenly p-1'>
                            <h2 className="font-semibold">{title}</h2>
                            <a className="text-2xl cursor-pointer scale-125 hover:scale-150 hover:text-blue-500 duration-300" href={github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                            <p className="font-light text-sm">{demo}</p>
                        </div>

                    </div>
                ))}

            </div>
            
        </Section>
    </div>
  )
}

export default Portfolio
