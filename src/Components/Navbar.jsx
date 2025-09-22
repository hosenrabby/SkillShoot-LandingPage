'use client'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { CiUser } from 'react-icons/ci';

const Navbar = () => {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const links = <>
        <li className={`text-xl text-gray-100 hover:text-[#CB8461] hover:scale-105 transition  ${isScrolled && 'text-white md:text-gray-500'}`}>
            <Link href={'/'}>Home</Link>
        </li>
        <li className={`text-xl text-gray-100 hover:text-[#CB8461] hover:scale-105 transition ${isScrolled && 'text-white md:text-gray-500'}`}>
            <Link href={'/'}>Course</Link>
        </li>
        <li className={`text-xl text-gray-100 hover:text-[#CB8461] hover:scale-105 transition ${isScrolled && 'text-white md:text-gray-500'}`}>
            <Link href={'/'}>Subscribe</Link>
        </li>
        <li className={`text-xl text-gray-100 hover:text-[#CB8461] hover:scale-105 transition ${isScrolled && 'text-white md:text-gray-500'}`}>
            <Link href={'/'}>About</Link>
        </li>
        <li className={`text-xl text-gray-100 hover:text-[#CB8461] hover:scale-105 transition ${isScrolled && 'text-white md:text-gray-500'}`}>
            <Link href={'/'}>Testimoni</Link>
        </li>
    </>
    return (
        <>
            <div className={`sticky top-4 z-1000 transition-colors duration-300`}>
                <div className={`navbar w-11/12 mx-auto px-4 py-5
            ${isScrolled ? 'bg-white/90 shadow-md rounded-lg' : pathname == '/' ? 'bg-white/0' : 'bg-white'}`}>
                    <div className="navbar-start">
                        <div>
                            <Link className='flex items-center gap-2' href={'/'}>
                                <p className={`noto-sans font-bold text-2xl md:text-3xl md:inline ${isScrolled ? 'text-gray-600' : 'text-white'}`}>Skill<span className='font-bold text-[#CB8461]'> Shoot</span></p>
                            </Link>
                        </div>
                    </div>

                    <div className="navbar-center pe-4 hidden lg:flex">
                        <ul className="menu-horizontal space-x-4">
                            {links}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <div className='flex justify-between items-center gap-3'>
                            <div className='hidden md:block'>
                                <Link href={'/'}>
                                    <button className={`text-gray-100 hover:text-gray-800 hover:scale-105 transition  pr-4 flex items-center gap-2 cursor-pointer ${isScrolled && 'text-gray-500'}`}><CiUser /> Login</button>
                                </Link>
                            </div>
                            <div className='space-x-2 hidden md:block'>
                                <Link href={'/'}>
                                    <button className={`py-2 px-4 transition rounded-md text-white bg-[#CB8461] border border-[#CB8461] cursor-pointer hover:bg-[#eb8856]`}>
                                        Register
                                    </button>
                                </Link>
                            </div>
                        </div>
                        {/* hidden menu */}
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-base-content">
                                <Image src="/navigationIcon.png" alt='navIcon' className={`${isScrolled && 'bg-gray-600'}`} width={30} height={300} />
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-[#286054] rounded-box z-[100] mt-3 w-52 p-2 shadow right-0" >
                                {links}
                            </ul>
                        </div>
                    </div>
                </div>
                {
                    isScrolled || <div className='w-full faded-divider'></div>
                }
            </div>
        </>

    );
};

export default Navbar;