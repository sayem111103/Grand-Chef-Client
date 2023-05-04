/* eslint-disable */
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Recipe = () => {
    const foodDetails = useLoaderData();
    return (
        <>
            <section style={{ backgroundImage: `url(${foodDetails.foodPicture})`, backgroundPosition: 'top', backgroundAttachment: 'fixed', backgroundColor: 'rgba(0, 0, 0, 0.4)', backgroundBlendMode: 'multiply', backgroundSize: 'cover', padding: '200px 0' }}>
                <div className='w-1/2 mx-auto'>
                    <h3 className='text-4xl text-white font-bold text-center uppercase'>{foodDetails.foodName}</h3>
                    <p className='text-center text-xl text-white font-medium mt-4 uppercase'>Catagory : {foodDetails.foodCategory}</p>
                </div>
            </section>
            <section className='py-20'>
            <div className='w-9/12 mx-auto'>
            <p className='text-2xl font-medium '>Ingredients :</p>
            <p>{foodDetails.foodIngredient.map((fi, index) => <li style={{listStyle: 'decimal'}} key={index} className='text-md font-normal'>{fi}</li>)}</p>
            <p className='text-2xl font-medium mt-5'>Instruction :</p>
            <p className='text-justify'>{foodDetails.foodInstruction}</p>
            </div>
            </section>
        </>
    );
};

export default Recipe;