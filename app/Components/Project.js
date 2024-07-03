'use client'
import React, { useState,useRef } from 'react';
import { FaGithub,FaCode, FaEye } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {Tilt} from 'react-next-tilt';
const ProjectCard = ({ src,name,demo,code }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Tilt
    disableScrollOnTouch={false}
    className="relative shadow-lg ease-in-out transition-transform hover:shadow-2xl   mx-auto rounded-md  w-[90%] h-[300px]  "
    
    >
    <motion.div 
    className='flex justify-center'
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      // whileHover={{scale:"1.05"}}
      onTap={() => setIsHovered(!isHovered)}
    >
      <Image
        className="absolute z-0 w-full h-full object-cover rounded-md"
        src={src}
        layout="fill"
        objectFit="cover"
      />
      <div className='absolute w-[100%] bg-white flex justify-center items-center text-2xl font-bold bottom-0 h-[10%]'>{name}</div>
      <div className={`absolute w-[90%] z-30 duration-700 ease-in-out flex justify-between ${isHovered ? "bottom-10 opacity-100" : "-bottom-10 opacity-0"}`}>
        <button className="bg-black text-white px-4 py-2 rounded-md">
          <Link href={demo} className='flex items-center gap-2'> <FaEye /> Demo</Link>
        </button>
        <button className="bg-black text-white px-4 py-2 rounded-md"><Link href={code} className='flex items-center gap-2'><FaGithub/> Code</Link></button>
      </div>
    </motion.div>
      </Tilt>
  );
};

const Project = () => {
  return (
    <div id="project" className="py-6">
      <h2 className="text-3xl flex justify-center gap-3 items-center font-bold text-center">
        <FaCode /> Projects
      </h2>
      <div className='w-full mt-3 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 '>
      <div className="w-full  mt-5 flex md:flex-row flex-col">
        <ProjectCard src="./PassOP.png" name="PassOP" demo="https://nilesh7757.github.io/PassOP/" code={"https://github.com/nilesh7757/passop"} />
      </div>
      <div className="w-full mt-5 flex md:flex-row flex-col">
        <ProjectCard src="./Todo.png" name="TodoList" demo="https://nilesh7757.github.io/TodoList/" code={"https://github.com/nilesh7757/TodoList"} />
      </div>
      <div className="w-full mt-5 flex md:flex-row flex-col">
        <ProjectCard src="./Spotify.png" name="Spotify Clone" demo={"https://nilesh7757.github.io/Spotify-Clone-HTML/"} code={"https://github.com/nilesh7757/Spotify-Clone-HTML"} />
      </div>
      </div>
    </div>
  );
};

export default Project;
