'use client'

import React from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, Github, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const ProjectCard = ({ project, onFilterByTech }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden"
    >
      <Card 
        onMouseMove={handleMouseMove}
        className="group relative overflow-hidden h-full flex flex-col glassmorphism transition-all hover:border-primary/50"
      >
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100 z-10"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                650px circle at ${mouseX}px ${mouseY}px,
                rgba(59, 130, 246, 0.15),
                transparent 80%
              )
            `,
          }}
        />
        <Dialog>
          <DialogTrigger asChild>
            <div className="cursor-pointer flex-grow flex flex-col relative z-20">
              <div className="relative aspect-video w-full group overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">View Details</span>
                </div>
              </div>
              
              <CardContent className="p-4 sm:p-6 flex-grow">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-lg sm:text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                  <CardDescription className="text-sm">{project.description.length > 90 ? project.description.slice(0, 90) + '...' : project.description}</CardDescription>
                </CardHeader>
                
                <div className="flex flex-wrap gap-2 mb-4" onClick={(e) => e.stopPropagation()}>
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-2 py-1 text-xs rounded-full font-semibold bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        onFilterByTech && onFilterByTech(tech);
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-xl w-[95vw] p-0 overflow-hidden glassmorphism border-0 rounded-2xl flex flex-col h-auto max-h-[90vh]">
            {/* Fixed Header: Image */}
            <div className="relative w-full aspect-[16/10] shrink-0">
              <Image 
                src={project.image} 
                alt={project.title} 
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            </div>
            
            {/* Scrollable Middle: Content */}
            <div className="px-6 pb-4 -mt-12 relative z-10 flex-1 overflow-y-auto custom-scrollbar">
              <DialogHeader className="mb-6">
                <DialogTitle className="text-2xl md:text-3xl font-bold text-foreground">
                  {project.title}
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-6">
                <div className="space-y-2">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-primary">
                    About Project
                  </h4>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    {project.fullDescription}
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-primary">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge 
                        key={index} 
                        variant="secondary"
                        className="px-2.5 py-0.5 text-xs bg-secondary/50 backdrop-blur-sm border border-border/50"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Fixed Footer: Buttons */}
            <div className="px-6 py-4 bg-background/50 backdrop-blur-md border-t border-border/50 shrink-0">
              <div className="flex gap-3">
                <Button 
                  asChild 
                  size="sm"
                  className="flex-1 bg-primary text-primary-foreground shadow-md"
                >
                  <Link href={project.demoUrl} target="_blank">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  asChild 
                  size="sm"
                  className="flex-1 border-primary/20"
                >
                  <Link href={project.codeUrl} target="_blank">
                    <Github className="mr-2 h-4 w-4" />
                    Github
                  </Link>
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        <CardFooter className="p-4 sm:p-6 pt-0 flex flex-wrap gap-2 relative z-20">
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
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;