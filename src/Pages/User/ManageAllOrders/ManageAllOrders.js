import React, { useEffect, useState } from 'react';
import SetManageAllOrders from '../SetManageAllOrders/SetManageAllOrders';

const ManageAllOrders = () => {
    const [manages, setManages] = useState([])

    useEffect(() => {
        fetch('https://guarded-reaches-63811.herokuapp.com/processOrders')
            .then(res => res.json())
            .then(data => setManages(data))
    }, [])
    return (
        <div>
            <h2>manage all order{manages.length}</h2>
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

// http://localhost:5000/allorders