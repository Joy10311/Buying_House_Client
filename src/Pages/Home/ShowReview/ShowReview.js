import React, { useEffect, useState } from 'react';
import SetShowReview from '../Review/SetShowReview/SetShowReview';

const ShowReview = () => {
    const [reviews,setReviews] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/addReview')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    return (
        <div>
            <h1 className="text-5xl text-center font-semibold text-red-600">Reviews: {reviews.length}</h1>
           <div className="grid lg:grid-cols-3 px-3 pb-10">
               {
                   reviews.map(review=> <SetShowReview
                   key={review.key}
                   review={review}
                   ></SetShowReview>)
               }
           </div>
        </div>
    );
};

export default ShowReview;