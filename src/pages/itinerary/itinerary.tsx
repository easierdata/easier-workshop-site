import { Timeline } from 'rsuite'
import 'rsuite/Timeline/styles/index.css';
import 'rsuite/dist/rsuite.min.css';

export default function Itinerary(): JSX.Element {
    return (
        <div
            style={{
                background: `#039876`
            }}
            className=""
            id="itinerary"
        >
            <div className='mx-6 md:mx-12 bg-white rounded-lg p-6'>
                <h1 className='text-4xl font-bold text-center select-none'>Tentative Itinerary</h1>
                <div className="grid md:grid-cols-2">
                    <div className='mb-6'>
                        <h1 className='text-center text-2xl font-bold mb-6 select-none'>April 3rd</h1>
                        <Timeline className='mb-6'>
                            <Timeline.Item time="9:30 AM EST - 9:45 AM EST">
                                <p className="text-lg">Welcome & Introduction</p>
                            </Timeline.Item>
                            <Timeline.Item time="9:45 AM EST - 10:15 AM EST">
                                <p className="text-lg">Carson Farmer (Textile) - From maps, to bits, & beyond: Bringing together open geospatial science and the decentralized web</p>
                            </Timeline.Item>
                            <Timeline.Item time="10:15 AM EST - 10:45 AM EST">
                                <p className="text-lg">Rachel Opitz (Open Geospatial Consortium) - The OGC Open Science Persistent Demonstrator: Designing a distibuted platform for standards-based geospatial open science workflows</p>
                            </Timeline.Item>
                            <Timeline.Item time="10:45 AM EST - 11:15 AM EST">
                                <p className="text-lg">Coffee & Networking Break</p>
                            </Timeline.Item>
                            <Timeline.Item time="11:15 AM EST - 11:45 AM EST">
                                <p className="text-lg">Volker Mische (Protocol Labs) - Content-addressing: chances for data distribution and verifiable data pipelines</p>
                            </Timeline.Item>
                            <Timeline.Item time="11:45 AM EST - 12:00 PM EST">
                                <p className="text-lg">Brynn O'Donnell (The Filecoin Foundation for the Decentralized Web) - Filecoin Foundation for the Decentralized Web: Preserving humanity's most important information resiliently</p>
                            </Timeline.Item>
                            <Timeline.Item time="12:00 PM EST - 1:00 PM EST">
                                <p className="text-lg">Lunch Break</p>
                            </Timeline.Item>
                            <Timeline.Item time="1:00 PM EST - 1:15 PM EST">
                                <p className="text-lg">Eric Olson (Center for Open Science) - Title TBD</p>
                            </Timeline.Item>
                            <Timeline.Item time="1:15 PM EST - 1:30 PM EST">
                                <p className="text-lg">Juan Fernando Martinez (Columbia University) - Embracing Open Science Principles in Data Science: Opportunities, Challenges, and Beyond</p>
                            </Timeline.Item>
                            <Timeline.Item time="1:30 PM EST - 2:00 PM EST">
                                <p className="text-lg">Erik Van Winkle (DeSci Labs) - Experimentation on digitally native publication: dPIDs, research objects and attestations</p>
                            </Timeline.Item>
                            <Timeline.Item time="2:00 PM EST - 2:30 PM EST">
                                <p className="text-lg">Discussion Session I</p>
                            </Timeline.Item>
                            <Timeline.Item time="2:30 PM EST - 3:00 PM EST">
                                <p className="text-lg">Coffee & Networking Break</p>
                            </Timeline.Item>
                            <Timeline.Item time="3:00 PM EST - 3:30 PM EST">
                                <p className="text-lg">TBD</p>
                            </Timeline.Item>
                            <Timeline.Item time="3:30 PM EST - 4:00 PM EST">
                                <p className="text-lg">Christopher Tucker (GeoRobotix) - Title TBD</p>
                            </Timeline.Item>
                            <Timeline.Item time="4:00 PM EST - 4:30 PM EST">
                                <p className="text-lg">Ryan King (FOAM.space) - The Importance of Time Synchronization</p>
                            </Timeline.Item>
                            <Timeline.Item time="4:30 PM EST - 5:00 PM EST">
                                <p className="text-lg">Discussion Section II</p>
                            </Timeline.Item>
                            <Timeline.Item time="6:00 PM EST - 7:00 PM EST">
                                <p className="text-lg">Group Dinner at <a href="https://www.gmxumd.com" target='_blank' rel="noreferrer">Grillmarkx</a></p>
                            </Timeline.Item>
                            <Timeline.Item />
                        </Timeline>
                    </div>
                    <div className='mb-6'>
                        <h1 className='text-center text-2xl font-bold mb-6 select-none'>April 4th</h1>
                        <Timeline className='mb-6'>
                            <Timeline.Item time="9:30 AM EST - 10:00 AM EST">
                                <p className="text-lg">Shayna Solis (Navteca) - Making Geospatial and Scientific Data More Accessible through AI and XR Technologies</p>
                            </Timeline.Item>
                            <Timeline.Item time="10:00 AM EST - 10:30 AM EST">
                                <p className="text-lg">Ziheng Sun (George Mason Univesity) - Open Science need to be Tangible and Productive: Example of Geoweaver and Earth AI Workflows</p>
                            </Timeline.Item>
                            <Timeline.Item time="10:30 AM EST - 11:00 AM EST">
                                <p className="text-lg">Anna Burzykowska (European Space Agency) - DLT for Earth Obervation: use cases for data management and applications</p>
                            </Timeline.Item>
                            <Timeline.Item time="11:00 AM EST - 11:20 AM EST">
                                <p className="text-lg">Coffee & Networking Break</p>
                            </Timeline.Item>
                            <Timeline.Item time="11:20 AM EST - 11:40 AM EST">
                                <p className="text-lg">Discussion</p>
                            </Timeline.Item>
                            <Timeline.Item time="11:40 AM EST - 11:55 PM EST">
                                <p className="text-lg">Zheng Liu (The University of Maryland) - Spatial querying on IPFS with discrete global grids</p>
                            </Timeline.Item>
                            <Timeline.Item time="11:55 AM EST - 12:10 PM EST">
                                <p className="text-lg">Matthew Nanas (The University of Maryland) - Geospatial Dashboard Demo</p>
                            </Timeline.Item>
                            <Timeline.Item time="12:10 PM EST - 12:25 PM EST">
                                <p className="text-lg">Danny Gattas (Astral) - Title TBD</p>
                            </Timeline.Item>
                            <Timeline.Item time="12:25 PM EST - 12:40 PM EST">
                                <p className="text-lg">Jefferson Sankara (The Filecoin Foundation for the Decentralized Web) - Building planetary-scale applications on Filecoin</p>
                            </Timeline.Item>
                            <Timeline.Item time="12:40 PM EST - 1:00 PM EST">
                                <p className="text-lg">Final Remarks</p>
                            </Timeline.Item>
                            <Timeline.Item time="1:00 PM EST - 2:00 PM EST">
                                <p className="text-lg">Lunch</p>
                            </Timeline.Item>
                            <Timeline.Item />
                        </Timeline>
                    </div>
                </div>
                <p className='text-center font-bold select-none'>*Itinerary is subject to change as logistics are confirmed*</p>
            </div>
        </div>
    )
}