import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Header from '../components/Layout/Header'
import { useNavigate } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import { useLocation } from 'react-router-dom';

const supabase = createClient(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_SUPABASE_ANON_KEY);

const GenerateImage = () => {
    const location = useLocation(); // Initialize useLocation hook
    const queryParams = new URLSearchParams(location.search); // Get query parameters
    const imageUrlParam = queryParams.get('imageUrl'); // Get imageUrl parameter from query
    
    const [imageUrl, setImageUrl] = useState(imageUrlParam || '');

    // dropdown 
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    // const [selectedOption, setSelectedOption] = useState('');

    const toggleDropdown1 = () => {
        setIsOpen1(!isOpen1);
    };
    const toggleDropdown2 = () => {
        setIsOpen2(!isOpen2);
    };
    const toggleDropdown3 = () => {
        setIsOpen3(!isOpen3);
    };
    const handleOptionSelect1 = (room, styles, decluttermode) => {
        setRoomType(room);
        // setStyle(styles);
        // setDeclutterMode(decluttermode);

        setIsOpen1(false);
        // setIsOpen2(false);
        // setIsOpen3(false);
    };
    const handleOptionSelect2 = (styles) => {
        setStyle(styles);
        // setRoomType(room);
        // setDeclutterMode(decluttermode);

        // setIsOpen1(false);
        setIsOpen2(false);
        // setIsOpen3(false);
    };
    const handleOptionSelect3 = (decluttermode) => {
        // setStyle(styles);
        // setRoomType(room);
        setDeclutterMode(decluttermode);

        // setIsOpen1(false);
        // setIsOpen2(false);
        setIsOpen3(false);
    };


    // virtual staging parameters
    
    const [roomType, setRoomType] = useState('bed');
    const [style, setStyle] = useState('modern');
    const [resolution, setResolution] = useState('4k');
    const [waitForCompletion, setWaitForCompletion] = useState(true);
    const [addWatermark, setAddWatermark] = useState(false);
    const [mode, setMode] = useState('fast');
    const [declutterMode, setDeclutterMode] = useState('off');
    const [newImageUrl, setNewImageUrl] = useState('');
    const [error, setError] = useState('');

    const [loading, setLoading] = useState(true);

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
        if (!loading) return

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
                // signup user
                const { error } = await supabase.from('users').insert({
                    user_id: user.id,
                    email: user.email,
                    credits: 0
                })
                console.log(error)
                window.location.reload();
            } else {
                setLoading(false)
            }

            setUserData(data[0]);
            setCredits(data[0].credits);
        } catch (error) {
            console.error('Error fetching user data:', error);
            // Handle error
            handleLogout();
        }
    };

    useEffect(() => {
        if (!loading) return

        // Subscribe to changes in authentication state
        const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
            setSession(session);
            console.log(event)
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
    }, [loading]);


    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageUrl(file)
            // const reader = new FileReader();
            // reader.onload = (e) => {
            //     setImageUrl(e.target.result);
            // };
            // reader.readAsDataURL(file);
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("image", imageUrl)
        formData.append("room_type", roomType)
        formData.append("style", style)
        formData.append("resolution", resolution)
        formData.append("wait_for_completion", true)
        formData.append("add_virtually_staged_watermark", addWatermark)
        formData.append("mode", mode)
        formData.append("declutter_mode", declutterMode)

        try {
            const response = await axios.post('http://localhost:8000/createRender', formData);
            console.log(response.data);

            const { _imageUrl, renderId, newImageUrl } = response.data;

            console.log(_imageUrl, renderId, newImageUrl)

            setImageUrl(_imageUrl);
            setNewImageUrl(newImageUrl);

            const { render_error } = await supabase
                .from('renders')
                .insert({
                    user_id: userData.id,
                    render_id: renderId,
                    image_url: _imageUrl
                })

            const { consume_error } = await supabase
                .from('users')
                .update({ credits: userData.credits - 1 })
                .eq('id', userData.id)

            if (!render_error && !consume_error) {
                alert("Image has been uploaded. Your render will be ready soon.")
                navigate("/gallery")
            } else {
                console.log("errorrrrrr")
                console.log(render_error)
                console.log(consume_error)
            }

        } catch (error) {
            setError('Failed to process image');
        }
    };

    return (
        <div>
            <div className='lg:pt-[7vh] pt-[3vh]'>
                <Header />
            </div>
            <h2 className='mx-auto lg:text-[3vw] text-[6vw] font-bold title-font mb-5 text-[#081d27] font-[SanAntycs] flex lg:pt-[15vh] pt-[5vh] w-fit'>Generate Image</h2>

            <div className='lg:w-[80%] w-[90%] mx-auto lg:text-[3vw] text-[6vw] font-bold title-font mb-5 text-[#081d27] font-[SanAntycs] '>
                {/* <h1 className='w-[100%] text-[2vw]'>
                    Your Photo
                </h1> */}

                <div className='lg:flex border-2 shadow-2xl shadow-[#081d27] py-[10vh] p-10 rounded-lg lg:space-x-[2vw] lg:space-y-0 space-y-[5vw]'>



                    <div className='lg:w-[50%] text-[1.2vw]'>
                        <form onSubmit={handleSubmit} className='space-y-[2vh]'>
                            <div className=''>
                                {imageUrl && (
                                    <div>
                                        {/* <h2>Preview:</h2> */}
                                        <img className='lg:w-[20vw] w-[100vw] mb-5 mx-auto' src={imageUrl} alt="Selected" />
                                    </div>
                                )}
                                <div className='flex'>
                                    <label className='w-[50%] lg:text-base text-[3vw]' htmlFor="imageUrl">Choose image:</label>
                                    <input
                                        className='w-[50%] lg:text-base text-[3vw]'
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                    />
                                </div>
                            </div>

                            <div className='flex '>
                                <label className='w-[50%] lg:text-base text-[3vw]' htmlFor="roomType">Room type:</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={roomType}
                                        className="lg:text-base text-[3vw] cursor-pointer bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
                                        readOnly
                                        onClick={toggleDropdown1}
                                        onChange={(e) => setRoomType(e.target.value)}
                                    />
                                    {isOpen1 && (
                                        <div className=" top-full left-0 bg-white border border-gray-300 rounded-md shadow-lg mt-2">
                                            <ul className="py-1">
                                                <li
                                                    className="lg:text-base text-[3vw] hover:bg-gray-100 px-4 py-2 cursor-pointer"
                                                    onClick={() => handleOptionSelect1('bed')}
                                                >
                                                    bed
                                                </li>
                                                <li
                                                    className="lg:text-base text-[3vw] hover:bg-gray-100 px-4 py-2 cursor-pointer"
                                                    onClick={() => handleOptionSelect1('living')}
                                                >
                                                    living
                                                </li>
                                                <li
                                                    className="lg:text-base text-[3vw] hover:bg-gray-100 px-4 py-2 cursor-pointer"
                                                    onClick={() => handleOptionSelect1('kitchen')}
                                                >
                                                    kitchen
                                                </li>
                                                <li
                                                    className="lg:text-base text-[3vw] hover:bg-gray-100 px-4 py-2 cursor-pointer"
                                                    onClick={() => handleOptionSelect1('dining')}
                                                >
                                                    dining
                                                </li>
                                                <li
                                                    className="lg:text-base text-[3vw] hover:bg-gray-100 px-4 py-2 cursor-pointer"
                                                    onClick={() => handleOptionSelect1('bathroom')}
                                                >
                                                    bathroom
                                                </li>
                                                <li
                                                    className="lg:text-base text-[3vw] hover:bg-gray-100 px-4 py-2 cursor-pointer"
                                                    onClick={() => handleOptionSelect1('home_office')}
                                                >
                                                    home_office
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>


                            <div className='flex '>
                                <label className='w-[50%] lg:text-base text-[3vw]' htmlFor="style">Furniture style:</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={style}
                                        className="lg:text-base text-[3vw] cursor-pointer bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
                                        readOnly
                                        onClick={toggleDropdown2}
                                        onChange={(e) => setStyle(e.target.value)}
                                    />
                                    {isOpen2 && (
                                        <div className=" top-full left-0 bg-white border border-gray-300 rounded-md shadow-lg mt-2">
                                            <ul className="py-1">
                                                <li
                                                    className="lg:text-base text-[3vw] hover:bg-gray-100 px-4 py-2 cursor-pointer"
                                                    onClick={() => handleOptionSelect2('modern')}
                                                >
                                                    modern
                                                </li>
                                                <li
                                                    className="lg:text-base text-[3vw] hover:bg-gray-100 px-4 py-2 cursor-pointer"
                                                    onClick={() => handleOptionSelect2('scandinavian')}
                                                >
                                                    scandinavian
                                                </li>
                                                <li
                                                    className="lg:text-base text-[3vw] hover:bg-gray-100 px-4 py-2 cursor-pointer"
                                                    onClick={() => handleOptionSelect2('industrial')}
                                                >
                                                    industrial
                                                </li>
                                                <li
                                                    className="lg:text-base text-[3vw] hover:bg-gray-100 px-4 py-2 cursor-pointer"
                                                    onClick={() => handleOptionSelect2('midcentury')}
                                                >
                                                    midcentury
                                                </li>
                                                <li
                                                    className="lg:text-base text-[3vw] hover:bg-gray-100 px-4 py-2 cursor-pointer"
                                                    onClick={() => handleOptionSelect2('luxury')}
                                                >
                                                    luxury
                                                </li>
                                                <li
                                                    className="lg:text-base text-[3vw] hover:bg-gray-100 px-4 py-2 cursor-pointer"
                                                    onClick={() => handleOptionSelect2('farmhouse')}
                                                >
                                                    farmhouse
                                                </li>
                                                <li
                                                    className="lg:text-base text-[3vw] hover:bg-gray-100 px-4 py-2 cursor-pointer"
                                                    onClick={() => handleOptionSelect2('coastal')}
                                                >
                                                    coastal
                                                </li>
                                                <li
                                                    className="lg:text-base text-[3vw] hover:bg-gray-100 px-4 py-2 cursor-pointer"
                                                    onClick={() => handleOptionSelect2('standard')}
                                                >
                                                    standard
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>


                            <div className='flex '>
                                <label className='w-[50%] lg:text-base text-[3vw]' htmlFor="declutterMode">Remove existing furniture:</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={declutterMode}
                                        className="lg:text-base text-[3vw] cursor-pointer bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
                                        readOnly
                                        onClick={toggleDropdown3}
                                        onChange={(e) => setDeclutterMode(e.target.value)}
                                    />
                                    {isOpen3 && (
                                        <div className="absolute top-full left-0 bg-white border border-gray-300 rounded-md shadow-lg mt-2">
                                            <ul className="py-1">
                                                <li
                                                    className="lg:text-base text-[3vw] hover:bg-gray-100 px-4 py-2 cursor-pointer"
                                                    onClick={() => handleOptionSelect3('off')}
                                                >
                                                    off
                                                </li>
                                                <li
                                                    className="lg:text-base text-[3vw] hover:bg-gray-100 px-4 py-2 cursor-pointer"
                                                    onClick={() => handleOptionSelect3('auto')}
                                                >
                                                    auto
                                                </li>
                                                <li
                                                    className="lg:text-base text-[3vw] hover:bg-gray-100 px-4 py-2 cursor-pointer"
                                                    onClick={() => handleOptionSelect3('on')}
                                                >
                                                    on
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                            {/* Add similar input fields for other parameters */}
                            <button className='lg:text-base text-[3vw] w-[100%] rounded-md bg-[#ffc300] p-1' type="submit">Create Render</button>
                        </form>
                    </div>

                    {/* New Image  */}
                    <div className='lg:w-[50%] w-[100%]'>
                        {/* {newImageUrl && (
                            <div>
                                <h3>New Image URL:</h3>
                                <img style={{
                                    width: '50vw'
                                }} src={newImageUrl} alt="Rendered Image" />
                            </div>
                        )} */}

                        {/* {error && <p>{error}</p>} */}
                        <img src='home/BedroomB.jpg' />
                    </div>


                </div>
            </div>
        </div>
    )
}

export default GenerateImage
