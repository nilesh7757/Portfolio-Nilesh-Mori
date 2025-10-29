'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ExternalLink, ChevronRight, Heart } from 'lucide-react';

const FooterLink = ({ to, children }) => (
  <motion.div
    whileHover={{ x: 4 }}
    className="flex items-center gap-2 text-gray-600 hover:text-primary"
  >
    <ChevronRight className="h-4 w-4" />
    <Link
      to={to}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      className="cursor-pointer"
    >
      {children}
    </Link>
  </motion.div>
);

const SocialButton = ({ href, icon: Icon }) => (
  <Button variant="ghost" size="icon" asChild>
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label="Social link">
      <Icon className="h-5 w-5" aria-hidden="true" />
    </a>
  </Button>
);

const Footer = () => {
  const navigation = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Education', to: 'education' },
    { name: 'Projects', to: 'project' },
    { name: 'Contact', to: 'contact' }
  ];

  const socials = [
    { icon: Github, href: 'https://github.com/nilesh7757' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/nilesh-mori-7757n' },
    { icon: Twitter, href: 'https://x.com/Programmer7757' },
    { icon: ExternalLink, href: 'https://nilesh7757.github.io/NileshMori/' }
  ];

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Card className="mt-16 bg-background">
      <CardContent className="p-8 pb-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground">Nilesh&apos;s Portfolio</h3>
            <p className="text-muted-foreground">
              Thank you for visiting. Keep rising, keep progressing.
            </p>
            <div className="flex gap-4">
              {socials.map((social, index) => (
                <SocialButton key={index} {...social} />
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground">Quick Links</h3>
            <nav className="space-y-2">
              {navigation.map((item) => (
                <FooterLink key={item.name} to={item.to}>
                  {item.name}
                </FooterLink>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground">Contact Info</h3>
            <div className="space-y-3 text-muted-foreground">
              <a 
                href="tel:+917778827757" 
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone className="h-5 w-5 shrink-0 text-primary" />
                <span>7778827757</span>
              </a>
              
              <a 
                href="mailto:nileshmori7757@gmail.com"
                className="flex items-start gap-2 hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5 shrink-0 text-primary mt-1" />
                <span className="break-all">nileshmori7757@gmail.com</span>
              </a>
              
              <a 
                href="https://www.google.com/maps/place/Adityana,Porbandar,+Gujarat+360545"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2  hover:text-primary transition-colors"
              >
                <MapPin className="h-5 w-5 shrink-0 text-primary mt-1" />
                <span>Adityana,Porbandar, Gujarat, India - 360545</span>
              </a>
            </div>
          </div>
        </div>

        <footer className="w-full py-6 bg-background border-t border-border text-center text-muted-foreground text-sm relative">
          <button
            onClick={handleBackToTop}
            className="absolute left-1/2 -top-6 transform -translate-x-1/2 bg-white/30 dark:bg-white/10 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-xl px-4 py-2 rounded-full text-sm font-medium text-foreground hover:bg-white/50 dark:hover:bg-white/20 transition"
            aria-label="Back to Top"
          >
            ↑ Back to Top
          </button>
          <div>
            &copy; {new Date().getFullYear()} Nilesh Mori. All rights reserved.
          </div>
        </footer>
      </CardContent>
    </Card>
  );
};

export default Footer;