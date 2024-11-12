import React from 'react';
import Navbar from './Header';
import { DiBlackberry } from 'react-icons/di';
import { BsBrowserChrome } from 'react-icons/bs';
import { BiCrown } from 'react-icons/bi';
import { FaBlackberry } from 'react-icons/fa6';

// Hero Page

const Hero = () => {
    return (
        <div
            id="hero"
            className="relative min-h-screen bg-cover bg-no-repeat"
            style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundColor: 'whitesmoke'
            }}
        >
            {/* Navbar - Positioned above the overlay */}
            <div className="absolute top-0 left-0 w-full z-10">
                <Navbar />
            </div>

            {/* Black Overlay to Darken the Image */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Content Section */}
            <div className="relative container mx-auto text-center px-4 lg:px-0 flex items-center justify-center min-h-screen">
                <div>
                    <p className="text-xl font-medium mb-2 text-white font-serif">
                        Welcome to my Portfolio website
                    </p>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-yellow-500 mb-4 font-sans">
                        Abdul Mannan
                    </h1>
                    <p className="text-lg md:text-xl italic text-white mb-8">
                        “ Coding the Future with Innovation and Style ”
                    </p>
                    <button className="bg-yellow-400 text-black font-semibold py-2 px-6 rounded-lg hover:bg-yellow-500 transition duration-300">
                        Start a Project
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Hero;