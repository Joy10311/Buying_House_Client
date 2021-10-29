import React from 'react';

const Contact = () => {
    return (
        <div>
            <div>
                <div className="grid lg:grid-cols-2 pb-20 pt-10">
                    <div className="border-2 rounded-xl shadow-2xl lg:ml-10">
                        <h1 className="text-4xl font-bold text-red-400 pl-3 pb-10">Feel Free to Contact with us</h1>
                        <p className="text-3xl pl-5">There we are ready for you all time.Stay with us anytime.Fell free to contact us.Thank you for stay with us.Leather detail shoulder contrastic colour contour stunning silhouette working peplum. Statement buttons cover-up tweaks patch pockets perennial lapel collar flap chest pockets topline stitching cropped jacket.</p>
                    </div>
                    <div className="mt-24 lg:ml-40 ml-10 lg:pl-40 lg:pl-20 border-2 rounded-xl shadow-2xl pt-20 pb-20">
                        <input className="border border-gray-800  pt-2 pb-2 lg:pl-40 block" type="text" placeholder="NAME" />
                        <input className="border border-gray-800 mt-2 pt-2 pb-2 lg:pl-40 block" type="text" placeholder="EMAIL" />
                        <input className="border border-gray-800 mt-2 pt-2 pb-2 lg:pl-40 block" type="text" placeholder="NUMBER" />
                        <input className="border border-gray-800 mt-2 pt-14 lg:pl-40 pb-14 block" type="text" placeholder="Enter your Messege" />
                        <button className="border border-gray-800 block mt-2  p-2 bg-blue-700 text-white rounded-lg">Send Messege</button>

                    </div>
                </div>

                <div className="grid lg:grid-cols-3 ml-10 pb-10">

                    <div className="border-2 rounded-xl shadow-2xl lg:mr-5 pl-5">
                        <p className="text-2xl pb-5">Address</p>
                        <p>31 park street, 5th Avenue,</p>
                        <p className="pb-10"> Dhanmondy, Dhaka.</p>
                    </div>
                    <div className="border-2 rounded-xl shadow-2xl lg:mr-5 pl-5">
                        <p className="text-2xl pb-5">Call us Now</p>
                        <p className="text-red-700 font-bold text-xl pb-2">+31 666 888 0001</p>
                        <p className="text-red-700 font-bold text-xl pb-2 pb-10">+31 666 888 0023</p>
                    </div>
                    <div className="border-2 rounded-xl shadow-2xl lg:mr-5 pl-5">
                        <p className="text-2xl pb-5">Email</p>
                        <p className="text-red-700 font-bold text-xl pb-2">info@example.com</p>
                        <p className="text-red-700 font-bold text-xl pb-2">info@example.com</p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Contact;