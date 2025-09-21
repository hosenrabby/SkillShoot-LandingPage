import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { GoArrowUpRight } from "react-icons/go";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter, FaDiscord } from "react-icons/fa";
const Banner = () => {
    return (
        <>
            <div className="bg-[#286054] -mt-22 min-h-[700px]">
                <div className=" flex md:flex-row justify-between gap-5 pt-30 w-10/12 mx-auto relative">
                    <div className='absolute right-[10%] top-[32%] md:left-[15%] md:top-[30%]'>
                        <img src="/bannerUnderline.png" className="w-36" />
                    </div>
                    <div className='absolute hidden md:block right-[25%] top-[60%]'>
                        <img src="/bannerCard.png" className="" />
                    </div>
                    <div className='absolute -left-[7%] top-[20%] md:left-[68%] md:top-[30%]'>
                        <img src="/bannerPan.png" className="w-12 md:w-16" />
                    </div>
                    <div className='absolute -right-[5%] -bottom-[5%] md:right-[5%] md:top-[42%]'>
                        <img src="/bannerPlayBtn.png" className="w-12 md:w-16" />
                    </div>
                    <div className="absolute left-[4%] bottom-[4%] md:left-auto md:right-[2%] md:top-[81%]">
                        <img src="/bannerclnder.png" className="w-12 md:w-16" />
                    </div>


                    <div className='w-full md:w-6/12 ms-0 md:ms-8 mt-10 items-center text-center md:text-start'>
                        <div>
                            <h1 className="text-4xl md:text-6xl font-bold text-white leading-14 md:leading-22">There is always <br /> something new for <br />us to learn</h1>
                        </div>
                        <p className="py-6 text-xl pe-0 md:pe-60 text-gray-400 leading-10">
                            we have created more than 100+ materials on various things that will help your career, with mentors who are experienced in their fields.
                        </p>
                        <div className='space-x-2 mt-6 flex flex-col md:flex-row justify-center items-center md:justify-start gap-4'>
                            <Link className='' href={'/'}>
                                <button className={`flex items-center gap-4 py-2 px-4 transition rounded-md font-semibold text-white bg-[#CB8461] border border-[#CB8461] cursor-pointer hover:bg-[#eb8856]`}>
                                    Start Journey <GoArrowUpRight />
                                </button>
                            </Link>
                            <div className='text-white flex items-center gap-4'>
                                <Link href={'/'} className='cursor-pointer'>
                                    <span className='text-3xl md:text-4xl'><AiFillInstagram /></span>
                                </Link>
                                <Link href={'/'} className='cursor-pointer'>
                                    <span className='text-3xl md:text-4xl'><FaTwitter /></span>
                                </Link>
                                <Link href={'/'} className='cursor-pointer'>
                                    <span className='text-3xl md:text-4xl'><FaDiscord /></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='mt-10 w-4/12 ms-auto hidden md:block'>
                        <Image src="/bannerImgRight.png" className="" width={500} height={500} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;