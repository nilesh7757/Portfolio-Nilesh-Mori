"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { IoIosContact, IoIosSend } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { MdMail, MdPhone } from "react-icons/md";
import { FaMessage } from "react-icons/fa6";
// import { IoIosSend } from "react-icons/io";
import Image from "next/image";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_2qycq85", "template_ebfrijf", form.current, {
        publicKey: "lgyXGdU7WDqjRFTGd",
      }) // Replace with your actual values
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Comment Sent Successfully!"); // User-friendly success message
          e.target.reset(); // Reset form fields
        },
        (error) => {
          console.error("FAILED...", error);
          alert("Comment Sending Failed. Please try again."); // User-friendly error message
        }
      );
  };

  return (
    <>
      <div className="w-full py-6 flex h-[70%]  flex-col items-center">
      <h2 className="md:text-4xl text-3xl font-bold text-center flex gap-2"><IoPerson/> Contact <span className="bg-gradient-to-r from-sky-500 to-sky-200 ... bg-clip-text text-transparent">Me</span></h2>

        <div className="flex h-[90%] mt-6 w-full md:w-[80%]">
          <div className="md:w-[40%]  md:block hidden  ">
        <Image 
            className="object cover  rounded-md"
            src={"./Contact.png"}
            width={450}
            height={250}
            layout="responsive"
          />
          </div>
        {/* <div className="w-[30%] h-[100%]">
        <Image
        className="absolute z-0 w-full h-full object-cover rounded-md"
        src={"./Contact.png"}
        layout="fill"
        objectFit="contain"
      />
        </div> */}
        <form
          className="flex-col  justify-center items-center w-full  md:w-[60%]"
          ref={form}
          onSubmit={sendEmail}
        >
    <div className="flex flex-col gap-5 justify-center w-full h-full ">
    <div className="relative  mx-auto flex w-[80%] items-center">
    <IoIosContact className="text-gray-500 absolute left-3" />
    <input
      type="text"
      name="user_name"
      placeholder="Name"
      className="pl-10 p-2 border border-blue-500 rounded-lg w-full"
      required
    />
  </div>
    <div className="relative  mx-auto flex w-[80%] items-center">
    <MdMail className="text-gray-500 absolute left-3" />
    <input
      type="email"
      name="user_email"
      placeholder="Email"
      className="pl-10 p-2 border border-blue-500 rounded-lg w-full"
      required
    />
  </div>
    <div className="relative  mx-auto flex w-[80%] items-center">
    <MdPhone className="text-gray-500 absolute left-3" />
    <input
      type="tel"
      pattern="[0-9]{10}"
      minLength={10}
      maxLength={10}
      title="please enter 10 digit number properly"
      // onError={"hi"}
      name="mobile_number"
      placeholder="Mobile Number"
      className="pl-10 p-2 border border-blue-500 rounded-lg w-full"
      required
    />
  </div>
    <div className="relative  mx-auto flex w-[80%]">
    <FaMessage className="text-gray-500 absolute mt-3 left-3" />
    {/* <textarea
      type="email"
      name="user_email"
      placeholder="Message"
      rows={40}
      cols={40}
      className="pl-10 p-2 border h-48 border-blue-500 rounded-lg w-full"
      required
    >
      Hi
    </textarea> */}
     <textarea
              className="pl-10 p-2 border border-blue-500 rounded-lg w-full"
              name="message"
              id=""
              cols="60"
              rows="5"
              placeholder="Message"
            />
  </div>
  <div className="w-full flex justify-center mt-6 lg:mt-2">
              <motion.button
                whileInView={{ opacity: 1, y: 0 }}
                whileTap={{scale:1.05,transition: { duration: 0.18, ease: "easeOut" }}}
                initial={{
                  y: -50,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.5,
                }}
                whileHover={{
                  scale: 1.05,
                }}
                className="bg-black hover:bg-white hover:text-black px-2 py-2 border border-gray-400 w-[20%] text-white font-semibold rounded-lg flex items-center justify-center gap-2 mx-auto"
              >
                Submit
                <IoIosSend />
              </motion.button>
            </div>
    </div>
        </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
