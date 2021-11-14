import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import useAuth from '../Hooks/UseAuth/UseAuth';


const Register = () => {
    const{user} = useAuth()
    const { error, handlRegister, handleEmailChange, handlePasswordChange, handleNameChange } = useAuth();
    // const handleNameChange = (e) => {
        
    //     setName(e.target.value)
    // }
    let history = useHistory()
    return (
        <div>
            <div className="grid justify-items-center items-center">
                <h5 className="text-3xl text-blue-700 pb-10 font-bold">Please Register</h5>
                <form onSubmit={handlRegister} >
                    {user?.email && history.push("/")}
                    <label className="text-2xl" htmlFor="name">Name:</label>
                    <input onBlur={handleNameChange} className="block border border-yellow-600 mb-2 px-10 py-3" type="name" name="" id="" placeholder="Your Name" required />

                    <label className="text-2xl" htmlFor="email">Email:</label>
                    <input onBlur={handleEmailChange} className="block border border-yellow-600 mb-2 px-10 py-3" type="email" name="" id="" placeholder="Your Email" required />
                    <label className="text-2xl" htmlFor="password">Password:</label>
                    <input onBlur={handlePasswordChange} className="block border border-yellow-600 px-10 py-3" type="password" name="" id="" placeholder="Enter Password" required />
                    <div className="block text-red-700">{error}</div>
                    <input className="bg-blue-700 text-white rounded-lg mt-3   p-3 mb-3" type="submit" value="Register" />

                </form>
                <p className="text-2xl mt-10">Already have an account? <Link to="/login"> <span className="text-red-700 font-bold">Log In</span> </Link></p>

            </div >
        </div >
    );
};

export default Register;