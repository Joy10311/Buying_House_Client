import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/UseAuth/UseAuth';


const Login = () => {
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home'
    const { user,signInUsingGoogle, error, handleLogIn, handlePasswordChange, handleEmailChange } = useAuth();
    return (
        <div>
            <div className="grid justify-items-center items-center">
                <h5 className="text-3xl text-blue-700 pb-10 font-bold">Please Log In</h5>
                <form onSubmit={handleLogIn} >
                    {user?.email && history.push(redirect_url)}
                    <label className="text-2xl" htmlFor="name">Name :</label>
                    <input onBlur={handleEmailChange} className="block border border-yellow-600 mb-2 px-10 py-3" type="email" name="" id="" placeholder="Your Email" required />
                    <label className="text-2xl" htmlFor="password">Password:</label>
                    <input onBlur={handlePasswordChange} className="block border border-yellow-600 px-10 py-3" type="password" name="" id="" placeholder="Enter Password" required />
                    <div className="block text-red-700">{error}</div>
                    <input className="bg-blue-700 text-white rounded-lg mt-3  p-3 mb-3" type="submit" value="Log In" />

                </form>
                <p className="text-2xl mt-10">New in Clinic? <Link to="/register"> <span className="text-red-700 font-bold">Register</span> </Link></p>

                <button onClick={signInUsingGoogle} className="bg-yellow-700 text-white rounded-lg  px-5 py-3 my-5">Sign In</button>

            </div>
        </div>
    );
};

export default Login;
