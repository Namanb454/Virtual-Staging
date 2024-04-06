import React, { useState } from 'react'
import axios from 'axios';
import Header from '../components/Layout/Header'

const GenerateImage = () => {
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
    const [imageUrl, setImageUrl] = useState('');
    const [roomType, setRoomType] = useState('bed');
    const [style, setStyle] = useState('modern');
    const [resolution, setResolution] = useState('4k');
    const [waitForCompletion, setWaitForCompletion] = useState(true);
    const [addWatermark, setAddWatermark] = useState(false);
    const [mode, setMode] = useState('fast');
    const [declutterMode, setDeclutterMode] = useState('off');
    const [newImageUrl, setNewImageUrl] = useState('');
    const [error, setError] = useState('');



    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImageUrl(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/createRender', {
                image_url: imageUrl,
                room_type: roomType,
                style: style,
                resolution: resolution,
                wait_for_completion: waitForCompletion,
                add_virtually_staged_watermark: addWatermark,
                mode: mode,
                declutter_mode: declutterMode,
            });

            const { newImageUrl } = response.data;
            setNewImageUrl(newImageUrl);
        } catch (error) {
            setError('Failed to process image');
        }
    };

    return (
        <div>
            <div className='lg:pt-[7vh] pt-[3vh]'>
                <Header />
            </div>
            <h2 className='mx-auto lg:text-[3vw] text-[6vw] font-bold title-font mb-5 text-[#081d27] font-[SanAntycs] flex lg:pt-[15vh] py-[vh] w-fit'>Generate Image</h2>

            <div className='lg:w-[80%] w-[90%] mx-auto lg:text-[3vw] text-[6vw] font-bold title-font mb-5 text-[#081d27] font-[SanAntycs] '>
                {/* <h1 className='w-[100%] text-[2vw]'>
                    Your Photo
                </h1> */}

                <div className='flex border-2 shadow-2xl shadow-[#081d27] py-[10vh] p-10 rounded-lg space-x-[2vw]'>



                    <div className=' w-[50%] text-[1.2vw]'>
                        <form onSubmit={handleSubmit} className='space-y-[2vh]'>
                            <div className=''>
                                {imageUrl && (
                                    <div>
                                        {/* <h2>Preview:</h2> */}
                                        <img src={imageUrl} alt="Selected" width="200" />
                                    </div>
                                )}
                                <div className='flex'>
                                    <label className='w-[50%]' htmlFor="imageUrl">Choose image:</label>
                                    <input
                                        className='w-[50%]'
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                    />
                                </div>
                            </div>

                            <div className='flex '>
                                <label className='w-[50%]' htmlFor="roomType">Room type:</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={roomType}
                                        className="cursor-pointer bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
                                        readOnly
                                        onClick={toggleDropdown1}
                                        onChange={(e) => setRoomType(e.target.value)}
                                    />
                                    {isOpen1 && (
                                        <div className=" top-full left-0 bg-white border border-gray-300 rounded-md shadow-lg mt-2">
                                            <ul className="py-1">
                                                <li
                                                    className="hover:bg-gray-100 px-4 py-2 cursor-pointer"
                                                    onClick={() => handleOptionSelect1('bed')}
                                                >
                                                    bed
                                                </li>
                                                <li
                                                    className="hover:bg-gray-100 px-4 py-2 cursor-pointer"
                                                    onClick={() => handleOptionSelect1('living')}
                                                >
                                                    living
                                                </li>
                                                <li
                                                    className="hover:bg-gray-100 px-4 py-2 cursor-pointer"
                                                    onClick={() => handleOptionSelect1('kitchen')}
                                                >
                                                    kitchen
                                                </li>
                                                <li
                                                    className="hover:bg-gray-100 px-4 py-2 cursor-pointer"
                                                    onClick={() => handleOptionSelect1('dining')}
                                                >
                                                    dining
                                                </li>
                                                <li
                                                    className="hover:bg-gray-100 px-4 py-2 cursor-pointer"
                                                    onClick={() => handleOptionSelect1('bathroom')}
                                                >
                                                    bathroom
                                                </li>
                                                <li
                                                    className="hover:bg-gray-100 px-4 py-2 cursor-pointer"
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
                                <label className='w-[50%]' htmlFor="style">Furniture style:</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={style}
                                        className="cursor-pointer bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
                                        readOnly
                                        onClick={toggleDropdown2}
                                        onChange={(e) => setStyle(e.target.value)}
                                    />
                                    {isOpen2 && (
                                        <div className=" top-full left-0 bg-white border border-gray-300 rounded-md shadow-lg mt-2">
                                            <ul className="py-1">
                                                <li
                                                    className="hover:bg-gray-100 px-4 py-2 cursor-pointer"
                                                    onClick={() => handleOptionSelect2('modern')}
                                                >
                                                    modern
                                                </li>
                                                <li
                                                    className="hover:bg-gray-100 px-4 py-2 cursor-pointer"
                                                    onClick={() => handleOptionSelect2('scandinavian')}
                                                >
                                                    scandinavian
                                                </li>
                                                <li
                                                    className="hover:bg-gray-100 px-4 py-2 cursor-pointer"
                                                    onClick={() => handleOptionSelect2('industrial')}
                                                >
                                                    industrial
                                                </li>
                                                <li
                                                    className="hover:bg-gray-100 px-4 py-2 cursor-pointer"
                                                    onClick={() => handleOptionSelect2('midcentury')}
                                                >
                                                    midcentury
                                                </li>
                                                <li
                                                    className="hover:bg-gray-100 px-4 py-2 cursor-pointer"
                                                    onClick={() => handleOptionSelect2('luxury')}
                                                >
                                                    luxury
                                                </li>
                                                <li
                                                    className="hover:bg-gray-100 px-4 py-2 cursor-pointer"
                                                    onClick={() => handleOptionSelect2('farmhouse')}
                                                >
                                                    farmhouse
                                                </li>
                                                <li
                                                    className="hover:bg-gray-100 px-4 py-2 cursor-pointer"
                                                    onClick={() => handleOptionSelect2('coastal')}
                                                >
                                                    coastal
                                                </li>
                                                <li
                                                    className="hover:bg-gray-100 px-4 py-2 cursor-pointer"
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
                                <label className='w-[50%]' htmlFor="declutterMode">Remove existing furniture:</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={declutterMode}
                                        className="cursor-pointer bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
                                        readOnly
                                        onClick={toggleDropdown3}
                                        onChange={(e) => setDeclutterMode(e.target.value)}
                                    />
                                    {isOpen3 && (
                                        <div className="absolute top-full left-0 bg-white border border-gray-300 rounded-md shadow-lg mt-2">
                                            <ul className="py-1">
                                                <li
                                                    className="hover:bg-gray-100 px-4 py-2 cursor-pointer"
                                                    onClick={() => handleOptionSelect3('off')}
                                                >
                                                    off
                                                </li>
                                                <li
                                                    className="hover:bg-gray-100 px-4 py-2 cursor-pointer"
                                                    onClick={() => handleOptionSelect3('auto')}
                                                >
                                                    auto
                                                </li>
                                                <li
                                                    className="hover:bg-gray-100 px-4 py-2 cursor-pointer"
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
                            <button className='w-[100%] rounded-md bg-[#ffc300] p-1' type="submit">Create Render</button>
                        </form>
                    </div>

                    {/* New Image  */}
                    <div className='w-[50%]'>
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
