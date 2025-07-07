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
    className="relative p-6 rounded-lg bg-background shadow-lg hover:shadow-xl transition-shadow border border-border"
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
      { icon: <Layout className="h-6 w-6 text-sky-500 dark:text-sky-300" />, title: "React.js", level: 90, colorClass: "bg-sky-400 dark:bg-sky-500" },
      { icon: <Layout className="h-6 w-6 text-foreground" />, title: "Next.js", level: 85, colorClass: "bg-neutral-800 dark:bg-neutral-200" },
      { icon: <Layout className="h-6 w-6 text-cyan-500 dark:text-cyan-300" />, title: "Tailwind CSS", level: 88, colorClass: "bg-cyan-400 dark:bg-cyan-500" },
    ],
    backend: [
      { icon: <Code className="h-6 w-6 text-green-500 dark:text-green-400" />, title: "Node.js", level: 82, colorClass: "bg-green-500 dark:bg-green-400" },
      { icon: <Database className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />, title: "MongoDB", level: 78, colorClass: "bg-emerald-500 dark:bg-emerald-400" },
      { icon: <Database className="h-6 w-6 text-blue-900 dark:text-blue-300" />, title: "SQL", level: 86, colorClass: "bg-blue-800 dark:bg-blue-400" },
      { icon: <Code className="h-6 w-6 text-muted-foreground" />, title: "Express.js", level: 80, colorClass: "bg-zinc-700 dark:bg-zinc-300" },
    ],
    languages: [
      { icon: <Code className="h-6 w-6 text-yellow-400 dark:text-yellow-300" />, title: "JavaScript", level: 92, colorClass: "bg-yellow-400 dark:bg-yellow-300" },
      { icon: <Code className="h-6 w-6 text-blue-600 dark:text-blue-300" />, title: "Python", level: 75, colorClass: "bg-blue-600 dark:bg-blue-300" },
      { icon: <Code className="h-6 w-6 text-purple-600 dark:text-purple-300" />, title: "C++", level: 85, colorClass: "bg-purple-600 dark:bg-purple-300" },
    ],
  };

  return (
    <Card className="w-full max-w-7xl mx-auto bg-background">
      <CardContent className="p-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-3 text-foreground">
            <Monitor className="h-8 w-8" />
            Technical Skills
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
            across different technologies and programming languages.
          </p>
        </motion.div>

        <Tabs defaultValue="frontend" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="backend">Backend</TabsTrigger>
            <TabsTrigger value="languages">Languages</TabsTrigger>
          </TabsList>

          {Object.entries(skillCategories).map(([category, skills]) => (
            <TabsContent key={category} value={category}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                  <SkillCard key={index} {...skill} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default Skills;