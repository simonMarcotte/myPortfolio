import React from 'react'
import Section from './common/Section'

import {BsGearWide} from "react-icons/bs"

import cpluspluspng from "../assets/logos/cplusplus.png";
import javascriptpng from "../assets/logos/javascript.png";
import pythonpng from "../assets/logos/python.png";
import reactpng from "../assets/logos/react.png";
import tailwindpng from "../assets/logos/tailwind.png";
import gitpng from "../assets/logos/github.png";
import gcp from "../assets/logos/gcp.png";
import database from "../assets/logos/database.png";


const Technology = () => {

    const iconsExp ={
            icon1: <BsGearWide/>
        }

    const technologies = [
        {
            id:1,
            src: pythonpng,
            title: "Python",
            style: "hover:shadow-yellow-400",
            detail: "I used Python at General Fusion, and in designing my autonomous Discord Bot for Brige2Engg."
        },
        {
            id:2,
            src: gcp,
            title: "Google Cloud Platform",
            style: "hover:shadow-green-400",
            detail: "I have used GCP cloud run and compute engine to host my Discord bot, used both BigQuery and Firebase in Litcode, and managed VPC subnets and firewalls.."
        },
        {
            id:3,
            src: database,
            title: "SQL/NoSQl",
            style: "hover:shadow-sky-700",
            detail: "I have used SQL and MongoDB to recreate a twitter application."
        },
        {
            id:4,
            src: cpluspluspng,
            title: "C++",
            style: "hover:shadow-blue-300",
            detail: "I used C++ and Dijkstra's Algorithm to find a shortest path between 2 points in Edmonton using a Client-Server App."
        },
        {
            id:5,
            src: javascriptpng,
            title: "JavaScript",
            style: "hover:shadow-yellow-500",
            detail: "I used JavaScript to create an Express REST API in Litcode, in this Web App, along with the Destiny 2 Statistics Web App."
        },
        {
            id:6,
            src: reactpng,
            title: "ReactJS",
            style: "hover:shadow-sky-300",
            detail: "I used the React framework to create and design this Web App, and the Destiny 2 Statistics Web App."
        },
        {
            id:7,
            src: tailwindpng,
            title: "Tailwind CSS",
            style: "hover:shadow-teal-200",
            detail: "I used Tailwind CSS to style this Web App, and the Destiny 2 Statistics Web App."
        },
        {
            id:8,
            src: gitpng,
            title: "Github",
            style: "hover:shadow-gray-500",
            detail: "I use Github within the Linux environment to easily share and access my projects, and have created github actions to manage workflows."
        },
    ];

    return (
        <div name="Technologies">
            <Section
                title="Technologies"
                subtitle="Here are some of the technologies I am proficient with:"
                icon={iconsExp.icon1}
            >
                <div className="w-full grid gap-8 lg:gap-14 lg:grid-cols-4 sm:grid-cols-2">
                    {technologies.map(({id, src, title, style, detail}) => (
                        <div key={id} className={`relative shadow-lg bg-gray-200 dark:bg-zinc-900 hover:scale-105 duration-500 py-4 rounded-lg ${style} shadow-gray-300 overflow-hidden flex flex-col items-center`}>
                            <div className="opacity-0 hover:opacity-100 hover:bg-zinc-700 hover:bg-opacity-60 duration-300 inset-0 z-10 absolute flex justify-center items-center text-sm text-white font-semibold">{detail}</div>
                            <img src={src} alt={title} className="w-20 h-20 object-contain mb-4" />
                            <h2 className="text-center">{title}</h2>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    )
}

export default Technology
