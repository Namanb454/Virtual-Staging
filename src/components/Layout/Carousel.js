import React, { useState } from 'react';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const MyCarousel = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 2 ? 0 : prevIndex + 2
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 2 : prevIndex - 2
        );
    };
    return (
        <div className="relative"
            data-scroll data-scroll-speed='0.6'
        >
            <div className="lg:flex lg:text-[1.5vw] font-[Modeka] justify-center items-center lg:space-x-[1.5vw] lg:space-y-0 space-y-[3vh]">
                <div>
                    <h2 className='w-[45vw] text-center mx-auto font-bold'>
                        Before Tipriyo
                    </h2>
                    <img
                        src={images[currentImageIndex]}
                        alt="Carousel"
                        className="object-cover lg:mx-0 mx-auto lg:w-[45vw] w-[90vw] lg:h-[55vh] h-[45vh] rounded-lg transition-transform ease-in-out duration-500"
                    />
                </div>
                <div>
                    <h2 className='w-[45vw] text-center mx-auto font-bold'>
                        After Tipriyo
                    </h2>
                    <img
                        src={images[currentImageIndex + 1]}
                        alt="Carousel"
                        className="object-cover lg:mx-0 mx-auto lg:w-[45vw] w-[90vw] lg:h-[55vh] h-[45vh] rounded-lg transition-transform ease-in-out duration-500"
                    />
                </div>
                <button
                    className="absolute left-[2vw] top-1/2 transform -translate-y-1/2 bg-neutral-950 text-white lg:text-[1.5vw] lg:px-[1vw] px-[2vw] lg:py-[2vh] py-[1vh] rounded-full z-10 transition-opacity duration-300 hover:opacity-75"
                    onClick={prevImage}
                >
                    <MdKeyboardArrowLeft />
                </button>
                <button
                    className="absolute right-[3vw] top-1/2 transform -translate-y-1/2 bg-neutral-950 text-white lg:text-[1.5vw] lg:px-[1vw] px-[2vw] lg:py-[2vh] py-[1vh] rounded-full z-10 transition-opacity duration-300 hover:opacity-75"
                    onClick={nextImage}
                >
                    <MdKeyboardArrowRight />
                </button>
            </div>
        </div>
    );
};

export default MyCarousel;
