import React from 'react';
import { Link } from 'react-router-dom';

const SetGuide = ({ servi }) => {
    const { guideImg, guide, contact } = servi;
    return (
        <div>
            <div className=" border-solid border-4 border-light-blue-500 mx-4 my-4 shadow-2xl rounded-xl">
                <div >
                    <img src={guideImg} alt="" />
                    <h2 className="font-bold text-3xl text-center text-blue-600  my-2">{guide}</h2>
                    <h5 className="font-semibold text-center text-xl">Contact: {contact}$</h5>
                    <button className="bg-blue-700 text-white rounded-lg mt-3 lg:ml-44 ml-20  p-3 mb-3">Contact Us</button>
                </div>
            </div>
        </div>
    );
};

export default SetGuide;