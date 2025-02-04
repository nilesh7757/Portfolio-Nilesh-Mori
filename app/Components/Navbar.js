"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-scroll"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const NavItem = ({ to, children }) => (
  <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <Link
      to={to}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      className="cursor-pointer text-gray-600 hover:text-gray-900 transition-colors"
    >
      {children}
    </Link>
  </motion.li>
)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Education", to: "education" },
    { name: "Projects", to: "project" },
    { name: "Contact", to: "contact" },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-sm bg-white/75 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="home" spy={true} smooth={true} offset={-70} duration={500}>
              <span className="font-bold text-2xl cursor-pointer">
                <span className="text-blue-600">N</span>M
              </span>
            </Link>
          </div>

          <div className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <NavItem key={item.name} to={item.to}>
                  {item.name}
                </NavItem>
              ))}
            </ul>
          </div>

          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className="text-lg font-medium text-gray-600 hover:text-gray-900 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
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

