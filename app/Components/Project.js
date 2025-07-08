"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import projects from "@/lib/projects";

const ProjectCard = ({ title, image, description, demoUrl, codeUrl, techStack }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
    className="transform-gpu mb-8 card-hover-animate group"
  >
    <Card className="overflow-hidden h-full flex flex-col bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 shadow-xl">
      <div className="relative h-48 w-full group">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          className="object-cover transition-transform duration-300 group-hover:scale-105 transform-gpu will-change-transform rounded-t-lg"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          quality={75}
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qLjgyPjA+OjU1RUVHSkdKTEtMTjw2Uj5AS0pLTEr/2wBDAR"
        />
        {/* Overlay with more info on hover */}
        <div className="absolute inset-0 bg-white/90 dark:bg-neutral-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4 text-center pointer-events-none">
          <p className="text-sm text-gray-700 dark:text-gray-200 mb-2">{description}</p>
        </div>
      </div>
      <CardContent className="p-6 flex-grow">
        <h3 className="text-xl font-bold mb-2 group-hover:text-indigo transition-colors duration-200">{title}</h3>
        <div className="flex flex-wrap gap-2 mb-2">
          {(techStack || ["React", "Next.js", "Tailwind CSS"]).map((tech, i) => (
            <span key={i} className="px-2 py-1 text-xs rounded font-semibold bg-accent-indigo text-white group-hover:bg-accent-pink transition-colors duration-200">
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex gap-4">
        <Button variant="default" asChild>
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
  // Only show the first 4 projects on the front page
  const featuredProjects = projects.slice(0, 4);

  return (
    <div className="relative w-full px-4 py-6 md:py-8 lg:py-10 pb-4 overflow-hidden">
      <motion.div
        className="relative z-0 max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      >
        <motion.h2
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-center flex items-center justify-center gap-2 mb-8 md:mb-12 transform-gpu relative"
          whileHover={{ scale: 1.05 }}
        >
          <Code className="w-6 h-6 md:w-8 md:h-8" />
          Featured{" "}
          <span className="bg-gradient-to-r from-blue-500 to-blue-200 bg-clip-text text-transparent">
            Projects
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 content-visibility-auto">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        <div className="flex justify-center ">
          <Button variant="default" className="flex items-center gap-2" asChild>
            <Link href="/projects">
              View All Projects
              <ExternalLink className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default Project;
