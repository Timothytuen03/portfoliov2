import Image from "next/image";
function Projects() {
    return(
        <div className="min-h-[100vh] mt-[65px] flex-col flex items-center">
            <h1 className="text-center text-[56px]">Projects</h1>

            {/* <div className="h-[5px] w-[100px] border-dashed border-white border-t-2 border-spacing-[10px]"></div> */}
            <div className="inline-flex items-center justify-center">
                {/* <hr className="w-[100px] border-solid border-white border-2 border-spacing-[50px] mt-[18px]"/> */}
                <hr className="w-20 h-1 my-8 bg-gray-200 border-0 rounded mr-3"/>
                <Image src="/images/code_purple.png" width={50} height={50} className="place-self-center"/>
                <hr className="w-20 h-1 my-8 bg-gray-200 border-0 rounded ml-3"/>
            </div>

            <div className="mt-[20px]">
                <h1 className="text-[30px] text-center">PlayWay</h1>
            </div>
        </div>
    )
}

export default Projects;