import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/UseAuth/UseAuth';
import SetMyorders from '../SetMyorders/SetMyorders';

const MyOrder = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([])
    const email = user?.email;

    useEffect(() => {
        fetch(`https://sheltered-sea-70251.herokuapp.com/processOrders/${email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])



    return (
        <div>
            <h2 className="font-bold text-3xl text-center text-gray-600">Your All Bookig is Here</h2>
            <h4 className="font-bold text-3xl text-center text-red-600 pb-10">Currently Booked:   {orders.length} </h4>
            {
                orders.map(orders => <SetMyorders
                    key={orders._id}
                    orders={orders}
                ></SetMyorders>)
            }
        </div>
    );

};

export default MyOrder;