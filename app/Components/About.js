'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { IoPerson } from 'react-icons/io5';
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Download, Send, Github, Linkedin, ExternalLink } from 'lucide-react';
import Image from 'next/image';

const About = () => {
  const [activeTab, setActiveTab] = useState('about');
  

  const experiences = [
    {
      role: 'Intern',
      company: 'Craft Silicon Foundation',
      duration: 'Rural Internship 2024',
      description: 'Helped Society to improve at Sadanput,Panchmahal '
    },
  ];


  return (
    <div className="min-h-screen w-full px-4 py-8 md:py-12 lg:py-16">
      <motion.div 
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <motion.h2 
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-center flex items-center justify-center gap-2 mb-8 md:mb-12"
          whileHover={{ scale: 1.05 }}
        >
          <IoPerson className="w-6 h-6 md:w-8 md:h-8" />
          About <span className="bg-gradient-to-r from-green-500 to-green-200 bg-clip-text text-transparent">Me</span>
        </motion.h2>

        {/* Main Content Container */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
          {/* Image Section */}
          <motion.div 
            className="w-full max-w-sm lg:w-1/3 lg:sticky lg:top-24"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ x: -50, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative group aspect-square rounded-xl overflow-hidden">
              <Image
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                src="./Nilesh.jpg"
                alt="Nilesh Mori"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-lg md:text-xl font-medium transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  Tech Enthusiast
                </span>
              </div>
            </div>

            {/* Mobile Social Links */}
            <div className="flex justify-center gap-4 mt-6 lg:hidden">
              <Button variant="ghost" size="icon" className="rounded-full hover:scale-110 transition-transform">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:scale-110 transition-transform">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:scale-110 transition-transform">
                <ExternalLink className="h-5 w-5" />
              </Button>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            className="w-full lg:w-2/3"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ x: 50, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 md:p-6 lg:p-8 shadow-lg">
              <Tabs defaultValue="about" className="w-full" onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="about">About</TabsTrigger>
                  <TabsTrigger value="experience">Experience</TabsTrigger>
                </TabsList>

                <TabsContent value="about">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <div>
                      <h4 className="text-xl md:text-2xl font-semibold">Nilesh Mori</h4>
                      <h5 className="text-lg md:text-xl font-medium text-blue-600">
                        Fullstack Web Developer | Tech Innovator
                      </h5>
                    </div>
                    
                    <p>I'm driven by a relentless curiosity to transform innovative ideas into impactful digital experiences. With a strong foundation in web development and a passion for problem-solving, I thrive on building scalable, efficient, and user-friendly applications.</p>
                  </motion.div>
                </TabsContent>

                <TabsContent value="experience">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    {experiences.map((exp, index) => (
                      <motion.div
                        key={exp.role}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="relative pl-4 border-l-2 border-blue-600"
                      >
                        <h6 className="text-lg md:text-xl font-semibold">{exp.role}</h6>
                        <p className="text-blue-600">{exp.company}</p>
                        <p className="text-sm text-gray-500">{exp.duration}</p>
                        <p className="mt-2 text-sm md:text-base text-gray-600">{exp.description}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </TabsContent>
              </Tabs>

              {/* Action Buttons */}
              <div className="mt-8 space-y-4">
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button 
                    variant="outline" 
                    className="group w-full sm:w-auto"
                    onClick={() => window.open('./CV.pdf', '_blank')}
                  >
                    <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                    Download CV
                  </Button>
                  <Button className="group w-full sm:w-auto" asChild>
                    <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>
                      <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      Let's Connect
                    </Link>
                  </Button>
                </div>

                {/* Desktop Social Links */}
                <div className="hidden lg:flex justify-center gap-4">
                  <Button variant="ghost" size="icon" className="rounded-full hover:scale-110 transition-transform">
                    <Github className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full hover:scale-110 transition-transform">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full hover:scale-110 transition-transform">
                    <ExternalLink className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;