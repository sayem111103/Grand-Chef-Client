/* eslint-disable */
import { FaLocationArrow, FaPhone, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import React from 'react';

const Header = () => {
    return (
        <header className='bg-blue-900'>
            <div className='mx-auto w-[95%] py-3'>
                <div className="flex justify-between">
                <p className="flex items-center font-medium text-white"><FaLocationArrow className='mr-2'></FaLocationArrow> Kazipur, Sirajganj, Rajshahi</p>
                <p className='text-white'>
                    <a className='flex items-center' href="tel: +88017...."><FaPhone className='mr-2'></FaPhone> +88017....</a>
                </p>
                <div className='flex items-center text-white'>
                    <a href="#"><FaFacebook className='mr-3'></FaFacebook></a>
                    <a href="#"><FaInstagram className='mr-3'></FaInstagram></a>
                    <a href="#"><FaTwitter></FaTwitter></a>
                </div>
                </div>
            </div>
        </header>
    );
};

export default Header;