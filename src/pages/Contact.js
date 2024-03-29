import React from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Contact = () => {
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
    return (
        <div>
            {/* Contact Us */}

            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <motion.a variants={item} href='/' className="flex-shrink-0 md:w-full w-full items-center">
                    <motion.img className="lg:w-[10vw] md:w-[8vw] w-[30vw] rounded-full lg:mx-24" src="Logo - white background.jpg" alt="Logo" />

                    {/* <h2 className='text-[#ffc300] font-[SanAntycs] font-normal lg:text-[2.5vw] text-[7vw] tracking-wide'>Tipriyo</h2> */}
                </motion.a>
                <div className="max-w-2xl lg:max-w-5xl mx-auto border px-5 rounded-2xl py-5">
                    <div className="text-center">
                        <h1 className="lg:w-[80%] w-[90%] mx-auto lg:text-[3vw] text-[6vw] font-bold title-font mb-5 text-[#081d27] font-[SanAntycs] capitalize flex">
                            <h2 className='mx-auto text-center w-fit'>
                                Contact us
                            </h2>
                        </h1>
                        <p className="font-[SanAntycs] lg:w-[50vw] w-[80%] tracking-wide font-semibold mx-auto leading-relaxed lg:text-[1.5vw] px-2 text-[#013147c9]">
                            We'd love to talk about how we can help you.
                        </p>
                    </div>
                    <div className="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
                        {/* Card */}
                        <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-gray-700">
                            <h2 className="mb-8 text-xl font-semibold text-[#081d27] font-[SanAntycs]">
                                Fill in the form
                            </h2>
                            <form>
                                <div className="grid gap-4 font-[poppins]">
                                    {/* Grid */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="hs-firstname-contacts-1" className="sr-only">First Name</label>
                                            <input type="text" name="hs-firstname-contacts-1" id="hs-firstname-contacts-1" className="py-3 px-4 block w-full border-[#081d27] rounded-lg text-sm border focus:border-white focus:ring-0" placeholder="First Name" />
                                        </div>
                                        <div>
                                            <label htmlFor="hs-lastname-contacts-1" className="sr-only">Last Name</label>
                                            <input type="text" name="hs-lastname-contacts-1" id="hs-lastname-contacts-1" className="py-3 px-4 block w-full border-[#081d27] rounded-lg text-sm border focus:border-white focus:ring-0" placeholder="Last Name" />
                                        </div>
                                    </div>
                                    {/* End Grid */}
                                    <div>
                                        <label htmlFor="hs-email-contacts-1" className="sr-only">Email</label>
                                        <input type="email" name="hs-email-contacts-1" id="hs-email-contacts-1" autoComplete="email" className="py-3 px-4 block w-full border-[#081d27] rounded-lg text-sm border focus:border-white focus:ring-0" placeholder="Email" />
                                    </div>
                                    <div>
                                        <label htmlFor="hs-phone-number-1" className="sr-only">Phone Number</label>
                                        <input type="text" name="hs-phone-number-1" id="hs-phone-number-1" className="py-3 px-4 block w-full border-[#081d27] rounded-lg text-sm border focus:border-white focus:ring-0" placeholder="Phone Number" />
                                    </div>
                                    <div>
                                        <label htmlFor="hs-about-contacts-1" className="sr-only">Details</label>
                                        <textarea id="hs-about-contacts-1" name="hs-about-contacts-1" rows={4} className="py-3 px-4 block w-full border-[#081d27] rounded-lg text-sm border focus:border-white focus:ring-0" placeholder="Details" defaultValue={""} />
                                    </div>
                                </div>
                                {/* End Grid */}
                                <div className="mt-4 grid">
                                    <button type="submit" className="py-3 px-4 w-full inline-flex justify-center items-center gap-x-2 lg:text-[1.4vw] text-[4vw] font-bold rounded-lg border border-[#87c0d9] text-[#87c0d9] bg-[#081d27] disabled:opacity-50 disabled:pointer-events-none  dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 transition-all duration-300 font-[SanAntycs]">Send inquiry</button>
                                </div>
                                <div className="mt-3 text-center">
                                    <p className="text-sm text-gray-500 font-[poppins]">
                                        We'll get back to you in 1-2 business days.
                                    </p>
                                </div>
                            </form>
                        </div>
                        {/* End Card */}
                        <div className="divide-y divide-gray-200 dark:divide-gray-800 font-[poppins]">
                            {/* Icon Block */}
                            <div className="flex gap-x-7 py-6">
                                <svg className="flex-shrink-0 size-6 mt-1.5 text-gray-800 " xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><circle cx={12} cy={12} r={10} /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><path d="M12 17h.01" /></svg>
                                <div className="grow">
                                    <h3 className="font-semibold text-gray-800 ">Knowledgebase</h3>
                                    <p className="mt-1 text-sm text-gray-500">We're here to help with any questions or code.</p>
                                    <a className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                        Contact support
                                        <svg className="flex-shrink-0 size-2.5 transition ease-in-out group-hover:translate-x-1" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z" fill="currentColor" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="flex gap-x-7 py-6">
                                <svg className="flex-shrink-0 size-6 mt-1.5 text-gray-800 " xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" /><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" /></svg>
                                <div className="grow">
                                    <h3 className="font-semibold text-gray-800 ">FAQ</h3>
                                    <p className="mt-1 text-sm text-gray-500">Search our FAQ for answers to anything you might ask.</p>
                                    <a className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                        Visit FAQ
                                        <svg className="flex-shrink-0 size-2.5 transition ease-in-out group-hover:translate-x-1" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z" fill="currentColor" />
                                        </svg>
                                    </a>
                                </div>
                            </div>


                            <div className=" flex gap-x-7 py-6">
                                <svg className="flex-shrink-0 size-6 mt-1.5 text-gray-800 " xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" /><path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" /></svg>
                                <div className="grow">
                                    <h3 className="font-semibold text-gray-800 ">Contact us by email</h3>
                                    <p className="mt-1 text-sm text-gray-500">If you wish to write us an email instead please use</p>
                                    <a className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                        example@site.com
                                    </a>
                                </div>
                            </div>
                            {/* End Icon Block */}
                        </div>
                    </div>
                </div>
            </div>
            {/* End Contact Us */}
        </div>


    )
}

export default Contact
