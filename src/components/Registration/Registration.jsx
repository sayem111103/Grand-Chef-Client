/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <>
            <section>
                <div className='mx-auto w-[95%] py-10'>
                <form className='w-5/12 mx-auto border p-5 rounded'>
                    <div className='w-1/2 mx-auto'>
                        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                        <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                    </div>

                    <div className='w-1/2 mx-auto mt-3'>
                        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example@gmail.com" required />
                    </div>

                    <div className='w-1/2 mx-auto mt-3'>
                        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className='w-1/2 mx-auto mt-3'>
                        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photo Url</label>
                        <input type="url" id="url" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className='w-1/2 mx-auto mt-3 text-center'>
                        <input className='btn px-7 py-2 bg-amber-500 rounded cursor-pointer text-white font-bold' type="submit" value="Registration" />
                    </div>
                    <h4 className='text-center mt-3'>Already a Member? <Link to='/login' className='text-blue-500'>Please Login Here</Link></h4>
                </form>
                </div>
            </section>
        </>
    );
};

export default Registration;