'use client';

import { motion } from 'framer-motion';
import experiences from '@/lib/experience';

const ExperienceSection = () => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="space-y-6"
  >
    {experiences.map((exp, index) => (
      <motion.div
        key={exp.role}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="relative pl-6 border-l-2 border-blue-600 dark:border-blue-500 transform-gpu group"
      >
        <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-blue-600 dark:bg-blue-500 ring-4 ring-background transition-transform group-hover:scale-125" />
        
        <h6 className="text-xl md:text-2xl font-bold text-foreground">{exp.role}</h6>
        <a 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-lg text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors cursor-pointer font-medium" 
          href={exp.link}
        >
          {exp.company}
        </a>
        <p className="text-sm font-mono text-muted-foreground mt-1 mb-3">{exp.duration}</p>
        <p className="text-base text-muted-foreground leading-relaxed max-w-3xl">
          {exp.description}
        </p>
      </motion.div>
    ))}
  </motion.div>
);

export default ExperienceSection; 