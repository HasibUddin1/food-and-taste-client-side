import React from 'react';
import { Link } from 'react-router-dom';
import { FaThumbsUp } from "react-icons/fa";

const SingleChef = ({ chef }) => {
    const { id, imageUrl, name, yearsOfExperience, recipes, likes } = chef
    return (
        <div>
            <div className="card card-compact w-96 h-[500px] bg-base-100 shadow-2xl">
                <figure><img src={imageUrl} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">{name}</h2>
                    <p className='font-semibold text-xl'>Years of Experience: {yearsOfExperience}</p>
                    <div>
                        <h4 className='text-xl font-semibold mb-2'>Number of Recipes:</h4>
                        {
                            recipes.map(recipe => <li key={recipe.id} >{recipe.name}</li>)
                        }
                    </div>
                    <h4 className='text-xl font-semibold flex items-center gap-2'>Likes: {likes} <FaThumbsUp></FaThumbsUp></h4>
                    <div className="card-actions justify-end">
                        <Link to={`/chefs/${id}`}><button className="btn btn-primary">View Recipes</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleChef;