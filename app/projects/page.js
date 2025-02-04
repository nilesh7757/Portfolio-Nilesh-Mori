'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Github, 
  ExternalLink, 
  Filter, 
  X 
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";

const ProjectDetailDialog = ({ project }) => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline" size="sm" className="hover:bg-blue-50 hover:text-blue-700 transition-colors">
        View Details
      </Button>
    </DialogTrigger>
    <DialogContent className="max-w-2xl">
      <DialogHeader>
        <DialogTitle>{project.title}</DialogTitle>
      </DialogHeader>
      <div className="grid md:grid-cols-2 gap-6">
        <Image 
          src={project.image} 
          alt={project.title} 
          width={500} 
          height={300} 
          className="rounded-lg object-cover"
        />
        <div>
          <p className="text-gray-600 mb-4">{project.fullDescription}</p>
          <div className="space-y-2">
            <h4 className="font-semibold">Technologies:</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary">{tech}</Badge>
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
      <div className="relative h-48 w-full group">
        <Image
          src={project.image}
          alt={project.title}
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      
      <CardContent className="p-6 flex-grow">
        <CardHeader className="p-0 mb-4">
          <CardTitle>{project.title}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <Badge 
              key={index} 
              variant="outline" 
              className="cursor-pointer transition-colors hover:bg-blue-50 hover:text-blue-700"
              onClick={() => onFilterByTech(tech)}
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0 flex gap-4">
        <Button 
          asChild 
          className="hover:bg-blue-50 hover:text-blue-700 transition-colors"
        >
          <Link href={project.demoUrl} target="_blank">
            <ExternalLink className="mr-2 h-4 w-4" />
            Live Demo
          </Link>
        </Button>
        <Button 
          variant="outline" 
          asChild 
          className="hover:bg-blue-50 hover:text-blue-700 transition-colors"
        >
          <Link href={project.codeUrl} target="_blank">
            <Github className="mr-2 h-4 w-4" />
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

  const projects = [
    {
      title: "PassOP",
      description: "Secure password generator and manager",
      fullDescription: "A comprehensive password management solution with advanced encryption techniques, providing users with secure password generation, storage, and retrieval.",
      image: "/PassOP.png",
      demoUrl: "https://nilesh7757.github.io/PassOP/",
      codeUrl: "https://github.com/nilesh7757/passop",
      technologies: ["React", "JavaScript", "Tailwind CSS", "Local Storage"]
    },
    {
      title: "TodoList",
      description: "Feature-rich task management app",
      fullDescription: "An intuitive task management application with local storage, allowing users to create, edit, and track their daily tasks efficiently.",
      image: "/Todo.png",
      demoUrl: "https://nilesh7757.github.io/TodoList/",
      codeUrl: "https://github.com/nilesh7757/TodoList",
      technologies: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "Spotify Clone",
      description: "Responsive music player interface",
      fullDescription: "A pixel-perfect recreation of Spotify's user interface, demonstrating front-end design skills and responsive web development.",
      image: "/Spotify.png",
      demoUrl: "https://nilesh7757.github.io/Spotify-Clone-HTML/",
      codeUrl: "https://github.com/nilesh7757/Spotify-Clone-HTML",
      technologies: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "Notify",
      description: "Modern note-taking application",
      fullDescription: "A sleek note-taking platform with rich text editing capabilities, allowing users to create, organize, and manage their notes seamlessly.",
      image: "/Notify.png",
      demoUrl: "https://nilesh7757.github.io/Notify/",
      codeUrl: "https://github.com/nilesh7757/Notify",
      technologies: ["React", "Tailwind CSS", "Local Storage"]
    }
  ];

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
    <div className="container mx-auto px-4 py-12">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
          <Code className="h-8 w-8" />
          My Projects
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A collection of projects showcasing my skills in web development, 
          problem-solving, and innovative solutions.
        </p>
      </motion.div>

      {/* Filter Section */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <Button 
          variant={filters.size === 0 ? "default" : "outline"}
          onClick={() => setFilters(new Set())}
          className="flex items-center gap-2 hover:bg-blue-50 hover:text-blue-700 transition-colors"
        >
          <Filter className="h-4 w-4" /> All Projects
        </Button>
        {allTechnologies.map((tech) => (
          <Badge 
            key={tech} 
            variant={filters.has(tech) ? "default" : "outline"}
            className="cursor-pointer transition-colors hover:bg-blue-50 hover:text-blue-700 flex items-center gap-2"
            onClick={() => toggleFilter(tech)}
          >
            {tech}
            {filters.has(tech) && (
              <X 
                className="h-4 w-4 ml-1 cursor-pointer" 
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFilter(tech);
                }} 
              />
            )}
          </Badge>
        ))}
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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