import { Timeline } from 'rsuite'
import 'rsuite/Timeline/styles/index.css';
import 'rsuite/dist/rsuite.min.css';

export default function Itinerary(): JSX.Element {
    return (
        <div
            style={{
                background: `linear-gradient(0deg, #fff, #039876)`
            }}
            className="py-6"
        >
            <div className='mx-6 md:mx-12 bg-white rounded-lg p-6'>
                <h1 className='text-4xl font-bold text-center'>Tentative Itinerary</h1>
                <div className="grid md:grid-cols-2">
                    <div className='mb-6'>
                        <h1 className='text-center text-2xl font-bold mb-6'>April 3rd</h1>
                        <Timeline className='mb-6'>
                            <Timeline.Item time="10:00 AM EST - 10:30 AM EST">
                                <p className="text-lg">Doors open</p>
                            </Timeline.Item>
                            <Timeline.Item time="10:30 AM EST - 11:00 AM EST">
                                <p className="text-lg">Opening Keynote</p>
                            </Timeline.Item>
                            <Timeline.Item time="11:00 AM EST - 11:30 AM EST">
                                <p className="text-lg">Guest Speaker 1</p>
                            </Timeline.Item>
                            <Timeline.Item time="11:30 AM EST - 12:00 PM EST">
                                <p className="text-lg">Guest Speaker 2</p>
                            </Timeline.Item>
                            <Timeline.Item time="12:00 PM EST - 1:00 PM EST">
                                <p className="text-lg">Lunch</p>
                            </Timeline.Item>
                            <Timeline.Item time="1:00 PM EST - 4:00 PM EST">
                                <p className="text-lg">Breakout</p>
                            </Timeline.Item>
                            <Timeline.Item time="4:00 PM EST - 4:15 PM EST">
                                <p className="text-lg">Lightning Talk 1</p>
                            </Timeline.Item>
                            <Timeline.Item time="4:15 PM EST - 4:30 PM EST">
                                <p className="text-lg">Lightning Talk 2</p>
                            </Timeline.Item>
                            <Timeline.Item time="4:30 PM EST - 4:45 PM EST">
                                <p className="text-lg">Lightning Talk 3</p>
                            </Timeline.Item>
                            <Timeline.Item time="4:45 PM EST - 5:00 PM EST">
                                <p className="text-lg">Closing Keynote</p>
                            </Timeline.Item>
                            <Timeline.Item />
                        </Timeline>
                    </div>
                    <div className='mb-6'>
                        <h1 className='text-center text-2xl font-bold mb-6'>April 4th</h1>
                        <Timeline className='mb-6'>
                            <Timeline.Item time="10:00 AM EST - 10:30 AM EST">
                                <p className="text-lg">Doors open</p>
                            </Timeline.Item>
                            <Timeline.Item time="10:30 AM EST - 11:00 AM EST">
                                <p className="text-lg">Opening Keynote</p>
                            </Timeline.Item>
                            <Timeline.Item time="11:00 AM EST - 11:30 AM EST">
                                <p className="text-lg">Guest Speaker 1</p>
                            </Timeline.Item>
                            <Timeline.Item time="11:30 AM EST - 12:00 PM EST">
                                <p className="text-lg">Guest Speaker 2</p>
                            </Timeline.Item>
                            <Timeline.Item time="12:00 PM EST - 1:00 PM EST">
                                <p className="text-lg">Lunch</p>
                            </Timeline.Item>
                            <Timeline.Item time="1:00 PM EST - 4:00 PM EST">
                                <p className="text-lg">Breakout</p>
                            </Timeline.Item>
                            <Timeline.Item time="4:00 PM EST - 4:15 PM EST">
                                <p className="text-lg">Lightning Talk 1</p>
                            </Timeline.Item>
                            <Timeline.Item time="4:15 PM EST - 4:30 PM EST">
                                <p className="text-lg">Lightning Talk 2</p>
                            </Timeline.Item>
                            <Timeline.Item time="4:30 PM EST - 4:45 PM EST">
                                <p className="text-lg">Lightning Talk 3</p>
                            </Timeline.Item>
                            <Timeline.Item time="4:45 PM EST - 5:00 PM EST">
                                <p className="text-lg">Closing Keynote</p>
                            </Timeline.Item>
                            <Timeline.Item />
                        </Timeline>
                    </div>
                </div>
            </div>
        </div>
    )
}