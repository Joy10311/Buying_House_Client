import React from 'react';
import { Link } from 'react-router-dom';

const Properties = ({property}) => {
    const {_id,title,img,category,area,details,address,agent,added,price} = property;
    return (
        <div>

            <div className=" border-solid border-4 border-light-blue-500 mx-4 my-4 shadow-2xl rounded-xl">
                <div >
                    <img src={img} alt="" />
                    <h2 className="font-bold text-3xl text-center text-blue-600  my-2">{title}</h2>
                    <p className="text-center pl-5 pr-2 font-semibold">{category} </p>
                    <p className="text-justify pl-5 pr-2 font-semibold">Area: {area} Sqf </p>
                    <p className="text-justify pl-5 pr-2 font-semibold">Street: {address} </p>
                    <p className="text-justify pl-5 pr-2 font-semibold"> {details} </p>
                    {/* <p className="font-semibold  text-justify pl-5 pr-2  "></p> */}
                    <p className="font-semibold text-justify pl-5 pr-2 text-red-400">Added: {added} <span className="pl-3 text-blue-400"> Agent: {agent}</span></p>
                    <p className="font-semibold  text-justify pl-5 pr-2 ">Price: {price}$</p>
                    <Link to={`/properties/${_id}`}><button className="bg-blue-700 text-white rounded-lg mt-3 lg:ml-44 ml-20  p-3 mb-3">Buy Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Properties;