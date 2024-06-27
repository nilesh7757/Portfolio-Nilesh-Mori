'use client'
import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { HiX } from "react-icons/hi";
import { motion,AnimatePresence, spring } from 'framer-motion';
import Link from 'next/link';
const Navbar = () => {
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
            style={{zIndex:10}}
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
      <ul className='text-xl flex pt-10 flex-col text-black gap-8'>
            <motion.li whileHover={{scale:"1.05"}} ><Link href = "#Home">Home</Link></motion.li>
            <motion.li whileHover={{scale:"1.05"}} ><Link href = "#About">About Me</Link></motion.li>
            <motion.li whileHover={{scale:"1.05"}} ><Link href = "#skill">Skills</Link></motion.li>
            <motion.li whileHover={{scale:"1.05"}} ><Link href = "#">Education</Link></motion.li>
            <motion.li whileHover={{scale:"1.05"}} ><Link href = "#">Contact Me</Link></motion.li>
          </ul>
    </div>
          </motion.div>
        )}
      </AnimatePresence>
    <div className='h-20 shadow-md w-full flex items-center  md:justify-between lg:px-44 md:px-20'>
    <div className="hamburger z-20 md:hidden mx-4 bg-black text-white p-2 rounded-full" onClick={showNav}>{icon}</div>
        <div className='flex mx-auto md:mx-0 items-center h-full' >
            <span className='border-black border-2 rounded-full p-2 font-bold text-lg '>NM</span>
        </div>
    <div className='md:flex hidden items-center h-full text-lg'>
        <ul className='flex gap-8'>
            <motion.li whileHover={{scale:"1.05",fontWeight:"bold"}} className='cursor-pointer'>Home</motion.li>
            <motion.li whileHover={{scale:"1.05",fontWeight:"bold"}} className='cursor-pointer'>About</motion.li>
            <motion.li whileHover={{scale:"1.05",fontWeight:"bold"}} className='cursor-pointer'>Skills</motion.li>
            <motion.li whileHover={{scale:"1.05",fontWeight:"bold"}} className='cursor-pointer'>Education</motion.li>
            <motion.li whileHover={{scale:"1.05",fontWeight:"bold"}} className='cursor-pointer'>Contact</motion.li>
        </ul>
    </div>
    </div>
    </>
  )
}

export default Navbar
