'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Monitor, Database, Layout } from 'lucide-react';

const SkillCard = ({ icon, title, level, colorClass }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="p-6 glassmorphism"
  >
    <div className="flex items-center gap-4 mb-4">
      {icon}
      <h3 className="text-xl font-semibold text-foreground">{title}</h3>
    </div>
    <div className="space-y-2">
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>Proficiency</span>
        <span>{level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full transition-all duration-300 ${colorClass}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      </div>
    </div>
  </motion.div>
);

const Skills = () => {
  const skillCategories = {
    frontend: [
      { icon: <Layout className="h-6 w-6 text-primary" />, title: "React.js", level: 90, colorClass: "bg-primary" },
      { icon: <Layout className="h-6 w-6 text-primary" />, title: "Next.js", level: 85, colorClass: "bg-primary" },
      { icon: <Layout className="h-6 w-6 text-primary" />, title: "Tailwind CSS", level: 88, colorClass: "bg-primary" },
    ],
    backend: [
      { icon: <Code className="h-6 w-6 text-primary" />, title: "Node.js", level: 82, colorClass: "bg-primary" },
      { icon: <Database className="h-6 w-6 text-primary" />, title: "MongoDB", level: 78, colorClass: "bg-primary" },
      { icon: <Database className="h-6 w-6 text-primary" />, title: "SQL", level: 86, colorClass: "bg-primary" },
      { icon: <Code className="h-6 w-6 text-primary" />, title: "Express.js", level: 80, colorClass: "bg-primary" },
    ],
    languages: [
      { icon: <Code className="h-6 w-6 text-primary" />, title: "JavaScript", level: 92, colorClass: "bg-primary" },
      { icon: <Code className="h-6 w-6 text-primary" />, title: "Python", level: 75, colorClass: "bg-primary" },
      { icon: <Code className="h-6 w-6 text-primary" />, title: "C++", level: 85, colorClass: "bg-primary" },
    ],
  };

  return (
    <div className="w-full max-w-7xl mx-auto">
      <CardContent className="p-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-3 text-foreground">
            <Monitor className="h-8 w-8" />
            <span>Technical</span>
            <span className="bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
            across different technologies and programming languages.
          </p>
        </motion.div>

        <Tabs defaultValue="frontend" className="w-full bg-transparent">
          <TabsList className="grid w-full grid-cols-3 mb-8 glassmorphism">
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="backend">Backend</TabsTrigger>
            <TabsTrigger value="languages">Languages</TabsTrigger>
          </TabsList>

          {Object.entries(skillCategories).map(([category, skills]) => (
            <TabsContent key={category} value={category} className="bg-transparent">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                  <SkillCard key={index} {...skill} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </div>
  );
};

export default Skills;