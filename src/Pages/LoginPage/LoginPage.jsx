/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
        <>
            <section>
                <div className='py-20'>
                <form className='w-5/12 mx-auto border p-5 rounded'>
                    <h3 className='text-2xl text-black font-medium text-center uppercase mb-6'>Please Login Here!!!</h3>
                    <div className='w-1/2 mx-auto mt-3'>
                        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example@gmail.com" required />
                    </div>

                    <div className='w-1/2 mx-auto mt-3'>
                        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className='w-1/2 mx-auto mt-3 text-center'>
                        <input className='btn px-7 py-2 bg-amber-500 rounded cursor-pointer text-white font-bold' type="submit" value="Login" />
                    </div>
                    <h4 className='text-center mt-3'>Not a Member? <Link to='/login/registration' className='text-blue-500'>Please Registration Here</Link></h4>
                </form>
                </div>
            </section>
        </>
    );
};

export default LoginPage;