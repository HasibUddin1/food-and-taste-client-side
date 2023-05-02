import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='w-9/12 mx-auto mt-10'>
            <form>
                <div className='flex flex-col gap-5 w-1/2 mx-auto'>
                    <input className='border-2 rounded-lg px-3 py-1' type="text" name="name" id="name" placeholder='Your Name' required />
                    <input className='border-2 rounded-lg px-3 py-1' type="text" name='photo' id='photo' placeholder='Your Photo' />
                    <input className='border-2 rounded-lg px-3 py-1' type="email" name="email" id="email" placeholder='Your Email' required />
                    <input className='border-2 rounded-lg px-3 py-1' type="password" name="password" id="password" placeholder='Your Password' required />
                </div>
                <div className='w-1/4 mx-auto text-center mt-5'>
                    <input className='bg-green-500 hover:bg-green-700 cursor-pointer ease-in-out duration-200 px-6 py-2 rounded-lg w-1/2 text-white font-semibold' type="submit" value="Register" />
                </div>
                <div className='w-1/2 mx-auto'>
                    <p className='text-center font-semibold'>Already have an account? <Link className='text-purple-500' to='/login'>Please Login</Link></p>
                </div>
            </form>
        </div>
    );
};

export default Register;