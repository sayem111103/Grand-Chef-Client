/* eslint-disable */
import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';

const Login = () => {
    const background = true;
    return (
        <>
            <Navbar value={background}></Navbar>            
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Login;