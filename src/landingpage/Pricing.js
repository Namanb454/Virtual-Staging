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


    const pricing_data = [
        {
            // 'title': 'Virtual Staging with AI',
            'method': 'Our Software',
            'time': 'Seconds',
            'price': '149',
            'credit': '1 credit',
            'popular': ''
        },
        {
            // 'title': 'Virtual Staging',
            'method': 'Humans using photoshop',
            'time': 'Days',
            'price': '599',
            'credit': '5 credits',
            'popular': ''
        },
        {
            // 'title': 'Physical Staging',
            'method': 'Physically staging a home with furniture',
            'time': 'Weeks',
            'price': '1,099',
            'credit': '10 credits',
            'popular': ''
        },
        {
            // 'title': 'Physical Staging',
            'method': 'Physically staging a home with furniture',
            'time': 'Weeks',
            'price': '3,000',
            'credit': '25 credits',
            'popular': 'Most Popular'
        },
    ]


    return (
        <div>
            <motion.section
                ref={ref}
                variants={variants}
                initial='hidden'
                animate='show'
                id='pricing' className="scroll-smooth body-font overflow-hidden">
                <div className="container px-5 lg:py-[15vh] py-[5vh] mx-auto">
                    <motion.div
                        // data-scroll data-scroll-speed='-0.1'
                        className="flex flex-col text-center w-full mb-[5vh]">

                        <motion.h1
                            variants={item}
                            className="lg:w-[80%] 2xl:w-[60%] mx-auto lg:text-[3vw] text-[5vw] font-bold title-font mb-5 text-[#081d27] font-[Astro] capitalize">
                            Make Your Interior Design Vision a Reality with <span className='text-[#ffc300]'>Tipriyo AI</span></motion.h1>
                        <motion.p
                            variants={item}
                            className="font-[Modeka] lg:w-[50vw] tracking-wide font-semibold mx-auto leading-relaxed lg:text-[1.5vw] px-2 text-[#013147c9]">It’s easy to use and you’ll see results in as little as 30 seconds</motion.p>


                    </motion.div>

                    {/* <!-- Pricing --> */}
                    <div className="mx-auto"
                    // data-scroll data-scroll-speed='0.5'
                    >
                        {/* Grid */}
                        <div className="">
                            <div className="lg:flex lg:items-center lg:space-x-[2vw] lg:space-y-0 space-y-[10vw] mx-auto lg:w-[100%] w-[80vw]">

                                {pricing_data.map((data, index) => {
                                    return (
                                        <motion.div
                                            initial={{ scale: 0, y: 100 }}
                                            whileInView={{ scale: 1, y: 0 }}
                                            transition={{ duration: 0.5 * index }}
                                            viewport={{ once: true }}
                                            className={`bg lg:w-1/4 lg:h-[70vh] h-[50vh] text-center text-[#013147c9] rounded-2xl shadow-md shadow-gray-300 border-2
                                            ${index === 3 && 'border-[#013147c9] lg:h-[75vh]'}
                                            `}>

                                            <h4 className={`lg:text-[1.2vw] text-[5vw] rounded-md text-left font-semibold bg-[#87c0d9] text-[#081d27] w-fit 
                                            ${index === 3 && 'px-2 py-1 mx-auto my-2'}
                                            `}>{data.popular}
                                            </h4>

                                            <div className="py-[2vh] font-[modeka] tracking-wide font-bold">
                                                <h4 className="lg:text-[2vw] text-[5vw]">Pricing for Tipriyo</h4>
                                            </div>

                                            <div className="lg:py-[2vh] font-[poppins] tracking-widest">
                                                <span className="font-bold lg:text-[2vw] text-[6vw] text-[#081d27]">
                                                    <span className=''>{data.credit} - &#8377;{data.price}</span>
                                                </span>
                                            </div>

                                            <div className=" flex justify-center py-[3.5vh] font-[modeka] font-bold">
                                                <ul className="space-y-[2vh] text-left lg:text-[1.5vw]">
                                                    <li className="">
                                                        1. All furniture styles
                                                    </li>
                                                    <li className="">
                                                        2. All room types
                                                    </li>
                                                    <li>
                                                        3. Unlimited regenerations
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="lg:px-[5vw] lg:py-[2vh] px-[20vw] py-[5vh] font-[poppins]">
                                                <a className={`py-3 px-4 w-full inline-flex justify-center items-center gap-x-2 lg:text-[1.4vw] text-[3vw] font-semibold rounded-lg border border-[#209dbb] text-[#081d27] hover:border-87c0d9 hover:text-[#87c0d9] hover:bg-[#081d27] disabled:opacity-50 disabled:pointer-events-none  dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 transition-all duration-300
                                                ${index === 3 && 'bg-[#081d27] text-white'}
                                                `} href="/">
                                                    Sign up
                                                </a>
                                            </div>
                                        </motion.div>
                                    )
                                })}
                            </div>
                        </div>
                        {/* End Grid */}

                    </div>

                    {/* <!-- End Pricing --> */}
                </div>
            </motion.section>
        </div>
    )
}

export default Pricing
