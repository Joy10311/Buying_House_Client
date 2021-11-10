import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../Hooks/UseAuth/UseAuth';

const PropertyDetails = () => {
    const { user } = useAuth();
    const { serviceId } = useParams();
    const [property, setProperty] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/properties/${serviceId}`)
            .then(res => res.json())
            .then(data => setProperty(data))
    }, []);
    return (
        <div className="grid lg:grid-cols-2">
        <div>

            <h1 className="text-5xl py-10 text-center font-bold text-blue-600">{property.title}</h1>
            <img className="lg:pl-10 pb-20" src={property.img} alt="" />
            <h2 className="text-2xl text-justify px-10 font-bold text-blue-600 pb-10">{property.category}</h2>
            <h2 className="text-2xl text-justify px-10 font-semibold pb-10">Area: {property.area} Square Feet</h2>
            <h2 className="text-3xl text-justify px-10 font-semibold text-blue-600 pb-10">{property.details}</h2>
            <h2 className="text-3xl text-justify px-10 font-semibold text-blue-600 pb-10">Street Address:  {property.address}</h2>
            <h2 className="text-3xl text-justify px-10 font-semibold text-blue-600 pb-10">Agent: {property.agent}  <span className="pl-3 text-gray-600">Added: {property.added}</span> </h2>
            <h2 className="text-3xl text-justify px-10 font-semibold text-red-600 pb-10">Street Address:  {property.price}</h2>
            
            
            
        </div>
        <div className=" pt-44">
            <h2 className="text-6xl font-semibold ml-20 mb-10 text-red-600">Please Checkout <br /> By clicking Confirm</h2>

            {/* <div className="pb-40 grid justify-center align-center">
                <form >
                    <input className="border border-red-800 block mt-2 pt-2 pb-2 px-20"{...register("firstName", { required: true, maxLength: 20 })} placeholder="Name" />
                    <input className="border border-red-800 block mt-2 pt-2 pb-2 px-20" {...register("email")} placeholder="Email" />
                    <input className="border border-red-800 block mt-2 pt-2 pb-2 px-20" type="number" {...register("phone", { min: 18, max: 99 })} placeholder="Phone" />
                    <input type="submit" />
                </form>
            </div> */}
            <button  className="bg-blue-700 text-white rounded-lg mt-3 ml-44   p-3 mb-3">Confirm</button>
        </div>
    </div>
    );
};

export default PropertyDetails;