import React from 'react'

const Pricing = () => {
    return (
        <section class=" body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-20">
                    <h1 class="lg:text-[3vw] text-3xl font-medium title-font mb-2 text-neutral-950 font-[lexend]">Bring down your home staging cost with AI Virtual Staging</h1>
                </div>

                <div class="lg:w-[90vw] w-full mx-auto overflow-auto rounded-xl shadow-sm shadow-neutral-300 font-[inter]">
                    <table class="table-auto w-full text-left whitespace-no-wrap border-[1px] ">
                        <thead>
                            <tr>
                                <th class="px-[3vw] py-[2vh] tracking-wider font-medium text-neutral-500 lg:text-[1vw] text-[4vw] bg-gray-100 rounded-tl rounded-bl">METHOD</th>
                                <th class="px-[3vw] py-[2vh] tracking-wider font-medium text-neutral-500 lg:text-[1vw] text-[4vw] bg-gray-100 rounded-tl rounded-bl">TIME TO DELIVERY</th>
                                <th class="px-[3vw] py-[2vh] tracking-wider font-medium text-neutral-500 lg:text-[1vw] text-[4vw] bg-gray-100 rounded-tl rounded-bl">PRICE($)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='border-t-[1px] bg-blue-50 border-gray-200 text-neutral-500 font-normal font-[inter]'>
                                <td class="px-[3vw] py-[3vh]">
                                    <h1 className='text-neutral-950 font-medium'>
                                        Virtual Staging with AI
                                    </h1>
                                    <h1>
                                        Our software.
                                    </h1>
                                </td>
                                <td class="px-[3vw] lg:text-[1.2vw] text-[3vw] py-[3vh]">Seconds</td>
                                <td class="px-[3vw] lg:text-[1.2vw] text-[3vw] py-[3vh]">Only $5/image</td>
                            </tr>

                            <tr className='border-t-[1px] border-gray-200 text-neutral-500 font-normal font-[inter]'>
                                <td class="px-[3vw] py-[3vh]">
                                    <h1 className='text-neutral-950 font-medium'>
                                        Virtual Staging
                                    </h1>
                                    <h1>
                                        Humans using photoshop to edit real estate images.
                                    </h1>
                                </td>
                                <td class="px-[3vw] lg:text-[1.2vw] text-[3vw] py-[3vh]">Days</td>
                                <td class="px-[3vw] lg:text-[1.2vw] text-[3vw] py-[3vh]">$250.00+/property</td>
                            </tr>
                            <tr className='border-t-[1px] border-gray-200 text-neutral-500 font-normal font-[inter]'>
                                <td class="px-[3vw] py-[3vh]">
                                    <h1 className='text-neutral-950 font-medium'>
                                        Physical Staging
                                    </h1>
                                    <h1>
                                        Physically staging a home with furniture.
                                    </h1>
                                </td>
                                <td class="px-[3vw] lg:text-[1.2vw] text-[3vw] py-[3vh]">Weeks</td>
                                <td class="px-[3vw] lg:text-[1.2vw] text-[3vw] py-[3vh]">$2,000.00+/property</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default Pricing
