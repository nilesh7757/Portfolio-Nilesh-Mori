import { Monitor, Code2, Database, Wrench, LayoutTemplate } from 'lucide-react';

export const skillCategories = [
  {
    title: "Frontend Development",
    icon: LayoutTemplate,
    skills: [
      { name: "React.js", level: "Advanced" },
      { name: "Next.js", level: "Advanced" },
      { name: "TypeScript", level: "Intermediate" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "Redux", level: "Intermediate" },
      { name: "HTML5/CSS3", level: "Advanced" },
      { name: "Framer Motion", level: "Intermediate" }
    ],
    delay: 0.1
  },
  {
    title: "Backend & Database",
    icon: Database,
    skills: [
      { name: "Node.js", level: "Advanced" },
      { name: "Express.js", level: "Advanced" },
      { name: "MongoDB", level: "Advanced" },
      { name: "PostgreSQL", level: "Intermediate" },
      { name: "Prisma ORM", level: "Intermediate" },
      { name: "REST APIs", level: "Advanced" },
      { name: "GraphQL", level: "Basic" }
    ],
    delay: 0.2
  },
  {
    title: "Programming Languages",
    icon: Code2,
    skills: [
      { name: "JavaScript (ES6+)", level: "Advanced" },
      { name: "Python", level: "Intermediate" },
      { name: "C++", level: "Intermediate" },
      { name: "Java", level: "Basic" },
      { name: "SQL", level: "Intermediate" }
    ],
    delay: 0.3
  },
  {
    title: "DevOps & Tools",
    icon: Wrench,
    skills: [
      { name: "Git & GitHub", level: "Advanced" },
      { name: "Docker", level: "Intermediate" },
      { name: "AWS (Basic)", level: "Basic" },
      { name: "Vercel", level: "Advanced" },
      { name: "Postman", level: "Advanced" },
      { name: "Linux", level: "Intermediate" },
      { name: "VS Code", level: "Advanced" }
    ],
    delay: 0.4
  }
];
