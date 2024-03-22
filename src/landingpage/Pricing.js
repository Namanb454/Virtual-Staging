import React from 'react'

const Pricing = () => {
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


    return (
        <div className='py-[10vh]'>
            <section class=" body-font">
                <div class="mx-auto">
                    <div class="text-center w-[100%] mb-[10vh]">
                        <h1 class="lg:text-[3vw] text-[5vw] lg:px-0 px-[3vw] font-medium title-font mb-2 text-neutral-950 font-[lexend]">Bring down your home staging cost with AI Virtual Staging</h1>
                    </div>

                    <div class="lg:w-[90vw] w-full mx-auto overflow-auto rounded-xl shadow-sm shadow-neutral-300 font-[inter]">
                        <table class="table-auto w-full text-left whitespace-no-wrap border-[1px] ">
                            <thead>
                                <tr>
                                    <th class="px-[3vw] py-[2vh] tracking-wider font-medium text-neutral-500 lg:text-[1vw] md:text-[2vw] text-[4vw] bg-gray-100 rounded-tl rounded-bl">METHOD</th>
                                    <th class="px-[3vw] py-[2vh] tracking-wider font-medium text-neutral-500 lg:text-[1vw] md:text-[2vw] text-[4vw] bg-gray-100 rounded-tl rounded-bl">TIME TO DELIVERY</th>
                                    <th class="px-[3vw] py-[2vh] tracking-wider font-medium text-neutral-500 lg:text-[1vw] md:text-[2vw] text-[4vw] bg-gray-100 rounded-tl rounded-bl">PRICE($)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='border-t-[1px] bg-blue-50 border-gray-200 text-neutral-500 font-normal font-[inter] lg:text-[1.3vw] md:text-[3vw] text-[4vw]'>
                                    <td class="px-[3vw] py-[3vh] ">
                                        <h1 className='text-neutral-950 font-medium'>
                                            Virtual Staging with AI
                                        </h1>
                                        <h1>
                                            Our software.
                                        </h1>
                                    </td>
                                    <td class="px-[3vw]  py-[3vh]">Seconds</td>
                                    <td class="px-[3vw]  py-[3vh]">Only $5/image</td>
                                </tr>

                                <tr className='lg:text-[1.3vw] md:text-[3vw] text-[4vw] border-t-[1px] border-gray-200 text-neutral-500 font-normal font-[inter]'>
                                    <td class="px-[3vw] py-[3vh]">
                                        <h1 className='text-neutral-950 font-medium'>
                                            Virtual Staging
                                        </h1>
                                        <h1>
                                            Humans using photoshop to edit real estate images.
                                        </h1>
                                    </td>
                                    <td class="px-[3vw]  py-[3vh]">Days</td>
                                    <td class="px-[3vw] py-[3vh]">$250.00+/property</td>
                                </tr>

                                <tr className='lg:text-[1.3vw] md:text-[3vw] text-[4vw] border-t-[1px] border-gray-200 text-neutral-500 font-normal font-[inter]'>

                                    <td class="px-[3vw] py-[3vh]">
                                        <h1 className='text-neutral-950 font-medium '>
                                            Physical Staging
                                        </h1>
                                        <h1>
                                            Physically staging a home with furniture.
                                        </h1>
                                    </td>
                                    <td class="px-[3vw]  py-[3vh]">Weeks</td>
                                    <td class="px-[3vw]  py-[3vh]">$2,000.00+/property</td>

                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </section>


            <div className='pt-[10vh]'>
                <h1 className='font-[inter] text-center font-medium my-[2vh]'>
                    Trusted by Professionals at
                </h1>

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

            </div>
        </div>
    )
}

export default Pricing
