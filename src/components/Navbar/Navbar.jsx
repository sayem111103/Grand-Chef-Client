/* eslint-disable */
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../AuthProvider/AuthProvider';
import ActiveLink from '../ActiveLink/ActiveLink';
import { signOut } from 'firebase/auth';
import LazyLoad from 'react-lazy-load';

const Navbar = ({ value }) => {
    const { user, auth } = useContext(authContext);
    const [show, setShow] = useState(false)

    // Signout 
    const logout = () => {
        signOut(auth).then(() => {
            alert('signout successfully')
        })
    }
    return (
        <nav className={value ? 'bg-amber-300' : ''}>
            <div className='mx-auto w-[95%] py-3 flex items-center justify-between'>
                <div>
                    <Link className='text-black font-bold uppercase text-4xl' to='/'>Grand <span className='font-normal'>Chef</span></Link>
                </div>
                <ul className='flex'>
                    <ActiveLink to='/'>Home</ActiveLink>
                    <ActiveLink to='/blog'>Blog</ActiveLink>
                    {user ? <div className="flex items-center md:order-2 relative">
                        <button onClick={() => setShow(!show)} type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
                            <span className="sr-only">Open user menu</span>
                            <LazyLoad>
                                <img title={user.displayName} className="w-8 h-8 rounded-full" src={user.photoURL} alt="user photo" />
                            </LazyLoad>
                        </button>
                        {/* <!-- Dropdown menu --> */}
                        <div className={`z-50 absolute top-6 right-0 ${show ? 'block' : 'hidden'} my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}>
                            <div className="px-4 py-3">
                                <span className="block text-sm text-gray-900 dark:text-white">{user.displayName}</span>
                                <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">{user.email}</span>
                            </div>
                            <ul className="py-2" aria-labelledby="user-menu-button">
                                <li>
                                    <Link onClick={logout} to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</Link>
                                </li>
                            </ul>
                        </div>
                    </div> : <ActiveLink to='/login'>Login</ActiveLink>}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;