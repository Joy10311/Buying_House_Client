import React from 'react';
import logo from '../../images/about-1.jpg'

const About = () => {
    return (
        <div>
            <div className="grid lg:grid-cols-2 mt-10">

                <div className="ml-5">
                    <h1 className="font-bold text-5xl text-left pb-5 ">Our <span className="text-red-700 underline ">Story</span></h1>
                    <h5 className=" text-4xl pb-5">World Best Travel Agency Company Since 2008.</h5>
                    <p className="text-2xl pb-5">G_tour was founded in 2005 by john sinha with the vision of developing high quality and affordable guide infrastructure Chicago,Newyork and California.</p>
                    <p >We offer the entire range of touring and procedures at transparent and printed prices standards for all tourists. We are a chain of tourism.We are offering specialized advenger by experienced Guide who have care about before and after the Tour.</p>
                </div>
                <img className="lg:pl-20 pl-5" src={logo} alt="" />
            </div>
            <div className="grid lg:grid-cols-4 mt-10 mb-10 gap-4">
                <div className="pl-4">
                    <h4 className="text-2xl pb-2 text-blue-300">Talented Guide Team</h4>
                    <p className="pt-2 pb-2">We have built our agency over the strong pillars of 22Expert Guide. Our team has expert professionals who are immensely experienced.</p>
                    <h6 className="text-red-400">READ MORE</h6>
                </div>
                <div className="pl-4">
                    <h4 className="text-2xl pb-2 text-blue-300">Talented Guide Team</h4>
                    <p className="pt-2 pb-2">We have built our agency over the strong pillars of 22Expert Guide. Our team has expert professionals who are immensely experienced.</p>
                    <h6 className="text-red-400">READ MORE</h6>
                </div>
                <div className="pl-4">
                    <h4 className="text-2xl pb-2 text-blue-300">Talented Guide Team</h4>
                    <p className="pt-2 pb-2">We have built our agency over the strong pillars of 22Expert Guide. Our team has expert professionals who are immensely experienced..</p>
                    <h6 className="text-red-400">READ MORE</h6>
                </div>
                <div className="pl-4">
                    <h4 className="text-2xl pb-2 text-blue-300">Talented Guide Team</h4>
                    <p className="pt-2 pb-2">We have built our agency over the strong pillars of 22Expert Guide. Our team has expert professionals who are immensely experienced.</p>
                    <h6 className="text-red-400">READ MORE</h6>
                </div>
            </div>

        </div>
    );
};

export default About;