"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link as ScrollLink } from "react-scroll"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronRight, Home, User, Monitor, GraduationCap, Folder, Mail, Trophy, Github, Linkedin, Twitter, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/ThemeToggle"

const NavItem = ({ to, children, active }) => {
  const pathname = usePathname();
  const isHome = pathname === '/';
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

  if (isInternalLink) {
    return <Link href={to} passHref>{linkContent}</Link>;
  }

  if (isHome) {
    return (
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
  }

  return (
    <Link href={`/#${to}`} passHref>
      {linkContent}
    </Link>
  );
};

const MobileNavItem = ({ to, children, active, onClick, index, icon }) => {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const isInternalLink = to.startsWith('/');

  const content = (
    <motion.div 
      className={`flex items-center gap-4 p-3 rounded-xl transition-all duration-300 ${
        active 
          ? "bg-blue-50/80 dark:bg-blue-900/20 border border-blue-200/50 dark:border-blue-700/30" 
          : "hover:bg-gray-50 dark:hover:bg-white/5"
      }`}
      whileHover={{ scale: 1.02, x: 4 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className={`p-2 rounded-lg ${
        active ? "bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400" : "bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400"
      }`}>
        {icon}
      </div>
      <span className={`text-base font-medium flex-1 ${
        active ? "text-blue-700 dark:text-blue-300" : "text-gray-700 dark:text-gray-300"
      }`}>
        {children}
      </span>      
      {active && (
        <motion.div
          layoutId="activeDot"
          className="w-2 h-2 rounded-full bg-blue-500"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        />
      )}
    </motion.div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="mb-2"
    >
      {isInternalLink ? (
        <Link href={to} passHref onClick={onClick} className="block">
          {content}
        </Link>
      ) : isHome ? (
        <ScrollLink
          to={to}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          onClick={onClick}
          className="block relative cursor-pointer"
        >
          {content}
        </ScrollLink>
      ) : (
        <Link href={`/#${to}`} passHref onClick={onClick} className="block">
          {content}
        </Link>
      )}
    </motion.div>
  );
};

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home")
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: "Home", to: "home", icon: <Home className="w-5 h-5" /> },
    { name: "About", to: "about", icon: <User className="w-5 h-5" /> },
    { name: "Experience", to: "experience", icon: <Briefcase className="w-5 h-5" /> },
    { name: "Projects", to: "project", icon: <Folder className="w-5 h-5" /> },
    { name: "Blog", to: "/blog", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg> },
    { name: "Contact", to: "contact", icon: <Mail className="w-5 h-5" /> },
  ]

  const socials = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/nilesh7757" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/nileshmori7757" },
    { icon: <Twitter className="w-5 h-5" />, href: "https://x.com/Programmer7757" }
  ];

  useEffect(() => {
    if (pathname.startsWith('/blog')) {
      setActiveSection('/blog');
    } else {
        const handleScroll = () => {
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
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [pathname, navItems]);

  return (
    <nav className="sticky top-0 z-50 w-full md:hidden">
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
            <ul className="hidden space-x-4 lg:space-x-6 xl:space-x-8">
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
                <Button variant="ghost" size="icon" className="hover:bg-transparent">
                  <Menu className={`h-6 w-6 ${isOpen ? 'hidden' : 'block'}`} />
                  <X className={`h-6 w-6 ${isOpen ? 'block' : 'hidden'}`} />
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-[300px] sm:w-[350px] p-0 bg-white/80 dark:bg-neutral-900/90 backdrop-blur-3xl border-l border-white/20 shadow-2xl"
              >
                <div className="flex flex-col h-full">
                  {/* Sidebar Header */}
                  <div className="p-6 pb-2 border-b border-gray-100 dark:border-gray-800">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-bold text-2xl flex items-center gap-1">
                        <span className="bg-gradient-to-r from-blue-500 to-blue-400 text-transparent bg-clip-text">N</span>
                        <span className="text-foreground">M</span>
                      </span>
                      {/* Close button is handled by Sheet primitive, but we can add extra if needed */}
                    </div>
                    <p className="text-sm text-muted-foreground">Navigate through my portfolio</p>
                  </div>

                  {/* Navigation Items */}
                  <motion.div 
                    className="flex-1 overflow-y-auto py-6 px-4"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      visible: { transition: { staggerChildren: 0.05 } },
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
                          icon={item.icon}
                        >
                          {item.name}
                        </MobileNavItem>
                      ))}
                    </AnimatePresence>
                  </motion.div>

                  {/* Sidebar Footer */}
                  <div className="p-6 border-t border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-black/20">
                    <p className="text-xs text-center text-muted-foreground mb-4">Connect with me</p>
                    <div className="flex justify-center gap-4">
                      {socials.map((social, idx) => (
                        <motion.a
                          key={idx}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-white dark:bg-neutral-800 shadow-sm hover:shadow-md text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-all"
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {social.icon}
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar