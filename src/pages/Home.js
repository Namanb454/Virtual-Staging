import React from 'react'
import Layout from '../components/Layout/Layout'
import Banner from '../landingpage/Banner';
import Seen from '../landingpage/Seen';
import Pricing from '../landingpage/Pricing';
import ClientServe from '../landingpage/ClientServe';
import Video from '../landingpage/Video';
import Header from '../components/Layout/Header';
import Testimonials from '../landingpage/Testimonials';
import Footer from '../components/Layout/Footer';

const Home = () => {
    return (
        <div title={"Tipriyo-Home "} className=''>
            <div className='bg-cover h-screen bg-fixed'
                style={{
                    backgroundImage: 'url("home/LivingRoomB.jpg")'
                }}>
                <div className='backdrop-blur-sm lg:pt-[7vh] pt-[3vh] h-screen'>
                    <Header />
                    <Banner />
                </div>
            </div>

            <Seen />

            <ClientServe />

            <Video />

            <Pricing />

            <Testimonials />

            <Footer />
        </div>
    )
}

export default Home
