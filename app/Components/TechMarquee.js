'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiMongodb, 
  SiTypescript, SiJavascript, SiPython, SiCplusplus, SiHtml5, 
  SiCss3, SiGit, SiDocker, SiPostgresql, SiFirebase, SiRedux, 
  SiExpress, SiPrisma
} from 'react-icons/si';

const techs = [
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'currentColor' },
  { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'C++', icon: SiCplusplus, color: '#00599C' },
  { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
  { name: 'Redux', icon: SiRedux, color: '#764ABC' },
  { name: 'Express', icon: SiExpress, color: 'currentColor' },
  { name: 'Prisma', icon: SiPrisma, color: '#2D3748' },
];

const TechMarquee = () => {
  return (
    <div className="w-full py-8 md:py-12 overflow-hidden bg-background/50 backdrop-blur-sm border-y border-border/50">
      <div className="relative flex max-w-[100vw] overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        
        <motion.div
          className="flex gap-8 md:gap-16 items-center whitespace-nowrap"
          animate={{ x: [0, -2000] }}
          transition={{
            repeat: Infinity,
            duration: 40,
            ease: "linear",
          }}
        >
          {/* First Loop */}
          {techs.map((tech, index) => (
            <div 
              key={`tech-1-${index}`} 
              className="flex items-center gap-2 group cursor-default"
            >
              <tech.icon 
                className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 group-hover:scale-110 filter grayscale group-hover:grayscale-0" 
                style={{ color: tech.color === 'currentColor' ? undefined : tech.color }}
              />
              <span className="text-lg md:text-xl font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
          
          {/* Second Loop for seamless scroll */}
          {techs.map((tech, index) => (
            <div 
              key={`tech-2-${index}`} 
              className="flex items-center gap-2 group cursor-default"
            >
              <tech.icon 
                className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 group-hover:scale-110 filter grayscale group-hover:grayscale-0" 
                style={{ color: tech.color === 'currentColor' ? undefined : tech.color }}
              />
              <span className="text-lg md:text-xl font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TechMarquee;
