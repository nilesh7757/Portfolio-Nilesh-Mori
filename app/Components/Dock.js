'use client';

import React, { useRef, useState, useEffect, useMemo } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Link as ScrollLink, scroller } from 'react-scroll';
import {
  Home,
  User,
  FolderGit2,
  FileText,
  Github,
  Linkedin,
  Mail,
  Monitor,
  Briefcase,
  Trophy,
  GraduationCap,
  BookOpen
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

// Helper to wait for element to exist in DOM
const waitForElement = (id) => {
  return new Promise((resolve) => {
    if (typeof document !== 'undefined') {
      const element = document.getElementById(id);
      if (element) {
        return resolve(element);
      }

      const observer = new MutationObserver(() => {
        const element = document.getElementById(id);
        if (element) {
          resolve(element);
          observer.disconnect();
        }
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });
    }
  });
};

const DockItem = ({ mouseX, icon: Icon, label, href, external = false, onClick, isActive }) => {
  let ref = useRef(null);
  const pathname = usePathname();
  const router = useRouter();

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
      className={`aspect-square w-10 rounded-full border shadow-lg flex items-center justify-center cursor-pointer backdrop-blur-md transition-colors duration-300 ${
        isActive 
          ? "bg-blue-500/20 border-blue-500/50 text-blue-500 dark:text-blue-400" 
          : "bg-background/80 dark:bg-neutral-800/80 border-white/20 hover:bg-background dark:hover:bg-neutral-700 text-foreground"
      }`}
    >
      <Icon className="h-full w-full p-2" />
    </motion.div>
  );

  const isHashLink = href.startsWith('/#');
  const targetId = isHashLink ? href.replace('/#', '') : null;
  const isHomePage = pathname === '/';

  const handleNavigation = async (e) => {
    if (isHashLink && !isHomePage) {
      e.preventDefault();
      router.push('/');
      
      // Wait for the target element to render before scrolling
      if (targetId) {
        await waitForElement(targetId);
        // Small buffer to ensure layout is stable
        setTimeout(() => {
          scroller.scrollTo(targetId, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
            offset: -70,
          });
        }, 100);
      }
    }
    
    if (onClick) onClick(e);
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          {onClick ? (
            <div onClick={handleNavigation}>{content}</div>
          ) : (isHashLink && isHomePage) ? (
            <span>
              <ScrollLink 
                to={targetId} 
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500}
                className="cursor-pointer block"
              >
                {content}
              </ScrollLink>
            </span>
          ) : (
            <Link href={href} target={external ? "_blank" : undefined} onClick={handleNavigation}>
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
  const [activeSection, setActiveSection] = useState("home");

  const items = useMemo(() => [
    { icon: Home, label: 'Home', href: '/' },
    { icon: User, label: 'About', href: '/#about' },
    { icon: Briefcase, label: 'Journey', href: '/#experience' },
    { icon: Monitor, label: 'Skills', href: '/#skills' },
    { icon: Trophy, label: 'Stats', href: '/#cp' },
    { icon: FolderGit2, label: 'Projects', href: '/projects' },
    { icon: BookOpen, label: 'Blog', href: '/blog' },
    { icon: FileText, label: 'Resume', href: '/CV.pdf', external: true },
    { icon: Github, label: 'GitHub', href: 'https://github.com/nilesh7757', external: true },
    { icon: Mail, label: 'Contact', href: '/#contact' },
  ], []);

  const pathname = usePathname();

  useEffect(() => {
    if (pathname.startsWith('/blog')) {
      setActiveSection('blog');
      return;
    }

    if (pathname.startsWith('/projects')) {
      setActiveSection('projects');
      return;
    }

    const handleScroll = () => {
      if (window.scrollY < 50) {
        setActiveSection('home');
        return;
      }

      const sections = items
        .filter(item => item.href.startsWith('/#') || item.href === '/')
        .map(item => item.href === '/' ? 'home' : item.href.replace('/#', ''));

      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname, items]);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 hidden md:flex h-16 items-end gap-4 rounded-2xl bg-white/10 dark:bg-black/10 px-4 pb-3 border border-white/20 shadow-2xl backdrop-blur-md"
    >
      {items.map((item, index) => {
        let sectionId;
        if (item.href === '/') {
          sectionId = 'home';
        } else if (item.href.startsWith('/#')) {
          sectionId = item.href.replace('/#', '');
        } else {
          sectionId = item.href.replace('/', '');
        }
        
        return (
          <DockItem 
            key={index} 
            mouseX={mouseX} 
            {...item}
            isActive={activeSection === sectionId} 
          />
        );
      })}
    </motion.div>
  );
}
