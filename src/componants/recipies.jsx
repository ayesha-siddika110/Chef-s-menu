

import { useEffect, useState } from 'react';
import Recipie from './recipie';

const Recipies = () => {
    const [recipies, setRecipies] = useState([])
    useEffect(() =>{
        fetch('../../public/recipies.json')
        .then(res=> res.json())
        .then(data => setRecipies(data))
    },[])
    return (
        <div>
            <h1 className='text-3xl font-semibold'>Recipies</h1>
            <p className='text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa nobis voluptatem nihil soluta dignissimos facere dolorem praesentium sunt possimus quisquam?</p>
            <div>

            {
                recipies.map(recipie => <Recipie key={recipie.id}></Recipie>)

            }


            </div>



            
        </div>
    );
};

export default Recipies;