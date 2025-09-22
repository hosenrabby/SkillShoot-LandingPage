import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const courses = [
    {
        id: 1,
        user: "/testiUser1.png",
        name: "Jason Bay",
        feedbk: "I am quite satisfied, because the skills I want or dream of can really be mastered",
    },
    {
        id: 2,
        user: "/testiUser2.png",
        name: "Nany Brugman",
        feedbk: "I am quite satisfied, because the skills I want or dream of can really be mastered",
    },
    {
        id: 3,
        user: "/testiUser3.png",
        name: "Alexa Nowan",
        feedbk: "I am quite satisfied, because the skills I want or dream of can really be mastered",
    },
    {
        id: 4,
        user: "/testiUser2.png",
        name: "Nany Brugman",
        feedbk: "I am quite satisfied, because the skills I want or dream of can really be mastered",
    },
    {
        id: 5,
        user: "/testiUser3.png",
        name: "Alexa Nowan",
        feedbk: "I am quite satisfied, because the skills I want or dream of can really be mastered",
    },
];
export default function Testimoni() {
    return (
        <>
            <Swiper
                modules={[Navigation]}
                spaceBetween={24}
                loop={true} // infinite loop
                breakpoints={{
                    0: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="mySwiper"
            >
                {
                    courses.map(data =>
                        <SwiperSlide key={data.id}>
                            <div className='flex flex-col justify-center items-center gap-4 p-8 rounded-xl transition-all duration-200 hover:bg-white hover:shadow-xl hover:border-b-3 hover:border-[#286054]'>
                                <div className='flex flex-col gap-5'>
                                    <img src={data.user} alt="" className='w-18'/>
                                    <img src="star.png" alt="" className='w-20'/>
                                </div>
                                <h1 className='text-xl text-gray-800 font-semibold'>{data.name}</h1>
                                <p className='text-md px-10 text-center text-gray-700'>{data.feedbk}</p>
                            </div>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </>
    );
}
