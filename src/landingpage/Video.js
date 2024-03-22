import React from 'react'

const Video = () => {
    return (
        <div className='py-[10vh] w-[100%] mx-auto text-center h-screen bg text-white bg-blue-600 space-y-[5vh]'
        >
            <h1 className='lg:text-[3vw] text-[5vw] lg:px-0 px-[3vw] font-medium title-font font-[lexend]'>Get started today</h1>
            <h2 className='font-[inter]'>Stage Real Estate Images in Seconds. Save 90% of the Cost.</h2>
            <div className='shadow-[-100px_50px_950px_100px_#8b5cf6] mx-auto w-fit'>
                <iframe className='shadow-[200px_50px_950px_100px_#0891b2] w-[55vw] h-[60vh] mx-auto ' src="https://www.youtube.com/embed/ZhitB6Q9O9g?si=HILe0VyShAr5if2T" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
    )
}

export default Video
