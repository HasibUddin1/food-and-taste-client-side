import React from 'react';

const SingleChef = ({ chef }) => {
    const { imageUrl, name, yearsOfExperience, recipes } = chef
    return (
        <div>
            <div className="card card-compact w-96 h-[500px] bg-base-100 shadow-2xl">
                <figure><img className='object-fill' src={imageUrl} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">{name}</h2>
                    <p className='font-semibold text-xl'>Years of Experience: {yearsOfExperience}</p>
                    <div>
                        <h4 className='text-xl font-semibold mb-2'>Number of Recipes:</h4>
                        {
                            recipes.map(recipe => <li key={recipe.id} >{recipe.name}</li>)
                        }
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">View Recipes</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleChef;