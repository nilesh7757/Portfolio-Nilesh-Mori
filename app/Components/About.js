"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
const About = () => {
  return (
    <>
      <div id="about" className="h-fit py-6 flex flex-col items-center">
        <h2 className="text-3xl text-center">About Me</h2>
        <div className="abt w-[90%] my-10 lg:my-auto flex flex-col md:flex-row items-center justify-center gap-20 h-[80%]">
          <motion.div 
              whileHover={{scale:1.05,fontWeight:"bold",transition: { duration: 0.1, ease: "easeOut" }}}
              className="pic grayscale  rounded-md hover:grayscale-0  relative">
            <Image
              className="relative shadow-lg shadow-slate-500 hover:shadow-xl hover:shadow-slate-600 rounded-md"
              src={"./web-2.jpg"}
              width={350}
              height={350}
              // fill={true}
              alt="Picture of the author"
            />
          </motion.div>
          <motion.div whileHover={{scale:1.05,transition: { duration: 0.1, ease: "easeOut" }}}  className="p-3 rounded-md md:w-[50%] w-[90%] shadow-slate-400 shadow-lg hover:shadow-slate-600 hover:shadow-xl">
              <h4 className="md:text-xl  text-lg font-semibold">Nilesh Mori</h4>
              <h5 className="md:text-lg text-base font-medium ">Fullstack Webdevloper</h5>
              <p className="mt-2 md:text-base text-sm">Lorem ipsum dolor sit iciendis, exercitationem deleniti volu, dicta non? Quod dicta voluptatum velit aliquam ratione, vel nulla maiores voluptas atque alias cupiditate ut! Sequi maxime atque, recusandae voluptate, modi sunt consectetur minima numquam debitis animi, iste laudantium ab facilis. Expedita deleniti hic ad tempora quod molestias asperiores reiciendis, distinctio adipisci non cupiditate consequatur id.</p>
              <p className="mt-2 md:text-base text-sm"><span className="bg-gradient-to-r from-blue-400 to-blue-800 ... bg-clip-text text-transparent font-bold" >Email :</span> nileshmori7757@gmail.com</p>
              <p className="mt-2 md:text-base text-sm"><span className="bg-gradient-to-r from-blue-400 to-blue-800 ... bg-clip-text text-transparent font-bold" >Address :</span> Porbandar,Gujarat</p>
          <div className="w-full flex justify-center mt-5">           
          <motion.button whileHover={{scale:1.05,transition:{duration:0.3,ease:"easeIn"},backgroundColor:"black",color:"white",fontWeight:"bold"}} className="px-5 py-1 text-black rounded-lg shadow-2xl ring-2 ring-gray-400 hover:ring-gray-300 shadow-black">Contact Me</motion.button>
          </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
