import React from 'react';
import bg from '../../assets/images/pngegg.png'
import Chefs from '../Chefs/Chefs';
import foodImage from '../../assets/images/food-for-extra-section.png'
import { FaCookieBite, FaHamburger, FaRegHandshake } from 'react-icons/fa';

const Home = () => {
    return (
        <div>
            <div className='flex justify-center items-center px-40 bg-green-100'>
                <div className='w-1/2'>
                    <h1 className='text-5xl mb-2 font-bold text-black text-center'>Food & <span className='text-green-500'>Taste</span></h1>
                    <p className='text-black text-xl font-semibold'>A recipe is a formula of ingredients and a list of instructions for creating prepared foods. It is used to control quality, quantity, and food costs in a food service operation.</p>
                </div>
                <div className='w-1/2'>
                    <img className='w-full' src={bg} alt="" />
                </div>
            </div>
            <div className='mt-10 mb-20'>
                <h1 className='text-4xl text-center font-bold mb-10'>Find Out Our Best Chefs</h1>
                <div>
                    <Chefs></Chefs>
                </div>
            </div>
            <h1 className='text-5xl font-bold text-center mb-5'>Know More About Us</h1>
            <div className='w-9/12 mx-auto flex justify-between items-center'>
                <div className='w-1/2'>
                    <h4 className='text-4xl font-semibold'>Its all about</h4>
                    <h2 className='text-5xl font-semibold mb-5'>Good Food & Taste</h2>
                    <p className='text-green-500 font-semibold text-xl'>A recipe is a set of instructions that describes how to prepare or make something, especially a dish of prepared food. A sub-recipe or sub-recipe is a recipe for an ingredient that will be called for in the instructions for the main recipe</p>
                    <p className='flex items-center gap-3 mt-5 text-xl'><FaCookieBite></FaCookieBite>We care about everyone&apos;s choice for taste</p>
                    <hr />
                    <p className='mt-5 flex items-center gap-3 text-xl'><FaHamburger></FaHamburger>Not Everyone has a same taste for food</p>
                    <hr />
                    <p className='mt-5 flex items-center gap-3 text-xl'><FaRegHandshake></FaRegHandshake>We value the neat and cleanliness</p>
                </div>
                <div className='w-1/2'>
                    <img src={foodImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;