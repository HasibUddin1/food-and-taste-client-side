import React, { useContext } from 'react';
import './Header.css'
import ActiveLink from '../ActiveLink/ActiveLink';
import { AuthContext } from '../../Providers/AuthProvider';
import { toast } from 'react-toastify';

const Header = () => {

    const { user, logOut } = useContext(AuthContext)

    // console.log(user)
    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast('User has been successfully Logged out')
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className='bg-green-500 flex flex-col md:flex-row justify-between items-center font-semibold px-10 py-3'>
            <div>
                <h1 className='text-3xl font-bold mb-5 md:mb-0'>Food and Taste</h1>
            </div>
            <div className='flex items-center gap-5 anchors-container'>
                <ActiveLink to='/'>Home</ActiveLink>
                <ActiveLink to='/blog'>Blog</ActiveLink>
                <ActiveLink to='/register'>Register</ActiveLink>
                {
                    user ?
                        <div className='flex gap-3'>
                            <div className='tooltip tooltip-bottom' data-tip={user.displayName}>
                                <img className='w-[25px] h-[25px] rounded-full' src={user.photoURL} alt="" />
                            </div>
                            <button onClick={handleLogOut} className='btn-primary px-4 rounded-lg'>Logout</button>
                        </div> :
                        <ActiveLink to='/login'>Login</ActiveLink>
                }
            </div>
        </div>
    );
};

export default Header;