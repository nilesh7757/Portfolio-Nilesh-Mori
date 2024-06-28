'use client'
import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { HiX } from "react-icons/hi";
import { motion,AnimatePresence, spring } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css'
// const closemenu = ()=> setcli
const Navbar = () => {
  const router = useRouter();
  const [isVisible, setVisible] = useState(false);
  const [icon, setIcon] = useState(<GiHamburgerMenu />);

  const showNav = () => {
    setIcon(isVisible ? <GiHamburgerMenu /> : <HiX />);
    setVisible(!isVisible);
  };

  return (
    <>
    <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{
              position: "fixed",
              opacity:0,
              width: "100%",
              height: "100%",
              clipPath: "ellipse(0% 50% at 0% 50%)",
            }}
            animate={{
              opacity:1,
              clipPath: "ellipse(40% 50% at 0% 50%)",
            }}
            exit={{
              clipPath: "ellipse(0% 50% at 0% 50%)",
              transition:{
              }
            }}
            transition={{
              ease: "linear",
              type:spring
            }}
          >
            <div className='bg-gray-200 border shadow-[100px_35px_60px_-15px_rgba(0,0,0,0.3)] border-black md:hidden w-[50%] h-[100vh] px-4 pt-5 '>
      <ul className='text-xl mt-10 flex pt-10 flex-col text-black gap-8'>
            <motion.li whileHover={{scale:1.05,fontWeight:"bold",transition: { duration: 0.1, ease: "easeOut" }}} ><Link  to="home" 
                spy={true} 
                smooth={true} 
                offset={-200} 
                duration={500} 
                >
              Home
            </Link></motion.li>
            <motion.li whileHover={{scale:1.05,fontWeight:"bold",transition: { duration: 0.1, ease: "easeOut" }}} ><Link  to="about" 
                spy={true} 
                smooth={true} 
                offset={-80} 
                duration={500} 
                >
              About
            </Link></motion.li>
            <motion.li whileHover={{scale:1.05,fontWeight:"bold",transition: { duration: 0.1, ease: "easeOut" }}} ><Link  to="skills" 
                spy={true} 
                smooth={true} 
                offset={-75} 
                duration={500} 
                >
              Skills
            </Link></motion.li>
            <motion.li whileHover={{scale:1.05,fontWeight:"bold",transition: { duration: 0.1, ease: "easeOut" }}} ><Link  to="education" 
                spy={true} 
                smooth={true} 
                offset={-75} 
                duration={500} 
                >
              Education
            </Link></motion.li>
            <motion.li whileHover={{scale:1.05,fontWeight:"bold",transition: { duration: 0.1, ease: "easeOut" }}} ><Link  to="contact" 
                spy={true} 
                smooth={true} 
                offset={-75} 
                duration={500} 
                >
              Contact
            </Link></motion.li>
          </ul>
    </div>
          </motion.div>
        )}
      </AnimatePresence>
    <div className='h-20 shadow-md justify-center w-full flex items-center sticky top-0  md:justify-between lg:px-44 md:px-20'>
    <div className="hamburger fixed left-0 z-20 md:hidden mx-4 bg-black text-white p-2 rounded-full" onClick={showNav}>{icon}</div>
        <div className='flex md:mx-0 items-center h-full' >
            <span className='border-black border-2 rounded-full p-2 font-bold text-lg '>NM</span>
        </div>
    <div className='md:flex hidden items-center h-full text-lg'>
        <ul className='flex gap-8'>
            <motion.li whileHover={{scale:1.05,fontWeight:"bold",transition: { duration: 0.1, ease: "easeOut" }}} onClick={() => {router.push('/Nilesh')}} className={`cursor-pointer`}>
            <Link  to="home"
                spy={true} 
                smooth={true} 
                offset={-250} 
                duration={500} 
                >
              Home
            </Link> </motion.li>
            <motion.li whileHover={{scale:1.05,fontWeight:"bold",transition: { duration: 0.1, ease: "easeOut" }}} onClick={() => {router.push('/About')}}   className='cursor-pointer'>
              <Link  to="about" 
                spy={true} 
                smooth={true} 
                offset={-75} 
                duration={500} 
                >
              About
            </Link> </motion.li>
            <motion.li whileHover={{scale:1.05,fontWeight:"bold",transition: { duration: 0.1, ease: "easeOut" }}} onClick={() => {router.push('/About')}}   className='cursor-pointer'>
              <Link  to="skills" 
                spy={true} 
                smooth={true} 
                offset={-75} 
                duration={500} 
                >
              Skills
            </Link> </motion.li>
            <motion.li whileHover={{scale:1.05,fontWeight:"bold",transition: { duration: 0.1, ease: "easeOut" }}} onClick={() => {router.push('/About')}}   className='cursor-pointer'>
              <Link  to="education" 
                spy={true} 
                smooth={true} 
                offset={-75} 
                duration={500} 
                >
              Education
            </Link> </motion.li>
            <motion.li whileHover={{scale:1.05,fontWeight:"bold",transition: { duration: 0.1, ease: "easeOut" }}} onClick={() => {router.push('/About')}}   className='cursor-pointer'>
              <Link  to="contact" 
                spy={true} 
                smooth={true} 
                offset={-75} 
                duration={500} 
                >
              Contact
            </Link> </motion.li>
            
        </ul>
    </div>
    </div>
    </>
  )
}

export default Navbar
