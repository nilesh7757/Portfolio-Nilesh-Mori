'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, Github, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

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
          <p className="text-muted-foreground text-sm sm:text-base">{project.fullDescription}</p>
          <div className="space-y-2">
            <h4 className="font-semibold">Technologies:</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span key={index} className="px-2 py-1 text-xs rounded-full font-semibold bg-muted text-muted-foreground">{tech}</span>
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
    <Card className="overflow-hidden h-full flex flex-col glassmorphism">
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
            <span 
              key={index} 
              className="px-2 py-1 text-xs rounded-full font-semibold bg-muted text-muted-foreground"
              onClick={() => onFilterByTech && onFilterByTech(tech)}
            >
              {tech}
            </span>
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

export default ProjectCard;
