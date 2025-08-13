import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/Avatar";
import { Badge } from "./ui/Badge";
import Icon from "./ui/Icon";

export default function TimelineItem({ experience }) {
  const { name, href, title, logo, start, end, location, description, links } = experience;

  return (
    <li className="relative py-2">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute -left-8 top-2 flex items-center justify-center rounded-md bg-white z-30"
      >
        <Avatar className="w-16 h-16 border rounded-md">
          <AvatarImage
            src={logo}
            alt={name}
            className="bg-background object-contain"
          />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
      </a>
      <div className="flex flex-1 flex-col justify-start gap-1 ml-11">
        <div className="bg-gray-100 dark:bg-zinc-800 p-4 rounded-lg shadow-sm">
          {/* Company name and dates on same line */}
          <div className="flex items-center justify-between w-full">
            <h2 className="font-semibold leading-none text-gray-800 dark:text-white">
              {name}
            </h2>
            {start && (
              <time className="text-xs text-gray-700 dark:text-gray-300 opacity-60">
                <span>{start}</span>
                <span>{" - "}</span>
                <span>{end ? end : "Present"}</span>
              </time>
            )}
          </div>
          {/* Job title and location on same line */}
          <div className="flex items-center justify-between w-full mt-1">
            {title && (
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                {title}
              </p>
            )}
            {location && (
              <div className="flex items-center gap-1 text-xs text-gray-700 dark:text-gray-300 opacity-60">
                <span>📍</span>
                <span>{location}</span>
              </div>
            )}
          </div>
          {/* Details – smaller text */}
          {description && (
            <ul className="ml-4 list-outside list-disc mt-2">
              {description.map((desc, i) => (
                <li key={i} className="text-xs text-gray-700 dark:text-gray-300">
                  {desc}
                </li>
              ))}
            </ul>
          )}
          
          {/* Links integrated within the card */}
          {links && links.length > 0 && (
            <div className="mt-3 flex flex-row flex-wrap items-start gap-2">
              {links.map((link, idx) => (
                <a
                  href={link.href}
                  key={idx}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Badge
                    title={link.name}
                    className="flex items-center gap-1 px-2 py-1 rounded dark:text-gray-700 text-gray-300 dark:bg-gray-200 bg-zinc-900 text-xs transition-all duration-0 hover:duration-200 hover:opacity-90"
                  >
                    <Icon
                      name={link.icon}
                      aria-hidden="true"
                      className="w-4 h-4"
                    />
                    <span>{link.name}</span>
                  </Badge>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </li>
  );
}
