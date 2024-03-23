import React from 'react'
import { FaPlay } from "react-icons/fa";

const Banner = () => {
    return (
        <div className="relative overflow-hidden "
            data-scroll data-scroll-speed='0.5'
        >
            <div className="relative py-[5vh]">
                <div className=" mx-auto px-4 sm:px-6 lg:px-[4vw]">
                    <div className="text-center  mx-auto lg:space-y-[4vh] space-y-[10vh]">

                        {/* Title */}
                        <div className="mt-[3vh] font-[Modeka] font-[900]">
                            {/* <h1 className="block text-[#013147c9] text-[10vw] md:text-[8vw] lg:text-[5vw] ">
                                AI Tip<span className='text-[#ffc300]'>r</span>iyo
                            </h1> */}
                            <h1 className="block text-[#081d27] text-[8vw] md:text-[5vw] lg:text-[6vw] lg:w-[70%] mx-auto"
                            >
                                Transform Real Estate Images with a Single Click.
                            </h1>
                        </div>
                        {/* End Title */}
                        <div className="font-[Astro] font-bold"
                        >
                            <p className="lg:text-[1vw] md:text-[3vw] text-[3vw] text-neutral-950">Save <span className='font-extrabold text-[#]'>90%</span> of the Cost</p>
                        </div>
                        {/* Buttons */}
                        <div className=" flex justify-center font-[Astro] space-x-[2vw] lg:text-[1vw] md:text-[2vw] text-[3vw]"
                        >

                            <a className="lg:py-[2vh] py-[2vh] lg:px-[1.5vw] px-[3vw] inline-flex items-center rounded-full border border-transparent bg-[#081d27] hover:bg-[#8dcae5] text-white hover:shadow-neutral-500 shadow-sm disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/">
                                Get Started
                            </a>
                            <a className="backdrop-blur-lg hover:backdrop-blur-3xl lg:py-[2vh] py-[2vh] lg:px-[1.5vw] px-[3vw] inline-flex items-center gap-x-2 rounded-full border border-[#081d27] hover:border-neutral-600 hover:shadow-neutral-500 shadow-sm  text-neutral-950 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/">
                                <span className='text-[#ffc300] lg:text-[0.8vw]'>
                                    <FaPlay />
                                </span>
                                Watch Tutorial
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
