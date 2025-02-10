import React from "react";
import TimelineItem from "./TimelineItem";
import { Card, CardContent } from "./ui/Card";

export default function Timeline({ experience }) {
  return (
    <Card>
      <CardContent className="p-0 pb-0">
        {/* Using a dim border color and slight opacity */}
        <ul className="ml-6 border-l border-gray-300 dark:border-gray-600 opacity-90">
          {experience.map((exp, id) => (
            <TimelineItem key={id} experience={exp} />
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
