import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MyCarousel = () => {

    const settings = {
        dots: true,
        arrow: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
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

    return (
        <div
        // data-scroll data-scroll-speed='0.6'
        >
            <Slider {...settings} className='lg:space-x-[1.5vw]'>
                {carouselImages.map((images) => (
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.2 }}
                        className="w-[100vw] object-cover ">

                        <div className="object-cover bg-[#fcfcea] rounded-2xl shadow-lg shadow-[#081d27] mx-auto lg:w-[40vw] w-[100%] lg:h-[100%] h-[100%] bg-contain">
                            <div className="items-center object-cover ">
                                <div className="flex-shrink-0 lg:w-[100%] object-cover lg:h-[100%] w-[100%] mx-auto">
                                    <img
                                        src={images}
                                        alt="Testimonial Avatar"
                                        className=" lg:w-[100%] w-[100%] lg:h-[100%] object-cover rounded-xl"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </Slider>
        </div>
    );
};

export default MyCarousel;



// <div className="relative"
// >
//     <div className="lg:flex lg:text-[1.5vw] font-[poppins] justify-center items-center lg:space-x-[1.5vw] lg:space-y-0 space-y-[3vh]">
//         <div>
//             <h2 className='w-[45vw] text-center mx-auto font-bold'>
//                 Before Tipriyo
//             </h2>
//             <img
//                 src={images[currentImageIndex]}
//                 alt="Carousel"
//                 className="object-cover lg:mx-0 mx-auto lg:w-[45vw] w-[90vw] lg:h-[55vh] h-[45vh] rounded-lg transition-transform ease-in-out duration-500"
//             />
//         </div>
//         <div>
//             <h2 className='w-[45vw] text-center mx-auto font-bold'>
//                 After Tipriyo
//             </h2>
//             <img
//                 src={images[currentImageIndex + 1]}
//                 alt="Carousel"
//                 className="object-cover lg:mx-0 mx-auto lg:w-[45vw] w-[90vw] lg:h-[55vh] h-[45vh] rounded-lg transition-transform ease-in-out duration-500"
//             />
//         </div>
//         <button
//             className="absolute left-[2vw] top-1/2 transform -translate-y-1/2 bg-neutral-950 text-white lg:text-[1.5vw] lg:px-[1vw] px-[2vw] lg:py-[2vh] py-[1vh] rounded-full z-10 transition-opacity duration-300 hover:opacity-75"
//             onClick={prevImage}
//         >
//             <MdKeyboardArrowLeft />
//         </button>
//         <button
//             className="absolute right-[3vw] top-1/2 transform -translate-y-1/2 bg-neutral-950 text-white lg:text-[1.5vw] lg:px-[1vw] px-[2vw] lg:py-[2vh] py-[1vh] rounded-full z-10 transition-opacity duration-300 hover:opacity-75"
//             onClick={nextImage}
//         >
//             <MdKeyboardArrowRight />
//         </button>
//     </div>
// </div>

// const [currentImageIndex, setCurrentImageIndex] = useState(0);

// const nextImage = () => {
//     setCurrentImageIndex((prevIndex) =>
//         prevIndex === images.length - 2 ? 0 : prevIndex + 2
//     );
// };

// const prevImage = () => {
//     setCurrentImageIndex((prevIndex) =>
//         prevIndex === 0 ? images.length - 2 : prevIndex - 2
//     );
// };
