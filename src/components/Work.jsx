// /src/components/Work.jsx (or Experience.jsx)
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/Tabs';
import careerData from './data/career.json';
import educationData from './data/education.json';
import { careerSchema, educationSchema } from './lib/schemas';
import Timeline from "./Timeline";

export default function Experience() {
  const career = careerSchema.parse(careerData).career;
  const education = educationSchema.parse(educationData).education;

  return (
    // Increased the maximum width to 2xl
    <div className="mx-auto w-full max-w-4xl px-4">
      <Tabs defaultValue="work">
        <TabsList className="mb-2 grid w-full grid-cols-2 justify-center">
          <TabsTrigger value="work">Work</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
        </TabsList>
        <TabsContent value="work">
          <Timeline experience={career} />
        </TabsContent>
        <TabsContent value="education">
          <Timeline experience={education} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
