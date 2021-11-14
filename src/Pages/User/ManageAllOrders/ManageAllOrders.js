import React, { useEffect, useState } from 'react';
import SetManageAllOrders from '../SetManageAllOrders/SetManageAllOrders';

const ManageAllOrders = () => {
    const [manages, setManages] = useState([])


    useEffect(() => {
        fetch('https://sheltered-sea-70251.herokuapp.com/processOrders')
            .then(res => res.json())
            .then(data => setManages(data))
    }, [])
    return (
        <div>
            <h2 className="font-bold text-3xl text-center text-gray-600"> All Bookig is Here</h2>
            <h4 className="font-bold text-3xl text-center text-red-600 pb-10">Currently Booked:{manages.length}</h4>
            {
                manages.map(manage => <SetManageAllOrders
                    key={manage._id}
                    manage={manage}
                ></SetManageAllOrders>)
            }
        </div>
    );
};

export default ManageAllOrders;
