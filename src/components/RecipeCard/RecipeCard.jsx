import React, { useState } from 'react';
import { toast } from 'react-toastify';

const RecipeCard = ({ recipe }) => {
    // console.log(recipe)
    const { name, description, ingredients} = recipe

    const [showToast, setShowToast] = useState(false)

    const notify = () => {
        toast('Your recipe has been added to favorites')
        setShowToast(true)
    }

    return (
        <div>
            <div className="card w-96 h-96 border-2 rounded-xl">
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    {
                        ingredients.map(ingredient => <li
                            key={ingredient.id}
                        >{ingredient.name}</li>)
                    }
                    <div className="card-actions justify-end">
                        <button onClick={notify} disabled={showToast} className={`bg-green-500 ${showToast || 'hover:bg-green-700 ease-in-out duration-200'} px-6 py-2 text-white rounded-xl font-semibold`}>Add to Favorites</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;