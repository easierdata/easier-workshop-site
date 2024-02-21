import React from "react";
import { LandingContent } from "../../static/content";
import logo from '../../assets/logos/logo.png';

export default function Landing(): JSX.Element {
    return (
        <div className="h-full grid md:grid-cols-2 ml-14 mr-14 md:ml-20 md:mr-20">
            <div className="mt-20">
                <h1 className="font-bold text-5xl">{LandingContent.heading}</h1>
                <h2 className="mt-3 font-bold text-2xl">{LandingContent.subheading}</h2>
                <hr className="mt-3 mb-4"/>
                <p>{LandingContent.description}</p>

                <div className="sm:grid sm:grid-rows-2 md:invisible md:h-0">
                    <button
                        className="mt-3 px-6 py-2 drop-shadow-md rounded-3xl bg-[#039876] text-white hover:bg-[#038264]"
                    >
                        Register
                    </button>
                    <button
                        className="sm:ml-0 md:ml-3 cursor-default mt-3 px-6 py-2 rounded-3xl bg-white text-black border border-green-500"
                    >
                        Spots still available!
                    </button>
                </div>

                <div className="sm:invisible sm:h-0 md:visible">
                    <button
                        className="mt-3 px-6 py-2 drop-shadow-md rounded-3xl bg-[#039876] text-white hover:bg-[#038264]"
                    >
                        Register
                    </button>
                    <button
                        className="sm:ml-0 md:ml-3 cursor-default mt-3 px-6 py-2 rounded-3xl bg-white text-black border border-green-500"
                    >
                        Spots still available!
                    </button>
                </div>
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