import React from 'react'
import { FaPlay } from "react-icons/fa";

const Banner = () => {
    return (
        <div className="relative overflow-hidden py-[10vh]">
            <div className="relative">
                <div className=" mx-auto px-4 sm:px-6 lg:px-[4vw] ">
                    <div className="text-center  mx-auto space-y-[10vh]">

                        {/* Title */}
                        <div className="mt-[3vh] font-[lexend] space-y-[3vh]">
                            <h1 className="block text-neutral-950 text-[10vw] md:text-[8vw] lg:text-[5vw] ">
                                AI Virtual Staging
                            </h1>
                            <h1 className="block text-blue-600 text-[8vw] md:text-[5vw] lg:text-[3vw]">
                                Stage Real Estate Images in Seconds
                            </h1>
                        </div>
                        {/* End Title */}
                        <div className="mt-[5vh] ">
                            <p className="lg:text-[1.5vw] md:text-[3vw] text-[5vw] text-neutral-700 font-[inter]">Save <span className='font-extrabold'>90%</span> of the Cost</p>
                        </div>
                        {/* Buttons */}
                        <div className="mt-[5vh] flex justify-center font-[inter] space-x-[2vw] lg:text-[1vw] md:text-[2vw] text-[4vw]">

                            <a className="lg:py-[2vh] py-[2vh] lg:px-[1.5vw] px-[3vw] inline-flex items-center  font-bold rounded-full border border-transparent bg-neutral-950 hover:bg-neutral-700 text-white hover:shadow-neutral-500 shadow-sm disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/">
                                Get Started
                            </a>
                            <a className="lg:py-[2vh] py-[2vh] lg:px-[1.5vw] px-[3vw] inline-flex items-center gap-x-2 rounded-full border border-neutral-300 hover:border-neutral-600 hover:shadow-neutral-500 shadow-sm  text-neutral-950 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/">
                                <span className='text-blue-600 lg:text-[0.8vw]'>
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
