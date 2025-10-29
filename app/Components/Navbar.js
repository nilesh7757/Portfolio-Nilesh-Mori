"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link as ScrollLink } from "react-scroll"
import Link from "next/link"
import { Menu, X, ChevronRight, Home, User, Monitor, GraduationCap, Folder, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/ThemeToggle"

const NavItem = ({ to, children, active }) => {
  const isInternalLink = to.startsWith('/');

  const linkContent = (
    <motion.li
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative"
    >
      <span
        className={`cursor-pointer transition-colors relative ${
          active
            ? "text-blue-600 font-medium dark:text-blue-400"
            : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
        }`}
      >
        {children}
        {active && (
          <motion.div
            layoutId="activeSection"
            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </span>
    </motion.li>
  );

  return isInternalLink ? (
    <Link href={to} passHref>{linkContent}</Link>
  ) : (
    <ScrollLink
      to={to}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
    >
      {linkContent}
    </ScrollLink>
  );
};

const MobileNavItem = ({ to, children, active, onClick, index }) => {
  const isInternalLink = to.startsWith('/');

  const linkContent = (
    <motion.div 
      className={`flex items-center justify-between p-4 ${
        active ? "bg-blue-50" : ""
      }`}
      whileHover={{ x: 4 }}
      whileTap={{ scale: 0.98 }}
    >
                <span className={`text-lg font-medium ${
                  active ? "text-blue-600 dark:text-blue-400" : "text-gray-700 dark:text-gray-300"
                }`}>
                  {children}
                </span>      
      <ChevronRight className={`w-5 h-5 ${
        active ? "text-blue-600" : "text-gray-400"
      }`} />
    </motion.div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      {isInternalLink ? (
        <Link href={to} passHref onClick={onClick}>
          {linkContent}
        </Link>
      ) : (
        <ScrollLink
          to={to}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          onClick={onClick}
          className="block relative cursor-pointer"
        >
          {linkContent}
        </ScrollLink>
      )}
    </motion.div>
  );
};

const MenuIcon = ({ isOpen }) => (
  <div className="relative w-6 h-6">
    <AnimatePresence mode="wait">
      {isOpen ? (
        <motion.div
          key="close"
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <X className="w-6 h-6 text-gray-700" />
        </motion.div>
      ) : (
        <motion.div
          key="menu"
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Menu className="w-6 h-6 text-gray-700" />
        </motion.div>
      )}
    </AnimatePresence>
  </div>
)

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home")
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Home", to: "home", icon: <Home className="w-5 h-5 mr-2" /> },
    { name: "About", to: "about", icon: <User className="w-5 h-5 mr-2" /> },
    { name: "Skills", to: "skills", icon: <Monitor className="w-5 h-5 mr-2" /> },
    { name: "Education", to: "education", icon: <GraduationCap className="w-5 h-5 mr-2" /> },
    { name: "Projects", to: "project", icon: <Folder className="w-5 h-5 mr-2" /> },
    { name: "Blog", to: "/blog", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-book-open"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg> },
    { name: "Contact", to: "contact", icon: <Mail className="w-5 h-5 mr-2" /> },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const currentPath = window.location.pathname;
      if (currentPath.startsWith('/blog')) {
        setActiveSection('/blog');
        return;
      }

      const sections = navItems.filter(item => !item.to.startsWith('/')).map((item) => item.to);
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  return (
    <nav className="sticky top-0 z-50 w-full">
      <motion.div 
        className="absolute inset-0 bg-white/40 dark:bg-neutral-900/60 backdrop-blur-xl border-b border-white/30 dark:border-white/10 shadow-2xl transition-all duration-300 rounded-b-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex items-center h-20 md:h-24 gap-4 md:gap-8 justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className="cursor-pointer select-none">
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="font-bold text-2xl flex items-center gap-1"
              >
                <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-400 dark:from-blue-500 dark:via-blue-300 dark:to-blue-300 text-transparent bg-clip-text drop-shadow-glow animate-logo-glow ">N</span>
                <span className="text-foreground drop-shadow-glow">M</span>
              </motion.span>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4 justify-end flex-1">
            <ul className="flex space-x-4 lg:space-x-6 xl:space-x-8">
              {navItems.map((item) => (
                <NavItem key={item.name} to={item.to} active={activeSection === item.to}>
                  {item.icon}
                  {item.name}
                </NavItem>
              ))}
            </ul>
            <div className="ml-4">
              <ThemeToggle />
            </div>
          </div>

          <div className="flex items-center md:hidden gap-2">
            <ThemeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className={`h-6 w-6 ${isOpen ? 'hidden' : 'block'}`} />
                  <X className={`h-6 w-6 ${isOpen ? 'block' : 'hidden'}`} />
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-full max-w-xs p-0 bg-white/60 dark:bg-neutral-900/80 backdrop-blur-2xl border-l border-white/30 dark:border-white/10 shadow-2xl animate-slide-in rounded-l-3xl"
              >
                <motion.div 
                  className="flex flex-col mt-5 py-8"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: { transition: { staggerChildren: 0.08 } },
                    hidden: {},
                  }}
                >
                  <AnimatePresence mode="wait">
                    {navItems.map((item, index) => (
                      <MobileNavItem
                        key={item.name}
                        to={item.to}
                        active={activeSection === item.to}
                        onClick={() => setIsOpen(false)}
                        index={index}
                      >
                        {item.icon}
                        {item.name}
                      </MobileNavItem>
                    ))}
                  </AnimatePresence>
                </motion.div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar