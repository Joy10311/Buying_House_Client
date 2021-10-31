import React from 'react';

const SetMyorders = ({ orders }) => {
    const { title, img, price } = orders;

    const handleDelete = id => {
        const proceed = window.confirm("Are You Sure? Want to delete")
        if (proceed) {
            fetch(`https://guarded-reaches-63811.herokuapp.com/processOrders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        window.alert('Deleted Successfully')
                    }
                })
        }


    }

    return (
        <div>
            <div className="grid lg:grid-cols-3 py-20 lg:pl-20 px-20">
                {/* <div className="grid grid-cols-2" > */}
                <div>
                    <img width="200px" src={img} alt="" />
                </div>
                <div>
                    <h2 className="font-bold text-3xl lg:text-center text-blue-600  lg:my-2">{title}</h2>
                    <h5 className="font-semibold lg:text-center text-xl">Price: {price}$</h5>
                </div>
                <div>
                    <button onClick={() => handleDelete(orders._id)} className="bg-red-700 text-white rounded-lg   p-3 px-5 lg:mx-5 mr-2 ">Delete</button>
                    <button className="bg-blue-700 text-white rounded-lg   p-3 px-5 ">Process</button>

                </div>

            </div>
        </div>
    );
};

export default SetMyorders;