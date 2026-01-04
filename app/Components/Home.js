"use client";
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Download, Github, Linkedin, Twitter, ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Typed from 'typed.js';

const Nilesh = () => {
  const typedRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        '<span class="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Fullstack</span> Developer',
        '<span class="bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent">Mobile App</span> Developer',
        '<span class="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Tech</span> Innovator'
      ],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
      cursorChar: '|',
      contentType: 'html'
    });

    return () => typed.destroy();
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto py-12 md:py-20">
      <CardContent className="p-8 glassmorphism">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-6 text-center lg:text-left">
              <motion.h1 
                className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Hi, I&apos;m <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Nilesh Mori</span>
              </motion.h1>

              <motion.div
                className="font-sans text-2xl md:text-3xl lg:text-4xl font-medium leading-snug"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <span ref={typedRef}></span>
              </motion.div>

              <motion.p
                className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                Passionate about creating innovative digital solutions and transforming ideas into reality through code.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <Button 
                  variant="default" 
                  size="lg"
                  className="group"
                  onClick={() => window.open('./CV.pdf', '_blank')}
                >
                  <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                  Download CV
                </Button>

                <Button 
                  variant="outline" 
                  size="lg"
                  className="group cursor-pointer"
                  asChild
                >
                  <Link 
                    to="contact" 
                    spy={true} 
                    smooth={true} 
                    offset={-70} 
                    duration={500}
                  >
                    Let&apos;s Connect
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>

              <motion.div 
                className="flex justify-center lg:justify-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                {[
                  { icon: <Github className="h-5 w-5" />, href: "https://github.com/nilesh7757" },
                  { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/nilesh-mori-7757n" },
                  { icon: <Twitter className="h-5 w-5" />, href: "https://x.com/Programmer7757" }
                ].map((social, index) => (
                  <Button
                    key={index}
                    variant="ghost" 
                    size="icon" 
                    className="rounded-full hover:scale-110 transition-transform"
                    asChild
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                      {social.icon}
                    </a>
                  </Button>
                ))}
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div 
              className="relative w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] mx-auto"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"
                animate={{
                  scale: isHovered ? 1.05 : 1,
                  rotate: isHovered ? 180 : 0
                }}
                transition={{ duration: 0.3 }}
              />
              <Image
                src="/web-1.jpg"
                alt="Nilesh Mori"
                fill
                className="rounded-full object-cover p-2"
                priority
              />
            </div>
          </motion.div>
        </div>
      </CardContent>
    </div>
  );
};

export default Nilesh;