'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Monitor, Database, Layout } from 'lucide-react';

const SkillCard = ({ icon, title, level, color }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="relative p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow"
  >
    <div className="flex items-center gap-4 mb-4">
      {icon}
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span>Proficiency</span>
        <span>{level}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
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
      { icon: <Layout className="h-6 w-6 text-blue-500" />, title: "React.js", level: 90, color: "#61DAFB" },
      { icon: <Layout className="h-6 w-6 text-black" />, title: "Next.js", level: 85, color: "#000000" },
      { icon: <Layout className="h-6 w-6 text-blue-400" />, title: "Tailwind CSS", level: 88, color: "#38B2AC" },
    ],
    backend: [
      { icon: <Code className="h-6 w-6 text-green-500" />, title: "Node.js", level: 82, color: "#68A063" },
      { icon: <Database className="h-6 w-6 text-green-600" />, title: "MongoDB", level: 78, color: "#4DB33D" },
      { icon: <Code className="h-6 w-6 text-gray-600" />, title: "Express.js", level: 80, color: "#000000" },
    ],
    languages: [
      { icon: <Code className="h-6 w-6 text-yellow-400" />, title: "JavaScript", level: 92, color: "#F7DF1E" },
      { icon: <Code className="h-6 w-6 text-blue-600" />, title: "Python", level: 75, color: "#3776AB" },
      { icon: <Code className="h-6 w-6 text-purple-600" />, title: "C++", level: 85, color: "#00599C" },
    ],
  };

  return (
    <Card className="w-full max-w-7xl mx-auto">
      <CardContent className="p-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-3">
            <Monitor className="h-8 w-8" />
            Technical Skills
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
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