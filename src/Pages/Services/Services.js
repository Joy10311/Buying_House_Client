import React from 'react';
import { Link } from 'react-router-dom';

const Services = ({ service }) => {
    const { _id, title, price, available, img, description, guide } = service;
    return (
        <div>

            <div className=" border-solid border-4 border-light-blue-500 mx-4 my-4 shadow-2xl rounded-xl">
                <div >
                    <img src={img} alt="" />
                    <h2 className="font-bold text-3xl text-center text-blue-600  my-2">{title}</h2>
                    <p className="text-justify pl-5 pr-2 font-semibold">{description} </p>
                    <h5 className="font-bold text-red-700 text-center text-2xl ">Guide: {guide}</h5>
                    <h5 className="font-semibold text-center text-xl">Available Seat: {available}</h5>
                    <h5 className="font-semibold text-center text-xl">Price: {price}$</h5>
                    <Link to={`/getservices/${_id}`}><button className="bg-blue-700 text-white rounded-lg mt-3 lg:ml-44 ml-20  p-3 mb-3">Get This Service</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Services;

// {`/getservice/${id}`}