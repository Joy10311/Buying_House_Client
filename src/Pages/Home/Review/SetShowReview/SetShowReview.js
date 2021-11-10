import React from 'react';

const SetShowReview = ({review}) => {
    const {email,comments,star} = review;
    return (
        
                <div className=" border-2 rounded-xl shadow-2xl lg:mr-5 my-5">
                   <p className="text-xl pb-5 pt-5 pl-5">{email}</p>
                    <p className="text-xl pb-5 pt-5 pl-5">{comments} </p>
                    <p className="text-xl pb-5 pt-5 pl-5">{star} </p>
                </div>
                
          
    );
};

export default SetShowReview;