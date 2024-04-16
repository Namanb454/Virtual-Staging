import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import { motion } from 'framer-motion';

const GalleryPage = () => {
    const variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const item = {
        hidden: {
            opacity: 0,
            y: 100,
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
            },
        },
    };

    const [imageList, setImageList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const observer = useRef();

    useEffect(() => {
        fetchImageList();
    }, [page]);

    useEffect(() => {
        observer.current = new IntersectionObserver(
            handleObserver,
            { threshold: 0.5 }
        );
    }, []);

    const handleObserver = (entities) => {
        const target = entities[0];
        if (target.isIntersecting && hasMore) {
            setPage(prevPage => prevPage + 1);
        }
    };

    const fetchImageList = async () => {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`);
            setImageList(prevImageList => [...prevImageList, ...response.data.map(photo => photo.url)]);
            if (response.data.length === 0) {
                setHasMore(false);
            }
        } catch (error) {
            console.error('Error fetching image list:', error);
            setError('Failed to fetch images.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!loading && hasMore) {
            observer.current.observe(document.querySelector('.observer'));
        }
        return () => {
            if (observer.current) {
                observer.current.disconnect();
            }
        };
    }, [loading, hasMore]);

    return (
        <div title={"Tipriyo-Home "} className='font-[SanAntycs]'>
            <div className='backdrop-blur-sm lg:pt-[7vh] pt-[3vh]'>
                <Header />
            </div>

            <h2 className="text-3xl font-semibold text-center mt-8 mb-4">Gallery</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center" style={{ padding: '0 20px' }}>
                {imageList.map((imageUrl, index) => (
                    <motion.img key={index} src={imageUrl} alt={`Image ${index}`} className="max-w-xs rounded-lg shadow-lg"
                        initial="hidden"
                        animate="show"
                        variants={item}
                    />
                ))}
                {!loading && hasMore && (
                    <div className="observer" style={{ height: '20px' }}></div>
                )}
                {loading && <div>Loading...</div>}
                {error && <div>Error: {error}</div>}
            </div>
            <Footer />
        </div>
    );
};

export default GalleryPage;
