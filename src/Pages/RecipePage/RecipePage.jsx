/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { Button } from 'flowbite-react';

const RecipePage = () => {
    const chef = useLoaderData();
    const [food, setFood] = useState([])
    useEffect(() => {
        fetch('https://grand-chef-server-sayem111103.vercel.app/food')
            .then(res => res.json())
            .then(data => setFood(data))
    }, []);

    return (
        <>
            <section key={chef.id} style={{ backgroundImage: `url(${chef.chefPicture})`, backgroundPosition: 'top', backgroundAttachment: 'fixed', backgroundColor: 'rgba(0, 0, 0, 0.4)', backgroundBlendMode: 'multiply', backgroundSize: 'cover', padding: '300px 0' }}>
                <div className='w-1/2 mx-auto'>
                    <h3 className='text-4xl text-white font-bold text-center uppercase'>{chef.chefName}</h3>
                    <p className='text-center text-xl text-white font-thin mt-4'>{chef.bio}</p>
                </div>
            </section>
            <section className='flex py-20'>
                {food.slice(0, 3).map(fd => {
                    return (
                        <div className='mx-auto' key={fd.foodId}>
                            <div className="max-w-sm h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <Link to="">
                                    <img title={fd.foodName} className="rounded-t-lg h-[250px] w-full" src={fd.foodPicture} alt={fd.chefPicture} />
                                </Link>
                                <div className="p-4 box-border">
                                    <Link to="">
                                        <h5 className="mb-2 text-2xl uppercase font-bold tracking-tight text-gray-900 dark:text-white">{fd.foodName}</h5>
                                    </Link>
                                    <p className='text-xl font-medium '>Ingredients :</p>
                                    <ol style={{ listStyleType: 'decimal', marginLeft: '20px' }}>
                                        {fd.foodIngredient.slice(0, 5).map((fi, index) => <li key={index} className='text-md font-normal'>{fi}</li>)}
                                    </ol>
                                    <div className='flex mt-5 mx-auto items-center justify-center w-9/12'>
                                        <Link to='' className="w-full inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            Add to favourite
                                            <FaHeart className='ml-2'></FaHeart>
                                        </Link>
                                    </div>

                                    <div className='flex mt-3 mx-auto items-center justify-center w-9/12'>
                                        <Link replace={true} to={`/recipedetails/${fd.foodId}`} className='w-full'>
                                            <Button className='w-full'>
                                                View Details
                                                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )
                })}
            </section>
        </>
    );
};

export default RecipePage;