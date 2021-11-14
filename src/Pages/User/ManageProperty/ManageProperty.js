import React, { useEffect, useState } from 'react';
import SetManageProperty from './SetManageProperty';


const ManageProperty = () => {
    const [properties, setProperties] = useState([]);
    useEffect(() => {
        fetch('https://sheltered-sea-70251.herokuapp.com/properties')
            .then(res => res.json())
            .then(data => setProperties(data));
            return[properties]
    }, []);

   
    return (
        <div>
            {
                properties.map(property => <SetManageProperty
                key={property._id}
                property={property}
                ></SetManageProperty>)
            }
        </div>
    );
};

export default ManageProperty;