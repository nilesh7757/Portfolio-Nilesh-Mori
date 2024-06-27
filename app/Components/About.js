"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
const About = () => {
  return (
    <>
      <div id="about" className="h-[100vh] py-6 flex flex-col items-center">
        <h2 className="text-3xl text-center">About Me</h2>
        <div className="abt w-[80%] flex items-center justify-center gap-20 h-[80%]">
          <motion.div 
              whileHover={{scale:1.05,fontWeight:"bold",transition: { duration: 0.1, ease: "easeOut" }}}
              className="pic object-cover">
            <Image
              className="relative shadow-lg shadow-slate-500 hover:shadow-xl hover:shadow-slate-600 rounded-md"
              src={"./web-1.jpg"}
              width={350}
              height={350}
              alt="Picture of the author"
            />
          </motion.div>
          <motion.div whileHover={{scale:1.05,transition: { duration: 0.1, ease: "easeOut" }}}  className="h-[350px] p-3 rounded-md w-[50%] shadow-slate-400 shadow-lg hover:shadow-slate-600 hover:shadow-xl">
              <h4 className="text-xl  font-semibold">Nilesh Mori</h4>
              <h5 className="text-lg font-medium ">Fullstack Webdevloper</h5>
              <p>Lorem ipsum dolor sit iciendis, exercitationem deleniti volu, dicta non? Quod dicta voluptatum velit aliquam ratione, vel nulla maiores voluptas atque alias cupiditate ut! Sequi maxime atque, recusandae voluptate, modi sunt consectetur minima numquam debitis animi, iste laudantium ab facilis. Expedita deleniti hic ad tempora quod molestias asperiores reiciendis, distinctio adipisci non cupiditate consequatur id.</p>
              <button></button>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
