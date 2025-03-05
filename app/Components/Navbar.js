"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link as ScrollLink } from "react-scroll"
import Link from "next/link"
import { Menu, X, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const NavItem = ({ to, children, active }) => (
  <motion.li
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="relative"
  >
    <ScrollLink
      to={to}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      className={`cursor-pointer transition-colors relative ${
        active
          ? "text-blue-600 font-medium"
          : "text-gray-600 hover:text-gray-900"
      }`}
    >
      {children}
      {active && (
        <motion.div
          layoutId="activeSection"
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
    </ScrollLink>
  </motion.li>
)

const MobileNavItem = ({ to, children, active, onClick, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <ScrollLink
        to={to}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        onClick={onClick}
        className="block relative cursor-pointer"
      >
        <motion.div 
          className={`flex items-center justify-between p-4 ${
            active ? "bg-blue-50" : ""
          }`}
          whileHover={{ x: 4 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className={`text-lg font-medium ${
            active ? "text-blue-600" : "text-gray-700"
          }`}>
            {children}
          </span>
          
          <ChevronRight className={`w-5 h-5 ${
            active ? "text-blue-600" : "text-gray-400"
          }`} />
        </motion.div>
      </ScrollLink>
    </motion.div>
  )
}

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
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Education", to: "education" },
    { name: "Projects", to: "project" },
    { name: "Contact", to: "contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.to)
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="sticky top-0 z-50 w-full">
      <motion.div 
        className="absolute inset-0 bg-white/80 backdrop-blur-xl border-b border-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="cursor-pointer">
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="font-bold text-2xl"
              >
                <span className="text-blue-600">N</span>
                <span className="text-gray-800">M</span>
              </motion.span>
            </Link>
          </div>

          <div className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <NavItem
                  key={item.name}
                  to={item.to}
                  active={activeSection === item.to}
                >
                  {item.name}
                </NavItem>
              ))}
            </ul>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-transparent md:hidden">
                <Menu className={`h-6 w-6 ${isOpen ? 'hidden' : 'block'}`} />
                <X className={`h-6 w-6 ${isOpen ? 'block' : 'hidden'}`} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs p-0 bg-white/95 backdrop-blur-2xl border-l border-gray-200">
              <motion.div 
                className="flex flex-col mt-5 py-8"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <AnimatePresence mode="wait">
                  {navItems.map((item) => (
                    <ScrollLink
                      key={item.name}
                      to={item.to}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      onClick={() => setIsOpen(false)}
                      className={`px-6 py-3 text-lg transition-colors ${
                        activeSection === item.to
                          ? "text-blue-600 font-medium bg-blue-50"
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                      }`}
                    >
                      {item.name}
                    </ScrollLink>
                  ))}
                </AnimatePresence>
              </motion.div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

export default Navbar