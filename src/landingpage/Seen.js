import React from 'react'
import { BiImageAdd } from "react-icons/bi";
import { FaRegHandPointer } from "react-icons/fa";
import { AiOutlineDeliveredProcedure } from "react-icons/ai";
import { FaArrowsRotate } from "react-icons/fa6";
// import Carousel from '../components/Layout/Carousel';
import MyCarousel from '../components/Layout/Carousel';
const Seen = () => {
    const data = [
        {
            'img': 'home/logo_cnetjapan_2022.png'
        },
        {
            'img': 'home/yahoo_finance_en-US_h_p_financev2_2.png'
        },
        {
            'img': 'home/REM-Logo.png'
        },
        {
            'img': 'home/logo-light.png'
        },
        {
            'img': 'home/iprologo_homepage.png'
        },
        {
            'img': 'home/aplogo.svg'
        },
        {
            'img': 'home/japan-herald.png'
        },
        {
            'img': 'home/The-Negotiator-Logo-retina.png'
        },
    ]

    const carouselImages = [

        'home/BedroomA.jpg',
        'home/BedroomB.jpg',

        'home/DiningRoomA.jpg',
        'home/DiningRoomB.jpg',


        'home/HomeOfficeA.jpg',
        'home/HomeOfficeB.jpg',


        'home/LivingRoomA.jpg',
        'home/LivingRoomB.jpg',

    ]

    const steps = [
        {
            'title': 'Step 1: Upload Image',
            'desc': "Upload a high-quality image of an empty room. File types supported: JPG, JPEG, and PNG",
            'step': < BiImageAdd />,
        },
        {
            'title': 'Step 2: Choose Style',
            'desc': "Choose the style of furniture. There are many to try from!",
            'step': <FaRegHandPointer />,
        },
        {
            'title': 'Step 3: Submit',
            'desc': "Click “Submit” to stage your room! Wait for 30 seconds to see your staged images!",
            'step': <AiOutlineDeliveredProcedure />,
        },
        {
            'title': 'Step 4: Regenerate',
            'desc': "Regenerate for perfection. Regenerate as many times as you want until you get the perfect image!",
            'step': <FaArrowsRotate />,
        },
    ]
    return (
        <div className='py-[10vh]'>

            <h1 className='text-neutral-950 lg:text-[3.2vw] text-[10vw] font-[lexend] text-center'>As seen in</h1>

            <section class="text-gray-600 body-font">
                <div class="container px-[3vw] py-[4vh] mx-auto">
                    <div class="text-center grid xl:grid-cols-8 grid-cols-2 gap-8 content-center">
                        {data.map(data => {
                            return (
                                <div class="lg:w-[145px] w-fit h-auto">
                                    <img className='mx-auto h-[5vh] aspect-[5]' src={data.img} />
                                </div>
                            )
                        })}
                    </div>
                </div>

                <section class="text-gray-600 body-font">
                    <div class="container px-[2.5vw] py-[5vh] mx-auto">
                        <div class="flex flex-wrap text-center">

                            {steps.map(data => {
                                return (
                                    <div class="md:w-1/4 sm:w-1/2 w-full">
                                        <div class="px-4 py-6 rounded-lg space-y-[3vh]">
                                            <h2 className='lg:text-[5vw] text-[10vw] mx-auto w-fit text-neutral-950 font-normal'>{data.step}</h2>
                                            <h2 class="title-font lg:text-[1.5vw] text-[5vw] text-gray-900 font-semibold font-[inter]">{data.title}</h2>
                                            <p class="leading-relaxed font-[inter] lg:text-[1.1vw] text-justify">{data.desc}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
            </section>

            <div className='py-[10vh]'>
                <h1 className='lg:text-[3.5vw] text-[5vw] font-[lexend] text-center py-[2vh]'>AI Virtual Staging Image Examples</h1>
                <MyCarousel images={carouselImages} />
            </div>
        </div>
    )
}

export default Seen
