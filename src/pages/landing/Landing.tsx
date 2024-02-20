import React from "react";
import { LandingContent } from "../../static/content";
import logo from '../../assets/logo.png';

export default function Landing(): JSX.Element {
    return (
        <div className="grid md:grid-cols-2 ml-14 mr-14 md:ml-20 md:mr-20">
            <div className="mt-20">
                <h1 className="font-bold text-3xl">{LandingContent.heading}</h1>
                <h2 className="mt-3 font-bold text-xl">{LandingContent.subheading}</h2>
                <hr className="mt-3 mb-4"/>
                <p>{LandingContent.description}</p>

                <button
                    className="mt-3 px-6 py-2 drop-shadow-md rounded-3xl bg-[#039876] text-white hover:bg-[#038264]"
                >
                    Register
                </button>
                <button
                    className="ml-3 cursor-default mt-3 px-6 py-2 rounded-3xl bg-white text-black border border-green-500"
                >
                    Spots still available!
                </button>
            </div>
            <div>
                <img 
                    src={logo} 
                    alt="logo" 
                    className='mt-6 ml-6'
                />
            </div>
        </div>
    )
}