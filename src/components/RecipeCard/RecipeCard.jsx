import React, { useState } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { toast } from 'react-toastify';

const RecipeCard = ({ recipe }) => {
    // console.log(recipe)
    const { name, description, ingredients, rating, cookingMethod } = recipe

    const [showToast, setShowToast] = useState(false)

    const notify = () => {
        toast('Your recipe has been added to favorites')
        setShowToast(true)
    }

    return (
        <div>
            <div className="card h-96 border-2 rounded-xl">
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    {
                        ingredients.map(ingredient => <li
                            key={ingredient.id}
                        >{ingredient.name}</li>)
                    }
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-2'>
                            <Rating
                                placeholderRating={rating}
                                emptySymbol={<FaRegStar></FaRegStar>}
                                placeholderSymbol={<FaStar></FaStar>}
                                fullSymbol={<FaStar></FaStar>}
                                readonly
                            />
                            <p className='text-orange-300 font-bold text-xl'>{rating}</p>
                        </div>
                        <div>
                            <p className='font-semibold'>Cooking Method: {cookingMethod}</p>
                        </div>
                    </div>
                    <div className="card-actions justify-end">
                        <button onClick={notify} disabled={showToast} className={`bg-green-500 ${showToast || 'hover:bg-green-700 ease-in-out duration-200'} px-6 py-2 text-white rounded-xl font-semibold`}>Add to Favorites</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;