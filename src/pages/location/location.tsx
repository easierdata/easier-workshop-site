import { LocationContent } from "../../static/content";
import RR from '../../assets/RR.jpg';

export default function Location(): JSX.Element {
    return (
        <div
            style={{
                background: `#039876`
            }}
            className="py-6"
            id="location"
        >
            <div className="bg-white mx-6 md:mx-12 rounded-lg mt-24 mb-24">
                <h1 className='text-4xl font-bold text-center p-6'>Where</h1>
                <div className="p-4 text-lg text-center">
                    <p>{LocationContent.paragraph}</p>
                </div>
                <div className="grid md:grid-cols-2">
                    <div className="flex justify-center items-center">
                        <iframe 
                            title="RR" 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3101.9457773288304!2d-76.9273043!3d38.9709061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c6cf2c8e3b47%3A0xc6684c543ef3f9aa!2s4600%20River%20Rd%2C%20Riverdale%2C%20MD%2020737!5e0!3m2!1sen!2sus!4v1708458619666!5m2!1sen!2sus" 
                            height="625" 
                            style={{border: 0}} 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full p-3"
                        />
                    </div>
                    <div className="flex justify-center items-center p-3">
                        <div 
                            className="h-full w-full p-3"
                            style={{
                                backgroundImage: `url(${RR})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                minHeight: "300px", 
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}