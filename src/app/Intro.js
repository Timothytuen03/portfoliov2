import Image from "next/image"
import Link from "next/link"

function Intro() {
  return (
    <div className="mb-[6rem] mt-[6rem] flex flex-col md:justify-start ml-5 text-center md:text-start font-markazi">
        <h1 className="relative l-[2rem] md:text-5xl text-3xl mt-[8rem] font-libre"><b>Timothy Tuen</b></h1>
        <h3 className="mt-3 md:text-[36px] text-sm italic">Student at Rutgers University (NB), studying CS and BAIT</h3>
        <p className="md:w-[40%] mt-4 md:text-[24px] ml-3">Hello everyone, my name is Timothy Tuen and I'm a Rutgers University - 
            New Brunswick student studying <u>Computer Science</u> and <u>Business 
            Analytics/Information Technology</u>. I'm currently seeking internship roles involving 
            full-stack web development, app development, data analytics, etc. </p>
        <Image 
          className="md:absolute lg:left-[55%] md:left-[40%] z-0"
          src="/images/profile.JPG" 
          width={500} 
          height={500} 
          alt="Picture of author"/>

        <div className="flex flex-col mt-10 w-[300px]">
          <h3 className="md:text-[32px] font-libre">Contact:</h3>
          <p className="mt-3 text-[18px] text-[#4F709C] bg-[#F8F0E5] rounded-[10px] text-center"><b>timothytuen45@gmail.com</b></p>
          <p className="mt-3 text-[18px] text-[#4F709C] bg-[#F8F0E5] rounded-[10px] text-center"><b>+1 (732)-672-7245</b></p>
          <Link 
            href="https://www.linkedin.com/in/timothy-tuen"
            className="flex mt-3 text-[18px] text-[#4F709C] bg-[#F8F0E5] rounded-[10px] justify-center">
              <Image 
                  src="/images/linkedin.png"
                  width={25}
                  height={25}
                  className="mr-3"
                  alt="Linkedin Logo"
                />
                  <b>LinkedIn</b>
          </Link>
          <Link 
            href="https://www.github.com/Timothytuen03"
            className="flex mt-3 text-[18px] text-[#4F709C] bg-[#F8F0E5] rounded-[10px] justify-center">
              <Image 
                src="/images/github.png"
                width={25}
                height={25}
                className="mr-3"
                alt="github logo"
                />
              <b>GitHub</b>
          </Link>
        </div>
    </div>
  )
}

export default Intro