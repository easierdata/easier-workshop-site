import React from "react";
import { LandingContent } from "../../static/content";
import globe from '../../assets/globe.png';
import group from '../../assets/accessories/group.svg';

export default function Landing(): JSX.Element {
    return (
        <div className="h-full grid md:grid-cols-2 ml-4 mr-4 md:ml-20 md:mr-20 select-none">
            <img src={group} alt="Landing" className="absolute top-20 right-0 w-1/2 -z-10" />
            <div className="mt-8 md:mt-20">
                <h1 className="font-bold text-4xl md:text-6xl">{LandingContent.heading}</h1>
                <h2 className="mt-4 font-bold text-2xl md:text-3xl">{LandingContent.subheading}</h2>
                <hr className="mt-4 mb-4"/>
                <p className="text-lg mb-4">{LandingContent.description}</p>

                <div className="sm:visible sm:grid sm:grid-rows-2 md:invisible md:h-0 flex flex-col items-center">
                    <button
                        className="disabled cursor-default mt-3 px-6 py-2 drop-shadow-md rounded-3xl bg-gray-300 text-white"
                    >
                        Event Ended
                    </button>
                    <button
                        className="sm:ml-0 md:ml-3 cursor-default mt-3 px-6 py-2 rounded-3xl bg-white text-black border border-green-500 font-bold"
                    >
                        April 3 - 4
                    </button>
                </div>

                <div className="invisible sm:invisible sm:h-0 md:visible">
                    <button
                        className="disabled cursor-default mt-3 px-6 py-2 drop-shadow-md rounded-3xl bg-gray-300 text-white"
                    >
                        Event Ended
                    </button>
                    <button
                        className="sm:ml-0 md:ml-3 cursor-default mt-3 px-6 py-2 rounded-3xl bg-white text-black border border-green-500 font-bold"
                    >
                        April 3 - 4
                    </button>
                </div>
            </div>
            <div>
                <img 
                    src={globe} 
                    alt="logo" 
                    className='mt-6 container max-w-screen-sm mx-auto'
                />
            </div>
        </div>
    )
}