import React from 'react'

const Video = () => {
    return (
        <div id='video' className='py-[10vh] w-[100%] mx-auto text-center h- bg text-white bg-gradient-to-br from-[#081d27] from-[50%] to-[#87c0d9] space-y-[5vh]'
        >
            <h1 className='lg:text-[3vw] text-[5vw] lg:px-0 px-[3vw] font-extrabold font-[astro]'>Get started today</h1>

            <h2 className='lg:w-[100%] w-[80%] mx-auto font-[modeka]'>Stage Real Estate Images in Seconds. Save 90% of the Cost.</h2>

            <div className=' mx-auto lg:w-fit'>
                <iframe className=' lg:w-[55vw] w-[80vw] lg:h-[60vh] h-[50vh] mx-auto' src="https://www.youtube.com/embed/ZhitB6Q9O9g?si=HILe0VyShAr5if2T" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

            <button className='text-[#013147c9] rounded-full bg-white px-[1vw] py-[1.5vh] w-fit font-bold font-[baguile] shadow-lg hover:shadow-[#081d27] transition-all duration-300'>
                Generate your first image
            </button>
        </div>
    )
}

export default Video
