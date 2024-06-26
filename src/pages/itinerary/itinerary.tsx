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
                <h1 className='text-4xl font-bold text-center select-none'>Itinerary</h1>
                <div className="grid md:grid-cols-2">
                    <div className='mb-6'>
                        <h1 className='text-center text-2xl font-bold mb-6 select-none'>April 3rd</h1>
                        <Timeline className='mb-6'>
                            <Timeline.Item time="9:30 AM EST - 9:45 AM EST">
                                <p className="text-lg">Welcome & Introduction</p>
                            </Timeline.Item>
                            <Timeline.Item time="9:45 AM EST - 10:15 AM EST">
                                <p className="text-lg">
                                    <a href="https://youtu.be/cvFqQVAAsjA" target='_blank' rel="noreferrer">Carson Farmer (Textile) - From maps, to bits, & beyond: Bringing together open geospatial science and the decentralized web</a>
                                </p>
                            </Timeline.Item>
                            <Timeline.Item time="10:15 AM EST - 10:45 AM EST">
                                <p className="text-lg">
                                    <a href="https://youtu.be/DGe0nHLFlpI" target='_blank' rel="noreferrer">
                                        Volker Mische (Independent Researcher) - Content-addressing: chances for data distribution and verifiable data pipelines
                                    </a>
                                </p>
                            </Timeline.Item>
                            <Timeline.Item time="10:45 AM EST - 11:15 AM EST">
                                <p className="text-lg">Coffee & Networking Break</p>
                            </Timeline.Item>
                            <Timeline.Item time="11:15 AM EST - 11:45 AM EST">
                                <p className="text-lg">
                                    <a href="https://youtu.be/62aTsZ9dJCw" target='_blank' rel="noreferrer">
                                        Rachel Opitz (Open Geospatial Consortium) - The OGC Open Science Persistent Demonstrator: Designing a distibuted platform for standards-based geospatial open science workflows
                                    </a>
                                </p>
                            </Timeline.Item>
                            <Timeline.Item time="11:45 AM EST - 12:00 PM EST">
                                <p className="text-lg">Brynn O'Donnell (The Filecoin Foundation for the Decentralized Web) - Filecoin Foundation for the Decentralized Web: Preserving humanity's most important information resiliently</p>
                            </Timeline.Item>
                            <Timeline.Item time="12:00 PM EST - 1:00 PM EST">
                                <p className="text-lg">Lunch Break</p>
                            </Timeline.Item>
                            <Timeline.Item time="1:00 PM EST - 1:30 PM EST">
                                <p className="text-lg">
                                    <a href="https://youtu.be/8mXqX4FYElM" target='_blank' rel="noreferrer">
                                        Juan Fernando Martinez (Columbia University) - Embracing Open Science Principles in Data Science: Opportunities, Challenges, and Beyond
                                    </a>
                                </p>
                            </Timeline.Item>
                            <Timeline.Item time="1:30 PM EST - 1:45 PM EST">
                                <p className="text-lg">
                                    <a href="https://youtu.be/QU5nTS6vsu0" target="_blank" rel="noreferrer">
                                        Eric Olson (Center for Open Science) - Crossing the Chasm: Enabling Communities to Scale and Sustain Open Science
                                    </a>
                                </p>
                            </Timeline.Item>
                            <Timeline.Item time="1:45 PM EST - 2:15 PM EST">
                                <p className="text-lg">Erik Van Winkle (DeSci Labs) - Experimentation on digitally native publication: dPIDs, research objects and attestations</p>
                            </Timeline.Item>
                            <Timeline.Item time="2:15 PM EST - 2:45 PM EST">
                                <p className="text-lg">Discussion Session I</p>
                            </Timeline.Item>
                            <Timeline.Item time="2:45 PM EST - 3:15 PM EST">
                                <p className="text-lg">Coffee & Networking Break</p>
                            </Timeline.Item>
                            <Timeline.Item time="3:15 PM EST - 3:30 PM EST">
                                <a href="https://youtu.be/Jl57vu5kWjY" target='_blank' rel="noreferrer">
                                    <p className="text-lg">Douglas Rao (NC State University) - Community-driven Approach to Achieve AI-Ready Open Environmental Data</p>
                                </a>
                            </Timeline.Item>
                            <Timeline.Item time="3:30 PM EST - 4:00 PM EST">
                                <a href="https://youtu.be/0hOuwTlPo88" target="_blank" rel="noreferrer">
                                    <p className="text-lg">Christopher Tucker (GeoRobotix) - OGC API: Connected Systems Standard and OpenSensorHub in Enabling a Decentralized Web of Systems</p>
                                </a>
                            </Timeline.Item>
                            <Timeline.Item time="4:00 PM EST - 4:30 PM EST">
                                <a href='https://youtu.be/l7DmUwDNUlU' target='_blank' rel="noreferrer">
                                    <p className="text-lg">Ryan King (FOAM.space) - The Importance of Time Synchronization</p>
                                </a>
                            </Timeline.Item>
                            <Timeline.Item time="4:30 PM EST - 5:00 PM EST">
                                <p className="text-lg">Discussion Section II</p>
                            </Timeline.Item>
                            <Timeline.Item time="6:30 PM EST - 7:30 PM EST">
                                <p className="text-lg">Group Dinner at <a href="https://www.gmxumd.com" target='_blank' rel="noreferrer">Grillmarx</a></p>
                            </Timeline.Item>
                            <Timeline.Item />
                        </Timeline>
                    </div>
                    <div className='mb-6'>
                        <h1 className='text-center text-2xl font-bold mb-6 select-none'>April 4th</h1>
                        <Timeline className='mb-6'>
                            <Timeline.Item time="9:30 AM EST - 10:00 AM EST">
                                <a href="https://youtu.be/S9PTdtYx29Q" target="_blank" rel="noreferrer">
                                    <p className="text-lg">Shayna Solis (Navteca) - Making Geospatial and Scientific Data More Accessible through AI and XR Technologies</p>
                                </a>
                            </Timeline.Item>
                            <Timeline.Item time="10:00 AM EST - 10:30 AM EST">
                                <a href="https://youtu.be/lDiDCyXn_iI" target="_blank" rel="noreferrer">
                                    <p className="text-lg">Ziheng Sun (George Mason Univesity) - Open Science need to be Tangible and Productive: Example of Geoweaver and Earth AI Workflows</p>
                                </a>
                            </Timeline.Item>
                            <Timeline.Item time="10:30 AM EST - 11:00 AM EST">
                                <a href="https://youtu.be/R5y7F73rBL0" target="_blank" rel="noreferrer">
                                    <p className="text-lg">Anna Burzykowska (European Space Agency) - DLT for Earth Obervation: use cases for data management and applications</p>
                                </a>
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
                                <a href="https://youtu.be/GTjkzf6I1EQ" target="_blank" rel="noreferrer">
                                    <p className="text-lg">Matthew Nanas (The University of Maryland) - Geospatial Dashboard Demo</p>
                                </a>
                            </Timeline.Item>
                            <Timeline.Item time="12:10 PM EST - 12:25 PM EST">
                                <a href="https://youtu.be/BdaYPeTB1uo" target="_blank" rel="noreferrer">
                                    <p className="text-lg">Danny Gattas (Astral) - Enabling development of location based DApps</p>
                                </a>
                            </Timeline.Item>
                            <Timeline.Item time="12:25 PM EST - 12:40 PM EST">
                                <p className="text-lg">Jefferson Sankara (The Filecoin Foundation for the Decentralized Web) - Building planetary-scale applications on Filecoin</p>
                            </Timeline.Item>
                            <Timeline.Item time="12:40 PM EST - 1:00 PM EST">
                                <p className="text-lg">Final Remarks</p>
                            </Timeline.Item>
                            <Timeline.Item time="1:00 PM EST - 1:45 PM EST">
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