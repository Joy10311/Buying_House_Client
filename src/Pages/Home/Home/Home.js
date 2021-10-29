import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import logo from '../../../images/news-1.jpg'
import logo2 from '../../../images/news-2.jpg'
import logo3 from '../../../images/news-3.jpg'
import logo4 from '../../../images/news-4.jpg'
import reviewer from '../../../images/player-1.png'
import reviewer2 from '../../../images/player-2.png'
import reviewer3 from '../../../images/player-3.png'
import Services from '../../Services/Services';


const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://guarded-reaches-63811.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return (
        <div>

            <div className="banner text-white ">
                <h2 className="text-7xl pt-3 lg:ml-60 ml-10 font-bold">Explore <br /> Your Travel</h2>
                <h1 className="text-4xl pt-20 pb-3 ml-10">Discover your next great adventure, become an explorer to get started!</h1>
                <p className="text-6xl ml-10 pt-20">World Best <br /> Travel Agency Company <br /> Since 2008.</p>
                <Link to="/"> <button className="bg-yellow-700 text-white rounded-lg mt-20 lg:ml-44 ml-10  p-3 mb-3">Click To See Our Doctors</button></Link>
            </div>

            {/* services  */}
            <div className="grid lg:grid-cols-3">
                {
                    services.slice(0, 3).map(service => <Services
                        key={service._id}
                        service={service}
                    ></Services>)
                }
            </div>


            {/* Features */}

            <div className="grid lg:grid-cols-4  py-20 px-10 ">

                <div className=" border-2 rounded-xl shadow-2xl lg:mr-5">
                    <img src={logo} alt="" />
                    <p className="text-2xl  pb-5 font-bold pt-5 pl-5">2000+ Our Worldwide Guide</p>
                </div>
                <div className=" border-2 rounded-xl shadow-2xl  lg:mr-5">
                    <img src={logo2} alt="" />
                    <p className="text-2xl pb-5 font-bold pt-5 pl-5">100% Trusted Tour Agency</p>
                </div>
                <div className=" border-2 rounded-xl shadow-2xl lg:mr-5">
                    <img src={logo3} alt="" />
                    <p className="text-2xl pb-5 font-bold pt-5 pl-5">12+ Years of Travel Experience</p>
                </div>
                <div className=" border-2 rounded-xl shadow-2xl lg:mr-5">
                    <img src={logo4} alt="" />
                    <p className="text-2xl pb-5 font-bold pt-5 pl-5">98% of Our Travelers are Happy</p>
                </div>

            </div>


            {/* Rating part */}
            <div className="grid lg:grid-cols-3 px-3 py-10">
                <div className=" border-2 rounded-xl shadow-2xl lg:mr-5">
                    <img className="pl-7 pt-5" height="300px" width="300px" src={reviewer} alt="" />
                    <p className="text-xl pb-5 pt-5 pl-5">Lisa & the team were very fast and efficient in responding to any emails and also with updating me with my travel itinerary, etc. Loved being able yo book everything in the one place, in one transaction. I will most definitely be using Travel Online for my holiday bookings again in the future! <br />
                        - Joshua Braidwood</p>
                </div>
                <div className=" border-2 rounded-xl shadow-2xl lg:mr-5 lg:mt-0 mt-10">
                    <img className="pl-7 pt-5" height="300px" width="300px" src={reviewer2} alt="" />
                    <p className="text-xl pb-5  pt-5 pl-5">I love the way you guys are always very helpful and accomodating. Your service is excellent and I am more than happy to use your organisation for all future holidays. <br />
                        - Ivan Menezes</p>
                </div>
                <div className=" border-2 rounded-xl shadow-2xl lg:mr-5 lg:mt-0 mt-10">
                    <img className="pl-7 pt-5" height="300px" width="300px" src={reviewer3} alt="" />
                    <p className="text-xl pb-5  pt-5 pl-5">We were very happy with our holiday booking and our accommodation. We would book with TravelOnline again and definitely recommend their services to others.
                        <br /> - Shona Sperring</p>
                </div>
            </div>


        </div>
    );
};

export default Home;