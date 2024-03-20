import React from 'react'
import Layout from '../components/Layout/Layout'
import { FaPlay } from "react-icons/fa";
import Banner from '../landingpage/Banner';
import Seen from '../landingpage/Seen';
import Pricing from '../landingpage/Pricing';

const Home = () => {
    return (
        <Layout title={"Virtual-Staging-Home "}>

            <Banner />

            <Seen />

            <Pricing />

        </Layout>
    )
}

export default Home
