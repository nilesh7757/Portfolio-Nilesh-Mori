'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaFacebook, FaGithub, FaLinkedin, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from 'next/link';
import Typed from 'typed.js';
import { useRef,useEffect } from 'react';


const Nilesh = () => {
  const el = useRef(null)
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['<span style="background: linear-gradient(90deg, #00bcd4, #00838f); -webkit-background-clip: text; background-clip: text; color: transparent;">Fullstack</span> Webdevloper','<span style="background: linear-gradient(90deg, #26a69a, #00796b); -webkit-background-clip: text; background-clip: text; color: transparent;">Android</span> Devloper'],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 500,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
    <div className='h-[90vh] flex md:flex-row flex-col px-10 gap-10 justify-center items-center lg:px-32 md:px-0 mx-auto w-[90vw]'>
        <div className="image drop-shadow-2xl rounded">
        <Image
        className='relative rounded-full'
      src="/web-1.jpg"
      width={350}
      height={350}
      alt="Picture of the author"
    />
        </div>
        <div className=' h-fit flex text-center md:w-[50%] w-[100%] flex-col md:gap-y-6 gap-4'>
            <h3 className='lg:text-3xl  md:text-2xl text-xl font-semibold'>Hey,</h3>
            <h2 className='lg:text-5xl  md:text-4xl text-3xl font-bold'>Nilesh <span className='bg-gradient-to-r from-cyan-500 to-cyan-800 ... bg-clip-text text-transparent'>Mori</span></h2>
            <h3 className='lg:text-4xl  md:text-3xl text-2xl font-semibold'><span ref={el}></span></h3>
            <div className="btns mx-auto text-lg md:flex-row flex-col flex gap-3">
              <motion.button whileHover={{scale:"1.05", backgroundColor:"white",color:"black",fontWeight:"700"}} className='Cvbtn bg-black border-2  border-black text-white lg:w-[10rem] md:w-32 w-[10rem] py-2 rounded-3xl'><Link href="./Result.pdf" download={"Result"}> Download CV </Link></motion.button>
              <motion.button whileHover={{scale:"1.05",backgroundColor:"black",color:"white",fontWeight:"700"}} className='Aboutbtn border-2 border-black  lg:w-[10rem] md:w-32 py-2 w-[10rem] rounded-3xl'>About Me</motion.button>
            </div>
            <div 
        className="contacts mx-auto flex gap-x-4">
          <motion.div whileHover={{scale:"1.05"}}><Link href="https://github.com/nilesh7757"><FaGithub size={50}/></Link></motion.div>
          <motion.div whileHover={{scale:"1.05"}}><Link href="https://www.facebook.com/akash.mori.792/"><FaFacebook size={50}/></Link></motion.div>
          <motion.div whileHover={{scale:"1.05"}} className='size-[50px] rounded-full flex items-center justify-center bg-black text-white'><Link href="https://github.com/nilesh7757"><FaLinkedinIn size={40}/></Link></motion.div>
          <motion.div whileHover={{scale:"1.05"}} className='size-[50px] rounded-full flex items-center justify-center bg-black text-white'><Link href="https://github.com/nilesh7757"><FaXTwitter size={35}/></Link></motion.div>
         
      </div>
        </div>
    </div>
    </>
  )
}

export default Nilesh
