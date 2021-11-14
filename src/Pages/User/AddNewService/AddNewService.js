import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddNewService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://sheltered-sea-70251.herokuapp.com/properties', data)
            .then(res => {
                console.log(data)
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })

    }

    return (
        <div>
            <div className="pb-40 grid justify-center align-center">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="border border-red-800 block mt-2 pt-2 pb-2 px-20" placeholder="Title" {...register("title", { required: true, maxLength: 20 })} />
                    <input className="border border-red-800 block mt-2 pt-2 pb-2 px-20" placeholder="Agent" {...register("agent", { required: true, maxLength: 20 })} />
                    <input className="border border-red-800 block mt-2 pt-2 pb-2 px-20" placeholder="Category" {...register("category")} />
                    <input className="border border-red-800 block mt-2 pt-2 pb-2 px-20" placeholder="Details" {...register("details")} />
                    <input className="border border-red-800 block mt-2 pt-2 pb-2 px-20" placeholder="Address" {...register("address")} />
                    <input className="border border-red-800 block mt-2 pt-2 pb-2 px-20" placeholder="Area" type="number" {...register("area")} />
                    <input className="border border-red-800 block mt-2 pt-2 pb-2 px-20" placeholder="Image Url" {...register("img")} />
                    <input className="border border-red-800 block mt-2 pt-2 pb-2 px-20" placeholder="Added date" type="number" {...register("added")} />
                    <input className="border border-red-800 block mt-2 pt-2 pb-2 px-20" placeholder="Price" type="number" {...register("price")} />
                    <input className=" bg-red-800 text-white block mt-2 pt-2 pb-2 px-10" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddNewService;