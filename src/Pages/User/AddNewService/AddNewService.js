import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddNewService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://guarded-reaches-63811.herokuapp.com/services', data)
            .then(res => {
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
                    <textarea className="border border-red-800 block mt-2 pt-2 pb-2 px-20" placeholder="Description" {...register("description")} />
                    <input className="border border-red-800 block mt-2 pt-2 pb-2 px-20" placeholder="Price" type="number" {...register("price")} />
                    <input className="border border-red-800 block mt-2 pt-2 pb-2 px-20" placeholder="Image Url" {...register("img")} />
                    <input className="border border-red-800 block mt-2 pt-2 pb-2 px-20" placeholder="Details Image Url" {...register("detaiImg")} />

                    <input className="border border-red-800 block mt-2 pt-2 pb-2 px-20" placeholder="Duration" type="number" {...register("duration")} />
                    <input className="border border-red-800 block mt-2 pt-2 pb-2 px-20" placeholder="Available" type="number" {...register("available")} />
                    <textarea className="border border-red-800 block mt-2 pt-2 pb-2 px-20" placeholder="Day1" {...register("day1")} />
                    <textarea className="border border-red-800 block mt-2 pt-2 pb-2 px-20" placeholder="Day2" {...register("day2")} />
                    <input className="border border-red-800 block mt-2 pt-2 pb-2 px-20" placeholder="Contact" {...register("contact")} />
                    <input className=" bg-red-800 text-white block mt-2 pt-2 pb-2 px-10" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddNewService;