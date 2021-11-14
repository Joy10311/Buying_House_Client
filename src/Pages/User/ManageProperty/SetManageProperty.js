import React from 'react';

const SetManageProperty = ({property}) => {
    const {img, title, price,area,details,address} = property;

    const handleDelete = id => {
        const proceed = window.confirm("Are You Sure? Want to delete")
        if (proceed) {
            fetch(`https://sheltered-sea-70251.herokuapp.com/properties/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        window.alert('Deleted Successfully')
                    }

                    console.log(data)
                    window.location.reload(false);
                })
        }


    }

    return (
        <div>
            <div className="grid lg:grid-cols-2 py-20 lg:pl-20 px-20">
                {/* <div className="grid grid-cols-2" > */}
                <div>
                    <img width="400px" src={img} alt="" />
                </div>
                <div>
                    <h2 className="font-bold text-3xl  text-blue-600  lg:my-2">{title}</h2>
                    <h5 className="font-semibold  text-xl">Price: {price}$</h5>
                    <h5 className="font-semibold  text-xl">Area: {area}</h5>
                    <h5 className="font-semibold  text-xl">{details}</h5>
                    <h5 className="font-semibold  text-xl">{address}</h5>
            
                    <button className="bg-blue-700 text-white rounded-lg   p-3 px-5 ">Update</button>
                    <button onClick={() => handleDelete(property._id)} className="bg-red-700 text-white rounded-lg   p-3 px-5 lg:mx-5 mr-2 ">Delete</button>

                </div>

            </div>
        </div>
    );
};

export default SetManageProperty;