import React from 'react'
import Clients from '../components/Layout/Clients'
import Footer from '../components/Layout/Footer'
import { motion } from 'framer-motion'
// import MyCarousel from '../landingpage/Carousel'

const Photographers = () => {
    const title = [
        'Photographers'
    ]
    const data = [
        {
            'id': 1,
            'sub_head': 'Enhanced Visual Appeal',
            'desc': 'Tipriyo allows photographers to showcase properties in their best light by adding furniture, decor, and other elements to make the space more visually appealing.',
            // 'carousel': <MyCarousel />,
            'img': 'home/LivingRoomB.jpg',
        },

        {
            'id': 2,
            'sub_head': 'Cost-Effective',
            'desc': 'Compared to traditional staging, which involves physically moving furniture and decor into a property, it becomes more cost-effective. Photographers can offer this service to clients at a lower cost, making it a competitive advantage.',
            // 'carousel': <MyCarousel />,
            'img': 'home/interior_design_1.jpg',

        },
        {
            'id': 3,
            'sub_head': 'Expanded Client Base',
            'desc': 'Since virtual staging is done digitally, photographers can offer their services to clients worldwide without the limitations of geographic location. This expands their potential client base and business opportunities.',
            // 'carousel': <MyCarousel />,
            'img': 'home/HomeOfficeB.jpg',
        },
    ]


    return (
        <div>
            <Clients title={title} />

            <div className='pb-[15vh]'>
                {data && data.map((data, index) => {
                    return (
                        <section key={data.id} class={` text-gray-600 body-font font-[SanAntycs]
                    `}>
                            <div class={`container mx-auto flex px-5 py-24 md:flex-row flex-col items-center   
                    ${index === 1 && 'md:flex-row-reverse'}
                        `}>
                                <motion.div class="lg:flex-grow md:w-1/2 lg:px-12 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
                                    initial={{ y: 100, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 1.2 }}
                                    viewport={{ once: true }}
                                >
                                    <h1 class="title-font tracking-widest lg:text-[1.5vw] text-3xl mb-4 font-bold text-[#013147c9]">{data.sub_head}</h1>
                                    <p class="mb-8 leading-relaxed text-[2.5vw] text-justify text-[#081d27]">{data.desc}</p>
                                    <div
                                        // variants={item}
                                        className=" flex justify-center font-[SanAntycs] space-x-[2vw] lg:text-[1.4vw] md:text-[2vw] text-[4vw] tracking-wide"
                                    >

                                        <a className="lg:py-[2vh] py-[2vh] lg:px-[1.5vw] px-[3vw] inline-flex items-center rounded-full border border-transparent bg-[#081d27] text-[#ffffef] hover:shadow-[#081d27] shadow-md disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/">
                                            Get Started
                                        </a>
                                    </div>
                                </motion.div>
                                <div class="lg:max-w-lg rounded-2xl lg:w-1/2 md:w-1/2 w-5/6">
                                    <motion.div
                                        initial={{ y: 100, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 1.2 }}
                                        viewport={{ once: true }}
                                        className="w-[100%] ">

                                        <div className=" bg-[#fcfcea] rounded-2xl mx-auto lg:w-[40vw] w-[100%] lg:h-[100%] h-[100%] bg-">
                                            <div className=" ">
                                                <div className=" lg:w-[100%] lg:h-[100%] w-[100%] mx-">
                                                    <img
                                                        src={data.img}
                                                        alt="Testimonial Avatar"
                                                        className="shadow-lg shadow-gray-500 lg:w-[100%] w-[100%] lg:h-[100%] rounded-xl"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </section>
                    )
                })}
            </div>


            <Footer />
        </div>
    )
}

export default Photographers
