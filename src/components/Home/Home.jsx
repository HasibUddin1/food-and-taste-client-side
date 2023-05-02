import React from 'react';
import bg from '../../assets/images/yeh-xintong-5wwv5PgSnLI-unsplash.jpg'

const Home = () => {
    return (
        <div>
            <div className='h-[800px]' style={{background: `linear-gradient(rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)), url(${bg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div className='h-full flex flex-col justify-center items-center'>
                    <h1 className='text-4xl font-bold text-white text-center'>Food & <span className='text-green-500'>Taste</span></h1>
                    <p className='text-white font-semibold'>A recipe is a formula of ingredients and a list of instructions for creating prepared foods. It is used to control quality, quantity, and food costs in a food service operation.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;