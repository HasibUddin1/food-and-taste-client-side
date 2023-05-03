import React from 'react';
import { FaFacebook, FaGooglePlus, FaInstagram, FaTwitter } from 'react-icons/fa';


const Footer = () => {
    return (
        <div className='bg-slate-900 h-[300px] text-slate-300 p-10'>
            <p className='text-3xl text-center font-bold'>Copyright © 2023 Food & Taste Recipes <br />
                All rights reserved</p>
            <h4 className='text-2xl font-semibold text-center mt-10'>Contact Us</h4>
            <div className='flex justify-center gap-5 text-3xl mt-5'>
                <FaFacebook></FaFacebook>
                <FaGooglePlus></FaGooglePlus>
                <FaInstagram></FaInstagram>
                <FaTwitter></FaTwitter>
            </div>
        </div>
    );
};

export default Footer;