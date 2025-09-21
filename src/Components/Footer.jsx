import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const links = <>
    <li className={`text-md text-gray-100 hover:text-[#CB8461] hover:scale-105 transition`}>
        <Link href={'/'}>Home</Link>
    </li>
    <li className={`text-md text-gray-100 hover:text-[#CB8461] hover:scale-105 transition`}>
        <Link href={'/'}>Course</Link>
    </li>
    <li className={`text-md text-gray-100 hover:text-[#CB8461] hover:scale-105 transition`}>
        <Link href={'/'}>Subscribe</Link>
    </li>
    <li className={`text-md text-gray-100 hover:text-[#CB8461] hover:scale-105 transition`}>
        <Link href={'/'}>About</Link>
    </li>
    <li className={`text-md text-gray-100 hover:text-[#CB8461] hover:scale-105 transition`}>
        <Link href={'/'}>Testimoni</Link>
    </li>
</>
const Footer = () => {
    return (
        <>
            <div className='text-center md:text-normal py-10 bg-[#286054] relative'>

                <div className='absolute right-7 top-3/6 md:right-1/5 md:top-2/5'>
                    <Image src="/Group162529.png" alt="Group" width={100} height={100} />
                </div>
                <div className='absolute left-7 top-4/6 md:left-1/5 md:top-2/3'>
                    <Image src="/Vector15.png" alt="vector" width={80} height={80} />
                </div>
                <footer className="footer footer-horizontal footer-center mt-28">
                    <div>
                        <h1 className='text-4xl my-4 text-white'>Subscribe to get notified about update</h1>
                        <p className='text-gray-200 mb-4'>By subscribing with your mail, you will accept our privacy policy</p>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center w-full">
                        <input className="px-3 py-4 w-2/3 md:w-4/12 rounded-sm bg-[#396D62] border-none text-white" placeholder="Enter your Email" />
                        <button className={`py-3.5 px-6 transition rounded-sm font-semibold text-white bg-[#CB8461] border border-[#CB8461] cursor-pointer hover:bg-[#eb8856]`}>
                            Register
                        </button>
                    </div>
                </footer >

                <div className={`flex flex-col-reverse md:flex-row items-center justify-between gap-5 md:w-11/12 mx-auto px-4 py-5 mt-8 mb-6`}>
                    <div className="mt-8 md:mt-0">
                        <Link className='flex items-center gap-2' href={'/'}>
                            <p className='noto-sans font-bold text-xl text-white md:inline'>Skill<span className='font-bold text-[#CB8461]'> Shoot</span></p>
                        </Link>
                    </div>

                    <div className="pe-4 lg:flex">
                        <ul className="menu-vertical space-y-4 md:menu-horizontal space-x-4 md:space-x-0">
                            {links}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;