import React, { useState } from 'react';
import Section from './common/Section';
import { BsBuilding, BsChevronDown } from 'react-icons/bs';

// Example logos
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
            style: 'hover:shadow-red-400',
            details: [
                'Co-led the design of the core control system using Python to build an OOP-based async TCP server, simultaneously collecting data from 15+ plasma diagnostics 30 times per day, achieving a 1 month advance on release date.',
                'Led the design of a Python control system for AWG and oscilloscopes to autonomously capture data on plasma reflectometry research equipment through VISA protocol, leveraging OOP for experiment scaling.',
                'Redesigned existing data processing system architecture and implemented a REST API using Flask, pyTest, deployed with Docker, reducing API calls by 60%, streamlining the data processing pipeline.',
                'Collaborated consistently with engineering physicists, software, and electrical engineers to formulate comprehensive cross-disciplinary plans, employing agile methodology to optimize workflow and productivity.',
            ],
        },
        {
            id: 2,
            src: uofaEngg,
            title: 'UofA Faculty of Engineering',
            jobTitle: 'Program Instructor',
            style: 'hover:shadow-blue-300',
            details: [
                'Led the redesign process for a virtual engineering camp, coordinating tasks among team members, setting deadlines, resulting in a one-month advancement in project schedule, and instructing 45+ students during the camp sessions.',
                'Developed a Discord bot with Python, asyncio and discord.py, hosted on a GCP VM, facilitating task automation and active engagement across 3 servers and with 300+ students within the official program Discord server.',
                'Designed an automated engineering discipline quiz using Google Apps Scripts with personalized email responses, with its success in the program resulting in its integration into an engineering class, available to 1000+ students.',
                'Managed and organized communication platforms between staff and students in a hybrid environment, led weekly meetings to improve content to adapt to students needs.',
            ],
        },
    ];

    return (
        <div name="work-experience" className="flex justify-center">
            <Section title="Work Experience" subtitle="Here are some of the companies I have worked at:" icon={<BsBuilding />}>
                <div className="w-3/5 grid gap-8 lg:gap-14 lg:grid-cols-1 sm:grid-cols-1">
                    {companies.map(({ id, src, title, jobTitle, style, details }) => (
                        <div key={id} className={`shadow-lg hover:scale-105 duration-500 py-4 rounded-lg ${style} shadow-gray-300 dark:shadow-gray-500 overflow-hidden flex flex-col items-center w-full bg-gray-200 dark:bg-zinc-900`}>
                            <div className="relative w-full flex flex-col items-center">
                                <div className="w-full flex items-center justify-between p-4 cursor-pointer" onClick={() => handleToggle(id)}>
                                    <div className="flex items-center">
                                        <img src={src} alt={title} className="w-32 h-32 mr-4" />
                                        <div className="flex flex-col">
                                            <h2 className="text-lg font-bold text-left text-gray-900 dark:text-gray-100 transition-colors duration-500">{title}</h2>
                                            <h3 className="text-md text-left text-gray-900 dark:text-gray-100 transition-colors duration-500">{jobTitle}</h3>
                                        </div>
                                    </div>
                                    <BsChevronDown className="cursor-pointer" />
                                </div>
                                <div
                                    className={`overflow-hidden transition-max-height duration-500 ease-in-out w-full ${open.includes(id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <div className="p-4 bg-gray-200 dark:bg-zinc-900 text-neutral-900 dark:text-gray-100 duration-500">
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
