import React from 'react';
import { useLocation } from 'react-router';
import useAuth from '../../Hooks/UseAuth/UseAuth';

const LogIn = () => {
    const { signInUsingGoogle } = useAuth();
    // const location = useLocation();
    return (
        <div>
            <button onClick={signInUsingGoogle} className="bg-yellow-700 text-white rounded-lg  px-5 py-3 my-5">Sign In</button>
        </div>
    );
};

export default LogIn;