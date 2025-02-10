// src/lib/schemas.js
import { z } from "zod";

const experienceItemSchema = z.object({
  name: z.string(),
  href: z.string().optional(),
  title: z.string().optional(),
  logo: z.string().optional(),
  start: z.string().optional(),
  end: z.string().optional(),
  description: z.array(z.string()).optional(),
  links: z.array(
    z.object({
      name: z.string(),
      href: z.string(),
      icon: z.string()
    })
  ).optional()
});

export const careerSchema = z.object({
  career: z.array(experienceItemSchema)
});

export const educationSchema = z.object({
  education: z.array(experienceItemSchema)
});
