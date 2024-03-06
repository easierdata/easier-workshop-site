import React, { useState } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../assets/logos/logo.png';
import { Link } from 'react-scroll';

export default function Navbar(): JSX.Element {
    const [visible, setVisible] = useState(false);

    const toggle = () => {
        setVisible(!visible);
    }

    const links = [
        { id: 1, label: "About", to: "about" },
        { id: 2, label: "Schedule", to: "itinerary" },
        { id: 3, label: "Where", to: "location" },
        { id: 4, label: "FAQ", to: "faq" }
    ];

    return (
        <div className='bg-white flex justify-between items-center h-24 mx-auto px-4 text-black'>
            <img 
                src={logo} 
                alt="logo" 
                className='h-20'
            />

            <ul className='hidden md:flex'>
                {links.map(link => (
                    <li
                        key={link.id}
                    >
                        <Link activeClass={link.to} smooth spy to={link.to}
                            className='p-4 hover:bg-[#039876] hover:text-white rounded-xl m-2 cursor-pointer duration-300 hover:text-black text-gray-500 font-bold hover:no-underline'
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Mobile */}
            <div onClick={toggle} className='block md:hidden'>
                {visible ? <FontAwesomeIcon icon={faBars} size='2x' /> : <FontAwesomeIcon icon={faBars} size='2x'/>}
            </div>

            <ul
                className={
                visible
                    ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500 z-10'
                    : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
                }
            >
                <img 
                    src={logo} 
                    alt="logo" 
                    className='h-20'
                />
                {links.map(link => (
                    <li
                        key={link.id}
                        className='p-4 rounded-xl hover:bg-[#039876] duration-300 hover:text-white cursor-pointer border-gray-600'
                    >
                        <Link activeClass={link.to} smooth spy to={link.to} onClick={() => toggle()}>
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}