import { AboutContent } from "../../static/content";
import RR from '../../assets/RR.jpg';

export default function About(): JSX.Element {
    return (
        <div
            style={{
                background: `linear-gradient(0deg, #039876, #fff)`
            }}
            className="py-6 mt-24"
        >
            <div className="pt-6 bg-white mx-6 md:mx-12 rounded-lg grid md:grid-cols-2">
                <div>
                    <h1 className='text-4xl font-bold text-center mt-3'>About</h1>
                    <div className="p-4 text-lg">
                        <p>{AboutContent.paragraph}</p>
                    </div>
                </div>
                <div>
                    <img 
                        src={RR} 
                        alt="River Road" 
                        className='w-auto p-3'
                    />
                </div>
            </div>
        </div>
    )
}