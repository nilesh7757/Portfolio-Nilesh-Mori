'use client'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import IconC from 'react-devicon/c/original' 
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'devicon/devicon.min.css';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation'
import { Autoplay,EffectCoverflow,Navigation,Pagination } from 'swiper/modules';
import { FaAndroid,FaLaptopCode } from 'react-icons/fa';
import { Link } from 'react-scroll';
export default function Skill() {
  const router = useRouter()
  return (
    <>
      <div  className='py-6'>
      <div className='mt-5'>
      <h3 className="md:text-4xl text-3xl font-bold text-center flex justify-center gap-2 items-center"><FaLaptopCode/>Skills</h3>
      <div className='md:w-[80%]  w-[90%] mx-auto mt-3'>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        breakpoints={{
          100: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView:4
          }
      }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={false}
        navigation={false}
        modules={[Navigation,EffectCoverflow,Pagination,Autoplay]}
        className="mySwiper"
      >
        {/* <SwiperSlide>
            <div onClick={() => router.push("https://developer.android.com/")} className='text-center flex flex-col items-center'>
              <FaAndroid className='md:size-[200px] size-[150px] ' fill='#3DDC84'/>
              <span className='mt-1'>Android</span>
            </div>
        </SwiperSlide> */}
        <SwiperSlide>
            <div onClick={() => router.push("https://cloud.mongodb.com/v2/666c7c309d186e472043683b#/overview")} className='text-center flex flex-col items-center'>
            <Image alt=""  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" width={200} height={200}/>

              <span className='mt-1'>MongoDB</span>
            </div>
        </SwiperSlide>
        {/* <SwiperSlide>
            <div onClick={() => router.push("https://www.mysql.com/")} className='text-center flex flex-col items-center'>
            <Image alt=""  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" width={200} height={200}/>

              <span className='mt-1'>My SQL</span>
            </div>
        </SwiperSlide> */}
        <SwiperSlide>
            <div onClick={() => router.push("https://react.dev/")} className='text-center flex flex-col items-center'>
            <Image alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" width={200} height={200}/>

              <span className='mt-1'>React</span>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div onClick={() => router.push("https://nextjs.org/")} className='text-center flex flex-col items-center'>
            <Image alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" width={200} height={200}/>

              <span className='mt-1'>Next</span>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div onClick={() => router.push("https://nodejs.org/en")} className='text-center flex flex-col items-center'>
            <Image alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" width={200} height={200}/>

              <span className='mt-1'>Node</span>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div onClick={() => router.push("https://tailwindcss.com/")} className='text-center flex flex-col items-center'>
            <Image alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" width={200} height={200}/>

              <span className='mt-1'>Tailwind Css</span>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div onClick={() => router.push("https://expressjs.com/")} className='text-center flex flex-col items-center'>
            <Image alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" width={200} height={200}/>

              <span className='mt-1'>Express</span>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div onClick={() => router.push("https://github.com/")} className='text-center flex flex-col items-center'>
            <Image alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" width={200} height={200}/>

              <span className='mt-1'>Github</span>
            </div>
        </SwiperSlide>
      </Swiper>
      </div>
      </div>

      <div className='mt-10'>
      <h2 className="md:text-4xl text-3xl font-bold text-center">Languages</h2>
      <div className='md:w-[80%]  w-[90%] mx-auto mt-3'>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        // slidesPerView={'5'}
        breakpoints={{
            100: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView:4
            }
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={false}
        navigation={false}
        modules={[Navigation,EffectCoverflow,Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div onClick={() => router.push("https://dotnet.microsoft.com/en-us/languages/csharp")} className='text-center flex flex-col items-center'>
            <Image alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" width={200} height={200}/>

              <span className='mt-1'>C#</span>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div onClick={() => router.push("https://cplusplus.com/")}  className='text-center flex flex-col items-center'>
            <Image alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" width={200} height={200}/>
              <span className='mt-1'>C++</span>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div onClick={() => router.push("https://www.w3schools.com/c/index.php")}  className='text-center flex flex-col items-center'>
            <Image alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" width={200} height={200}/>
              <span className='mt-1'>C</span>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div onClick={() => router.push("https://developer.mozilla.org/en-US/docs/Web/HTML")} className='text-center flex flex-col items-center'>
            <Image alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" width={200} height={200}/>

              <span className='mt-1'>Html</span>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div onClick={() => router.push("https://developer.mozilla.org/en-US/docs/Web/CSS")} className='text-center flex flex-col items-center'>
            <Image alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" width={200} height={200}/>

              <span className='mt-1'>Css</span>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div onClick={() => router.push("https://developer.mozilla.org/en-US/docs/Web/JavaScript")}  className='text-center flex flex-col items-center'>
            <Image alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" width={200} height={200} />
              <span className='mt-1'>Javascript</span>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div onClick={() => router.push("https://www.python.org/")} className='text-center flex flex-col items-center'>
            <Image alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" width={200} height={200} />
              <span className='mt-1'>Python</span>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div onClick={() => router.push("https://kotlinlang.org/")}  className='text-center flex flex-col items-center'>
            <Image alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg" width={200} height={200} />
              <span className='mt-1'>Kotlin</span>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div onClick={() => router.push("https://www.java.com/en/")}  className='text-center flex flex-col items-center'>
            <Image alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" width={200} height={200} />
              <span className='mt-1'>Java</span>
            </div>
        </SwiperSlide>
        
      </Swiper>
      </div>
      </div>
      </div>
    </>
  );
}
