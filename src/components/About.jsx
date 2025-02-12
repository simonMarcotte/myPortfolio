import React from 'react';
import aboutData from "../components/data/about.json"
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

// Map icon names (strings) to the actual icon components.
const iconMap = {
  FaLinkedin: FaLinkedin,
  FaGithub: FaGithub,
  IoIosMail: IoIosMail,
  FaFileDownload: FaFileDownload
};

const About = () => {
  const { title, degree, descriptions, social, resume, image } = aboutData;
  // Get the download icon component from the mapping.
  const DownloadIcon = iconMap[resume.downloadIcon];

  return (
    <section className="pt-8 pb-12">
      {/* Container with same width as your work experience and hero sections */}
      <div className="mx-auto w-full max-w-4xl px-4 flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-8">
        {/* Text Column */}
        <div className="flex-1 flex flex-col justify-center space-y-4">
          <h1 className="text-5xl font-bold text-zinc-900 dark:text-white">
            {title}
          </h1>
          <h2 className="text-2xl">
            {degree}
          </h2>
          {descriptions.map((desc, index) => (
            <p key={index} className="font-light text-gray-400">
              {desc}
            </p>
          ))}
          {/* Resume button appears first, then social icons */}
          <div className="flex items-center gap-4">
            <a
              href={resume.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-bold text-zinc-900 dark:text-white hover:bg-gray-200 dark:hover:bg-zinc-900 hover:duration-200"
            >
              {resume.buttonText} <DownloadIcon className="ml-2 text-lg" />
            </a>
            {social.map(({ id, href, icon, style }) => {
              // Retrieve the icon component from the mapping using the icon key
              const IconComponent = iconMap[icon];
              return (
                <a
                  key={id}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-2xl hover:duration-200 hover:scale-105 ${style}`}
                >
                  <IconComponent />
                </a>
              );
            })}
          </div>
        </div>
        {/* Image Column */}
        <div className="flex-shrink-0">
          <img
            src={image}
            alt="Simon Marcotte"
            className="w-64 h-64 object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
