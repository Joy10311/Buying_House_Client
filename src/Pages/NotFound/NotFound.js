import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/404.png'

const NotFound = () => {
    return (
        <div className="ml-80">
            <img src={logo} alt="" />

            <Link to="/home"><button className="bg-blue-700 text-white rounded-lg mt-3 ml-72 p-3 mb-3 items-center">Back to Home</button></Link>
        </div>
    );
};

export default NotFound;