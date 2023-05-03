import React from 'react';
import bg from '../../assets/images/pngegg.png'
import Chefs from '../Chefs/Chefs';
import foodImage from '../../assets/images/food-for-extra-section.png'
import { FaCookieBite, FaHamburger, FaRegHandshake } from 'react-icons/fa';
import imageOne from '../../assets/images/food-image-for-extra-section1.jpg'
import imageTwo from '../../assets/images/food-image-for-extra-section2.jpg'
import imageThree from '../../assets/images/food-image-for-extra-section3.jpeg'


const Home = () => {

    return (
        <div>
            <div className='flex flex-col md:flex-row justify-center items-center md:px-40 bg-green-100'>
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
            <div className='md:w-9/12 mx-auto flex flex-col md:flex-row md:gap-10 items-center mb-20'>
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
            <h1 className='text-5xl font-bold text-center mb-5'>Find Out Our Best Recipes</h1>
            {/* Last Extra section */}
            <div className='w-9/12 mx-auto grid md:grid-cols-3 gap-5 mb-20'>
                <div className="card w-96 bg-base-100 shadow-2xl rounded-xl">
                    <figure><img src={imageOne} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Creamy Garlic Shrimp Pasta</h2>
                        <p>This pasta dish is made with succulent shrimp, al dente pasta, and a creamy garlic sauce that&apos;s sure to satisfy your taste buds. It&apos;s easy to make and perfect for a cozy night in</p>
                        <div className="card-actions justify-end">
                            <button className='bg-green-500 hover:bg-green-700 ease-in-out duration-200 text-white px-6 py-2 rounded-xl font-semibold'>Add to Favorites</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-2xl rounded-xl">
                    <figure><img src={imageTwo} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Vegetarian Stuffed Peppers</h2>
                        <p>These colorful peppers are stuffed with a flavorful mixture of rice, beans, and spices. They&apos;re then baked in the oven until tender and topped with melted cheese for a hearty and healthy meal</p>
                        <div className="card-actions justify-end">
                            <button className='bg-green-500 hover:bg-green-700 ease-in-out duration-200 text-white px-6 py-2 rounded-xl font-semibold'>Add to Favorites</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 h-[500px] bg-base-100 shadow-2xl rounded-xl">
                    <figure><img src={imageThree} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Slow Cooker Beef Stew</h2>
                        <p>This comforting stew is made with tender chunks of beef, hearty vegetables, and a rich broth. It&apos;s perfect for a chilly day and can be prepared in a slow cooker for a hands-off approach to cooking. Just let it simmer away while you go about your day, and come home to a delicious and hearty meal</p>
                        <div className="card-actions justify-end">
                            <button className='bg-green-500 hover:bg-green-700 ease-in-out duration-200 text-white px-6 py-2 rounded-xl font-semibold'>Add to Favorites</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;