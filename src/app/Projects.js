'use client'
import Image from "next/image";
import { useState } from "react";
function Projects() {
    const [pwHover, setpwHover] = useState(false);
    const [rrHover, setrrHover] = useState(false);
    const [fmHover, setfmHover] = useState(false);
    const [nlHover, setnlHover] = useState(false);

    return(
        <div className="min-h-[100vh] mt-[65px] flex-col flex items-center w-100vw font-markazi">
            <h1 className="text-center text-[56px] font-libre">Projects</h1>

            {/* <div className="h-[5px] w-[100px] border-dashed border-white border-t-2 border-spacing-[10px]"></div> */}
            <div className="inline-flex items-center justify-center">
                {/* <hr className="w-[100px] border-solid border-white border-2 border-spacing-[50px] mt-[18px]"/> */}
                <hr className="w-20 h-1 my-8 bg-gray-200 border-0 rounded mr-3"/>
                <Image 
                    src="/images/code_purple.png" 
                    width={50} 
                    height={50} 
                    className="place-self-center"
                    alt="code-symbol-break"
                />
                <hr className="w-20 h-1 my-8 bg-gray-200 border-0 rounded ml-3"/>
            </div>

            <div className="mt-[20px] flex justify-around w-[100%] text-center">
                <div className="flex flex-col items-center max-w-[48%] w-[48%]">
                    <h1 className="text-[30px] text-center">PlayWay</h1>
                    <div className="h-[300px] w-[300px] bg-white flex justify-center items-center"
                        onMouseEnter={() => setpwHover(true)}
                        onMouseLeave={() => setpwHover(false)}
                    >
                        <Image 
                            src="/images/PlayWay-logo.png" 
                            width={300} 
                            height={300} 
                            className={pwHover ? "hidden" :"place-self-center"}
                            alt="PlayWay logo"
                        />
                        <div className={pwHover ? "" :"hidden"}>
                            <p className="text-black">An Activity picking app for multiple users!</p>
                            <p className="text-black">Used React Native (Expo) for development for the first time and learned new things about
                                mobile development, design elements on mobile apps, and how hooks in React Native are 
                                used. Also implemented the Google Maps API to recommend nearby locations, and used Firebase
                                to work with a multi-user database and user authentication.
                            </p>

                        </div>
                    </div>

                </div>
                <div className="flex flex-col items-center w-[48%] max-w-[48%]">
                    <h1 className="text-[30px] text-center">Recipe Research</h1>
                    <div className="h-[300px] w-[300px] bg-white flex justify-center items-center"
                        onMouseEnter={() => setrrHover(true)}
                        onMouseLeave={() => setrrHover(false)}
                    >
                        <Image 
                            src="/images/recipegensc.png" 
                            width={300} 
                            height={300} 
                            className={rrHover ? "hidden" : "place-self-center"}
                            alt="Recipe Research Logo"
                        />
                        <div className={rrHover ? "text-black" : "hidden"}>
                            <p>A website that will suggest recipes based on certain preferences/restrictions</p>
                            <p>
                                Built with Next.js and React, the website runs with the Metaphor API built on the backend.
                            </p>

                        </div>

                    </div>
                </div>
            </div>
            <div className="mt-[20px] flex justify-evenly w-[100%] text-center">
                <div className="flex flex-col items-center max-w-[48%] w-[48%]">
                    <h1 className="text-[30px] text-center">FitMed</h1>
                    <div className="h-[300px] w-[300px] bg-white flex justify-center items-center"
                        onMouseEnter={() => setfmHover(true)}
                        onMouseLeave={() => setfmHover(false)}
                    >
                        <Image 
                            src="/images/huge.png" 
                            width={300} 
                            height={300} 
                            className={fmHover ? "hidden" : "place-self-center"}
                            alt="FitMed Logo"
                        />
                        <div className={fmHover ? "" : "hidden"}>
                            <p className="text-black hover:block hidden">A task management and project planning website. Add categories, tasks, and project ideas/progress!</p>
                            <p className="text-black hover:block">
                                JavaScript, HTML and CSS were used for designing and adding functionality, with EJS being used
                                to serve content from the backend and database to the client. On the backend, Express.js was 
                                implemented for the server and routing, I used Passport.js for the first time
                                for user authentication. In addition, I used MongoDB (mongoose) to create a database 
                                for the users' content and accounts.
                            </p>

                        </div>
                    </div>

                </div>
                <div className="flex flex-col items-center max-w-[48%] w-[48%]">
                    <h1>Newsletter</h1>
                    <div className="h-[300px] w-[300px] bg-white flex justify-center items-center"
                        onMouseEnter={() => setnlHover(true)}
                        onMouseLeave={() => setnlHover(false)}
                    >
                        <Image src="/images/newsletter_app.png" 
                            width={300} 
                            height={300} 
                            className={nlHover ? "hidden" : "place-self-center"}
                            alt="newsletter app logo"
                        />
                        <div className={nlHover ? "text-black" : "hidden"}>
                            <p>Keep up-to-date with relevant breakthroughs and articles for your major and interests</p>
                            <p>Utilized the Metaphor API to search the web and find articles that fulfill 
                                criteria such as your major and interests. Used Passport.js to configure 
                                user authentication, as well as Node.js and Express.js. In addition, Next.js
                                framework was used to implement React.js
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;