// /src/components/Portfolio.jsx
import React from 'react';
import Section from './common/Section';
import { BiFolder } from 'react-icons/bi';
import { CiGlobe } from "react-icons/ci";
import { LuGithub } from "react-icons/lu";

// Import projects data from your JSON file
import projects from '../components/data/projects.json';

const Portfolio = () => {
  const iconLogo = { icon1: <BiFolder /> };

  return (
    <div name="projects">
      <Section 
        title="Projects" 
        subtitle="Here are some of my favourite projects I have worked on:"
        icon={iconLogo.icon1}
      >
        {/* Grid container; Section's container already constrains width */}
        <div className="grid gap-8 lg:gap-14 lg:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-200 dark:bg-zinc-900 rounded-2xl shadow-lg shadow-gray-300 dark:shadow-gray-500 overflow-hidden"
            >
              {/* Project image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              {/* Project content */}
              <div className="p-4">
                {/* Project title */}
                <h2 className="font-bold text-xl mb-2">{project.title}</h2>
                {/* Project description */}
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                {/* Tags as tightly-packed, smaller boxes */}
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block bg-gray-300 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 rounded-md px-2 py-1 text-[10px] font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* Links as boxes with icons placed before the link name */}
                <div className="mt-4 flex flex-wrap gap-1">
                  {project.links.map((link, index) => {
                    // Determine which icon to show based on the link name
                    const isGithub = link.name.toLowerCase() === "github";
                    const LinkIcon = isGithub ? LuGithub : CiGlobe;

                    return (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-1 rounded-md font-semibold bg-black text-white dark:bg-white dark:text-black text-sm"
                      >
                        <LinkIcon className="w-4 h-4" />
                        <span>{link.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Portfolio;
