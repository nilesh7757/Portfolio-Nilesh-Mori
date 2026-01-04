'use client';

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Link from 'next/link';
import { 
  Home, 
  User, 
  FolderGit2, 
  FileText, 
  Github, 
  Linkedin, 
  Mail, 
  Monitor 
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const DockItem = ({ mouseX, icon: Icon, label, href, external = false, onClick }) => {
  let ref = useRef(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  let widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  const content = (
    <motion.div
      ref={ref}
      style={{ width }}
      className="aspect-square w-10 rounded-full bg-background/80 dark:bg-neutral-800/80 border border-white/20 shadow-lg flex items-center justify-center cursor-pointer hover:bg-background dark:hover:bg-neutral-700 backdrop-blur-md"
    >
      <Icon className="h-full w-full p-2 text-foreground" />
    </motion.div>
  );

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          {onClick ? (
            <div onClick={onClick}>{content}</div>
          ) : (
            <Link href={href} target={external ? "_blank" : undefined}>
              {content}
            </Link>
          )}
        </TooltipTrigger>
        <TooltipContent sideOffset={10} className="bg-background/80 backdrop-blur text-foreground border-border">
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default function Dock() {
  let mouseX = useMotionValue(Infinity);

  const items = [
    { icon: Home, label: 'Home', href: '/' },
    { icon: User, label: 'About', href: '/#about' },
    { icon: Monitor, label: 'Skills', href: '/#skills' },
    { icon: FolderGit2, label: 'Projects', href: '/projects' },
    { icon: FileText, label: 'Resume', href: '/CV.pdf', external: true }, // Opens in new tab
    { icon: Github, label: 'GitHub', href: 'https://github.com/nilesh7757', external: true },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/nileshmori7757', external: true },
    { icon: Mail, label: 'Contact', href: '/#contact' },
  ];

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 hidden md:flex h-16 items-end gap-4 rounded-2xl bg-white/10 dark:bg-black/10 px-4 pb-3 border border-white/20 shadow-2xl backdrop-blur-md"
    >
      {items.map((item, index) => (
        <DockItem 
          key={index} 
          mouseX={mouseX} 
          {...item} 
        />
      ))}
    </motion.div>
  );
}
