'use client'
import React from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';
import { CardContent } from "@/components/ui/card";
import { Monitor } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import Link from 'next/link';
import { skillCategories } from '@/lib/skills';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const getLevelColor = (level) => {
  switch (level?.toLowerCase()) {
    case 'advanced':
      return 'border-green-500/50 text-green-600 dark:text-green-400 bg-green-500/10';
    case 'intermediate':
      return 'border-blue-500/50 text-blue-600 dark:text-blue-400 bg-blue-500/10';
    case 'basic':
      return 'border-yellow-500/50 text-yellow-600 dark:text-yellow-400 bg-yellow-500/10';
    default:
      return 'border-border';
  }
};

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
      className="group relative bg-card/50 backdrop-blur-sm border rounded-xl p-6 hover:shadow-lg transition-all hover:border-primary/50 overflow-hidden h-full flex flex-col"
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
      <div className="relative z-10 flex-1">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-primary/10 text-primary">
            <Icon className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          <TooltipProvider>
            {skills.map((skill) => (
              <Tooltip key={skill.name}>
                <TooltipTrigger asChild>
                  <Link href={`/projects?tech=${encodeURIComponent(skill.name)}`}>
                    <Badge 
                      variant="outline"
                      className={`text-sm py-1.5 px-3.5 transition-all duration-300 cursor-pointer hover:scale-105 ${getLevelColor(skill.level)}`}
                    >
                      {skill.name}
                    </Badge>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="font-semibold">{skill.level} Proficiency</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
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
            Hover over skills to see proficiency levels. Click to filter projects.
          </p>
        </motion.div>

        {/* Categorized Grid for Scannability (Interview Friendly) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
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