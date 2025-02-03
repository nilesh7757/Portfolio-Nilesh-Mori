"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoPerson } from "react-icons/io5";
import { Link } from 'react-scroll';
const About = () => {
  return (
    <div className="h-fit md:h-[100vh] py-6 flex flex-col items-center">
      <h2 className="md:text-4xl text-3xl font-bold text-center flex gap-2">
        <IoPerson/> About <span className="bg-gradient-to-r from-green-500 to-green-200 bg-clip-text text-transparent">Me</span>
      </h2>
      <div className="abt w-[90%] my-10 lg:my-auto flex flex-col md:flex-row items-center justify-center gap-20 h-[80%]">
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Image
            className="shadow-lg shadow-slate-500 hover:shadow-xl hover:shadow-slate-600 rounded-md"
            src="/Nilesh.jpg"
            width={350}
            height={350}
            alt="Nilesh Mori"
          />
        </motion.div>
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="p-3 rounded-md md:w-[50%] w-[90%] shadow-slate-400 shadow-lg hover:shadow-slate-600 hover:shadow-xl"
        >
          <h4 className="md:text-xl text-lg font-semibold">Nilesh Mori</h4>
          <h5 className="md:text-lg text-base font-medium text-blue-600">Fullstack Web Developer | Tech Innovator</h5>
          
          <p className="mt-2 md:text-base text-sm">
            As a passionate software engineering student at Dhirubhai Ambani Institute of Information and Communication Technology, I'm driven by a relentless curiosity to transform innovative ideas into robust digital solutions. My journey is defined by continuous learning, hands-on project development, and a commitment to creating impactful technological experiences.
          </p>
          
          <div className="mt-3 space-y-2">
            <p>
              <span className="font-semibold bg-gradient-to-r text-blue-500">Specialties:</span> Full Stack Development, React.js, Next.js, Node.js, MongoDB
            </p>
            <p>
              <span className="font-semibold bg-gradient-to-r  text-blue-500">Currently Exploring:</span> Advanced web technologies, cloud computing, and scalable application architectures
            </p>
          </div>
          
          <div className="contact-info mt-3">
            <p>
              <span className="bg-gradient-to-r from-blue-400 to-purple-800 bg-clip-text text-transparent font-bold">Email:</span> 
              {' '}nileshmori7757@gmail.com
            </p>
            <p>
              <span className="bg-gradient-to-r from-blue-400 to-purple-800 bg-clip-text text-transparent font-bold">Location:</span> 
              {' '}Porbandar, Gujarat, India
            </p>
          </div>
          
          <div className="w-full flex justify-center mt-5">           
            <motion.button 
              whileHover={{
                scale: 1.05,
                backgroundColor: "black",
                color: "white",
                fontWeight: "bold"
              }}
              whileTap={{
                scale: 1.05,
                backgroundColor: "black",
                color: "white",
                fontWeight: "bold"
              }} 
              className="px-5 py-2 text-black rounded-lg shadow-2xl ring-2 ring-gray-400 hover:ring-gray-300"
            >
              <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>
                Let's Connect
              </Link>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default About;
