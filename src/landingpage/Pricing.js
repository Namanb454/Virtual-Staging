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


    const pricing_data = [
        {
            'title': 'Virtual Staging with AI',
            'method': 'Our Software',
            'time': 'Seconds',
            'price': 'Rs 100 / image'
        },
        {
            'title': 'Virtual Staging',
            'method': 'Humans using photoshop',
            'time': 'Days',
            'price': 'Rs 500 / image'
        },
        {
            'title': 'Physical Staging',
            'method': 'Physically staging a home with furniture',
            'time': 'Weeks',
            'price': 'Rs 1000 / image'
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
                <div className="container px-5 py-[10vh] mx-auto">
                    <motion.div
                        className="flex flex-col text-center w-full mb-[5vh]">

                        <motion.h1
                            variants={item}
                            className="lg:w-[80%] 2xl:w-[60%] mx-auto 2xl:text-5xl xl:text-4xl text-3xl font-bold title-font mb-5 text-[#081d27] font-[Astro] capitalize">
                            Reduce your home<span className='text-[#ffc300]'> interior</span> expenses</motion.h1>
                        <motion.p
                            variants={item}
                            className="font-[Modeka] lg:w-[50vw] tracking-wide font-semibold mx-auto leading-relaxed lg:text-[1.5vw] px-2 text-black">Our affordable rates allow individuals to access top-tier professional images showcasing their interior designs.</motion.p>


                    </motion.div>

                    {/* <!-- Pricing --> */}
                    <div className="mx-auto">
                        {/* Grid */}
                        <div className="">
                            <div className="flex lg:items-center space-x-[5vw] mx-auto w-fit">

                                {pricing_data.map((data, index) => {
                                    return (
                                        <div className="w-[25vw] h-[60vh] text-center text-[#081d27] rounded-2xl shadow-lg shadow-[#081d27]">
                                            <div className="py-[4vh] font-[Modeka] tracking-wide font-bold">
                                                <h4 className="text-[2vw] ">{data.title}</h4>
                                            </div>

                                            <div className="lg:py-[2vh] font-[astro] tracking-widest">
                                                <span className="font-bold text-[2vw] ">
                                                    {data.price}
                                                </span>
                                            </div>

                                            <div className=" flex justify-center py-[3.5vh] font-[modeka] font-bold">
                                                <ul className="space-y-[2vh] text-center text-[1.5vw]">
                                                    <li className="">
                                                        {data.time}
                                                    </li>
                                                    <li className="">
                                                        {data.method}
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="p-[2vw] font-[astro]">
                                                <a className="py-3 px-4 w-full inline-flex justify-center items-center gap-x-2 text-[1vw] font-semibold rounded-lg border border-blue-600 text-blue-600 hover:border-blue-500 hover:text-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:border-blue-500 dark:text-blue-500 dark:hover:text-blue-400 dark:hover:border-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/">
                                                    Sign up
                                                </a>
                                            </div>
                                        </div>
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
