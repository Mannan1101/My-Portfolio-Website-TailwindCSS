
'use client'
import React from 'react';
import Image from 'next/image';

const About = () => {
    return (
        <div className="container mx-auto pt-32 px-8 md:px-16 lg:px-24 flex flex-col lg:flex-row items-center justify-between">
            {/* Left Side: Text Content */}
            <div className="lg:w-1/2 mb-8 lg:mb-0">
                <h3 className="text-xl mb-4 font-medium ">About Me</h3>
                <h1 className="text-4xl font-medium mb-2">Hello! I am</h1>
                <h1 className="text-7xl font-medium text-yellow-400 mb-4">Abdul Mannan</h1>
                <p className="pt-8 font-style: italic" >
                    I’m Abdul Mannan, a front-end developer with a solid background in Computer Information Technology and a Master’s in Economics. Currently, I am exploring advanced fields like Cloud, Applied Generative AI, Metaverse, and Web 3.0. I am passionate about leveraging technology to create solutions that are both functional and user-friendly, and I’m always eager to learn and grow in the ever-evolving tech landscape.

                </p>
            </div>

            {/* Right Side: Image */}
            <div className=" rounded-lg lg:w-1/2 flex justify-center">
                <Image src={"/profile pic.jpg.png"} alt='wahab'
                    width={300}
                    height={300}

                    priority
                    className="object-contain rounded-full border-spacing "
                    style={{ marginRight: '100px' }}
                ></Image>

            </div>
        </div>
    );
};

export default About;
