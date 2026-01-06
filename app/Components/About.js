'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Button } from "@/components/ui/button";
import { Send, Github, Linkedin, Twitter, FileText } from 'lucide-react';
import Image from 'next/image';
import { User } from 'lucide-react';
import { Card } from "@/components/ui/card";
import Tilt from 'react-parallax-tilt';

const About = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  
  const socials = [
    { icon: Github, href: 'https://github.com/nilesh7757', name: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/nileshmori7757', name: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/Programmer7757', name: 'Twitter' },
  ];

  useEffect(() => {
    // Set image loaded state after component mount
    setIsImageLoaded(true);
  }, []);

  return (
    <section id="about" className="w-full px-4 py-12 md:py-20" aria-label="About Me Section">
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
          About <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Me</span>
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
                src="/Nilesh.jpeg"
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
                    className="rounded-full z-10"
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
            {/* Desktop Social Links */}
            <div className="hidden lg:flex justify-center gap-4 mt-6">
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
          </motion.div>

          {/* Content Section */}
          <motion.div 
            className="w-full lg:w-2/3 content-visibility-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <Card className="w-full max-w-7xl mx-auto glassmorphism p-6 md:p-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-xl md:text-2xl font-semibold">Nilesh Mori</h2>
                  <h3 className="text-lg md:text-xl font-medium text-primary">
                    Fullstack Web Developer | Tech Innovator
                  </h3>
                </div>
                <p className="leading-relaxed text-muted-foreground text-lg">
                  I&apos;m driven by a relentless curiosity to transform innovative ideas into impactful digital experiences. With a strong foundation in web development and a passion for problem-solving, I thrive on building scalable, efficient, and user-friendly applications.
                </p>
                <p className="leading-relaxed text-muted-foreground text-lg">
                  My journey involves constantly learning new technologies and applying them to solve real-world problems. Whether it's crafting beautiful front-end interfaces or architecting robust back-end systems, I enjoy every aspect of the development lifecycle.
                </p>
              </motion.div>

              {/* Action Buttons */}
              <div className="mt-8 space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    variant="outline"
                    className="w-full sm:w-auto"
                    onClick={() => window.open('/CV.pdf', '_blank')}
                    aria-label="View Resume"
                  >
                    <FileText className="mr-2 h-4 w-4" aria-hidden="true" />
                    View Resume
                  </Button>
                  <Button 
                    variant="default"
                    className="w-full sm:w-auto"
                  >
                    <Link to="contact" spy={true} smooth={true} offset={-70} duration={500} className="flex items-center">
                      <Send className="mr-2 h-4 w-4 transition-transform" aria-hidden="true" />
                      Let&apos;s Connect
                    </Link>
                  </Button>
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