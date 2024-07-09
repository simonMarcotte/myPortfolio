import React, { useState } from 'react';
import Section from './common/Section';
import { BsBuilding, BsChevronDown } from 'react-icons/bs';
import generalFusion from '../assets/logos/generalFusion.png';
import uofaEngg from '../assets/logos/uofaEngg.png';

const WorkExperience = () => {
    const [open, setOpen] = useState([]);

    const handleToggle = (id) => {
        setOpen((prevOpen) =>
            prevOpen.includes(id) ? prevOpen.filter((openId) => openId !== id) : [...prevOpen, id]
        );
    };

    const companies = [
        {
            id: 1,
            src: generalFusion,
            title: 'General Fusion',
            jobTitle: 'Software/Controls Engineering Co-op',
            startDate: 'January 2024',
            endDate: 'August 2024',
            style: 'hover:shadow-red-500 dark:hover:shadow-red-500',
            details: [
                `Worked as a Software and Controls Engineering Co-op, where I was primarily responsible for setting up the control system and data processing for plasma research diagnostics.`,
                'Co-led the design of the core control system using Python to build an asynchronous based TCP server used to simultaneously capture data from several differnt diagnostics at once, ranging from custom boards to oscilloscopes.',
                'Redesigned system architecture and implemented a microservice using flask, PyTest and deployed with docker to help bypass data ingest to directly serve raw data.',
                'Collaborated consistently with engineering physicists, software, and electrical engineers to formulate comprehensive cross-disciplinary plans, employing agile methodology to optimize workflow and productivity.',
            ],
        },
        {
            id: 2,
            src: uofaEngg,
            title: 'UAlberta Faculty of Engineering',
            jobTitle: 'Bridge2Engineering - Program Instructor',
            startDate: 'May 2023',
            endDate: 'August 2023',
            style: 'hover:shadow-blue-400 dark:hover:shadow-blue-400',
            details: [
                'Led the redesign process for a virtual engineering camp and program, Bridge2Engineering, meant to help bridge the gap from high school to engineering by informing and teaching students about academics, student life, and career opportunities.',
                'Developed a Discord bot with Python, asyncio and discord.py, provisioned with terraform and hosted on a GCP VM, autonomously allowing students to learn about the program and play games in the official server',
                'Launched an automated engineering discipline quiz with Google Apps Scripts, featuring personalized email responses for each user (Fun Fact: as of July 2024, based off 400 submissions, MechE, CompE and ECE are the most popular disciplines!).',
                'Managed and organized communication platforms between staff and students in a hybrid environment, led weekly meetings to improve content to adapt to students needs.',
            ],
        },
    ];

    return (
        <div name="work-experience" className="flex justify-center px-4">
            <Section title="Work Experience" subtitle="Here are some of the companies I have worked at:" icon={<BsBuilding />}>
                <div className="w-full sm:w-4/6 grid gap-8 lg:gap-14 lg:grid-cols-1 sm:grid-cols-1">
                    {companies.map(({ id, src, title, jobTitle, startDate, endDate, style, details }) => (
                        <div key={id} className={`shadow-lg hover:scale-105 duration-500 py-4 rounded-lg ${style} ease-in-out shadow-gray-300 dark:shadow-gray-500 overflow-hidden flex flex-col w-full bg-gray-200 dark:bg-zinc-900`}>
                            <div className="relative w-full flex flex-col items-center">
                                <div className="w-full flex items-center justify-between p-4 cursor-pointer" onClick={() => handleToggle(id)}>
                                    <div className="flex items-center">
                                        <img src={src} alt={title} className="w-16 h-16 sm:w-32 sm:h-32 mr-4" />
                                        <div className="flex flex-col">
                                            <h2 className="text-md sm:text-lg font-bold text-left text-gray-900 dark:text-gray-100 transition-colors duration-500">{title}</h2>
                                            <h3 className="text-sm sm:text-md font-semibold text-left text-blue-800 dark:text-blue-300 transition-colors duration-500">{jobTitle}</h3>
                                            <p className="text-xs sm:text-sm text-left text-gray-700 dark:text-gray-300 transition-colors duration-500">{`${startDate} - ${endDate}`}</p>
                                        </div>
                                    </div>
                                    <BsChevronDown className="cursor-pointer transition-transform duration-500 ease-in-out text-2xl" />
                                </div>
                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out w-full ${open.includes(id) ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <div className="p-4 bg-gray-200 dark:bg-zinc-900 text-neutral-900 dark:text-gray-100 transition-colors duration-500">
                                        <ul className="list-disc list-inside text-left">
                                            {details.map((detail, index) => (
                                                <li key={index}>{detail}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
    
    

    
};

export default WorkExperience;
