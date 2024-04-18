import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import { createClient } from '@supabase/supabase-js';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

const supabase = createClient(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_SUPABASE_ANON_KEY);

const UserProfilePage = () => {
    const navigate = useNavigate();

    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    // State to manage user data and credits
    const [userData, setUserData] = useState(null);


    // Function to fetch user data
    const fetchUserData = async () => {
        try {
            const user = (await supabase.auth.getSession()).data.session?.user;

            if (!user) {
                // If no user data, navigate to login page
                navigate('/auth');
                return;
            }

            // Fetch user data from Supabase
            ;
            const { data, error } = await supabase.from('users').select().eq('user_id', user.id).limit(1);
            if (error) throw error;

            setUserData(data);

        } catch (error) {
            console.error('Error fetching user data:', error);
            // Handle error
        }
    };

    useEffect(() => {
        // Fetch user data when component mounts
        fetchUserData();
    }, []);

    // Render only if user data is available
    if (!userData) {
        return <div>Loading...</div>;
    }

    // Pricing data for purchasing credits
    const pricingData = [
        {
            method: 'Our Software',
            time: 'Seconds',
            price: '149',
            credit: '1 credit',
            popular: ''
        },
        {
            method: 'Humans using photoshop',
            time: 'Days',
            price: '599',
            credit: '5 credits',
            popular: ''
        },
        {
            method: 'Physically staging a home with furniture',
            time: 'Weeks',
            price: '1,099',
            credit: '10 credits',
            popular: 'Most Popular'
        },
        {
            method: 'Physically staging a home with furniture',
            time: 'Weeks',
            price: '3,000',
            credit: '25 credits',
            popular: ''
        },
    ];

    // Function to handle purchase of credits
    const handlePurchaseCredits = () => {
        // Add logic for purchasing credits
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setLoading(true);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });

        setLoading(false);

        if (error) {
            setError(error.message);
        } else {
            // Handle successful payment, e.g., send paymentMethod.id to your server
            console.log('PaymentMethod', paymentMethod);
        }
    };

    return (
        <div className='font-[SanAntycs]'>
            <div className='bg-cover'>
                <div className='backdrop-blur-sm'>
                    <Header />
                </div>
                <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center">
                    <h2 className="text-3xl font-semibold mb-4">User Profile</h2>
                    <div className="bg-white shadow-md rounded-lg p-8 w-full md:w-2/3 lg:w-1/2">
                        {/* Display user details */}
                        <p className="text-lg mb-4"><strong>Email:</strong> {userData[0].email}</p>
                        <p className="text-lg mb-4"><strong>Credits Left:</strong> {userData[0].credits}</p>
                        {/* Button to toggle dropdown */}
                        <button onClick={handlePurchaseCredits} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">
                            Purchase More Credits
                        </button>

                        <form onSubmit={handleSubmit}>
                            <CardElement />
                            <button type="submit" disabled={!stripe || loading}>
                                {loading ? 'Processing...' : 'Pay'}
                            </button>
                            {error && <div>{error}</div>}
                        </form>

                        {/* Dropdown menu for purchasing more credits */}
                        <div className="bg-white shadow-md rounded-lg p-4 mt-4 w-full">
                            {pricingData.map((data, index) => (
                                <div
                                    key={index}
                                    className="border-b border-gray-200 py-2"
                                >
                                    <div className="py-[2vh] font-[SanAntycs] tracking-wide font-bold">
                                        <h4 className="lg:text-[2vw] text-[5vw]">Pricing for Tipriyo</h4>
                                    </div>
                                    <div className="lg:py-[2vh] font-[SanAntycs] tracking-widest">
                                        <span className="font-bold lg:text-[2vw] text-[6vw] text-[#081d27]">
                                            <span className=''>{data.credit} - &#8377;{data.price}</span>
                                        </span>
                                    </div>
                                    <div className=" flex justify-center py-[3.5vh] font-[SanAntycs]">
                                        <ul className="space-y-[2vh] text-left lg:text-[1.2vw]">
                                            <li className="">
                                                1. All furniture styles
                                            </li>
                                            <li className="">
                                                2. All room types
                                            </li>
                                            <li>
                                                3. Unlimited regenerations
                                            </li>
                                        </ul>
                                    </div>
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">Buy</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default UserProfilePage;
