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
            id="itinerary"
        >
            <div className='mx-6 md:mx-12 bg-white rounded-lg p-6'>
                <h1 className='text-4xl font-bold text-center'>Tentative Itinerary</h1>
                <div className="grid md:grid-cols-2">
                    <div className='mb-6'>
                        <h1 className='text-center text-2xl font-bold mb-6'>April 3rd</h1>
                        <Timeline className='mb-6'>
                            <Timeline.Item time="9:15 AM EST - 9:30 AM EST">
                                <p className="text-lg">Welcome & Introduction</p>
                            </Timeline.Item>
                            <Timeline.Item time="9:30 AM EST - 10:00 AM EST">
                                <p className="text-lg">Carson Farmer (Textile): Title TDB</p>
                            </Timeline.Item>
                            <Timeline.Item time="10:00 AM EST - 10:30 AM EST">
                                <p className="text-lg">Rachel Opitz (Open Geospatial Consortium): Title TDB</p>
                            </Timeline.Item>
                            <Timeline.Item time="10:30 AM EST - 11:00 AM EST">
                                <p className="text-lg">Coffee & Networking Break</p>
                            </Timeline.Item>
                            <Timeline.Item time="11:00 AM EST - 12:00 PM EST">
                                <p className="text-lg">Lightning Talk Session I</p>
                            </Timeline.Item>
                            <Timeline.Item time="12:00 PM EST - 12:30 PM EST">
                                <p className="text-lg">Discussion Session I</p>
                            </Timeline.Item>
                            <Timeline.Item time="12:30 PM EST - 1:30 PM EST">
                                <p className="text-lg">Lunch Break</p>
                            </Timeline.Item>
                            <Timeline.Item time="1:30 PM EST - 2:00 PM EST">
                                <p className="text-lg">Sudhir Shrestha (NOAA): Title TBD</p>
                            </Timeline.Item>
                            <Timeline.Item time="2:00 PM EST - 3:00 PM EST">
                                <p className="text-lg">Lightning Talk Session II</p>
                            </Timeline.Item>
                            <Timeline.Item time="3:00 PM EST - 3:30 PM EST">
                                <p className="text-lg">Coffee & Networking Break</p>
                            </Timeline.Item>
                            <Timeline.Item time="3:30 PM EST - 4:00 PM EST">
                                <p className="text-lg">Speaker TBD</p>
                            </Timeline.Item>
                            <Timeline.Item time="4:00 PM EST - 5:00 PM EST">
                                <p className="text-lg">Discussion Session II</p>
                            </Timeline.Item>
                            <Timeline.Item time="6:00 PM EST">
                                <p className="text-lg">Group Dinner</p>
                            </Timeline.Item>
                            <Timeline.Item />
                        </Timeline>
                    </div>
                    <div className='mb-6'>
                        <h1 className='text-center text-2xl font-bold mb-6'>April 4th</h1>
                        <Timeline className='mb-6'>
                            <Timeline.Item time="9:30 AM EST - 10:00 AM EST">
                                <p className="text-lg">Erik van Winkle (DeSci Labs): Title TDB</p>
                            </Timeline.Item>
                            <Timeline.Item time="10:00 AM EST - 11:00 AM EST">
                                <p className="text-lg">Lightning Talk Session III</p>
                            </Timeline.Item>
                            <Timeline.Item time="11:00 AM EST - 11:30 AM EST">
                                <p className="text-lg">11:00-11:30 Coffee & Networking Break</p>
                            </Timeline.Item>
                            <Timeline.Item time="11:30 AM EST - 12:00 PM EST">
                                <p className="text-lg">Ziheng Sun (George Mason University): Title TBD</p>
                            </Timeline.Item>
                            <Timeline.Item time="12:00 PM EST - 1:00 PM EST">
                                <p className="text-lg">Discussion Session III</p>
                            </Timeline.Item>
                            <Timeline.Item time="1:00 PM EST - 2:00 PM EST">
                                <p className="text-lg">Lunch & Farewell</p>
                            </Timeline.Item>
                            <Timeline.Item />
                        </Timeline>
                    </div>
                </div>
                <p className='text-center font-bold'>*Itinerary is subject to change as logistics are confirmed*</p>
            </div>
        </div>
    )
}