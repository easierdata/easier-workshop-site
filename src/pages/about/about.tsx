import { AboutContent } from "../../static/content";
import RR from '../../assets/RR.jpg';

export default function About(): JSX.Element {
    return (
        <div className="border mx-6 md:mx-12 rounded-lg border-black mt-24 grid md:grid-cols-2">
            <div>
                <h1 className='text-2xl font-bold text-center mt-3'>About</h1>
                <div className="p-4">
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
    )
}