'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { IoCall,IoMail } from 'react-icons/io5';
import { FaLocationDot } from 'react-icons/fa6';
import { FaGithub,FaFacebook,FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
const Footer = () => {
  return (
    <div className=' p-10'>
      <div className='md:w-3/4 mx-auto grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full bg-white'>
        <div className=' px-3 py-1'>
          <h5 className='text-2xl font-bold'>Nilesh's Portfolio</h5>
          <p>Thank You For Visiting Nilesh Mori's Portfolio</p>
          <p>Keep Rising, Keep Progressing</p>
        </div>
        <div className=' px-3 py-1'>
          <h5 className='text-2xl font-bold'>Some Links</h5>
          <div>
            <ul className=''>
              <li className='flex gap-2 items-center'>
                <FaAngleRight />
                <Link
                  className="cursor-pointer"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-200}
                  duration={500}
                >
                  Home
                </Link>
              </li>
              <li className='flex gap-2 items-center'>
                <FaAngleRight />
                <Link
                  className="cursor-pointer"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-75}
                  duration={500}
                >
                  About
                </Link>
              </li>
              <li className='flex gap-2 items-center'>
                <FaAngleRight />
                <Link
                  className="cursor-pointer"
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-75}
                  duration={500}
                >
                  Skills
                </Link>
              </li>
              <li className='flex gap-2 items-center'>
                <FaAngleRight />
                <Link
                  className="cursor-pointer"
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={-75}
                  duration={500}
                >
                  Education
                </Link>
              </li>
              <li className='flex gap-2 items-center'>
                <FaAngleRight />
                <Link
                  className="cursor-pointer"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-75}
                  duration={500}
                >
                  Projects
                </Link>
              </li>
              <li className='flex gap-2 items-center'>
                <FaAngleRight />
                <Link
                  className="cursor-pointer"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-75}
                  duration={500}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className=' px-3 py-1'>
          <h5 className='text-2xl font-bold'>Contact</h5>
          <div className='flex gap-1'><span className='font-semibold items-center gap-1 flex'><IoCall/>Mobile Number:</span><span> 7778827757</span></div>
          <div className='flex'><span className='font-semibold items-center flex gap-1'><IoMail/>Email:</span><span> nileshmori7757@gmail.com</span></div>
          <div className='flex gap-1 items-center'><FaLocationDot />Porbandar,Gujrat,India-360575</div>
          <div className="contacts mx-auto mt-3 flex gap-x-3">
            <motion.div
              whileTap={{
                scale: 1.1,
                transition: { duration: 0.18, ease: "easeOut" },
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.18, ease: "easeOut" },
              }}
            >
              <a href="https://github.com/nilesh7757">
                <FaGithub size={40} />
              </a>
            </motion.div>
            <motion.div
              whileTap={{
                scale: 1.1,
                transition: { duration: 0.18, ease: "easeOut" },
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.18, ease: "easeOut" },
              }}
            >
              <a href="https://www.facebook.com/akash.mori.792/">
                <FaFacebook size={40} />
              </a>
            </motion.div>
            <motion.div
              whileTap={{
                scale: 1.1,
                transition: { duration: 0.18, ease: "easeOut" },
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.18, ease: "easeOut" },
              }}
              className="size-[40px] rounded-full flex items-center justify-center bg-black text-white"
            >
              <a href="https://www.linkedin.com/in/nilesh-mori-7757n">
                <FaLinkedinIn size={30} />
              </a>
            </motion.div>
            <motion.div
              whileTap={{
                scale: 1.1,
                transition: { duration: 0.18, ease: "easeOut" },
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.18, ease: "easeOut" },
              }}
              className="size-[40px] rounded-full flex items-center justify-center bg-black text-white"
            >
              <a href="https://x.com/Programmer7757?t=tRdexLvNV7qv22ZC5Q6jxg&s=08">
                <FaXTwitter size={25} />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
      <div className='text-center border-t-4 mt-5 flex justify-center items-center'>
        Made By Nilesh Mori with <img className='size-5' src="https://media.tenor.com/PAa9G_Wc5tcAAAAi/big-heart-red.gif" alt="heart" />
      </div>
    </div>
  );
}

export default Footer;
