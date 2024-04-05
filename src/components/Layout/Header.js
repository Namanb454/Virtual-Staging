import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/helper/Supabase';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MdCall, MdEmail } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { IoImageSharp } from "react-icons/io5";
import { SlLogin, SlLogout } from "react-icons/sl";
import { useUser } from '@supabase/auth-helpers-react';
import Auth from '../../landingpage/Auth';

// import { useHistory } from 'react-router-dom';

export default function Header() {
    // const navigate = useNavigate();
    const [session, setSession] = useState(null)
    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
        })
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })

        return () => subscription.unsubscribe()
    }, [])
    const handleLogout = async () => {
        await supabase.auth.signOut()
        setSession(null)
        window.location.reload();
    }

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
            'nav': 'Email',
            'link': '/contact',
            'icon': <MdCall />
        },
        {
            'nav': 'Login',
            'link': '/sign-in',
            'icon': <SlLogin />
        },
    ]

    return (
        <motion.nav
            ref={ref}
            variants={variants}
            initial='hidden'
            animate='show'
            className="scroll-smooth font-[Astro]">
            <div className="lg:w-[70vw] w-[100%] mx-auto py-[1.5vh] px-5 sm:px-6 md:px-[2.5vw] bg-[#081d27] border-2 rounded-full">
                <div className="flex items-center justify-between">
                    <motion.div
                        className="flex items-center w-full">

                        {/* Logo  */}
                        <motion.a variants={item} href='/' className="flex-shrink-0 md:w-fit w-full flex items-center">
                            <motion.img className="lg:w-[3vw] md:w-[8vw] w-[10vw] rounded-full" src="marknobackground.png" alt="Logo" />
                            <h2 className='text-[#ffc300] font-[SanAntycs] font-normal lg:text-[2.5vw] text-[7vw] tracking-wide'>Tipriyo</h2>
                        </motion.a>

                        <div className="hidden lg:block w-fit ml-auto">

                            <motion.div
                                variants={item}
                                className="children flex items-center w-[100%] mx-auto space-x-[3vw]">
                                <Link to='/contact' variants={item}
                                    className={`font-[SanAntycs] w-[9vw] text-white 
                                        hover:bg-[#013147c9] hover:text-white px-[1vw] py-[2vh] rounded-full text-[1.3vw] font- flex items-center space-x-[1vw] shadow-neutral-500 shadow-
                                                 
                                        `}>
                                    <span>
                                        Email
                                    </span>
                                    <span className='text-[#ffc300] text-[3vh]'>
                                        <MdEmail />
                                    </span>
                                </Link>
                                {session ?

                                    <button className='font-[SanAntycs] w-[9vw] text-white 
                                    hover:bg-[#013147c9] hover:text-white px-[1vw] py-[2vh] rounded-full text-[1.3vw] font- flex items-center space-x-[1vw] shadow-neutral-500' onClick={handleLogout}>
                                        <span>
                                            Logout
                                        </span>
                                        <span className='text-[#ffc300] text-[3vh]'>
                                            <SlLogout />
                                        </span>
                                    </button>

                                    :

                                    <Link to='/auth' variants={item}
                                        className={`font-[SanAntycs] w-[9vw] text-white 
                                        hover:bg-[#013147c9] hover:text-white px-[1vw] py-[2vh] rounded-full text-[1.3vw] font- flex items-center space-x-[1vw] shadow-neutral-500 shadow-
                                                 
                                        `}>
                                        <span>
                                            Login
                                        </span>
                                        <span className='text-[#ffc300] text-[3vh]'>
                                            <SlLogin />
                                        </span>
                                    </Link>
                                }
                                {/* <Auth /> */}

                            </motion.div>

                        </div>

                    </motion.div>
                    <motion.div variants={item} className="-mr-2 flex lg:hidden w-10">
                        <button onClick={() => setIsOpen(!isOpen)} className={` inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none`}>
                            {isOpen ?
                                <svg
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    whileTap={{ scale: 0 }}
                                    transform={{ duration: 0.5 }}
                                    className="h-6 w-6 block text-white "
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
                    className="mt-[3vh] pt-2 pb-3 sm:px- w-[90%] mx-auto rounded-3xl text-left md:space-y-[1vw] space-y-[5vw] shadow-sm shadow-gray-500 ">
                    {navs.map((data, index) => {
                        return (
                            <Link to={data.link}
                                variants={items}
                                href="#how-it-works" className={`w-[30vw] text-neutral-950 hover:bg-neutral-800 hover:text-white px-[3vw] py-[2vh] rounded-full md:text-[2vh] text-[1.5vh] flex items-center space-x-[1vw] font-[poppins]`}>
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
