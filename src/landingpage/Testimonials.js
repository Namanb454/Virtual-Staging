import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { motion } from 'framer-motion';

const Testimonials = () => {
    const settings = {
        // dots: true,

        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1400,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };


    const testi = [
        {
            'img': 'testimonials/AJ.webp',
            'name': 'AJ',
            'desc': 'I take photos of 2 to 3 units per day and was thrilled when I found virtualstaging.art! They significantly cut down on how much money I spend on virtual staging!'
        },
        {
            'img': 'testimonials/alex.webp',
            'name': 'Alex',
            'desc': 'I take photos of 2 to 3 units per day and was thrilled when I found virtualstaging.art! They significantly cut down on how much money I spend on virtual staging!'
        },
        {
            'img': 'testimonials/audrey.webp',
            'name': 'Audrey',
            'desc': 'I take photos of 2 to 3 units per day and was thrilled when I found virtualstaging.art! They significantly cut down on how much money I spend on virtual staging!'
        },
        {
            'img': 'testimonials/eustace.webp',
            'name': 'eustace',
            'desc': 'I take photos of 2 to 3 units per day and was thrilled when I found virtualstaging.art! They significantly cut down on how much money I spend on virtual staging!'
        },
        {
            'img': 'testimonials/glenn.webp',
            'name': 'Glenn',
            'desc': 'I take photos of 2 to 3 units per day and was thrilled when I found virtualstaging.art! They significantly cut down on how much money I spend on virtual staging!'
        },
        {
            'img': 'testimonials/jared.webp',
            'name': 'Jared',
            'desc': 'I take photos of 2 to 3 units per day and was thrilled when I found virtualstaging.art! They significantly cut down on how much money I spend on virtual staging!'
        },
        {
            'img': 'testimonials/kelsey.webp',
            'name': 'Kelsey',
            'desc': 'I take photos of 2 to 3 units per day and was thrilled when I found virtualstaging.art! They significantly cut down on how much money I spend on virtual staging!'
        },
        {
            'img': 'testimonials/steve.webp',
            'name': 'Steve',
            'desc': 'I take photos of 2 to 3 units per day and was thrilled when I found virtualstaging.art! They significantly cut down on how much money I spend on virtual staging!'
        },
    ]

    return (
        <div className="w-full lg:flex mt-8 overflow-x-hidden px-10 bg-gradient-to-br from-[#081d27] from-[50%] to-[#87c0d9] lg:py-[15vh] py-[5vh]">
            <div
                data-scroll data-scroll-speed='-0.1'
                className='lg:w-[50%] lg:text-left text-center p-10 my-auto'>
                <h1 className='text-white lg:text-[3vw] text-[5vw] font-[astro] font-bold w-[100%] capitalize'>What our customers <span className='text-[#ffc300]'>think</span></h1>
            </div>

            <div className='lg:w-[50%] h-[100vh] lg:px-[5vw] py-[5%] rounded-2xl'
                data-scroll data-scroll-speed='0.9'
            >
                <Slider {...settings}>
                    {testi.map((testimonial) => (
                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1.2 }}
                            key={testimonial.id} className="py-[4vh] w-[100vw]">
                            <div className="bg-[#fcfcea] rounded-lg shadow-lg shadow-[#081d27] mx-auto lg:w-[30vw] w-[100%] lg:h-[80vh] h-[60vh] py-[5vh]">
                                {/* <p className="text-lg font-medium mb-4">{testimonial.quote}</p> */}
                                <div className="items-center space-y-[3vh]">
                                    <div className="flex-shrink-0 lg:w-[10vw] w-[25vw] mx-auto">
                                        <img
                                            src={testimonial.img}
                                            alt="Testimonial Avatar"
                                            className="lg:w-[10vw] w-[25vw] rounded-full"
                                        />
                                    </div>
                                    <div className="text-center lg:px-[2vw] px-[4vw] space-y-[3vh]">
                                        <p className="lg:text-[1.3vw] text-[5vw] font-bold font-[poppins] capitalize ">{testimonial.name}</p>
                                        <p className="lg:text-[1.5vw] text-[4vw] text-[#081d27] text-justify font-serif italic">{testimonial.desc}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </Slider>

            </div>
        </div>
    )
}

export default Testimonials
