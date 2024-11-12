
// Navbar.tsx
'use client'
import { button } from 'framer-motion/client';
import React from 'react';
import { AiOutlineMenu } from "react-icons/ai";//Export menubar icon



const Navbar = () => {
    const scrollToAbout = () => {
        const contactSection = document.getElementById('about-section');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const scrollToServices = () => {
        const contactSection = document.getElementById('services-section');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const scrollToPortfolio = () => {
        const contactSection = document.getElementById('portfolio-section');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const scrollToContact = () => {
        const contactSection = document.getElementById('contact-section');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="w-full flex justify-between items-center px-8 py-4 border-b-2 border-gray-200 bg-black">
            <div className="text-2xl font-bold text-white hover:text-yellow-500 cursor-pointer">Abdul Mannan</div>
            <div className="flex items-center space-x-8">
                <ul className="flex space-x-8 text-white">
                    <li className="menulink cursor-pointer hover:text-yellow-500 transition">
                        <button>Home</button>
                    </li>
                    <li className="menulink cursor-pointer hover:text-yellow-500 transition">
                        <button onClick={scrollToAbout}>About Me</button>
                    </li>
                    <li className="menulink cursor-pointer hover:text-yellow-500 transition">
                        <button onClick={scrollToServices}>Services</button>
                    </li>
                    <li className="menulink cursor-pointer hover:text-yellow-500 transition">
                        <button onClick={scrollToPortfolio}>Portfolio</button>
                    </li>
                    <li className="menulink cursor-pointer hover:text-yellow-500 transition">
                        <button onClick={scrollToContact}>Contact</button>
                    </li>
                </ul>
            </div>
        </nav >
    )
}

export default Navbar;
