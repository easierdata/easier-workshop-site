import React from 'react';
import logo from '../../assets/logos/logo.png';
import FFDW from '../../assets/logos/FFDW.png';
import UMD_GIS from '../../assets/logos/UMD_Geog.png'
import styles from './sponsors.module.css';

export default function Sponsors(): JSX.Element {
    return (
        <div className="w-full mt-24 text-center">
            <h1 className='text-2xl font-bold select-none'>With support from</h1>
            <div>
                <div className={styles.logos}>
                    <img src={FFDW} alt="logo" className='p-6 md:p-3 mx-auto mt-3 cursor-pointer' onClick={() => window.open("https://ffdweb.org/", "_blank")} />
                    <img src={UMD_GIS} alt="logo" className='p-6 md:p-0 mx-auto mt-3 cursor-pointer' onClick={() => window.open("https://geog.umd.edu/", "_blank")} />
                    <img src={logo} alt="logo" className='p-6 md:p-0 mx-auto mt-3 cursor-pointer' onClick={() => window.open("https://easierdata.org/", "_blank")} />
                </div>
            </div>
        </div>
    )
}