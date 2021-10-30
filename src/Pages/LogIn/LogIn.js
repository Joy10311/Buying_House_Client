import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/UseAuth/UseAuth';

const LogIn = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home'


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url)
            })
    }



    return (
        <div>
            <div className="grid justify-items-center items-center">
                <h5 className="text-3xl text-blue-700 pb-10 font-bold">Please Log In</h5>
                <form  >
                    <label className="text-2xl" htmlFor="name">Name :</label>
                    <input className="block border border-yellow-600 mb-2 px-10 py-3" type="email" name="" id="" placeholder="Your Email" required />
                    <label className="text-2xl" htmlFor="password">Password:</label>
                    <input className="block border border-yellow-600 px-10 py-3" type="password" name="" id="" placeholder="Enter Password" required />
                    <div className="block text-red-700"></div>
                    <input className="bg-blue-300 text-base rounded px-1 py-1 mr-2 mt-2" type="submit" value="Log In" />
                </form>
                <div>
                    <button onClick={handleGoogleLogin} className="bg-yellow-700 text-white rounded-lg  px-5 py-3 my-5">Sign In</button>
                </div>
            </div>
        </div>


    );
};

export default LogIn;