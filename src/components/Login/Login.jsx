import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {

    const { googleSignIn, gitHubSignIn } = useContext(AuthContext)

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
            })
            .catch(error => {
                console.error(error)
            })
    }

    const handleGitHubSignIn = () => {
        gitHubSignIn()
        .then(result => {
            const loggedUser = result.user
            console.log(loggedUser)
        })
        .catch(error => {
            console.error(error)
        })
    }

    return (
        <div className='w-9/12 mx-auto mt-10'>
            <form>
                <div className='flex flex-col gap-5 w-1/2 mx-auto'>
                    <input className='border-2 rounded-lg px-3 py-1' type="email" name="email" id="email" placeholder='Your Email' required />
                    <input className='border-2 rounded-lg px-3 py-1' type="password" name="password" id="password" placeholder='Your Password' required />
                </div>
                <div className='w-1/4 mx-auto text-center mt-5'>
                    <input className='bg-green-500 hover:bg-green-700 cursor-pointer ease-in-out duration-200 px-6 py-2 rounded-lg w-1/2 text-white font-semibold' type="submit" value="Login" />
                </div>
                <div className='w-1/2 mx-auto mt-5'>
                    <p className='text-center font-semibold'>New to this site? <Link className='text-purple-500 hover:text-purple-700' to='/register'>Please Register</Link></p>
                </div>
            </form>
            <div className='w-1/2 mx-auto mt-5 flex gap-5 justify-center'>
                <button onClick={handleGoogleSignIn} className="btn btn-outline btn-info rounded-lg">Google Login</button>
                <button onClick={handleGitHubSignIn} className="btn btn-outline rounded-lg">GitHub Login</button>
            </div>
        </div>
    );
};

export default Login;