import React, { useState, useEffect } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import classNames from 'classnames';
import MarqueeImage from '../../landingpage/MarqueeImage';

const AutomaticCarousel = ({ images }) => {
    // const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         // setIndex((prevIndex) => (prevIndex + 1) % images.length);
    //     }, 3000);

    //     return () => clearInterval(interval);
    // }, [images.length]);


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

    return (
        <div className="container mx-auto">
            <MarqueeImage imageUrl={images} altText="Marquee Image" />
        </div>
    );
};

export default AutomaticCarousel;
