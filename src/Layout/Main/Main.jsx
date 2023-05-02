/* eslint-disable */
import React from 'react';
import Header from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const Main = () => {
    return (
        <>
        <Header></Header>  
        <Navbar></Navbar> 
        <Outlet></Outlet> 
        <Footer></Footer>        
        </>
    );
};

export default Main;