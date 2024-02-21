import { Timeline } from 'rsuite'
import 'rsuite/Timeline/styles/index.css';
import 'rsuite/dist/rsuite.min.css';

export default function Itinerary(): JSX.Element {
    return (
        <div className='mx-6 md:mx-12 rounded-lg border-black mt-24 border p-6'>
            <h1 className='text-2xl font-bold text-center'>Tentative Itinerary</h1>
            <div className="grid md:grid-cols-2">
                <div>
                    <h1 className='text-center text-xl font-bold mb-6'>April 3rd</h1>
                    <Timeline className='mb-6'>
                        <Timeline.Item time="10:00 AM EST - 10:30 AM EST">
                            <p>Doors open</p>
                        </Timeline.Item>
                        <Timeline.Item time="10:30 AM EST - 11:00 AM EST">
                            <p>Opening Keynote</p>
                        </Timeline.Item>
                        <Timeline.Item time="11:00 AM EST - 11:30 AM EST">
                            <p>Guest Speaker 1</p>
                        </Timeline.Item>
                        <Timeline.Item time="11:30 AM EST - 12:00 PM EST">
                            <p>Guest Speaker 2</p>
                        </Timeline.Item>
                        <Timeline.Item time="12:00 PM EST - 1:00 PM EST">
                            <p>Lunch</p>
                        </Timeline.Item>
                        <Timeline.Item time="1:00 PM EST - 4:00 PM EST">
                            <p>Breakout</p>
                        </Timeline.Item>
                        <Timeline.Item time="4:00 PM EST - 4:15 PM EST">
                            <p>Lightning Talk 1</p>
                        </Timeline.Item>
                        <Timeline.Item time="4:15 PM EST - 4:30 PM EST">
                            <p>Lightning Talk 2</p>
                        </Timeline.Item>
                        <Timeline.Item time="4:30 PM EST - 4:45 PM EST">
                            <p>Lightning Talk 3</p>
                        </Timeline.Item>
                        <Timeline.Item time="4:45 PM EST - 5:00 PM EST">
                            <p>Closing Keynote</p>
                        </Timeline.Item>
                        <Timeline.Item />
                    </Timeline>
                </div>
                <div>
                    <h1 className='text-center text-xl font-bold mb-6'>April 4th</h1>
                    <Timeline className='mb-6'>
                        <Timeline.Item time="10:00 AM EST - 10:30 AM EST">
                            <p>Doors open</p>
                        </Timeline.Item>
                        <Timeline.Item time="10:30 AM EST - 11:00 AM EST">
                            <p>Opening Keynote</p>
                        </Timeline.Item>
                        <Timeline.Item time="11:00 AM EST - 11:30 AM EST">
                            <p>Guest Speaker 1</p>
                        </Timeline.Item>
                        <Timeline.Item time="11:30 AM EST - 12:00 PM EST">
                            <p>Guest Speaker 2</p>
                        </Timeline.Item>
                        <Timeline.Item time="12:00 PM EST - 1:00 PM EST">
                            <p>Lunch</p>
                        </Timeline.Item>
                        <Timeline.Item time="1:00 PM EST - 4:00 PM EST">
                            <p>Breakout</p>
                        </Timeline.Item>
                        <Timeline.Item time="4:00 PM EST - 4:15 PM EST">
                            <p>Lightning Talk 1</p>
                        </Timeline.Item>
                        <Timeline.Item time="4:15 PM EST - 4:30 PM EST">
                            <p>Lightning Talk 2</p>
                        </Timeline.Item>
                        <Timeline.Item time="4:30 PM EST - 4:45 PM EST">
                            <p>Lightning Talk 3</p>
                        </Timeline.Item>
                        <Timeline.Item time="4:45 PM EST - 5:00 PM EST">
                            <p>Closing Keynote</p>
                        </Timeline.Item>
                        <Timeline.Item />
                    </Timeline>
                </div>
            </div>
        </div>
    )
}