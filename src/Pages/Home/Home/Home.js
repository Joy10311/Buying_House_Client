import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import logo from '../../../images/news-1.jpg'
import logo2 from '../../../images/news-2.jpg'
import logo3 from '../../../images/news-3.jpg'
import logo4 from '../../../images/news-4.jpg'
import useAuth from '../../../Hooks/UseAuth/UseAuth';
import Properties from '../Properties/Properties';


const Home = () => {
    const { isLoading } = useAuth();
    const [properties, setProperties] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/properties')
            .then(res => res.json())
            .then(data => setProperties(data));
    }, []);

    if (isLoading) {
        return <div class="flex justify-center items-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500">

            </div>
        </div>
    }
    return (
        <div>

            <div className="banner text-white ">
                <h2 className="text-7xl pt-3 lg:ml-60 ml-10 font-bold">Explore <br /> Property</h2>
                <h1 className="text-4xl pt-20 pb-3 ml-10">Discover your next destination, become an explorer to <br /> get a special property!</h1>
                <p className="text-6xl ml-10 pt-20 pb-20">World Best <br /> Real State Company <br /> Since 2007.</p>
                
            </div>

            {/* services  */}
            <div className="grid lg:grid-cols-3">
                {
                   properties.slice(0,6).map(property => <Properties
                   key={property._id}
                   property={property}
                   ></Properties>)
                }
            </div>


            {/* Features */}

            <div className="grid lg:grid-cols-4  py-20 px-10 ">

                <div className=" border-2 rounded-xl shadow-2xl lg:mr-5">
                    <img src={logo} alt="" />
                    <p className="text-2xl  pb-5 text-blue-600 font-semibold pt-5 pl-5">Laura Smart</p>
                    <p className="text-2xl  pb-5  pl-5">Real Estate Agent</p>
                </div>
                <div className=" border-2 rounded-xl shadow-2xl  lg:mr-5">
                    <img src={logo2} alt="" />
                    <p className="text-2xl pb-5 text-blue-600 font-semibold pt-5 pl-5">Andrew Tarlington</p>
                    <p className="text-2xl pb-5  pl-5">Real Estate Agent</p>
                </div>
                <div className=" border-2 rounded-xl shadow-2xl lg:mr-5  ">
                    <img src={logo3} alt="" />
                    <p className="text-2xl pb-5 text-blue-600 font-semibold pt-5 pl-5">Linda Green</p>
                    <p className="text-2xl pb-5 pl-5">IT Support</p>
                </div>
                <div className=" border-2 rounded-xl shadow-2xl lg:mr-5">
                    <img src={logo4} alt="" />
                    <p className="text-2xl pb-5 text-blue-600 font-semibold pt-5 pl-5">Pete Wise</p>
                    <p className="text-2xl pb-5   pl-5">IT Support</p>
                </div>

            </div>

                    {/* ratings */}

                    <div></div>

        </div>
    );
};

export default Home;