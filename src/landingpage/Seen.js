import React from 'react'
import { BsCloudUpload } from "react-icons/bs";
import { BiPointer } from "react-icons/bi";
import { GoChecklist } from "react-icons/go";
import { GrPowerCycle } from "react-icons/gr";
import { IoCloudDownloadOutline } from "react-icons/io5";
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


    const steps = [
        {
            'title': '1. Upload Image',
            'desc': "Upload a high-quality image of an empty room. File types supported: JPG, JPEG, and PNG.",
            'step': <BsCloudUpload />,
        },
        {
            'title': '2. Choose Style',
            'desc': "Choose the style of furniture. There are many to try from.",
            'step': <BiPointer />,
        },
        {
            'title': '3. Submit',
            'desc': "Click “Submit” to stage your room! Wait for 30 seconds to see your staged images.",
            'step': <GoChecklist />,
        },
        {
            'title': '4. Regenerate',
            'desc': "Regenerate for perfection. Regenerate as many times as you want until you get the perfect image.",
            'step': <GrPowerCycle />,
        },
        {
            'title': '5. Download',
            'desc': "Download your favorite images. No watermark with subscription.",
            'step': <IoCloudDownloadOutline />,
        },
    ]
    return (
        <div className=''>

            {/* <h1 className='text-neutral-950 lg:text-[3.2vw] text-[10vw] font-[lexend] text-center'>As seen in</h1> */}

            <section class="text-gray-600 body-font lg:py-[15vh] py-[5vh]">
                <section class="text-gray-600 body-font">
                    <h1 className='lg:text-[3vw] text-[6vw] font-[SanAntycs] uppercase font-extrabold text-center py-[2vh] tracking-wide'
                    >How <span className='text-[#ffc300]'>To</span></h1>
                    <div class="container px-[2.5vw] lg:py-[10vh] py-[10] mx-auto">
                        <div class="flex flex-wrap text-center"
                        // data-scroll data-scroll-speed='0.5'
                        >

                            {steps.map(data => {
                                return (
                                    <div class="md:w-1/5 sm:w-1/2 w-full"
                                    // data-scroll data-scroll-speed='-0.1'
                                    >
                                        <div class="px-4 py-6 rounded-lg space-y-[3vh]">
                                            <h2 className='lg:text-[5vw] text-[10vw] mx-auto w-fit text-[#013147c9] font-normal'>{data.step}</h2>
                                            <h2 class="title-font text-[#081d27] lg:text-[2vw] text-[5vw] font-[900] font-[SanAntycs]">{data.title}</h2>
                                            <p class="leading-relaxed font-[poppins] lg:text-[1.1vw] text-justify font-bold text-[#013147c9]">{data.desc}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
            </section>

            <div className='lg:py-[] py-[5vh] overflow-hidden h-screen text-[#081d27]'
            // data-scroll data-scroll-speed='0.5'
            >
                <div className='flex lg:text-[3vw] text-[6vw] font-[SanAntycs]'>
                    <h2 className='w-[50%] mx-auto text-center'>Before</h2>
                    <h2 className='w-[50%] mx-auto text-center'>After</h2>
                </div>
                <MyCarousel
                />
            </div>
        </div>
    )
}

export default Seen
