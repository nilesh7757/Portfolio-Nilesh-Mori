"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import projects from "@/lib/projects";

import ProjectCard from "./ProjectCard";

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
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        <div className="flex justify-center mt-8">
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
