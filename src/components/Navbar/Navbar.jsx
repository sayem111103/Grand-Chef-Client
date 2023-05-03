/* eslint-disable */
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../AuthProvider/AuthProvider';
import ActiveLink from '../ActiveLink/ActiveLink';

const Navbar = () => {
    const {user} = useContext(authContext);
    const [show, setShow] = useState(false)
    console.log(user);
    return (
        <nav className=''>
            <div className='mx-auto w-[95%] py-3 flex items-center justify-between'>
                <div>
                    <Link className='text-black font-bold uppercase text-4xl' to='/'>Grand <span className='font-normal'>Chef</span></Link>
                </div>
                <ul className='flex'>
                    <ActiveLink to='/'>Home</ActiveLink>
                    <ActiveLink to='/blog'>Blog</ActiveLink>
                    {user?<div className="flex items-center md:order-2 relative">
                        <button onClick={()=> setShow(!show)} type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
                            <span className="sr-only">Open user menu</span>
                            <img className="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1682687982185-531d09ec56fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="user photo" />
                        </button>
                        {/* <!-- Dropdown menu --> */}
                        <div className={`z-50 absolute top-6 right-0 ${show? 'block' : 'hidden'} my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}>
                            <div className="px-4 py-3">
                                <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                                <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                            </div>
                            <ul className="py-2" aria-labelledby="user-menu-button">
                                <li>
                                    <Link to="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</Link>
                                </li>
                                <li>
                                    <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</Link>
                                </li>
                            </ul>
                        </div>
                    </div>: <Link className='text-lg font-medium hover:text-blue-600' to='/login'>Login</Link>}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;