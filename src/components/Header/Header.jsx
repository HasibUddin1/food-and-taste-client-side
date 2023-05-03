import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <div className='bg-green-500 flex justify-between items-center font-semibold px-10 py-3'>
            <div>
                <h1 className='text-3xl font-bold'>Food and Taste</h1>
            </div>
            <div className='flex gap-5 anchors-container'>
                <ActiveLink to='/'>Home</ActiveLink>
                <ActiveLink to='/blog'>Blog</ActiveLink>
                <ActiveLink to='/login'>Login</ActiveLink>
                <ActiveLink to='/register'>Register</ActiveLink>
            </div>
        </div>
    );
};

export default Header;