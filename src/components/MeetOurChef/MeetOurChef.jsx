/* eslint-disable */
import React, { useState } from 'react';
import { FaRegThumbsUp } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const MeetOurChef = ({ chef }) => {
    const [seeMore, setSeeMore] = useState(false)
    console.log(chef);
    return (
        <section className='pb-20 mx-auto w-[95%]'>
            <h3 className='text-4xl text-black font-bold text-center uppercase'>Meet Our Chef's</h3>
            <div className='mt-10 grid grid-cols-3 gap-6'>
                {chef.slice(0, seeMore? 9:6).map(cd => {
                    return (
                        <div className='mx-auto' key={cd.id}>
                            <div className="max-w-sm h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <Link to="/recipe">
                                    <img title={cd.chefName} className="rounded-t-lg h-[350px] w-full" src={cd.chefPicture} alt={cd.chefPicture} />
                                </Link>
                                <div className="p-5">
                                    <Link to="/recipe">
                                        <h5 className="mb-2 text-2xl uppercase font-bold tracking-tight text-gray-900 dark:text-white">{cd.chefName}</h5>
                                    </Link>
                                    <p className='text-justify font-thin'>{cd.bio.slice(0, 100)}...</p>
                                    <p><span className='text-md font-bold'>Recipe : </span> {cd.numRecipes}</p>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className='text-md font-bold'>Experience : </span>{cd.yearsOfExperience}</p>
                                    <div className='flex items-center justify-between'>
                                    <Link to="/recipe" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        View Recipe
                                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </Link>
                                    <div className=''>
                                       <FaRegThumbsUp className='mx-auto text-blue-600'></FaRegThumbsUp> {cd.likes}
                                    </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )
                })}
            </div>
            <button onClick={()=> setSeeMore(!seeMore)} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-8 py-2.5 mx-auto block mt-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">{seeMore? 'See Less' : 'See More'}</button>
        </section>
    );
};

export default MeetOurChef;