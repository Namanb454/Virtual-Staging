import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import { motion } from 'framer-motion';
import { createClient } from '@supabase/supabase-js';
import { useNavigate } from 'react-router-dom';

const supabase = createClient(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_SUPABASE_ANON_KEY);

const GalleryPage = () => {

    const [userLoading, setUserLoading] = useState(true);

    const navigate = useNavigate();

    // State to manage user data and credits
    const [userData, setUserData] = useState(null);
    const [credits, setCredits] = useState(0);
    const [showDropdown, setShowDropdown] = useState(false);
    const [session, setSession] = useState(null);

    const handleLogout = async () => {
        await supabase.auth.signOut()
        setSession(null)
        window.location.reload();
    }

    // Function to fetch user data and credits
    const fetchUserData = async () => {
        console.log("fetch user data", userLoading)
        if (!userLoading) return

        try {
            const user = (await supabase.auth.getSession()).data.session?.user;

            if (!user) {
                // If no user data, navigate to login page
                navigate('/auth');
                return;
            }
            // Fetch user data from Supabase
            const { data, error } = await supabase.from('users').select().eq('user_id', user.id).limit(1);
            if (error) throw error;

            if (data.length == 0) {
                navigate("/")
            } else {
                setUserData(data[0]);
                setUserLoading(false)
            }

            setCredits(data[0].credits);
        } catch (error) {
            console.error('Error fetching user data:', error);
            // Handle error
            handleLogout();
        }
    };

    useEffect(() => {
        // Subscribe to changes in authentication state
        const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
            setSession(session);
            if (event === 'SIGNED_OUT') {
                navigate('/auth');
            } else if (event == 'SIGNED_IN') {
                fetchUserData();
            }
        });

        return () => {
            // Check if listener is defined before unsubscribing
            if (listener && typeof listener.unsubscribe === 'function') {
                listener.unsubscribe();
            }
        };
    }, []);

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
        if (!userData) return

        try {
            const { images, error } = await supabase.from('renders').select().eq('user_id', userData.id);
            console.log("images", images)

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
