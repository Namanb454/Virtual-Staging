import React from 'react'
import Layout from '../components/Layout/Layout'
import Banner from '../landingpage/Banner';
import Seen from '../landingpage/Seen';
import Pricing from '../landingpage/Pricing';
import ClientServe from '../landingpage/ClientServe';
import Video from '../landingpage/Video';
import Header from '../components/Layout/Header';

const Home = () => {
    return (
        <div title={"Tipriyo-Home "}>
            <div className='bg-cover h-screen bg-fixed'
                style={{
                    backgroundImage: 'url("home/LivingRoomB.jpg")'
                }}>
                <div className='backdrop-blur-sm pt-[7vh] h-screen'>
                    <Header />
                    <Banner />
                </div>
            </div>

            <Seen />

            <Pricing />

            <ClientServe />

            <Video />

        </div>
    )
}

export default Home
