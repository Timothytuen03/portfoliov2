'use client'
import React, { useState } from 'react'
import Image from 'next/image'

function Education() {
    const [dsHover, setDSHover] = useState(false);
    const [caHover, setCAHover] = useState(false);
    const [algosHover, setAlgosHover] = useState(false);
    const [discreteHover, setDiscreteHover] = useState(false);
    const [dbHover, setDBHover] = useState(false);
    const [foundationsHover, setFoundationsHover] = useState(false);
  return (
    <div className="min-h-[100vh] mt-[65px] flex-col flex items-center w-100vw font-markazi">
        <h1 className="text-center text-[56px] font-libre">Education</h1>

        <div className="inline-flex items-center justify-center">
            <hr className="w-20 h-1 my-8 bg-gray-200 border-0 rounded mr-3"/>
            <Image src="/images/code_purple.png" width={50} height={50} className="place-self-center"/>
            <hr className="w-20 h-1 my-8 bg-gray-200 border-0 rounded ml-3"/>
        </div>

        <div className='flex flex-col'>
            <div className='flex justify-center w-[100vw] mt-[40px]'>
                <div className='bg-[#D9D9D9] w-[210px] h-[210px] flex justify-center 
                items-center rounded-full relative right-[80px]'
                >
                    <Image 
                        src='/images/RUTGERS_V_RED_WHITE_RGB.png' 
                        height={120} 
                        width={120} 
                        />
                </div>
                <div className='flex flex-col justify-center relative left-[80px] font-markazi text-[30px]'>
                    <h1> Rutgers University - New Brunswick (RBS)</h1>
                    <h3>Bachelors in Business Analytics/Information Technology (BAIT)</h3>
                    <h3>Bachelors in Computer Science</h3>
                    <p>GPA: 3.948</p>
                    <p>Grad: May 2025</p>
                </div>
            </div>
            <div className='flex flex-col w-[100vw] mt-[20px]'>
                <div className='flex'>
                    <h1 className='mt-auto mb-auto w-[15vw] text-center text-[36px]'>Coursework</h1>
                    <div className='flex justify-evenly w-[85vw] flex-wrap gap-y-5'>
                        <div className='bg-[#D9D9D9] lg:w-[320px] lg:h-[320px] flex flex-col justify-center 
                    items-center rounded-lg text-black text-center'
                        onMouseEnter={() => setDSHover(true)}
                        onMouseLeave={() => setDSHover(false)}
                    >
                            <h3 className={dsHover ? "hidden" : 'text-lg'}>Data Structures</h3>
                            <p className={dsHover ? "hidden" : 'text-lg'}>OOP, Java, VSCode</p>
                            <div className={dsHover ? "" : "hidden"}>
                                <p>Students learn to analyze algorithm efficiency and select appropriate abstract 
                                    data types. The course covers 
                                    data structure tradeoffs and the design of structures for operations like 
                                    insertion and deletion. Advanced topics include combining structures for 
                                    complex problem-solving and predicting algorithm behavior through code 
                                    analysis. Students gain expertise in error detection and resolution, 
                                    ensuring implementations align with intended outcomes. The course culminates 
                                    in tailored designs of data structures and algorithms.
                                </p>

                            </div>
                        </div>

                        <div className='bg-[#D9D9D9] lg:w-[320px] lg:h-[320px] flex flex-col justify-center 
                    items-center rounded-lg text-black text-center'
                        onMouseEnter={() => setCAHover(true)}
                        onMouseLeave={() => setCAHover(false)}
                    >
                            <h3 className={caHover ? "hidden" : 'text-lg'}>Data Structures</h3>
                            <p className={caHover ? "hidden" : 'text-lg'}>OOP, Java, VSCode</p>
                            <div className={caHover ? "" : "hidden"}>
                                <p>Students learn to analyze algorithm efficiency and select appropriate abstract 
                                    data types. The course covers 
                                    data structure tradeoffs and the design of structures for operations like 
                                    insertion and deletion. Advanced topics include combining structures for 
                                    complex problem-solving and predicting algorithm behavior through code 
                                    analysis. Students gain expertise in error detection and resolution, 
                                    ensuring implementations align with intended outcomes. The course culminates 
                                    in tailored designs of data structures and algorithms.
                                </p>

                            </div>
                        </div>

                        <div className='bg-[#D9D9D9] lg:w-[320px] lg:h-[320px] flex flex-col justify-center 
                    items-center rounded-lg text-black text-center'
                        onMouseEnter={() => setAlgosHover(true)}
                        onMouseLeave={() => setAlgosHover(false)}
                    >
                            <h3 className={algosHover ? "hidden" : 'text-lg'}>Data Structures</h3>
                            <p className={algosHover ? "hidden" : 'text-lg'}>OOP, Java, VSCode</p>
                            <div className={algosHover ? "" : "hidden"}>
                                <p>Students learn to analyze algorithm efficiency and select appropriate abstract 
                                    data types. The course covers 
                                    data structure tradeoffs and the design of structures for operations like 
                                    insertion and deletion. Advanced topics include combining structures for 
                                    complex problem-solving and predicting algorithm behavior through code 
                                    analysis. Students gain expertise in error detection and resolution, 
                                    ensuring implementations align with intended outcomes. The course culminates 
                                    in tailored designs of data structures and algorithms.
                                </p>

                            </div>
                        </div>
                        <div className='bg-[#D9D9D9] lg:w-[320px] lg:h-[320px] flex flex-col justify-center 
                    items-center rounded-lg text-black text-center'
                        onMouseEnter={() => setDiscreteHover(true)}
                        onMouseLeave={() => setDiscreteHover(false)}
                    >
                            <h3 className={discreteHover ? "hidden" : 'text-lg'}>Data Structures</h3>
                            <p className={discreteHover ? "hidden" : 'text-lg'}>OOP, Java, VSCode</p>
                            <div className={discreteHover ? "" : "hidden"}>
                                <p>Students learn to analyze algorithm efficiency and select appropriate abstract 
                                    data types. The course covers 
                                    data structure tradeoffs and the design of structures for operations like 
                                    insertion and deletion. Advanced topics include combining structures for 
                                    complex problem-solving and predicting algorithm behavior through code 
                                    analysis. Students gain expertise in error detection and resolution, 
                                    ensuring implementations align with intended outcomes. The course culminates 
                                    in tailored designs of data structures and algorithms.
                                </p>

                            </div>
                        </div>

                        <div className='bg-[#D9D9D9] lg:w-[320px] lg:h-[320px] flex flex-col justify-center 
                    items-center rounded-lg text-black text-center'
                        onMouseEnter={() => setDBHover(true)}
                        onMouseLeave={() => setDBHover(false)}
                    >
                            <h3 className={dbHover ? "hidden" : 'text-lg'}>Data Structures</h3>
                            <p className={dbHover ? "hidden" : 'text-lg'}>OOP, Java, VSCode</p>
                            <div className={dbHover ? "" : "hidden"}>
                                <p>Students learn to analyze algorithm efficiency and select appropriate abstract 
                                    data types. The course covers 
                                    data structure tradeoffs and the design of structures for operations like 
                                    insertion and deletion. Advanced topics include combining structures for 
                                    complex problem-solving and predicting algorithm behavior through code 
                                    analysis. Students gain expertise in error detection and resolution, 
                                    ensuring implementations align with intended outcomes. The course culminates 
                                    in tailored designs of data structures and algorithms.
                                </p>

                            </div>
                        </div>

                        <div className='bg-[#D9D9D9] lg:w-[320px] lg:h-[320px] flex flex-col justify-center 
                    items-center rounded-lg text-black text-center'
                        onMouseEnter={() => setFoundationsHover(true)}
                        onMouseLeave={() => setFoundationsHover(false)}
                    >
                            <h3 className={foundationsHover ? "hidden" : 'text-lg'}>Data Structures</h3>
                            <p className={foundationsHover ? "hidden" : 'text-lg'}>OOP, Java, VSCode</p>
                            <div className={foundationsHover ? "" : "hidden"}>
                                <p>Students learn to analyze algorithm efficiency and select appropriate abstract 
                                    data types. The course covers 
                                    data structure tradeoffs and the design of structures for operations like 
                                    insertion and deletion. Advanced topics include combining structures for 
                                    complex problem-solving and predicting algorithm behavior through code 
                                    analysis. Students gain expertise in error detection and resolution, 
                                    ensuring implementations align with intended outcomes. The course culminates 
                                    in tailored designs of data structures and algorithms.
                                </p>

                            </div>
                        </div>

                    </div>

                </div>
                <div>
                    <h1>Involvement</h1>

                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Education