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
        title: "Basics of learning team management",
        teacher: "Jone Owel",
        role: "IT Manager",
        participants: 120,
        price: 120,
        videos: 25,
        img: "/slide1.png",
    },
    {
        id: 2,
        title: "Basics of learning team management",
        teacher: "Jone Owel",
        role: "IT Manager",
        participants: 120,
        price: 120,
        videos: 25,
        img: "/slide1.png",
    },
    {
        id: 3,
        title: "Basics of learning team management",
        teacher: "Jone Owel",
        role: "IT Manager",
        participants: 120,
        price: 120,
        videos: 25,
        img: "/slide1.png",
    },
    {
        id: 4,
        title: "Basics of learning team management",
        teacher: "Jone Owel",
        role: "IT Manager",
        participants: 120,
        price: 120,
        videos: 25,
        img: "/slide1.png",
    },
    {
        id: 5,
        title: "Basics of learning team management",
        teacher: "Jone Owel",
        role: "IT Manager",
        participants: 120,
        price: 120,
        videos: 25,
        img: "/slide1.png",
    },
];
export default function PopularCourses() {
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
                        <SwiperSlide>
                            <div className="card bg-base-100 w-10/12 shadow-sm">
                                <figure className='relative'>
                                    <div className='absolute right-[0%] top-[0%] md:left-[41%] md:top-[40%]'>
                                        <img src={"/PlayButtonIcone.png"} className="w-18" />
                                    </div>
                                    <img src={data.img} alt="" className='w-full' />
                                </figure>
                                <div className="card-body">
                                    <h2 className="text-2xl font-semibold">{data.title}</h2>
                                    <div className='flex justify-between items-center'>
                                        <div className='flex items-center gap-5 mt-8 mb-6'>
                                            <img src="/CEO.png" alt="" className="w-10 md:w-12" />
                                            <div className='text-start'>
                                                <h3 className='text-md text-black font-semibold '>{data.teacher}</h3>
                                                <p className='text-sm text-gray-500'>{data.role}</p>
                                            </div>
                                        </div>
                                        <div className='flex items-center gap-5 mt-8 mb-6'>
                                            <img src="/userIcone.png" alt="" className="w-10" />
                                            <div className='text-start'>
                                                <h3 className='text-md text-black font-semibold '>{data.participants}</h3>
                                                <p className='text-sm text-gray-500'>Participant</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-between items-center bg-gray-100 px-4'>
                                    <div className='flex items-center gap-5 mt-8 mb-6'>
                                        <button className={`py-3 px-5 transition rounded-md font-semibold text-white bg-[#286054] border border-[#286054] cursor-pointer hover:bg-[#194e43]`}>
                                            Buy Now
                                        </button>
                                    </div>
                                    <div className='flex items-center gap-5 mt-8 mb-6'>
                                        <span className='text-3xl font-bold'>${data.price}</span><span><span className='text-md'>/ {data.videos} Videos</span></span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </>
    );
}
