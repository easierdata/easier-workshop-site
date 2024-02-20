import { LocationContent } from "../../static/content";

export default function Location(): JSX.Element {
    return (
        <div className="border mx-6 md:mx-12 rounded-lg border-black mt-24 grid md:grid-cols-2">
            <div>
                <h1 className='text-2xl font-bold text-center mt-3'>Where</h1>
                <div className="p-4">
                    <p>{LocationContent.paragraph}</p>
                </div>
            </div>
            <div>
                <h1>Google maps embed goes here</h1>
            </div>
        </div>
    )
}