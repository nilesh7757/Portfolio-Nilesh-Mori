'use client'
import React, { useState } from 'react'
import { IoSchool } from "react-icons/io5";
import { motion } from 'framer-motion';
import Image from 'next/image';
const Education = () => {
  const [scale1,setscale1]= useState();
  const [scale2,setscale2]= useState();
  const handlescale1 = () => {
    setscale1(!scale1)
    if(scale2){
      setscale2(!scale2)
    }
  };
  const handlescale2 = () => {
    setscale2(!scale2)
    if(scale1){
      setscale1(!scale1)
    }
  };
  return (
    <>
    <div id='education' className='py-12'>
        <h2 className='text-3xl flex justify-center gap-2 font-bold text-center'><IoSchool /> Education</h2>
        <div>
        <motion.div
         whileHover={{scaleX:1.10}}
         onTap={handlescale1}
        //  transition={{duration:700}}
        className={`relative overflow-hidden duration-500 ease-in-out  md:flex-row mt-10 flex mx-auto bg-gray-100 pt-0 flex-col shadow-lg w-[80%]  hover:shadow-xl hover:shadow-gray-300 rounded-md h-[] ${scale1?"scale-110":""}`}>
          <Image 
            className="w-full rounded-md md:w-[20%]"
            src={"./Sigma.png"}
            width={20}
            height={250}
          />
          <div className='p-2 pt-0 flex flex-col gap-1'>
          <h4 className='font-bold mt-5 text-rose-400 md:text-3xl text-2xl '>HSC Science</h4>
          <div className='flex gap-2 items-center md:text-base text-sm'><Image src={"./SigmaLogo.png"} width={25} height={15} />Sigma Public School,Porbandar | GSEB</div>
          <div className='md:text-2xl text-xl text-lime-500 font-semibold'>2021-2023 | Completed</div>
          </div>
        </motion.div>
        <motion.div 
        whileHover={{scaleX:1.10}}
        onTap={handlescale2}
        className={`relative overflow-hidden duration-500 ease-in-out  md:flex-row mt-10 flex mx-auto bg-gray-100 pt-0 flex-col shadow-lg w-[80%]  hover:shadow-xl hover:shadow-gray-300 rounded-md h-[] ${scale2?"scale-110":""}`}>
        <Image 
            className="w-full rounded-md md:w-[20%]"
            src={"./DAIICT.png"}
            width={20}
            height={20}
            // layout='responsive'

          />
          <div className='p-2 pt-0 flex flex-col gap-1'>
          <h4 className='font-bold mt-5 text-rose-400 md:text-3xl text-xl'>B.Tech (Honours) in ICT with minor in Computational Science</h4>
          <div className='flex gap-2 items-center md:text-base text-[0.8rem]'><Image src={"./DAIICTLogo.png"} width={30} height={15} />Dhirubhai Ambani Institute of Information and Communication Technology | DAIICT-Gandhingar</div>
          <div className='md:text-2xl text-xl text-lime-500 font-semibold'>2023-2027 | Pursuing</div>
          </div>
        </motion.div>
        </div>
    </div>
    </>
  )
}

export default Education
