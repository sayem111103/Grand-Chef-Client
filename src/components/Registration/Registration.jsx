/* eslint-disable */
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../../AuthProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Registration = () => {
    const [show, setShow] = useState(false)
    const [error, setError] = useState('')
    const { handleEmailPasswordFRegistration } = useContext(authContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    // registration function
    const handleRegistration = (e) => {
        setError('')
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoUrl = form.url.value;
        console.log(name, email, password, photoUrl);
        if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)) {
            return setError('Password should be minimum eight characters, at least one letter, one number and one special character')
        }
        else if (!email && !password && !name && !photoUrl) {
            return setError('please provide email, password, name and photo url')
        }
        handleEmailPasswordFRegistration(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                upDateProfile(user, name, photoUrl)
                form.reset()
                navigate(from,{replace: true});
            })
            .catch((error) => {
                const errorMessage = error.message;
                if (errorMessage === 'Firebase: Error (auth/email-already-in-use).') {
                    setError('email already in Use')
                }
                else {
                    setError(errorMessage)
                }
            })
    }

    const upDateProfile = (user, username, url) => {
        updateProfile(user, {
            displayName: username, photoURL: url
        }).then(() => {
        }).catch((error) => {
            setError(error.message)
        })
    }

    return (
        <>
            <section>
                <div className='mx-auto w-[95%] py-10'>
                    <form onSubmit={handleRegistration} className='w-5/12 mx-auto border p-5 rounded'>
                        <h3 className='text-2xl text-black font-medium text-center uppercase mb-6'>Please Registration Here!!!</h3>
                        <p className='text-center text-red-600'>{error}</p>
                        <div className='w-1/2 mx-auto'>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                            <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                        </div>

                        <div className='w-1/2 mx-auto mt-3'>
                            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example@gmail.com" required />
                        </div>

                        <div className='w-1/2 mx-auto mt-3'>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type={show ? "text" : "password"} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>

                        <div className='w-1/2 mx-auto mt-3'>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photo Url</label>
                            <input type="url" id="url" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>

                        <div className='w-1/2 mx-auto mt-3 text-center'>
                            <input onChange={() => setShow(!show)} className='mr-1' type="checkbox" /> Show/Hide Password
                        </div>

                        <div className='w-1/2 mx-auto mt-3 text-center'>
                            <input className='btn px-7 py-2 bg-amber-500 rounded cursor-pointer text-white font-bold' type="submit" value="Registration" />
                        </div>

                        <h4 className='text-center mt-3'>Already a Member? <Link to='/login' className='text-blue-500 underline decoration-solid'>Please Login Here</Link></h4>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Registration;