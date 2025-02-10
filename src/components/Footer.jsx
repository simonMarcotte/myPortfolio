import React from 'react';
// Import your social data from the JSON file.
import about from '../components/data/about.json';
// Import the needed icons.
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

// Map the icon name strings from the JSON to their actual React Icon components.
const iconMap = {
  FaLinkedin: FaLinkedin,
  FaGithub: FaGithub,
  IoIosMail: IoIosMail
};

const Footer = () => {
  return (
    <footer className="w-full bg-gray-300/50 dark:bg-zinc-900/50 backdrop-blur-md rounded-md text-gray-500 dark:text-gray-400">
      {/* Center the content with the same container classes as your other sections */}
      <div className="mx-auto w-full max-w-4xl px-4">
        <div className="p-4 md:flex md:items-center md:justify-between">
          {/* Left side: @ 2025 and simonmarcotte.app with a pipe separator */}
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            @ 2025 |{' '}
            <a
              href="https://simonmarcotte.app"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              simonmarcotte.app
            </a>
          </span>
          {/* Right side: Social icons from about.json */}
          <div className="flex items-center space-x-4 mt-3 md:mt-0">
            {about.social.map((social) => {
              const IconComponent = iconMap[social.icon];
              return (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-2xl ${social.style} duration-200`}
                >
                  <IconComponent />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
