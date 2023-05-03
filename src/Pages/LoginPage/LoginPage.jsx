/* eslint-disable */
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { authContext } from '../../AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const LoginPage = () => {
    const [error, setError] = useState('')
    const {auth} = useContext(authContext);   
    
    const github = new GithubAuthProvider();
    const google = new GoogleAuthProvider;
    const popupLogin = (provider) => {
        setError('')
        signInWithPopup(auth, provider)        
        .then((result) => {
            const user = result.user;
            console.log(user);
          }).catch((error) => {
            const errorMessage = error.message;
            if(errorMessage === 'Firebase: Error (auth/popup-closed-by-user).'){
                setError('Popup Closed without accepted')
            }
            else{
                setError(errorMessage)
            }
          })
    }
    return (
        <>
            <section>
                <div className='py-20'>
                <form className='w-5/12 mx-auto border py-10 rounded'>
                    <h3 className='text-2xl text-black font-medium text-center uppercase mb-6'>Please Login Here!!!</h3>
                    <p className='text-center text-red-600'>{error}</p>
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
                    <h4 className='text-center mt-3'>Not a Member? <Link to='/login/registration' className='text-blue-500 decoration-solid underline'>Please Registration Here</Link></h4>
                    <p className='text-center mb-0'>Or</p>
                <div onClick={()=> popupLogin(google)} className='flex items-center gap-3 justify-center w-5/12 mx-auto border px-3 py-2 rounded cursor-pointer mt-2'>
                    <FaGoogle></FaGoogle>Login with Google
                </div>
                <div onClick={()=> popupLogin(github)} className='flex items-center gap-3 justify-center w-5/12 mx-auto border px-3 py-2 rounded cursor-pointer mt-2'>
                    <FaGithub></FaGithub>Login with Github
                </div>
                </form>
                </div>
            </section>
        </>
    );
};

export default LoginPage;