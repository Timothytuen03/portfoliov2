import Image from "next/image";

function About() {
    return (
        <div className="min-h-[70vh]">
            <h1 className="text-center text-[56px]">About...</h1>
            <div>
                <h3 className="text-center text-wrap text-[20px]">I'm Tim, a college student from 
                Monroe Township, New Jersey set to graduate May of 2025 
                with a bachelors degree in Computer Science and Business Analytics/Information 
                Technology (BAIT) from Rutgers University
                </h3>
                <div className="flex w-3/4 m-auto mt-5">
                    <Image src="/images/london2.JPG" width={100} height={100} className="w-1/4 h-auto place-self-center"/>
                    <Image src="/images/family.jpeg" width={100} height={100} className="w-1/4 h-auto place-self-center"/>
                    <Image src="/images/london.JPG" width={100} height={100} className="w-1/4 h-auto place-self-center"/>
                    <Image src="/images/cape.jpg" width={100} height={102} className="w-1/4 h-auto place-self-center"/>
                </div>
                <div className="text-center mt-[2rem]">
                    <p className="md:text-l text-m ml-4 mr-4 mb-10 leading-7">I'm a rising junior of Rutgers University's Business School set to graduate in May of 2025 
                        with a double major in Computer Science and Business Analytics/Information Technology 
                        (BAIT). My interests lie heavily with anything technology related and I'm currently 
                        looking for internship roles that include but are not limited to software engineering, 
                        data science, consulting, and cybersecurity! I've always had an interest in the way 
                        things work and building products/services for my own and others' uses. Feel free to 
                        reach out!
                    </p>

                    <h2 className="md:text-xl text-l ml-4 mr-4 underline">Some Hobbies and Interests!</h2>
                    <ul>
                        <li>
                            <p className="mt-1 mb-5">~ I enjoy playing basketball and participate in Men's and intramural leagues </p>
                        </li>
                        <li>
                            <p className="mb-5">~ I played lacrosse in high school and am a big fan of watching college lacrosse</p>
                        </li>
                        <li>
                            <p className="mb-5">~ Rick Riordian is my all time favorite author (probably because of nastalgia) and is
                                the reason I'm into Greek and Roman mythology/history
                            </p>
                        </li>
                        <li>
                            <p className="mb-5">~ Fitness is a huge part of my lifestyle, and that includes weightlifting, snowboarding, etc.</p>
                        </li>
                        <li>
                            <p className="mb-5">
                                ~ I've finished over 200 episodes of One Piece (why are there 1000 episodes 
                                please help)
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        /*> I enjoy playing basketball and participate in Men's and intramural leagues
> I played lacrosse in high school and am a big fan of watching college lacrosse
> Rick Riordian is the reason that I'm interested in Greek and Roman mythology, and have taken related classes at Rutgers
> Fitness is a huge part of my lifestyle, and that include weightlifting, snowboarding, etc.
> I'm finished with over 100 episodes of One Piece and almost done! (i'll get there eventually) */
    )
}

export default About;