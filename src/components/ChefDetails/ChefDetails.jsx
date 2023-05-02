import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaThumbsUp } from "react-icons/fa";

const ChefDetails = () => {

    const chefDetail = useLoaderData()
    console.log(chefDetail)
    const { name, yearsOfExperience, bio, likes, imageUrl } = chefDetail

    return (
        <div className='flex gap-5 justify-center items-center mt-10 mb-10 px-40'>
            <div className='flex flex-col gap-5'>
                <h1 className='text-6xl font-bold'>{name}</h1>
                <h3 className='text-3xl font-semibold'>Years of Experience: {yearsOfExperience}</h3>
                <p className='text-xl'>{bio}</p>
                <h4 className='text-2xl flex items-center gap-2'>Likes: {likes} <FaThumbsUp></FaThumbsUp></h4>
                <Link to='/'>
                    <button className='bg-green-500 hover:bg-green-700 ease-in-out duration-200 px-6 py-2 text-white rounded-xl w-1/6 font-semibold'>Go Back</button>
                </Link>
            </div>
            <div>
                <img className='rounded-xl' src={imageUrl} alt="" />
            </div>
        </div>
    );
};

export default ChefDetails;