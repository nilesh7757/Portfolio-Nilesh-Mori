'use client'
import dynamic from 'next/dynamic';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { IoPerson } from 'react-icons/io5';
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Download, Send, Github, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';
import { User } from 'lucide-react';
import { Card } from "@/components/ui/card";
import Tilt from 'react-parallax-tilt';

// Lazy load the experience section
const ExperienceSection = dynamic(() => import('./ExperienceSection'), {
  loading: () => <p>Loading experience section...</p>,
  ssr: false
});

const About = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  
  const socials = [
    { icon: Github, href: 'https://github.com/nilesh7757', name: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/nilesh-mori-7757n', name: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/Programmer7757', name: 'Twitter' },
  ];

  useEffect(() => {
    // Set image loaded state after component mount
    setIsImageLoaded(true);
  }, []);

  return (
    <section id="about" className="min-h-screen w-full px-4 py-8 md:py-12 lg:py-16" aria-label="About Me Section">
      <motion.div 
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      >
        {/* Header */}
        <motion.h2 
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-center flex items-center justify-center gap-2 mb-8 md:mb-12 text-foreground"
          whileHover={{ scale: 1.05 }}
        >
          <User className="w-6 h-6 md:w-8 md:h-8" />
          About <span className="bg-gradient-to-r from-blue-500 to-blue-200 dark:from-blue-300 dark:to-blue-700 bg-clip-text text-transparent">Me</span>
        </motion.h2>

        {/* Main Content Container */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
          {/* Image Section */}
          <motion.div 
            className="w-full max-w-sm lg:w-1/3 lg:sticky lg:top-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: isImageLoaded ? 1 : 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.15}
              glareColor="#ffffff"
              glarePosition="all"
              tiltMaxAngleX={12}
              tiltMaxAngleY={12}
              transitionSpeed={1200}
              className="relative group aspect-square rounded-xl overflow-hidden transform-gpu"
              style={{ background: 'transparent' }}
            >
              <Image
                className="object-cover transition-transform duration-300 group-hover:scale-105 transform-gpu will-change-transform"
                src="/Nilesh.jpg"
                alt="Nilesh Mori - Fullstack Web Developer"
                fill
                sizes="(max-width: 360px) 100vw, (max-width: 480px) 90vw, (max-width: 640px) 80vw, (max-width: 750px) 70vw, 33vw"
                priority
                quality={75}
                loading="eager"
                onLoad={() => setIsImageLoaded(true)}
              />
            </Tilt>

            {/* Mobile Social Links */}
            <div className="flex justify-center gap-4 mt-6 lg:hidden">
              {socials.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    className="rounded-full"
                    asChild
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={`Visit my ${social.name} profile`}>
                      <Icon className="h-5 w-5" aria-hidden="true" />
                      <span className="sr-only">{social.name}</span>
                    </a>
                  </Button>
                );
              })}
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            className="w-full lg:w-2/3 content-visibility-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <Card className="w-full max-w-7xl mx-auto bg-white/30 dark:bg-white/10 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-xl">
              <Tabs defaultValue="about" className="w-full" onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-2 mb-6" aria-label="About tabs">
                  <TabsTrigger value="about">About</TabsTrigger>
                  <TabsTrigger value="experience">Experience</TabsTrigger>
                </TabsList>

                <AnimatePresence mode="wait" initial={false}>
                  {activeTab === 'about' && (
                    <TabsContent value="about" forceMount>
                      <motion.div
                        key="about"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4 m-2"
                      >
                        <div>
                          <h2 className="text-xl md:text-2xl font-semibold">Nilesh Mori</h2>
                          <h3 className="text-lg md:text-xl font-medium text-primary">
                            Fullstack Web Developer | Tech Innovator
                          </h3>
                        </div>
                        <p className="leading-relaxed text-muted-foreground">I'm driven by a relentless curiosity to transform innovative ideas into impactful digital experiences. With a strong foundation in web development and a passion for problem-solving, I thrive on building scalable, efficient, and user-friendly applications.</p>
                      </motion.div>
                    </TabsContent>
                  )}
                  {activeTab === 'experience' && (
                    <TabsContent value="experience" forceMount>
                      <motion.div
                        key="experience"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ExperienceSection />
                      </motion.div>
                    </TabsContent>
                  )}
                </AnimatePresence>
              </Tabs>

              {/* Action Buttons */}
              <div className="mt-8 mb-2 mx-3 space-y-4">
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button 
                    variant="outline"
                    className="w-full sm:w-auto"
                    onClick={() => window.open('/CV.pdf', '_blank')}
                    aria-label="Download CV"
                  >
                    <Download className="mr-2 h-4 w-4" aria-hidden="true" />
                    Download CV
                  </Button>
                  <Button 
                    variant="default"
                    className="w-full sm:w-auto"
                    asChild
                  >
                    <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>
                      <Send className="mr-2 h-4 w-4 transition-transform" aria-hidden="true" />
                      Let's Connect
                    </Link>
                  </Button>
                </div>

                {/* Desktop Social Links */}
                <div className="hidden lg:flex justify-center gap-4">
                  {socials.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <Button
                        key={index}
                        variant="ghost"
                        size="icon"
                        className="rounded-full p-0"
                        asChild
                      >
                        <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={`Visit my ${social.name} profile`}>
                          <motion.div
                            whileHover={{ scale: 1.25, rotate: 12 }}
                            whileTap={{ scale: 0.95, rotate: -12 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                            className="flex items-center justify-center h-10 w-10"
                          >
                            <Icon className="h-5 w-5" aria-hidden="true" />
                            <span className="sr-only">{social.name}</span>
                          </motion.div>
                        </a>
                      </Button>
                    );
                  })}
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;