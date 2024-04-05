import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaPlay } from "react-icons/fa";

const Banner = () => {
    const { ref, inView } = useInView({ triggerOnce: true });

    const variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const item = {
        hidden: {
            opacity: 0,
            y: 100,
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
            },
        },
    };
    return (
        <div className="relative overflow-hidden h-screen"
            data-scroll data-scroll-speed='0.5'
        >
            <div className="relative py-[5vh]">
                <motion.div
                    ref={ref}
                    variants={variants}
                    initial='hidden'
                    whileInView='show'
                    // viewport={{ once: true }}
                    className=" mx-auto px-4 sm:px-6 lg:px-[4vw]">
                    <motion.div

                        className="text-center  mx-auto lg:space-y-[4vh] space-y-[10vh]">

                        {/* Title */}
                        <motion.div
                            variants={item}
                            className="mt-[3vh] font-[SanAntycs] font-bold">
                            <h1 className="block bg-gradient-to-br from-[#081d27] from-[50%] to-[#87c0d9] bg-clip-text text-transparent text-[8vw] md:text-[5vw] lg:text-[6vw] lg:w-[80%] mx-auto"
                            >
                                Transform your interior design process with AI
                            </h1>
                        </motion.div>
                        {/* End Title */}
                        <motion.div
                            variants={item}
                            className="font-[SanAntycs] font-medium tracking-wide"
                        >
                            <p className="lg:text-[2.1vw] md:text-[3vw] text-[6vw] text-[#081d27]">Save <span className='lg:text-[2.2vw] font-extrabold text-[#]'>90%</span> of the Cost</p>
                        </motion.div>
                        {/* Buttons */}
                        <motion.div
                            variants={item}
                            className=" flex justify-center font-[SanAntycs] space-x-[2vw] lg:text-[1.4vw] md:text-[2vw] text-[4vw] tracking-wide"
                        >

                            <a className="lg:py-[2vh] py-[2vh] lg:px-[1.5vw] px-[3vw] inline-flex items-center rounded-full border border-transparent bg-[#081d27] text-[#ffffef] hover:shadow-[#081d27] shadow-md disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/">
                                Get Started
                            </a>
                            <a className="lg:py-[2vh] py-[2vh] lg:px-[1.5vw] px-[3vw] inline-flex items-center rounded-full border border-transparent bg-[#081d27] text-[#ffffef] hover:shadow-[#081d27] shadow-md disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#video">
                                <span className='text-[#ffc300] lg:text-[0.8vw]'>
                                    <FaPlay />
                                </span>
                                Watch Tutorial
                            </a>

                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default Banner
