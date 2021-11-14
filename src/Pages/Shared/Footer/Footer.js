import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo-3.webp'

const Footer = () => {
    return (

        <div className="bg-black   text-white ">
            <div className="grid lg:grid-cols-3 pl-10">

                <div className=" pt-5 font-semibold ">
                    <Link to="/home"> <img className="bg-white px-2" src={logo} alt="" /> </Link>
                    <p className="pt-5">London is a megalopolis of people, ideas and frenetic energy. The capital and largest city of the United Kingdom</p>

                </div>


                <div className=" pt-5 font-semibold ">
                    <p className="text-2xl pb-3">Business Hours</p>
                    <p>Flat 20, Reynolds Neck, North Helenaville, FV77 8WS</p>
                    <p>+2(305) 587-3407</p>
                    <p>info@example.com</p>

                </div>

                <div className=" pt-5 font-semibold ">
                    <Link to="/about"><p className="text-2xl pb-3">About Us</p></Link>
                    <p> Listing</p>
                    <p>Services</p>
                    <p>How It Works</p>
                    <p>Our Services</p>
                    <p> Listing</p>
                    <p>Our Blog</p>
                </div>

            </div>
            <p className="text-center">Copyright © 2016 - 2021. AMULI rights reserved</p>
        </div>

    );
};

export default Footer;