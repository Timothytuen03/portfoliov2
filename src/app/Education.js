'use client'
import React, { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react';

function Education() {
    const [dsHover, setDSHover] = useState(false);
    const [caHover, setCAHover] = useState(false);
    const [algosHover, setAlgosHover] = useState(false);
    const [discreteHover, setDiscreteHover] = useState(false);
    const [dbHover, setDBHover] = useState(false);
    const [foundationsHover, setFoundationsHover] = useState(false);
    const [emblaRef, emblaApi] = useEmblaCarousel({loop: true});

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
      }, [emblaApi])
    
      const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
      }, [emblaApi])

    useEffect(() => {
        if (emblaApi) {
          console.log(emblaApi.slideNodes()) // Access API
        }
      }, [emblaApi])

  return (
    <div className="mt-[65px] flex-col flex items-center w-100vw font-markazi">
        <h1 className="text-center text-[56px] font-libre">Education</h1>

        <div className="inline-flex items-center justify-center">
            <hr className="w-20 h-1 my-8 bg-gray-200 border-0 rounded mr-3"/>
            <Image src="/images/code_purple.png" width={50} height={50} className="place-self-center" alt='code-symbol-break'/>
            <hr className="w-20 h-1 my-8 bg-gray-200 border-0 rounded ml-3"/>
        </div>

        <div className="embla mt-[30px]" >
            <div className='embla__viewport' ref={emblaRef}>

                <div className="embla__container">
                    <div className="embla__slide">
                        <div className='bg-white w-[75%] h-[300px] flex flex-col justify-center 
                            items-center rounded-lg text-black text-center ml-auto mr-auto md:text-[22px]'
                        >
                            <h3 className='text-[28px] font-libre'>Data Structures</h3>
                            <p className='text-[26px]'>OOP, Java, VSCode</p>
                            <div className="p-[8px]">
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
                    <div className="embla__slide">
                        <div className='bg-white w-[75%] h-[300px] flex flex-col justify-center 
                            items-center rounded-lg text-black text-center ml-auto mr-auto md:text-[22px]'
                        >
                            <h3 className='text-[28px] font-libre'>Computer Architecture</h3>
                            <p className='text-[26px]'>C, Unix, Assembly, Binary, Memory</p>
                            <div className="p-[8px]">
                                <p>
                                This college course immerses students in essential computer science topics 
                                such as C programming, data representation, assembly language programming, 
                                Boolean algebra, digital logic design, processor design, cache design, and 
                                main memory design. Students gain a strong foundation in these areas, 
                                allowing them to critically analyze developments in the field. Tailored 
                                projects prepare them for academia, software industry, or startups, ensuring 
                                a deep understanding of core principles and practical skills vital for 
                                diverse technology careers.
                                </p>

                            </div>
                        </div>
                    </div>
                    <div className="embla__slide">
                        <div className='bg-white w-[75%] h-[300px] flex flex-col justify-center 
                            items-center rounded-lg text-black text-center ml-auto mr-auto md:text-[22px]'
                        >
                            <h3 className='text-[28px] font-libre'>Design & Analysis of Computer Algorithms</h3>
                            <p className='text-[26px]'></p>
                            <div className="p-[8px]">
                                <p>
                                This course covers algorithm complexity, methods to express 
                                and compare algorithms' complexities in worst and average cases, and 
                                determining lower bounds on algorithm classes. Students learn to analyze 
                                and verify, applying these techniques to algorithms like 
                                search, sort, graph, and language problems. The course 
                                covers problems such as knapsack, satisfiability, and traveling 
                                salesman, exploring NP-complete classification and implications. 
                                Additionally, students study approximation algorithms, honing their skills 
                                in addressing complex computational challenges efficiently and accurately.
                                </p>

                            </div>
                        </div>
                    </div>
                    <div className="embla__slide">
                        <div className='bg-white w-[75%] h-[300px] flex flex-col justify-center 
                            items-center rounded-lg text-black text-center ml-auto mr-auto md:text-[22px]'
                        >
                            <h3 className='text-[28px] font-libre'>Discrete Structures</h3>
                            <p className='text-[26px]'> </p>
                            <div className="p-[8px]">
                                <p>

                                </p>

                            </div>
                        </div>
                    </div>
                    <div className="embla__slide">
                        <div className='bg-white w-[75%] h-[300px] flex flex-col justify-center 
                            items-center rounded-lg text-black text-center ml-auto mr-auto md:text-[22px]'
                        >
                            <h3 className='text-[28px] font-libre'>Principles of Information and Data Management</h3>
                            <p className='text-[26px]'>SQL, RDBMS</p>
                            <div className="p-[8px]">
                                <p>

                                </p>

                            </div>
                        </div>
                    </div>
                    <div className="embla__slide">
                        <div className='bg-white w-[75%] h-[300px] flex flex-col justify-center 
                            items-center rounded-lg text-black text-center ml-auto mr-auto md:text-[22px]'
                        >
                            <h3 className='text-[28px] font-libre'>Foundations of Business Programming</h3>
                            <p className='text-[26px]'>Python</p>
                            <div className="p-[8px]">
                                <p>

                                </p>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='flex justify-between'>
                <button className="embla__prev ml-[25px] text-[24px]" onClick={scrollPrev}>Prev</button>
                <button className="embla__next mr-[25px] text-[24px]" onClick={scrollNext}>Next</button>

            </div>
        </div>
    </div>
  )
}

export default Education;