'use client'
import React from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';
import { CardContent } from "@/components/ui/card";
import { Monitor, Code2, Database, Wrench, LayoutTemplate } from 'lucide-react';
import TechMarquee from './TechMarquee';
import { Badge } from "@/components/ui/badge";

import Link from 'next/link';

const SkillCategory = ({ title, icon: Icon, skills, delay }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      onMouseMove={handleMouseMove}
      className="group relative bg-card/50 backdrop-blur-sm border rounded-xl p-6 hover:shadow-lg transition-all hover:border-primary/50 overflow-hidden"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              350px circle at ${mouseX}px ${mouseY}px,
              rgba(59, 130, 246, 0.1),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-primary/10 text-primary">
            <Icon className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Link href={`/projects?tech=${encodeURIComponent(skill)}`} key={skill}>
              <Badge 
                variant="secondary"
                className="text-sm py-1 px-3 hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
              >
                {skill}
              </Badge>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const categories = [
    {
      title: "Frontend Development",
      icon: LayoutTemplate,
      skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "HTML5/CSS3", "Framer Motion"],
      delay: 0.1
    },
    {
      title: "Backend & Database",
      icon: Database,
      skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Prisma ORM", "REST APIs", "GraphQL"],
      delay: 0.2
    },
    {
      title: "Programming Languages",
      icon: Code2,
      skills: ["JavaScript (ES6+)", "Python", "C++", "Java", "SQL"],
      delay: 0.3
    },
    {
      title: "DevOps & Tools",
      icon: Wrench,
      skills: ["Git & GitHub", "Docker", "AWS (Basic)", "Vercel", "Postman", "Linux", "VS Code"],
      delay: 0.4
    }
  ];

  return (
    <div id="skills" className="w-full max-w-7xl mx-auto py-12 md:py-20">
      <CardContent className="p-4 sm:p-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-3 text-foreground">
            <Monitor className="h-8 w-8" />
            <span>Technical</span>
            <span className="bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise.
          </p>
        </motion.div>

        {/* Marquee for Visual Impact */}
        <div className="mb-16">
          <TechMarquee />
        </div>

        {/* Categorized Grid for Scannability (Interview Friendly) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <SkillCategory 
              key={index} 
              {...category} 
            />
          ))}
        </div>
        
      </CardContent>
    </div>
  );
};

export default Skills;