import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Pricing = () => {
    const { ref, inView } = useInView({ triggerOnce: true });

    const variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: inView ? 1 : 0,
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
            y: inView ? 0 : 100,
            transition: {
                duration: 0.8,
            },
        },
    };

    const variants2 = {
        hidden: { opacity: 0 },
        show: {
            opacity: inView ? 1 : 0,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const items2 = {
        hidden: {
            opacity: 0,
            y: 100,
        },
        show: {
            opacity: 1,
            y: inView ? 0 : 100,
            transition: {
                duration: 1,
            },
        },
    };


    return (
        <div>
            <motion.section
                ref={ref}
                variants={variants}
                initial='hidden'
                animate='show'
                id='pricing' className="scroll-smooth body-font overflow-hidden">
                <div className="container px-5 xl:py-24 py-14 mx-auto">
                    <motion.div
                        className="flex flex-col text-center w-full xl:mb-20 mb-10">

                        <motion.h1
                            variants={item}
                            className="lg:w-[80%] 2xl:w-[60%] mx-auto 2xl:text-5xl xl:text-4xl text-3xl font-bold title-font mb-5 text-neutral-950 capitalize">
                            Reduce your home<span className='text-[#ffc300]'> interior</span> expenses</motion.h1>
                        <motion.p
                            variants={item}
                            className="2xl:w-[50%] xl:w-[60%] mx-auto leading-relaxed 2xl:text-xl xl:text-lg xl:px-10 px-2 text-black">Our affordable pricing makes it possible for small and large businesses to get high-quality professional on-model images  for their garments</motion.p>


                    </motion.div>

                    <div className="flex flex-wrap -m-4">
                        <motion.div
                            variants={item}
                            className="p-4 xl:w-1/3 2xl:h-[60vh] xl:h-[65vh] md:w-1/2 w-full px-10 ">
                            <div className="bg-[#FBFBFB] h-full p-6 rounded-3xl py-10 shadow-md shadow-gray-600 hover:border-[#222121] border-2 relative overflow-hidden">
                                <h1 className="2xl:text-4xl xl:text-3xl font-semibold text-left text-[#222121] leading-none pb-4 mb-4 border-b border-gray-200">
                                    <h1>Basic Photoshoot</h1>
                                    {/* <h3 className="2xl:text-lg xl:text-base py-2 font-medium text-[#222121]">1500 rupees/month</h3> */}
                                </h1>
                                <h2 className='text-2xl text-left text-black my-5'>Includes:</h2>
                                <p className="flex items-center 2xl:text-lg mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center text-black font-bold rounded-full flex-shrink-0">
                                        {/* <MdArrowForward /> */}
                                    </span>
                                    <span className='font-bold'>10&nbsp;</span>Images
                                </p>
                                <p className="flex items-center 2xl:text-lg mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center text-black font-bold rounded-full flex-shrink-0">
                                        {/* <MdArrowForward /> */}
                                    </span>
                                    <span className='font-bold'>24&nbsp;</span>hour processing time
                                </p>

                                <a href='#contact' className="flex items-center 2xl:mt-10 2xl:text-lg text-black border-2 border-[#222121] hover:text-white hover:bg-gray-200 py-2 px-4 w-full focus:outline-none rounded">Contact Us
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </motion.div>


                        <motion.div
                            variants={item}
                            className="p-4 xl:w-1/3 2xl:h-[60vh] xl:h-[65vh] md:w-1/2 w-full px-10 ">
                            <div className="bg-gradient-to-r from-[#537FEF] to-[#D1C8FFBA] h-full p-6 rounded-3xl py-10 hover:border-[#222121] shadow-md shadow-gray-600 border-gray-200 border-2  relative overflow-hidden">
                                <h1 className="2xl:text-4xl xl:text-3xl font-semibold text-left text-[#222121] leading-none pb-4 mb-4 border-b border-gray-200">
                                    <h1>Standard Photoshoot</h1>
                                    {/* <h3 className="2xl:text-lg xl:text-base py-2 font-medium text-[#222121]">2000 rupees/month</h3> */}
                                </h1>
                                <h2 className='text-2xl text-left text-black my-5'>Includes:</h2>
                                <p className="flex items-center 2xl:text-lg mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center text-black font-bold rounded-full flex-shrink-0">
                                        {/* <MdArrowForward /> */}
                                    </span>
                                    <span className='font-bold'>50&nbsp;</span>Images
                                </p>
                                <p className="flex items-center 2xl:text-lg mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center text-black font-bold rounded-full flex-shrink-0">
                                        {/* <MdArrowForward /> */}
                                    </span>
                                    <span className='font-bold'>48&nbsp;</span>hour processing time
                                </p>

                                <a href='#contact' className="flex items-center 2xl:mt-10 2xl:text-lg text-black border-2 border-[#222121] hover:text-white hover:bg-gray-200 py-2 px-4 w-full focus:outline-none rounded">Contact Us
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </motion.div>


                        <motion.div
                            variants={item}
                            className="p-4 xl:w-1/3 2xl:h-[60vh] xl:h-[65vh] md:w-1/2 w-full px-10 ">
                            <div className="bg-white h-full p-6 rounded-3xl py-10 shadow-md shadow-gray-600 hover:border-[#222121] border-2 relative overflow-hidden">
                                <h1 className="2xl:text-4xl xl:text-3xl font-semibold text-left text-[#222121] leading-none pb-4 mb-4 border-b border-gray-200">
                                    <h1>Premium Photoshoot</h1>
                                    {/* <h3 className="2xl:text-lg xl:text-base py-2 font-medium text-[#222121]">2500 rupees/month</h3> */}
                                </h1>
                                <h2 className='text-2xl text-left text-black my-5'>Includes:</h2>
                                <p className="flex items-center 2xl:text-lg mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center text-black font-bold rounded-full flex-shrink-0">
                                        {/* <MdArrowForward /> */}
                                    </span>
                                    <span className='font-bold'>100&nbsp;</span>Images
                                </p>
                                <p className="flex items-center 2xl:text-lg mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center text-black font-bold rounded-full flex-shrink-0">
                                        {/* <MdArrowForward /> */}
                                    </span>
                                    <span className='font-bold'>72&nbsp;</span>hour processing time
                                </p>

                                <a href='#contact' className="flex items-center 2xl:mt-10 2xl:text-lg text-black border-2 border-[#222121] hover:text-white hover:bg-gray-200 py-2 px-4 w-full focus:outline-none rounded">Contact Us
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>

                        </motion.div>


                    </div>
                </div>
            </motion.section>
        </div>
    )
}

export default Pricing
