import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/UseAuth/UseAuth';

const Review = () => {
    const { register, handleSubmit, reset, errors } = useForm();
  const { user } = useAuth();


  const onSubmit = (data) => {
    fetch('https://sheltered-sea-70251.herokuapp.com/addReview', {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
          if(result.acknowledged){
            alert('added successfully')
            reset()
          }
      });

    console.log(data);
  };


    return (
        <div className="grid justify-center align-center">
      <h1 >Review</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="border border-red-800 block mt-2 pt-2 pb-2 px-20"
          name="email"
          value={user?.email}
          type="email"
          {...register("email", { required: true })}
        />
        <br />
        <input
          className="border border-red-800 block mt-2 pt-2 pb-2 px-20"
          name="comments"
          placeholder="Comments"
          {...register("comments", { required: true })}
        />
        <br />
        <input
          className="border border-red-800 block mt-2 pt-2 pb-2 px-20"
          name="star"
          placeholder="5 out of"
          {...register("star", { required: true })}
        />
        <br />

        <input
          className="p-3 mb-3 bg-blue-700 text-white rounded-lg "
          type="submit"
          value="Register"
        />
      </form>
    </div>
    );
};

export default Review;