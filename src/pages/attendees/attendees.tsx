import React from 'react';
import logo from '../../assets/logo.png';
import styles from './attendees.module.css';

export default function Attendees(): JSX.Element {
    return (
        <div className="w-full mt-24 text-center">
            <h1 className='text-2xl font-bold'>With support from</h1>
            <div className='sm:invisible md:visible'>
                <div className={styles.logos}>
                    <img src={logo} width="200" height="200" alt="logo" className='mx-auto mt-3'/>
                    <img src={logo} width="200" height="200" alt="logo" className='mx-auto mt-3'/>
                    <img src={logo} width="200" height="200" alt="logo" className='mx-auto mt-3'/>
                </div>
            </div>
        </div>
    )
}