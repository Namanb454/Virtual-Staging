import React, { useRef } from 'react'
import { MdAddAPhoto, MdSupportAgent } from "react-icons/md";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import { GrUserManager } from "react-icons/gr";
import { motion } from 'framer-motion';
const ClientServe = () => {
    const data = [
        {
            'img': 'camera-icon.png',
            'title': 'Photographers',
            'desc': "Photographers who offer virtual staging services book more photoshoots and retain a greater number of clients - Tipriyo’s AI makes that service all the more affordable."
        },
        {
            'img': 'interior-icon.png',
            'title': 'Interior Design',
            'desc': 'Interior Design is a tough job and clients are demanding. Tipriyo’s AI is the perfect tool to help guide interior design clients on different aesthetics and allows interior designers focus on achieving their clients’ visions.'
        },
        {
            'img': "real-estate-agent-realtor-icon.png",
            'title': 'Agents & Brokers',
            'desc': 'Prospects buy or rent homes when they can see themselves living in it. Tipriyo’s AI virtual staging allows realtors to shorten the sales cycle - and for up to 10% more in price.'

        },
        // {
        //     'img': <HiOutlineDotsCircleHorizontal />,
        //     'title': 'Others',
        //     'desc': 'Many other types of real estate professionals have found value in our platform.  Give it a try or get in touch to learn more!'
        // },
    ]

    return (
        <section class="text-gray-600 body-font">
            <div class="container px-[2.5vw] lg:py-[15vh] py-[5vh] mx-auto font-[inter] text-neutral-950">
                <div class="flex flex-col text-center w-full lg:mb-[5vh]"
                // data-scroll data-scroll-speed='-0.1'
                >
                    <h1 class="lg:w-[80%] 2xl:w-[60%] mx-auto lg:text-[3vw] text-[6vw] font-bold title-font mb-5 text-[#081d27] font-[SanAntycs] capitalize">Our users <span className='text-[#ffc300]'>include</span></h1>
                </div>

                <div class="flex flex-wrap text-center lg:py-[5vh] font-[modeka] font-bold"
                // data-scroll data-scroll-speed='0.1'
                >
                    {data.map((data, index) => {
                        return (
                            <div class=" p-[5vh] lg:w-1/3 md:w-[25%] w-full ">
                                <motion.div
                                    initial={{ scale: 0, y: 100 }}
                                    whileInView={{ scale: 1, y: 0 }}
                                    transition={{ duration: 0.1 * index }}
                                    viewport={{ once: true }}
                                    class="bg-[#fffef9] hover:bg-[#209dbb] transition-all duration-300 h-full rounded-3xl shadow-md border-2 border-gray-200 lg:px-[2vw] px-[5vw] lg:py-[3vh] py-[5vh] group">

                                    <div className='w-[100%] lg:h-[15vh] h-[10vh]'>
                                        <img src={data.img}
                                            className='lg:w-[5vw] w-[15vw] mx-auto'
                                        />
                                    </div>

                                    <h2 class="title-font font-[SanAntycs] lg:text-[2vw] text-[5vw] py-[2vh] group-hover:text-white text-[#081d27]">{data.title}</h2>
                                    <p class="font-[poppins] leading-relaxed text-[#013147c9] lg:text-[1.2vw] text-justify group-hover:text-white">{data.desc}</p>
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
