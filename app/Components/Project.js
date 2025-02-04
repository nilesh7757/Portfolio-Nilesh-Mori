'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = ({ title, image, description, demoUrl, codeUrl }) => (
  <motion.div
    whileHover={{ y: -5 }}
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 50 }}
    transition={{ duration: 0.5 }}
  >
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative h-48 w-full group">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <CardContent className="p-6 flex-grow">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
      </CardContent>

      <CardFooter className="p-6 pt-0 flex gap-4">
        <Button asChild>
          <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" />
            Live Demo
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href={codeUrl} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            Code
          </Link>
        </Button>
      </CardFooter>
    </Card>
  </motion.div>
);

const Project = () => {
  const projects = [
    {
      title: "PassOP",
      description: "A secure password generator and manager with advanced encryption.",
      image: "./PassOP.png",
      demoUrl: "https://nilesh7757.github.io/PassOP/",
      codeUrl: "https://github.com/nilesh7757/passop",
    },
    {
      title: "TodoList",
      description: "A feature-rich task management application with local storage.",
      image: "./Todo.png",
      demoUrl: "https://nilesh7757.github.io/TodoList/",
      codeUrl: "https://github.com/nilesh7757/TodoList",
    },
    {
      title: "Spotify Clone",
      description: "A responsive music player interface inspired by Spotify.",
      image: "./Spotify.png",
      demoUrl: "https://nilesh7757.github.io/Spotify-Clone-HTML/",
      codeUrl: "https://github.com/nilesh7757/Spotify-Clone-HTML",
    },
    {
      title: "Notify",
      description: "A modern note-taking application with rich text editing.",
      image: "./Notify.png",
      demoUrl: "https://nilesh7757.github.io/Notify/",
      codeUrl: "https://github.com/nilesh7757/Notify",
    }
  ];

  return (
    <div className="min-h-screen w-full px-4 py-8 md:py-12 lg:py-16">
      <motion.div 
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2 
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-center flex items-center justify-center gap-2 mb-8 md:mb-12"
          whileHover={{ scale: 1.05 }}
        >
          <Code className="w-6 h-6 md:w-8 md:h-8" />
          Featured <span className="bg-gradient-to-r from-blue-500 to-blue-200 bg-clip-text text-transparent">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Project;
