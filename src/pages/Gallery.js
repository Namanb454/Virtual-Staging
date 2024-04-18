import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import { motion } from 'framer-motion';
import { createClient } from '@supabase/supabase-js';
import { useNavigate } from 'react-router-dom';

const supabase = createClient(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_SUPABASE_ANON_KEY);

const GalleryPage = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [imageList, setImageList] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const navigate = useNavigate();
    const observer = useRef();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const user = (await supabase.auth.getSession()).data.session?.user;
                if (!user) {
                    navigate('/auth');
                    return;
                }
                const { data, error } = await supabase.from('users').select().eq('user_id', user.id).limit(1);
                if (error) throw error;
                if (data.length === 0) {
                    navigate("/");
                } else {
                    setUserData(data[0]);
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
                navigate('/auth');
            }
        };
        fetchUserData();
    }, [navigate]);

    useEffect(() => {
        observer.current = new IntersectionObserver(handleObserver, { threshold: 0.5 });
        return () => {
            if (observer.current) {
                observer.current.disconnect();
            }
        };
    }, []);

    useEffect(() => {
        const fetchImageList = async () => {
            if (!userData || !page) return;
            try {
                const { data: images, error } = await supabase
                    .from('renders')
                    .select('image_url')
                    .eq('user_id', userData.id)
                    .range((page - 1) * 10, page * 10 - 1);
                if (error) {
                    throw new Error(error.message);
                }
                const imageUrls = images.map(image => image.image_url);
                setImageList(prevImageList => [...prevImageList, ...imageUrls]);
                if (images.length === 0) {
                    setHasMore(false);
                }
            } catch (error) {
                console.error('Error fetching image list:', error);
                setError('Failed to fetch images.');
            } finally {
                setLoading(false);
            }
        };
        fetchImageList();
    }, [userData &&page]);

    const handleObserver = (entities) => {
        const target = entities[0];
        if (target.isIntersecting && hasMore) {
            setPage(prevPage => prevPage + 1);
        }
    };

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
