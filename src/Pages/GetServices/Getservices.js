import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Getservices = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState([]);

    useEffect(() => {
        fetch(`https://guarded-reaches-63811.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, []);



    return (
        <div className="grid grid-cols-2">
            <div>

                <h1 className="text-5xl py-10 text-center font-bold text-blue-600">{service.title}</h1>
                <img className="pl-10 pb-20" src={service.detaiImg} alt="" />
                <h2 className="text-center text-4xl py-10 font-bold text-red-600">Contact Us</h2>
                <h2 className="text-5xl text-center font-bold text-blue-600 pb-10">{service.contact}</h2>
                <div className="text-2xl font-semibold pl-10">
                    <h1> <span className="text-4xl text-red-400 font-bold">DAY-1</span> <br />{service.day1}</h1>
                    <h1 className="pt-10 pb-10 "><span className="text-4xl text-red-400 font-bold">DAY-2</span> <br /> {service.day2}</h1>
                </div>
            </div>
        </div>
    );
};

export default Getservices;