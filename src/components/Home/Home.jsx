import React from 'react';
import bg from '../../assets/images/pngegg.png'

const Home = () => {
    return (
        <div>
            <div className='flex justify-center items-center px-40 bg-green-100'>
                <div className='w-1/2'>
                    <h1 className='text-5xl mb-2 font-bold text-black text-center'>Food & <span className='text-green-500'>Taste</span></h1>
                    <p className='text-black text-xl font-semibold'>A recipe is a formula of ingredients and a list of instructions for creating prepared foods. It is used to control quality, quantity, and food costs in a food service operation.</p>
                </div>
                <div className='w-1/2'>
                    <img className='w-full h-fit' src={bg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;