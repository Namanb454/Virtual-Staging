import React from 'react'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'
import { motion } from 'framer-motion'

const About = () => {
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
        <div title={"Tipriyo-Home "} className='font-[SanAntycs]'>
            <div className='bg-cover '
                style={{
                    // backgroundImage: 'url("home/LivingRoomB.jpg")'
                }}>


                <div className='backdrop-blur-sm lg:pt-[7vh] pt-[3vh]'>
                    <Header />
                </div>


                {/* About us  */}
                <div className='py-[5vh]'>
                    <motion.div
                        variants={item}
                        className="mt-[3vh]">
                        <h1 className="text-center block text-[#081d27] text-[8vw] md:text-[5vw] lg:text-[6vw] lg:w-[80%] mx-auto"
                        >
                            Team
                        </h1>
                    </motion.div>

                    <div className='text-center mx-auto w-fit'>
                        <img className=' w-[15vw] rounded-full' src='nikhil_co_founder.jpeg' />
                        <h2 className='font-bold text-[1.5vw]'>Nikhil Bafna</h2>
                        <h2 className='text-[1.2vw]'>Co-Founder</h2>
                    </div>




                </div>
            </div>

            <Footer />
        </div>
    )
}

export default About
