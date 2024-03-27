import { motion } from 'framer-motion'
import React from 'react'

const Video = () => {
    return (
        <div
            id='video'
            // data-scroll data-scroll-speed='-0.1'
            className='py-[15vh] w-[100%] mx-auto text-center text-white bg-gradient-to-br from-[#081d27] from-[50%] to-[#87c0d9]'
        >
            <motion.div
                initial={{ y: 300, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                // data-scroll data-scroll-speed='0.9'
                className='space-y-[5vh]'>
                <h1 className='lg:text-[3vw] text-[6vw] lg:px-0 px-[3vw] font-extrabold font-[SanAntycs]'>Check Out Our Demo <span className='text-[#ffc300]'>Video</span></h1>

                {/* <h2 className='lg:w-[100%] w-[80%] mx-auto font-[modeka]'>Stage Real Estate Images in Seconds. Save 90% of the Cost.</h2> */}

                <div className=' mx-auto lg:w-fit'>
                    <iframe className=' lg:w-[55vw] w-[80vw] lg:h-[60vh] h-[50vh] mx-auto' src="https://www.youtube.com/embed/ZhitB6Q9O9g?si=HILe0VyShAr5if2T" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>

                <a className="font-[SanAntycs] lg:py-[2vh] py-[2vh] lg:px-[1.5vw] px-[3vw] inline-flex items-center rounded-full border border-transparent bg-[#081d27] text-[#ffffef] hover:shadow-[#081d27] shadow-md disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/">
                    Get Started
                </a>
            </motion.div>
        </div>
    )
}

export default Video
