import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';


const Register = () => {

    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const { createUser, updateUserProfile } = useContext(AuthContext)

    const handleRegister = event => {
        event.preventDefault()

        const form = event.target
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value
        const confirmPassword = form.confirm.value
        setSuccess('')
        setError('')

        if ((email, password, name, photo)) {
            createUser(email, password)
                .then(result => {
                    const registeredUser = result.user
                    // console.log(registeredUser)
                    setSuccess('User has been successfully created')
                    setError('')
                    updateUserProfile(registeredUser, name, photo)
                        .then(() => {
                            alert('User profile has been updated')
                        })
                        .catch(error => {
                            console.error(error)
                        })
                })
                .catch(error => {
                    console.error(error)
                    setError(error.message)
                })
        }
        else {
            setError('Email, Password, Name and Photo fields cannot be empty')
            return
        }

        if (password !== confirmPassword) {
            setError('Your password did not match')
            return
        }

        if (password.length < 6) {
            setError('Your password must be 6 characters long')
            return
        }

    }

    return (
        <div className='w-9/12 mx-auto mt-10'>
            <form onSubmit={handleRegister}>
                <div className='flex flex-col gap-5 w-1/2 mx-auto'>
                    <input className='border-2 rounded-lg px-3 py-1' type="text" name="name" id="name" placeholder='Your Name' />
                    <input className='border-2 rounded-lg px-3 py-1' type="text" name='photo' id='photo' placeholder='Your Photo' />
                    <input className='border-2 rounded-lg px-3 py-1' type="email" name="email" id="email" placeholder='Your Email' />
                    <input className='border-2 rounded-lg px-3 py-1' type="password" name="password" id="password" placeholder='Your Password' />
                    <input className='border-2 rounded-lg px-3 py-1' type="password" name="confirm" id="confirm" placeholder='Confirm Your Password' />
                </div>
                <div className='w-1/4 mx-auto text-center mt-5'>
                    <input className='bg-green-500 hover:bg-green-700 cursor-pointer ease-in-out duration-200 px-6 py-2 rounded-lg w-1/2 text-white font-semibold' type="submit" value="Register" />
                </div>
                <div className='w-1/2 mx-auto mt-5'>
                    <p className='text-center font-semibold'>Already have an account? <Link className='text-purple-500 hover:text-purple-700' to='/login'>Please Login</Link></p>
                </div>
            </form>
            {
                error &&
                <h4 className='text-red-500 font-semibold text-xl text-center mt-2'>Error: {error}</h4>
            }
            {
                success &&
                <h4 className='text-green-500 font-semibold text-xl text-center mt-2'>{success}</h4>
            }
        </div>
    );
};

export default Register;