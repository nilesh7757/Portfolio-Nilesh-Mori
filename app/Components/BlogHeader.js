"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ThemeToggle"

const BlogHeader = () => {
  return (
    <motion.nav 
      className="sticky top-0 z-50 w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 navbar-glassmorphism transition-all duration-300 rounded-b-2xl shadow-[0_0_15px_5px_rgba(59,130,246,0.5)] bg-gradient-to-r from-gray-900 via-gray-800 to-black" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
        <Link href="/" passHref>
          <Button variant="ghost" className="text-foreground hover:text-primary">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Button>
        </Link>
        <ThemeToggle />
      </div>
    </motion.nav>
  )
}

export default BlogHeader
