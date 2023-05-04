/* eslint-disable */
import { Button } from 'flowbite-react';
import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import LazyLoad from 'react-lazy-load';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import Pdf from 'react-to-pdf'

const ref = React.createRef();

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
            <section className='lg:py-[200px] py-20' style={{ backgroundImage: `url(https://images.unsplash.com/photo-1606843046080-45bf7a23c39f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80)`, backgroundPosition: 'top', backgroundAttachment: 'fixed', backgroundColor: 'rgba(0, 0, 0, 0.2)', backgroundBlendMode: 'multiply', backgroundSize: 'cover' }}>
                <div className='w-1/2 mx-auto'>
                    <h2 className='lg:text-8xl text-4xl text-center text-white font-bold uppercase'>Blogs</h2>
                </div>
            </section>                
            <section ref={ref} className='px-5 pt-20'>
                <h2 className='lg:text-4xl text-2xl mb-8 text-center text-black font-bold uppercase'>Questions and Answers</h2>
                <div>
                    <h4 className='text-xl mt-4 font-bold text-black'>1. Tell us the differences between uncontrolled and controlled components ?</h4>
                    <p className='ml-2 text-gray-500'><span className='text-md text-black font-semibold mt-3 text-justify'>Ans : </span>
                        In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.
                    </p>
                    <h4 className='text-xl mt-4 font-bold text-black'>2. How to validate React props using PropType ?</h4>
                    <p className='ml-2 text-gray-500'><span className='text-md text-black font-semibold mt-3 text-justify'>Ans : </span>
                        PropTypes is React’s internal mechanism for adding type checking to component props. React components use a special property called propTypes to set up type checking :
                        {`                         
                         function ReactComponent(props) {
                          // ...implement render logic here
                        }

                        ReactComponent.propTypes = {
                          // ...prop type definitions here
                        }`}
                    </p>
                    <h4 className='text-xl mt-4 font-bold text-black'>3. Tell us the difference between nodejs and express js ?</h4>
                    <p className='ml-2 text-gray-500'><span className='text-md font-semibold mt-3 text-black text-justify'>Ans : </span>NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses</p>
                    <h4 className='text-xl mt-4 font-bold text-black'>4. What is a custom hook, and why will you create a custom hook ?</h4>
                    <p className='ml-2 text-gray-500'><span className='text-md font-semibold mt-3 text-black text-justify'>Ans : </span>Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.</p>
                </div>
            </section>
            <Pdf targetRef={ref} filename="Questions and Answer.pdf">
                    {({ toPdf }) => <Button className='mx-auto mt-6' onClick={toPdf}>Generate Pdf</Button>}
                </Pdf>
            <section className='lg:px-5 py-14 lg:py-20'>
                <h2 className='text-2xl lg:text-4xl mb-8 text-center text-black font-bold uppercase'>Food Blogs</h2>
                <div className='lg:grid grid-cols-3 gap-6'>
                    {foods.slice(0, seeMore ? 9 : 6).map(fd => {
                        return (
                            <div className='mx-auto w-[90%] lg:w-[unset]  mt-6 lg:mt-0' key={fd.foodId}>
                                <div className="lg:w-full h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    <Link to={`/recipedetails/${fd.foodId}`} >
                                        <LazyLoad>
                                            <img title={fd.foodName} className="rounded-t-lg h-[250px] w-full" src={fd.foodPicture} alt={fd.chefPicture} />
                                        </LazyLoad>
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
                        )
                    })}
                </div>
                <button onClick={() => setSeeMore(!seeMore)} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md lg:text-lg lg:px-8 px-4 py-1 lg:py-2 mx-auto block mt-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">{seeMore ? 'See Less' : 'See More'}</button>
            </section>

        </>
    );
};

export default Blog;