import React from 'react'
import Layout from '../components/Layout/Layout'
import { FaPlay } from "react-icons/fa";
import Banner from '../landingpage/Banner';
import Seen from '../landingpage/Seen';
import Pricing from '../landingpage/Pricing';
import ClientServe from '../landingpage/ClientServe';
import Video from '../landingpage/Video';

const Home = () => {
    return (
        <Layout title={"Virtual-Staging-Home "}>

            <Banner />

            <Seen />

            <Pricing />

            <ClientServe />

            <Video/>

        </Layout>
    )
}

export default Home
