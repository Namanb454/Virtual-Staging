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
        autoplaySpeed: 4000,
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
            'img': 'testimonials/image_1.JPG',
            'name': 'Aarav',
            'desc': 'I recently stumbled upon Tipriyo, an AI website product that has completely revolutionized the way I approach interior design.'
        },
        {
            'img': 'testimonials/image_2.JPG',
            'name': 'Vihaan',
            'desc': "As a photographer, I have always been passionate about creating aesthetically pleasing spaces, but finding the perfect pieces to fit a particular room has always been a challenge. That's where Tipriyo comes in. "
        },
        {
            'img': 'testimonials/image_3.JPG',
            'name': 'Aanya',
            'desc': 'Thanks to Tipriyo, I have been able to create beautiful and functional spaces for my clients, and have received nothing but positive feedback.'
        },
        {
            'img': 'testimonials/image_4.JPG',
            'name': 'Arjun',
            'desc': 'I highly recommend this AI website product to anyone in the interior design industry. It truly is a game-changer and has made my job so much easier. '
        },
        {
            'img': 'testimonials/image_5.JPG',
            'name': 'Saanvi',
            'desc': 'Thanks to Tipriyo, I have been able to create beautiful and functional spaces for my clients, and have received nothing but positive feedback.'
        },
        {
            'img': 'testimonials/image_6.JPG',
            'name': 'Diya',
            'desc': 'The website is user-friendly and easy to navigate, making it accessible to anyone, regardless of their level of expertise.'
        },
        {
            'img': 'testimonials/image_7.JPG',
            'name': 'Kavya',
            'desc': 'With its advanced AI technology, Tipriyo takes into account the specific dimensions and layout of a room, as well as the personal style and preferences of the customer.'
        },
        {
            'img': 'testimonials/image_8.JPG',
            'name': 'Dhruv',
            'desc': 'I capture images of 2 to 3 properties daily and was delighted when I discovered virtualstaging.art! It has substantially reduced my expenses on virtual staging.'
        },
    ]

    return (
        <div className="w-full lg:flex mt-8 overflow-x-hidden px-10 bg-gradient-to-br from-[#081d27] from-[50%] to-[#87c0d9] lg:py-[15vh] py-[5vh]">
            <div
                // data-scroll data-scroll-speed='-0.1'
                className='lg:w-[50%] lg:text-left text-center lg:p-10 py-10 my-auto'>
                <h1 className='text-white lg:text-[3vw] text-[6vw] font-[SanAntycs] font-bold w-[100%] capitalize'>What our customers <span className='text-[#ffc300]'>think</span></h1>
            </div>

            <div className='lg:w-[50%] h-[100vh] lg:px-[5vw] py-[5%] rounded-2xl'
            // data-scroll data-scroll-speed='0.9'
            >
                <Slider {...settings}>
                    {testi.map((testimonial) => (
                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1.2 }}
                            key={testimonial.id} className="py-[4vh] w-[100vw]">
                            <div className="bg-white rounded-lg shadow-lg shadow-[#081d27] mx-auto lg:w-[30vw] w-[100%] lg:h-[80vh] h-[60vh] py-[5vh]">
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
                                        <p className="lg:text-[1.3vw] text-[5vw] font-bold font-[SanAntycs] capitalize ">{testimonial.name}</p>
                                        <p className="lg:text-[1.5vw] text-[4vw] text-[#081d27] text-justify font-semibold font-[SanAntycs]">{testimonial.desc}</p>
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
