"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform, useAnimation } from "framer-motion"
import { Link } from "react-scroll"
import { Download, Github, Linkedin, Twitter, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Typed from "typed.js"

const Home = () => {
  const typedRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isTapped, setIsTapped] = useState(false)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const imageControls = useAnimation()

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        '<span class="text-blue-500">Fullstack</span> Developer',
        '<span class="text-green-500">Mobile App</span> Developer',
        '<span class="text-purple-500">Tech</span> Innovator',
      ],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
      cursorChar: "|",
      contentType: "html",
    })

    return () => typed.destroy()
  }, [])

  useEffect(() => {
    imageControls.start({
      y: [0, -10, 0],
      transition: {
        duration: 5,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    })
  }, [imageControls])

  const handleImageTap = () => {
    setIsTapped(true)
    setTimeout(() => setIsTapped(false), 1000)
  }

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-white to-gray-100"
      style={{ opacity }}
    >
      <Card className="w-full max-w-4xl bg-white/80 backdrop-blur-lg shadow-xl">
        <CardContent className="p-6 sm:p-10">
          <div className="flex flex-col items-center gap-8 sm:gap-12">
            <motion.div
              className="relative w-48 h-48 sm:w-56 sm:h-56"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={imageControls}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              onTapStart={handleImageTap}
            >
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"
                animate={{
                  scale: isHovered || isTapped ? 1.05 : 1,
                  rotate: isHovered || isTapped ? 180 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
              <Image src="/web-1.jpg" alt="Nilesh Mori" fill className="rounded-full object-cover p-1" priority />
              <motion.div
                className="absolute inset-0 rounded-full bg-blue-500 opacity-0"
                animate={{ opacity: isTapped ? 0.3 : 0, scale: isTapped ? 1.2 : 1 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>

            <div className="space-y-4 text-center">
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Nilesh Mori
                </span>
              </motion.h1>

              <motion.div
                className="text-xl sm:text-2xl md:text-3xl font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <span ref={typedRef}></span>
              </motion.div>

              <motion.p
                className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                Passionate about creating innovative digital solutions and transforming ideas into reality through code.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Button
                variant="default"
                size="lg"
                className="group w-full sm:w-auto"
                onClick={() => window.open("/CV.pdf", "_blank")}
              >
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Download CV
              </Button>

              <Button variant="outline" size="lg" className="group cursor-pointer w-full sm:w-auto" asChild>
                <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>
                  Let's Connect
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              className="flex justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              {[
                { icon: <Github className="h-5 w-5" />, href: "https://github.com/nilesh7757" },
                { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/nilesh-mori-7757n" },
                { icon: <Twitter className="h-5 w-5" />, href: "https://x.com/Programmer7757" },
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
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default Home

