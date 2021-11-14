import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');


    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
        const handleSubmit = e => {
            e.preventDefault()
            const user = { email };
            fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                   alert('Make Admin Successfully')
                    
                }
            })

        }



    return (
        <div className="grid align-center justify-center">
           <form onSubmit={handleSubmit} >
           <input onBlur={handleOnBlur} className="border border-red-800 block mt-2 pt-2 pb-2 px-20" placeholder="Enter email"  />
           <button type="submit" className="bg-blue-700 text-white rounded-lg mt-3   p-3 mb-3">Make Admin</button>
           </form>
        </div>
    );
};

export default MakeAdmin;