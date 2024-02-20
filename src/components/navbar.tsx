import React, { useState } from 'react';
import { faChevronCircleUp, faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../assets/logo.png'

export default function Navbar(): JSX.Element {
    const [visible, setVisible] = useState(false);

    const toggle = () => {
        setVisible(!visible);
    }

    const links = [
        { id: 1, label: "About" },
        { id: 2, label: "Schedule" },
        { id: 3, label: "Where" },
        { id: 4, label: "FAQ" }
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
                        className='p-4 hover:bg-[#039876] hover:text-white rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
                    >
                        {link.label}
                    </li>
                ))}
            </ul>

            {/* Mobile */}
            <div onClick={toggle} className='block md:hidden'>
                {visible ? <FontAwesomeIcon icon={faChevronCircleUp} /> : <FontAwesomeIcon icon={faChevronCircleDown} />}
            </div>

            <ul
                className={
                visible
                    ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500'
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
                        className='p-4 border-b rounded-xl hover:bg-[#039876] duration-300 hover:text-white cursor-pointer border-gray-600'
                    >
                        {link.label}
                    </li>
                ))}
            </ul>
        </div>
    )
}