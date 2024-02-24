import React from "react";
import { Pagination, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { speakers } from "../../static/content";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Speakers(): JSX.Element {
    return (
        <div
            style={{
                background: `#039876`
            }}
            className="py-6 overflow-x-hidden"
        >
            <div className="pb-12">
                <div className="lg:mx-auto w-full md:mx-[1.5rem]">
                    <h1 className="text-2xl font-bold text-white text-center">
                        Speakers
                    </h1>
                    <div className="md:hidden">
                        <Swiper
                            modules={[EffectCoverflow, Pagination]}
                            effect={'coverflow'}
                            loop={false}
                            spaceBetween={30}
                            slidesPerView={"auto"}
                            pagination={{
                                clickable: true,
                            }}
                            centeredSlides={true}
                            grabCursor={true}
                            coverflowEffect={{
                                rotate: 0,
                                slideShadows: false,
                            }}
                            className="coverflow"
                        >
                            {speakers.map((speaker, index) => {
                                return (
                                    <SwiperSlide key={index} style={{width: "90%"}}>
                                        <div className="bg-white mx-6 md:mx-12 rounded-lg mt-16 grid md:grid-cols-2">
                                            <div className="flex items-center justify-center">
                                                <img src={speaker.image} alt={speaker.name} className="h-1/2 " />
                                            </div>
                                            <div>
                                                <h1 className='text-2xl font-bold text-center mt-3'>{speaker.name}</h1>
                                                <div className="p-4">
                                                    <p>{speaker.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </div>
                    <div className="hidden md:block">
                        <Swiper
                            modules={[EffectCoverflow, Pagination]}
                            effect={'coverflow'}
                            loop={false}
                            spaceBetween={30}
                            slidesPerView={"auto"}
                            pagination={{
                                clickable: true,
                            }}
                            centeredSlides={true}
                            grabCursor={true}
                            coverflowEffect={{
                                rotate: 0,
                                slideShadows: false,
                            }}
                            className="coverflow"
                        >
                            {speakers.map((speaker, index) => {
                                return (
                                    <SwiperSlide key={index} style={{width: "50%"}}>
                                        <div className="bg-white mx-6 md:mx-12 rounded-lg mt-16 grid md:grid-cols-2">
                                            <div className="flex items-center justify-center">
                                                <img src={speaker.image} alt={speaker.name} className="h-1/2 " />
                                            </div>
                                            <div>
                                                <h1 className='text-2xl font-bold text-center mt-3'>{speaker.name}</h1>
                                                <div className="p-4">
                                                    <p>{speaker.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}