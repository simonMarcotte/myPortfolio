import React from 'react';
import Section from './common/Section';
import { BsGearWide } from "react-icons/bs";

// Import the technologies data from the JSON file.
import technologies from '../components/data/tech.json';

const Technology = () => {
  const iconsExp = {
    icon1: <BsGearWide />
  };

  return (
    <div name="tech">
      <Section
        title="Technologies"
        subtitle="Here are some of the technologies I am proficient with:"
        icon={iconsExp.icon1}
      >
        <div className="w-full grid gap-8 lg:gap-14 lg:grid-cols-4 sm:grid-cols-2">
          {technologies.map(({ id, src, title, style, detail }) => (
            <div
            key={id}
            className={`relative shadow-lg bg-gray-200 dark:bg-zinc-900 hover:scale-105 py-4 rounded-lg overflow-hidden flex flex-col items-center shadow-gray-300 ${style}`}
          >
            {/* Hover overlay */}
            <div className="opacity-0 hover:opacity-100 hover:bg-zinc-700 hover:bg-opacity-60 duration-300 inset-0 z-10 absolute flex justify-center items-center text-xs text-gray-300 font-semibold text-center px-2">
              {detail}
            </div>
            <img src={src} alt={title} className="w-20 h-20 object-contain mb-4" />
            <h2 className="text-center">{title}</h2>
          </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Technology;
