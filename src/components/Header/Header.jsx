import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='bg-green-500 flex justify-between items-center font-semibold px-10 py-3'>
            <div>
                <h1 className='text-3xl font-bold'>Food and Taste</h1>
            </div>
            <div className='flex gap-5 anchors-container'>
                <Link to='/'>Home</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
            </div>
        </div>
    );
};

export default Header;