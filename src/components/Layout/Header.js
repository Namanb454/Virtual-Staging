import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MdCall } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { IoImageSharp } from "react-icons/io5";
import { SlLogin } from "react-icons/sl";

export default function Header() {
    const { ref, inView } = useInView({ triggerOnce: true });

    const variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };
    const variantss = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const item = {
        hidden: {
            opacity: 0,
            y: -50,
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                // duration: 0.1,
            },
        },
    };
    const items = {
        hidden: {
            opacity: 0,
            y: -50,
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
            },
        },
    };

    const [isOpen, setIsOpen] = useState(false);

    const navs = [
        {
            'nav': 'Contact',
            'link': '/contact',
            'icon': <MdCall />
        },
        {
            'nav': 'Clients',
            'link': '/clients',
            'icon': <FaUserFriends />
        },
        {
            'nav': 'Results',
            'link': '/results',
            'icon': <IoImageSharp />
        },
        {
            'nav': 'Login',
            'link': '/login',
            'icon': <SlLogin />
        },
    ]

    return (
        <motion.nav
            ref={ref}
            variants={variants}
            initial='hidden'
            animate='show'
            className="scroll-smooth">
            <div className="font-[inter] w-full mx-auto px-5 sm:px-6 md:px-[2.5vw] mt-[7vh]">
                <div className="flex items-center justify-between">
                    <motion.div
                        className="flex items-center w-full">

                        {/* Logo  */}
                        <motion.a variants={item} href='/' className="flex-shrink-0 md:w-fit w-full flex items-center">
                            <motion.img className="lg:w-[4vw] md:w-[8vw] w-[13vw]" src="vs-icon.webp" alt="Logo" />
                        </motion.a>


                        <div className="hidden lg:block w-fit ml-auto">

                            <motion.div
                                className="children flex items-center w-[100%] mx-auto space-x-[3vw]">
                                {navs.map((data, index) => {
                                    return (
                                        <Link to={data.link} variants={item}
                                            className={`w-[9vw] text-white bg-neutral-950
                                        hover:bg-neutral-700 hover:text-white px-[1vw] py-[2vh] rounded-full text-[2.5vh] font-semibold flex items-center space-x-[1vw] shadow-neutral-500 shadow-sm
                                                 ${index === 3 && 'bg-blue-600 hover:bg-blue-500'}
                                        `}>
                                            <span>
                                                {data.nav}
                                            </span>
                                            <span>
                                                {data.icon}
                                            </span>
                                        </Link>
                                    )
                                })}
                            </motion.div>

                        </div>

                    </motion.div>
                    <motion.div variants={item} className="-mr-2 flex lg:hidden w-10">
                        <button onClick={() => setIsOpen(!isOpen)} className={` inline-flex items-center justify-center p-2 rounded-md text-slate-700 focus:outline-none`}>
                            {isOpen ?
                                <svg
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    whileTap={{ scale: 0 }}
                                    transform={{ duration: 0.5 }}
                                    className="h-6 w-6 block text-slate-700 "
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                                :
                                <motion.svg
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    whileTap={{ scale: 0 }}
                                    transform={{ duration: 0.5 }}
                                    className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </motion.svg>}
                        </button>
                    </motion.div>
                </div>
            </div>
            <div className={`${isOpen ? '' : 'hidden'} lg:hidden`}>
                {/* <div
                    className="w-10 absolute top-0 right-0 py-[5vh] transition-all ease-in-out duration-1000 "
                    onClick={() => setIsOpen(false)}
                >
                    <svg
                        className="h-9 w-9 text-text-slate-700 transition-all ease-in-out duration-1000"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </div> */}
                <motion.div
                    ref={ref}
                    variants={variantss}
                    initial='hidden'
                    animate='show'
                    className="pt-2 pb-3 sm:px- w-[90%] mx-auto rounded-3xl text-left md:space-y-[1vw] space-y-[5vw] shadow-sm shadow-black">
                    {navs.map((data, index) => {
                        return (
                            <Link to={data.link}
                                variants={items}
                                href="#how-it-works" className={`w-[30vw] text-neutral-950 hover:bg-neutral-800 hover:text-white px-[3vw] py-[2vh] rounded-full md:text-[2vh] text-[3vh] flex items-center space-x-[1vw] `}>
                                <span>
                                    {data.nav}
                                </span>
                                <span>
                                    {data.icon}
                                </span>
                            </Link>
                        )
                    })}
                </motion.div>
            </div>
        </motion.nav>
    );
}
