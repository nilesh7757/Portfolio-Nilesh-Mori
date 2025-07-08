'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, Github, ExternalLink, Filter, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import projects from "@/lib/projects";

const ProjectDetailDialog = ({ project }) => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline" size="sm">
        View Details
      </Button>
    </DialogTrigger>
    <DialogContent className="max-w-2xl mx-4">
      <DialogHeader>
        <DialogTitle className="text-xl sm:text-2xl">{project.title}</DialogTitle>
      </DialogHeader>
      <div className="flex flex-col md:grid md:grid-cols-2 gap-6">
        <div className="relative w-full aspect-video">
          <Image 
            src={project.image} 
            alt={project.title} 
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div className="space-y-4">
          <p className="text-gray-600 text-sm sm:text-base">{project.fullDescription}</p>
          <div className="space-y-2">
            <h4 className="font-semibold">Technologies:</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" className="text-xs sm:text-sm">{tech}</Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DialogContent>
  </Dialog>
);

const ProjectCard = ({ project, onFilterByTech }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.3 }}
    className="overflow-hidden"
  >
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative aspect-video w-full group">
        <Image
          src={project.image}
          alt={project.title}
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        />
      </div>
      
      <CardContent className="p-4 sm:p-6 flex-grow">
        <CardHeader className="p-0 mb-4">
          <CardTitle className="text-lg sm:text-xl">{project.title}</CardTitle>
          <CardDescription className="text-sm">{project.description.length > 90 ? project.description.slice(0, 90) + '...' : project.description}</CardDescription>
        </CardHeader>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <Badge 
              key={index} 
              variant="outline" 
              className="text-xs cursor-pointer transition-colors hover:bg-blue-50 hover:text-blue-700"
              onClick={() => onFilterByTech(tech)}
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="p-4 sm:p-6 pt-0 flex flex-wrap gap-2">
        <Button 
          asChild 
          size="sm"
          className="hover:bg-blue-50 hover:text-blue-700 transition-colors"
        >
          <Link href={project.demoUrl} target="_blank">
            <ExternalLink className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
            Live Demo
          </Link>
        </Button>
        <Button 
          variant="outline" 
          asChild 
          size="sm"
          className="hover:bg-blue-50 hover:text-blue-700 transition-colors"
        >
          <Link href={project.codeUrl} target="_blank">
            <Github className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
            Code
          </Link>
        </Button>
        <ProjectDetailDialog project={project} />
      </CardFooter>
    </Card>
  </motion.div>
);

const ProjectsPage = () => {
  const [filters, setFilters] = useState(new Set());

  // Get unique technologies from all projects
  const allTechnologies = [...new Set(projects.flatMap(project => project.technologies))];

  // Filter projects based on selected technologies
  const filteredProjects = projects.filter(project => 
    filters.size === 0 || 
    Array.from(filters).every(filter => project.technologies.includes(filter))
  );

  // Toggle filter
  const toggleFilter = (tech) => {
    const newFilters = new Set(filters);
    if (newFilters.has(tech)) {
      newFilters.delete(tech);
    } else {
      newFilters.add(tech);
    }
    setFilters(newFilters);
  };

  return (
    <div className="container mx-auto px-4 py-6 sm:py-12">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8 sm:mb-12"
      >
        <h1 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-4 flex items-center justify-center gap-2 sm:gap-3">
          <Code className="h-6 w-6 sm:h-8 sm:w-8" />
          My Projects
        </h1>
        <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
          A collection of projects showcasing my skills in web development, 
          problem-solving, and innovative solutions.
        </p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8">
        <Button 
          variant={filters.size === 0 ? "default" : "outline"}
          onClick={() => setFilters(new Set())}
          size="sm"
          className="flex items-center gap-2 hover:bg-blue-50 hover:text-blue-700 transition-colors text-xs sm:text-sm"
        >
          <Filter className="h-3 w-3 sm:h-4 sm:w-4" /> All Projects
        </Button>
        {allTechnologies.map((tech) => (
          <Badge 
            key={tech} 
            variant={filters.has(tech) ? "default" : "outline"}
            className="text-xs sm:text-sm cursor-pointer transition-colors hover:bg-blue-50 hover:text-blue-700 flex items-center gap-1 sm:gap-2"
            onClick={() => toggleFilter(tech)}
          >
            {tech}
            {filters.has(tech) && (
              <X 
                className="h-3 w-3 sm:h-4 sm:w-4 ml-1 cursor-pointer" 
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFilter(tech);
                }} 
              />
            )}
          </Badge>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {filteredProjects.map((project, index) => (
          <ProjectCard 
            key={index} 
            project={project} 
            onFilterByTech={toggleFilter}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;