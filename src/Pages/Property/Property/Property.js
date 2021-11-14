import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/UseAuth/UseAuth';
import SetProperty from '../SetProperty/SetProperty';

const Property = () => {
    const { isLoading } = useAuth();
    const [properties, setProperties] = useState([]);
    useEffect(() => {
        fetch('https://sheltered-sea-70251.herokuapp.com/properties')
            .then(res => res.json())
            .then(data => setProperties(data));
    }, []);

    if(isLoading){
        return <div class="flex justify-center items-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500">

            </div>
        </div>
    }

    return (
        <div>
            <h2 className="font-bold text-4xl text-blue-600 text-center py-5">Our Properties</h2>
            <div className="grid lg:grid-cols-3">
            {
        properties.map(property => <SetProperty
        key={property._id}
        property={property}
        ></SetProperty>)
     }
        </div>
        </div>
    );
};

export default Property;