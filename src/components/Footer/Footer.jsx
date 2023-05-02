/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import { FaLocationArrow, FaMailBulk, FaPhone, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='bg-[#222D38] py-20'>
            <div className='mx-auto w-[95%]'>
                <div className='flex justify-between'>
                    <div>
                        <Link className='text-white font-bold uppercase text-4xl' to='/'>Grand <span className='font-normal'>Chef</span></Link>
                        <div className='flex mt-5 items-center text-white'>
                            <a href="#"><FaFacebook className='mr-3'></FaFacebook></a>
                            <a href="#"><FaInstagram className='mr-3'></FaInstagram></a>
                            <a href="#"><FaTwitter></FaTwitter></a>
                        </div>
                    </div>
                    <div>
                        <h3 className='text-2xl text-white font-semibold uppercase'>Contact with us</h3>
                        <p className='text-white mt-5'>
                            <a className='flex items-center' href="mailto: example@mail.com"><FaMailBulk className='mr-2'></FaMailBulk> example@mail.com</a>
                        </p>
                        <p className='text-white'>
                            <a className='flex items-center' href="tel: +88017...."><FaPhone className='mr-2'></FaPhone> +88017....</a>
                        </p>
                    </div>
                    <div>
                        <h3 className='text-2xl text-white font-semibold uppercase'>Location</h3>
                        <p className="flex mt-5 items-center font-medium text-white"><FaLocationArrow className='mr-2'></FaLocationArrow> Kazipur, Sirajganj, Rajshahi</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;