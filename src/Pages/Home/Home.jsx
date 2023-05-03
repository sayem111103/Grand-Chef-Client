/* eslint-disable */
import React from 'react';
import Banner from '../../components/Banner/Banner';
import About from '../../components/About/About';
import MeetOurChef from '../../components/MeetOurChef/MeetOurChef';
import { useLoaderData } from 'react-router-dom';
import FindUs from '../../components/FindUs/FindUs';
import AuthProvider from '../../AuthProvider/AuthProvider';

const Home = () => {
    const chefInfo = useLoaderData();
    return (
        <>
            <Banner></Banner>
            <About></About>
            <MeetOurChef chef={chefInfo}></MeetOurChef>
            <FindUs></FindUs>
            <AuthProvider></AuthProvider>
        </>
    );
};

export default Home;