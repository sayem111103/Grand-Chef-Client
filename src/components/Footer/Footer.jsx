/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import { FaLocationArrow, FaMailBulk, FaPhone, FaFacebook, FaInstagram, FaTwitter, FaRegCopyright } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='bg-[#222D38]'>
            <div className='py-20'>
                <div className='mx-auto w-[95%]'>
                    <div className='flex lg:justify-between flex-wrap flex-col lg:flex-row justify-center'>
                        <div>
                            <Link className='text-white text-center lg:text-left block font-bold uppercase text-4xl' to='/'>Grand <span className='font-normal'>Chef</span></Link>
                            <div className='flex justify-center lg:justify-start mt-5 items-center text-white'>
                                <a href="#"><FaFacebook className='mr-3'></FaFacebook></a>
                                <a href="#"><FaInstagram className='mr-3'></FaInstagram></a>
                                <a href="#"><FaTwitter></FaTwitter></a>
                            </div>
                        </div>
                        <div className='mt-8 lg:mt-0'>
                            <h3 className='text-2xl text-center lg:text-left text-white font-semibold uppercase'>Contact with us</h3>
                            <p className='text-white mt-5'>
                                <a className='flex items-center justify-center lg:justify-start' href="mailto: example@mail.com"><FaMailBulk className='mr-2'></FaMailBulk> example@mail.com</a>
                            </p>
                            <p className='text-white'>
                                <a className='flex items-center justify-center lg:justify-start' href="tel: +88017...."><FaPhone className='mr-2'></FaPhone> +88017....</a>
                            </p>
                        </div>
                        <div className='mt-8 lg:mt-0'>
                            <h3 className='text-2xl text-center lg:text-left text-white font-semibold uppercase'>Location</h3>
                            <p className="flex justify-center lg:justify-start mt-5 items-center font-medium text-white"><FaLocationArrow className='mr-2'></FaLocationArrow> Kazipur, Sirajganj, Rajshahi</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-blue-900 py-3'>
            <p className='flex items-center text-xs lg:text-lg text-white justify-center'>Copyright <FaRegCopyright className='text-xs mx-1 mt-1'></FaRegCopyright> 2022.All rights reserved by <span className='ml-1 uppercase text-amber-300'>Grand Chef.</span></p>
            </div>
        </footer>
    );
};

export default Footer;