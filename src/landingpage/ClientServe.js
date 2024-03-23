import React, { useRef } from 'react'
import { MdAddAPhoto, MdSupportAgent } from "react-icons/md";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import { GrUserManager } from "react-icons/gr";
import { motion } from 'framer-motion';
const ClientServe = () => {
    const data = [
        {
            'img': <MdAddAPhoto />,
            'title': 'Photographers',
            'desc': 'Service your customers with staged images for a fraction of the price and speed of traditional virtual staging'
        },
        {
            'img': <MdSupportAgent />,
            'title': 'Agents & Brokers',
            'desc': 'Increase the price that you sell a listing by helping buyers imagine what their home would look like'

        },
        {
            'img': <GrUserManager />,
            'title': 'Interior Design',
            'desc': 'Increase foot traffic to your listing and your rental price. Avoid reusing images of different units that share the same floor plan and having your listing down ranked by platforms like Zillow and Redfin.'
        },
        {
            'img': <HiOutlineDotsCircleHorizontal />,
            'title': 'Others',
            'desc': 'Many other types of real estate professionals have found value in our platform.  Give it a try or get in touch to learn more!'
        },
    ]

    return (
        <section class="text-gray-600 body-font">
            <div class="container px-[2.5vw] lg:py-[10vh] py-[5vh] mx-auto font-[inter] text-neutral-950">
                <div class="flex flex-col text-center w-full lg:mb-[5vh]"
                    data-scroll data-scroll-speed='-0.1'
                >
                    <h1 class="lg:w-[80%] 2xl:w-[60%] mx-auto lg:text-[3vw] text-[5vw] font-bold title-font mb-5 text-[#081d27] font-[Astro] capitalize">Our <span className='text-[#ffc300]'>Clients</span></h1>
                </div>

                <div class="flex flex-wrap text-center lg:py-[5vh] font-[modeka] font-bold"
                    data-scroll data-scroll-speed='0.5'
                >
                    {data.map((data, index) => {
                        return (
                            <div class=" p-[2vh] lg:w-[25%] md:w-[25%] w-full ">
                                <motion.div
                                    initial={{ scale: 0, y:100 }}
                                    whileInView={{ scale: 1, y:0 }}
                                    transition={{duration: 0.4 * index}}
                                    viewport={{ once: true }}
                                    class="bg-[#fcfcea] hover:bg-[#209dbb] hover:transition-all ease-in-out duration-400 h-full rounded-3xl shadow-md border-2 border-gray-200 lg:px-[2vw] px-[5vw] lg:py-[3vh] py-[5vh] group">
                                    <h2 className='w-fit mx-auto lg:text-[5vw] text-[10vw] group-hover:text-white text-[#013147c9]'>{data.img}</h2>
                                    <h2 class="title-font font-[baguile] lg:text-[2vw] text-[5vw] py-[2vh] group-hover:text-white">{data.title}</h2>
                                    <p class="leading-relaxed text-[#013147c9] lg:text-[1.2vw] text-justify group-hover:text-white">{data.desc}</p>
                                </motion.div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </section>
    )
}

export default ClientServe
