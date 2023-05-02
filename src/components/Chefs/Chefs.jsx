import React, { useEffect, useState } from 'react';
import SingleChef from '../SingleChef/SingleChef';


const Chefs = () => {

    const [chefs, setChefs] = useState([])

    useEffect(() => {
        fetch('https://b7-a10-chef-recipe-hunter-server-side-iconicluck.vercel.app/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
    }, [])
    return (
        <div className='w-9/12 mx-auto grid grid-cols-3 gap-5 mb-10'>
            {
                chefs.map(chef => <SingleChef
                    key={chef.id}
                    chef={chef}
                ></SingleChef>)
            }
        </div>
    );
};

export default Chefs;