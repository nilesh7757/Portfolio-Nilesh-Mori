"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoPerson } from "react-icons/io5";
import { Link } from 'react-scroll';
const About = () => {
  const [isFlipped,setIsFlipped] = useState();
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <>
      <div id="about" className="h-fit md:h-[100vh] py-6 flex flex-col items-center">
        <h2 className="md:text-4xl text-3xl font-bold text-center flex gap-2"><IoPerson/> About <span className="bg-gradient-to-r from-green-500 to-green-200 ... bg-clip-text text-transparent">Me</span></h2>
        <div className="abt w-[90%] my-10 lg:my-auto flex flex-col md:flex-row items-center justify-center gap-20 h-[80%]">
          <motion.div
              onHoverStart={handleFlip}
              onHoverEnd={handleFlip}
              onTap={handleFlip}
          >
          <motion.div 
              whileHover={{scale:1.05,transition: { duration: 0.1, ease: "easeOut" }}}
              animate={{ rotateY: isFlipped ? 360 : 0,}}
              transition={{duration:0.8,ease:"easeInOut"}}
              className={`pic grayscale   rounded-md relative ${isFlipped?'grayscale-0':""}`}>
            <Image
              className="relative shadow-lg shadow-slate-500 hover:shadow-xl hover:shadow-slate-600 rounded-md"
              src={"./Nilesh.jpg"}
              width={350}
              height={350}
              alt="Picture of the author"
            />
          </motion.div>
          </motion.div>
          <motion.div  whileTap={{scale:1.05,transition: { duration: 0.1, ease: "easeOut" }}} whileHover={{scale:1.05,transition: { duration: 0.1, ease: "easeOut" }}}  className="p-3 rounded-md md:w-[50%] w-[90%] shadow-slate-400 shadow-lg hover:shadow-slate-600 hover:shadow-xl">
              <h4 className="md:text-xl text-lg font-semibold">Nilesh Mori</h4>
              <h5 className="md:text-lg text-base font-medium ">Fullstack Webdevloper</h5>
              <p className="mt-2 md:text-base text-sm">Hey,I am a Software Engineer From Gandhinagar.I am studying B.Tech ICT-CS at Daiict Gandhingar. I have no experience of job. I love to build clones of project. i am working for myself.I excited still learning new things.if you interested to work with me or if you want to hire me please contact me.Let&apos;s build Code</p>
              <p className="mt-3 md:text-base text-sm"><span className="bg-gradient-to-r from-blue-400 to-purple-800 ... bg-clip-text text-transparent font-bold" >Email :</span> nileshmori7757@gmail.com</p>
              <p className="mt-2 md:text-base text-sm"><span className="bg-gradient-to-r from-blue-400 to-purple-800 ... bg-clip-text text-transparent font-bold" >Address :</span> Porbandar,Gujarat</p>
          <div className="w-full flex justify-center mt-5">           
          <motion.button whileHover={{scale:1.05,transition:{duration:0.3,ease:"easeIn"},backgroundColor:"black",color:"white",fontWeight:"bold"}} whileTap={{scale:1.05,transition:{duration:0.3,ease:"easeIn"},backgroundColor:"black",color:"white",fontWeight:"bold"}} className="px-5 py-1 text-black rounded-lg shadow-2xl ring-2 ring-gray-400 hover:ring-gray-300 shadow-black"><Link   
                to="contact" 
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500}  >Contact Me</Link></motion.button>
          </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
