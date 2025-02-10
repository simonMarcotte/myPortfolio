import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/Avatar";
import { Badge } from "./ui/Badge";
import Icon from "./ui/Icon";

export default function TimelineItem({ experience }) {
  const { name, href, title, logo, start, end, description, links } = experience;

  return (
    <li className="relative py-4">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute -left-7 top-4 flex items-center justify-center rounded-full bg-white"
      >
        <Avatar className="w-14 h-14 border">
          <AvatarImage
            src={logo}
            alt={name}
            className="bg-background object-contain"
          />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
      </a>
      <div className="flex flex-1 flex-col justify-start gap-1 ml-11">
        {start && (
          <time className="text-xs text-gray-700 dark:text-gray-300 opacity-60">
            <span>{start}</span>
            <span>{" - "}</span>
            <span>{end ? end : "Present"}</span>
          </time>
        )}
        {/* Main header: Company/Project name */}
        <h2 className="font-semibold leading-none text-gray-700 dark:text-gray-300">
          {name}
        </h2>
        {/* Job title or role */}
        {title && (
          <p className="text-xs text-gray-700 dark:text-gray-300 opacity-60">
            {title}
          </p>
        )}
        {/* Details – smaller text */}
        {description && (
          <ul className="ml-4 list-outside list-disc">
            {description.map((desc, i) => (
              <li key={i} className="text-xs text-gray-700 dark:text-gray-300">
                {desc}
              </li>
            ))}
          </ul>
        )}
      </div>
      {links && links.length > 0 && (
        <div className="mt-2 ml-11 flex flex-row flex-wrap items-start gap-2">
          {links.map((link, idx) => {
            // Render the link badge with an icon placed before the link name.
            return (
              <a
                href={link.href}
                key={idx}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Badge
                  title={link.name}
                  className="flex items-center gap-1 px-2 py-1 rounded dark:text-gray-700 text-gray-300 dark:bg-gray-200 bg-zinc-900 text-xs"
                >
                  <Icon
                    name={link.icon}
                    aria-hidden="true"
                    className="w-4 h-4"
                  />
                  <span>{link.name}</span>
                </Badge>
              </a>
            );
          })}
        </div>
      )}
    </li>
  );
}
