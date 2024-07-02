import React from 'react'
import { IoSchool } from "react-icons/io5";
import Image from 'next/image';
import { SiZebpay } from 'react-icons/si';
const Education = () => {
  return (
    <>
    <div id='education' className='py-12'>
        <h3 className='text-3xl flex justify-center gap-2 font-bold text-center'><IoSchool /> Education</h3>
        <div>
        <div className='relative overflow-hidden  md:flex-row mt-10 flex mx-auto bg-gray-100 pt-0 flex-col shadow-lg w-[80%]  hover:shadow-xl hover:shadow-gray-300 rounded-md h-[]'>
          <Image 
            className="w-full rounded-md md:w-[20%]"
            src={"./Sigma.png"}
            width={20}
            height={250}
          />
          <div className='p-2 pt-0 flex flex-col gap-1'>
          <h4 className='font-bold mt-5 text-rose-400 text-3xl'>HSC Science</h4>
          <div className='flex gap-2 items-center'><Image src={"./SigmaLogo.png"} width={25} height={15} />Sigma Public School,Porbandar | GSEB</div>
          <div className='text-2xl text-lime-500 font-semibold'>2021-2023 | Completed</div>
          </div>
        </div>
        <div className='relative overflow-hidden  md:flex-row mt-10 flex mx-auto bg-gray-100 pt-0 flex-col shadow-lg w-[80%]  hover:shadow-xl hover:shadow-gray-300 rounded-md'>
        <Image 
            className="w-full rounded-md md:w-[20%]"
            src={"./DAIICT.png"}
            width={20}
            height={20}
            // layout='responsive'

          />
          <div className='p-2 pt-0 flex flex-col gap-1'>
          <h4 className='font-bold mt-5 text-rose-400 text-3xl'>B.Tech (Honours) in ICT with minor in Computational Science</h4>
          <div className='flex gap-2 items-center'><Image src={"./DAIICTLogo.png"} width={25} height={15} />Dhirubhai Ambani Institute of Information and Communication Technology | DAIICT-Gandhingar</div>
          <div className='text-2xl text-lime-500 font-semibold'>2023-2027 | Pursuing</div>
          </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Education
