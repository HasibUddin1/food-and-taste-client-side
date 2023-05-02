import React from 'react';
import logo from '../../assets/images/istockphoto-1011988208-612x612.jpg'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='w-1/2 mx-auto'>
            <img className='w-full' src={logo} alt="" />
            <p className='text-2xl text-center mt-5 font-semibold'>The page you are looking for either has been removed or does not exist</p>
            <div className='w-1/4 mx-auto mt-5'>
                <Link to='/'><button className='bg-green-500 hover:bg-green-700 ease-in-out duration-200 px-6 py-2 text-white font-semibold rounded-xl w-full' >Return to Homepage</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;