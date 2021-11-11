import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../Hooks/UseAuth/UseAuth';

const PropertyDetails = () => {
    const { user } = useAuth();
    const { serviceId } = useParams();
    const [property, setProperty] = useState([]);
 
 
// load single data
    useEffect(() => {
        fetch(`http://localhost:5000/properties/${serviceId}`)
            .then(res => res.json())
            .then(data => setProperty(data))
    }, []);



    // send data and email

    const nameRef = useRef();
    const emailRef = useRef();
    const numberRef = useRef();
    const addressRef = useRef();


    const handleClick = (e) => {
        e.preventDefault();

        const userName = (nameRef.current.value);
        const email = (emailRef.current.value);
        let number = (numberRef.current.value);
        let address = (addressRef.current.value);


        const userInfo = {userName: userName, email:email,number:number,address:address};

        const newData = {...property,...userInfo}
        delete newData?._id;
        
        // data.status = "pending";
        fetch("http://localhost:5000/addOrders", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(newData),
        })
          .then((res) => res.json())
          .then((result) =>{
              if(result.acknowledged){
                  window.alert('Congratulation! you order confirmed ')
              }
          } );
        
      };



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
            <h2 className="text-4xl font-semibold text-center mb-10 text-red-600">Please Checkout <br /> By Submit form</h2>

            <div className=" grid justify-center align-center">
            <form onSubmit={handleClick}>
              <input
                ref={nameRef}
                type="text"
                placeholder="Name"
                defaultValue={user?.displayName}
                required
                className="border border-red-800 block mt-2 pt-2 pb-2 px-20"
              />
              <input
                ref={emailRef}
                type="email"
                placeholder="Email"
                value={user?.email}
                required
                className="border border-red-800 block mt-2 pt-2 pb-2 px-20"
              />
              <input
                ref={numberRef}
                type="number"
                placeholder="Contact Number"
                required
                className="border border-red-800 block mt-2 pt-2 pb-2 px-20"
              />
              <input
                ref={addressRef}
                type="text"
                placeholder="Address"
                
                className="border border-red-800 block mt-2 pt-2 pb-2 px-20"
              />

                           
              <br />

              <input
                type="submit"
                value="Order now"
                className=" bg-red-800 text-white block mt-2 pt-2 pb-2 px-10"
              />
            </form>
            </div>
        </div>
    </div>
    );
};

export default PropertyDetails;