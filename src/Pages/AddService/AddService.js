import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })

    }




    return (
        <div className="pb-40 grid justify-center align-center">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="border border-red-800 block mt-2 pt-2 pb-2 px-20" placeholder="Name" {...register("name", { required: true, maxLength: 20 })} />
                <textarea className="border border-red-800 block mt-2 pt-2 pb-2 px-20" placeholder="Description" {...register("description")} />
                <input className="border border-red-800 block mt-2 pt-2 pb-2 px-20" placeholder="Price" type="number" {...register("price")} />
                <input className="border border-red-800 block mt-2 pt-2 pb-2 px-20" placeholder="Image Url" {...register("img")} />
                <input className="border border-red-800 block mt-2 pt-2 pb-2 px-20" placeholder="Durotion" {...register("duration")} />
                <input className="border border-red-800 block mt-2 pt-2 pb-2 px-20" placeholder="Available" {...register("available")} />
                <input className="border border-red-800 block mt-2 pt-2 pb-2 px-20" placeholder="Contact" {...register("contact")} />
                <input className=" bg-red-800 text-white block mt-2 pt-2 pb-2 px-10" type="submit" />
            </form>
        </div>
    );
};

export default AddService;