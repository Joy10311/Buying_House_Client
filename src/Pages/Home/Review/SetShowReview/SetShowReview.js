import React from 'react';
import Rating from 'react-rating';

const SetShowReview = ({review}) => {
    const {email,comments,star} = review;
    return (
        
                <div className=" border-2 rounded-xl shadow-2xl lg:mr-5 my-5">
                   <p className="text-xl pb-5 pt-5 pl-5">{email}</p>
                    <p className="text-xl pb-5 pt-5 pl-5">{comments} </p>
                    <p className="pl-5 text-xl font-semibold pb-5">Ratings: <Rating
                    className="text-yellow-300 pl-10"
                    emptySymbol="far fa-star"
                    fullSymbol="fas fa-star"
                    initialRating={star}
                    readonly
                    ></Rating></p>
                </div>
                
          
    );
};

export default SetShowReview;