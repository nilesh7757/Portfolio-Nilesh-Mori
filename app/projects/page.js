'use client'

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, Github, ExternalLink, Filter, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import projects from "@/lib/projects";
import { useSearchParams } from 'next/navigation';
import Navbar from '../Components/Navbar';

import ProjectCard from "../Components/ProjectCard";

const ProjectsPage = () => {
  const [filters, setFilters] = useState(new Set());
  const searchParams = useSearchParams();

  useEffect(() => {
    const techParam = searchParams.get('tech');
    if (techParam) {
      setFilters(new Set([techParam]));
    }
  }, [searchParams]);

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
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
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
    </div>
  );
};

export default ProjectsPage;