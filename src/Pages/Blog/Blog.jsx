/* eslint-disable */
import { Button } from 'flowbite-react';
import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const Blog = () => {
    const foods = useLoaderData();
    const [favourite, setFavourite] = useState([]);
    const [seeMore, setSeeMore] = useState(false);
    
    const handlefavourite = (id) => {
        let arr = []
        const food = foods.find(fd => fd.foodId === id);
        const remaining = favourite.filter(fd => fd.foodId !== id);
        arr = [...remaining, food]
        setFavourite(arr)
        Swal.fire({
            icon: 'success',
            title: 'Successfully added',
        })
    }

    const handledisable = (id) => {
        const foods = favourite.find(fd => fd.foodId === id);
        return foods;
    }
    return (
        <>
            <section style={{ backgroundImage: `url(https://images.unsplash.com/photo-1606843046080-45bf7a23c39f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80)`, backgroundPosition: 'top', backgroundAttachment: 'fixed', backgroundColor: 'rgba(0, 0, 0, 0.2)', backgroundBlendMode: 'multiply', backgroundSize: 'cover', padding: '200px 0' }}>
                <div className='w-1/2 mx-auto'>
                    <h2 className='text-8xl text-center text-white font-bold'>Blogs</h2>
                </div>
            </section>
            <section className='px-5 py-20'>
                <div className='grid grid-cols-3 gap-6'>
                    {foods.slice(0,seeMore? 9:6).map(fd => {
                        return (
                            <>
                                <div className='mx-auto' key={fd.foodId}>
                                    <div className="w-[400px] h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                        <Link to={`/recipedetails/${fd.foodId}`} >
                                            <img title={fd.foodName} className="rounded-t-lg h-[250px] w-full" src={fd.foodPicture} alt={fd.chefPicture} />
                                        </Link>

                                        <div className="p-4 box-border">
                                            <Link to={`/recipedetails/${fd.foodId}`} >
                                                <h5 className="mb-2 text-2xl uppercase font-bold tracking-tight text-gray-900 dark:text-white">{fd.foodName}</h5>
                                            </Link>

                                            <p className='text-xl font-medium '>Ingredients :</p>
                                            <ol style={{ listStyleType: 'decimal', marginLeft: '20px' }}>
                                                {fd.foodIngredient.slice(0, 5).map((fi, index) => <li key={index} className='text-md font-normal'>{fi}</li>)}
                                            </ol>

                                            <div className='flex mt-5 mx-auto items-center justify-center w-9/12'>
                                                {handledisable(fd.foodId) ? <Button disabled className="w-full inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                    Add to favourite
                                                    <FaHeart className='ml-2'></FaHeart>
                                                </Button> :
                                                    <Button onClick={() => handlefavourite(fd.foodId)} className="w-full inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                        Add to favourite
                                                        <FaHeart className='ml-2'></FaHeart>
                                                    </Button>}
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
                            </>
                        )
                    })}
                </div>
                <button onClick={() => setSeeMore(!seeMore)} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-8 py-2.5 mx-auto block mt-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">{seeMore ? 'See Less' : 'See More'}</button>
            </section>

        </>
    );
};

export default Blog;