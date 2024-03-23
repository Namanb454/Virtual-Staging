import React from 'react'
import { CiCamera, CiHome } from "react-icons/ci";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import { GrUserManager } from "react-icons/gr";
const ClientServe = () => {

    const data = [
        {
            'img': <CiCamera />,
            'title': 'Photographers',
            'desc': 'Service your customers with staged images for a fraction of the price and speed of traditional virtual staging'
        },
        {
            'img': <CiHome />,
            'title': 'Agents/Brokerages',
            'desc': 'Increase the price that you sell a listing by helping buyers imagine what their home would look like'

        },
        {
            'img': <GrUserManager />,
            'title': 'Property Managers',
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
                <div class="flex flex-col text-center w-full mb-[5vh]">
                    <h1 class="lg:text-[3vw] text-[5vw] font-[550] title-font mb-4">Clients we serve</h1>
                </div>

                <div class="flex flex-wrap text-center">
                    {data.map(data => {
                        return (
                            <div class="p-[2vh] lg:w-[25%] md:w-[25%] w-full ">
                                <div class="hover:bg-blue-600 hover:transition-all ease-in-out duration-400 h-full rounded-3xl shadow-md border-2 border-gray-200 lg:px-[2vw] px-[5vw] lg:py-[3vh] py-[5vh] group">
                                    <h2 className='w-fit mx-auto lg:text-[5vw] text-[10vw] group-hover:text-white'>{data.img}</h2>
                                    <h2 class="title-font font-medium lg:text-[1.5vw] text-[5vw] py-[2vh] group-hover:text-white">{data.title}</h2>
                                    <p class="leading-relaxed text-neutral-600 lg:text-[1.1vw] text-justify group-hover:text-white">{data.desc}</p>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </section>
    )
}

export default ClientServe
