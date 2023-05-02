/* eslint-disable */
import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import About from '../../components/About/About';
import MeetOurChef from '../../components/MeetOurChef/MeetOurChef';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const chefInfo = useLoaderData();
    return (
        <>
            <Banner></Banner>
            <About></About>
            <MeetOurChef chef={chefInfo}></MeetOurChef>
        </>
    );
};

export default Home;