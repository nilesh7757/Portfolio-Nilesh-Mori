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
    className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
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
  <Button
    variant="outline"
    size="icon"
    className="rounded-full hover:scale-110 transition-transform"
    asChild
  >
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Icon className="h-5 w-5" />
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

  return (
    <Card className="mt-16 bg-gray-50">
      <CardContent className="p-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Nilesh's Portfolio</h3>
            <p className="text-gray-600">
              Thank you for visiting. Keep rising, keep progressing.
            </p>
            <div className="flex gap-4">
              {socials.map((social, index) => (
                <SocialButton key={index} {...social} />
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Quick Links</h3>
            <nav className="space-y-2">
              {navigation.map((item) => (
                <FooterLink key={item.name} to={item.to}>
                  {item.name}
                </FooterLink>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Contact Info</h3>
            <div className="space-y-3 text-gray-600">
              <a 
                href="tel:+917778827757" 
                className="flex items-center gap-2 hover:text-blue-600 transition-colors"
              >
                <Phone className="h-5 w-5 shrink-0 text-blue-500" />
                <span>7778827757</span>
              </a>
              
              <a 
                href="mailto:nileshmori7757@gmail.com"
                className="flex items-start gap-2 hover:text-blue-600 transition-colors"
              >
                <Mail className="h-5 w-5 shrink-0 text-blue-500 mt-1" />
                <span className="break-all">nileshmori7757@gmail.com</span>
              </a>
              
              <a 
                href="https://www.google.com/maps/place/Adityana,Porbandar,+Gujarat+360545"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-blue-600 transition-colors"
              >
                <MapPin className="h-5 w-5 shrink-0 text-blue-500 mt-1" />
                <span>Adityana,Porbandar, Gujarat, India - 360545</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center flex items-center justify-center gap-2 text-gray-600">
          Made with <Heart className="h-4 w-4 text-red-500 animate-pulse" /> by Nilesh Mori
        </div>
      </CardContent>
    </Card>
  );
};

export default Footer;