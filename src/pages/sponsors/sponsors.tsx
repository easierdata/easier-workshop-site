import React from 'react';
import logo from '../../assets/logos/logo.png';
import FFDW from '../../assets/logos/FFDW.png';
import UMD_GIS from '../../assets/logos/UMD_Geog.png'
import UMD from '../../assets/logos/UMD.png';
import styles from './sponsors.module.css';

export default function Sponsors(): JSX.Element {
    return (
        <div className="w-full mt-24 text-center">
            <h1 className='text-2xl font-bold'>With support from</h1>
            <div className='sm:invisible md:visible'>
                <div className={styles.logos}>
                    <img src={FFDW} alt="logo" className='mx-auto mt-3 cursor-pointer' onClick={() => window.open("https://ffdweb.org/", "_blank")} />
                    <img src={logo} alt="logo" className='mx-auto mt-3 cursor-pointer' onClick={() => window.open("https://easierdata.org/", "_blank")} />
                    <img src={UMD_GIS} alt="logo" className='mx-auto mt-3 cursor-pointer' onClick={() => window.open("https://geog.umd.edu/", "_blank")} />
                    <img src={UMD} alt="logo" className='mx-auto mt-3 cursor-pointer' onClick={() => window.open("https://umd.edu/", "_blank")} />
                </div>
            </div>
        </div>
    )
}