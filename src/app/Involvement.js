'use client'
import React, {useState} from 'react'
import Image from 'next/image'

function Involvement() {
  return (
    <div className="min-h-[75vh] mt-[65px] flex-col flex items-center w-100vw font-markazi">
        <h1 className="text-center text-[56px] font-libre">Involvement</h1>

        <div className="inline-flex items-center justify-center">
            <hr className="w-20 h-1 my-8 bg-gray-200 border-0 rounded mr-3"/>
            <Image src="/images/code_purple.png" width={50} height={50} className="place-self-center" alt='code-symbol-break'/>
            <hr className="w-20 h-1 my-8 bg-gray-200 border-0 rounded ml-3"/>
        </div>

        <div className='w-[90vw] flex md:flex-row flex-col justify-evenly text-center mt-[30px]'>
            <div className='w-[240px] h-[300px] bg-white text-black'>
                <h1 className='text-[20px] pt-[5px] font-libre'>Assistant Director of Finance</h1>
                <h2 className='text-[20px] underline'>Rutgers University Dance Marathon</h2>
                <p>RUDM is the largest student-run philanthropic organization in New Jersey that fundraises money in support of
                    children and families diagnosed with blood disorders and cancer through Embrace Kids Foundation
                </p>
            </div>
            <div className='w-[240px] h-[300px] bg-white text-black'>
                <h1 className='text-[20px] pt-[5px] font-libre'>VP of Website Development</h1>
                <h2 className='text-[20px] underline'>Business Information Technology Society (B.I.T.S)</h2>
                <p>B.I.T.S focuses on providing students at Rutgers with information and experience on the intersection between Business and Technology.
                    This is done through various ways, such as technical workshops and professional events.
                </p>
            </div>
            <div className='w-[240px] h-[300px] bg-white text-black'>
                <h1 className='text-[20px] pt-[5px] font-libre'>Technology Consultant</h1>
                <h2 className='text-[20px] underline'>Rutgers Office of Information Technology</h2>
                <p>
                    As a technology consultant at Rutgers OIT, I assist patrons with any technology questions/concerns they may have. In addition, technology
                    consultants spend time overseeing and maintaining the computer labs on campus and providing any assistance that may arise.
                </p>
            </div>
            <div className='w-[240px] h-[300px] bg-white text-black'>
                <h1 className='text-[20px] pt-[5px] font-libre'>Intramural Basketball Participant</h1>
                <p>
                    I am a very big basketball fan and often participate in intramural basketball leagues at Rutgers. In addition, I also participate in
                    summer mens basketball leagues at my local gyms/basketball centers
                </p>
            </div>
            <div className='w-[240px] h-[300px] bg-white text-black'>
                <h1 className='text-[20px] pt-[5px] font-libre'>Hackathons</h1>
                <h2 className='text-[20px] underline'>PennApps, HackRU</h2>
                <p>
                    I am a huge advocate for hackathons and have been fortunate enough to attend more events this past year. I've recently gone to 
                    the University of Pennsylvania PennApps hackathon, as well as Rutgers University's HackRU. In addition, I am signed up for 
                    HackHarvard in the future!
                </p>
            </div>
        </div>

    </div>
  )
}

export default Involvement