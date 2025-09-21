import React from 'react';
import Banner from './Home/Banner';
import Link from 'next/link';
import Image from 'next/image';

const page = () => {
  return (
    <div className='min-h-screen'>
      <Banner></Banner>

      <section className='w-10/12 md:w-6/12 mx-auto space-y-10 my-10 mt-16'>
        <div className='text-center'>
          <h1 className='text-xl md:text-4xl font-semibold'>Trusted more than <span className='text-[#CB8461]'>100+</span> in the world</h1>
          <p className='mt-6 px-0 md:px-60 text-sm md:text-lg text-gray-500 leading-7'>they have asked us more than 3 times to teach their employees about various things. to improve their skills</p>
        </div>
        <div className='flex justify-around items-center flex-wrap gap-4'>
          <span> <img src="/ubar.png" className="w-18 md:w-28" /> </span>
          <span> <img src="/google.png" className="w-18 md:w-28" /> </span>
          <span> <img src="/paypal.png" className="w-18 md:w-28" /> </span>
          <span> <img src="/msoft.png" className="w-18 md:w-28" /> </span>
          <span> <img src="/drible.png" className="w-18 md:w-28" /> </span>
        </div>
      </section>
      {/* first section end*/}

      <section className='mt-0 mb-4 md:mt-40 w-full md:w-10/12 mx-auto'>
          <div className="bg-[#F2E7DB] rounded-xl flex md:flex-row justify-between gap-5 w-10/12 mx-auto relative">
            <div className='absolute right-0 bottom-0 md:right-0 md:bottom-0'>
              <img src="/victorCircleRC.png" className="w-16" />
            </div>
            <div className='absolute left-0 top-0 md:left-0 md:top-0'>
              <img src="/victorCirclelc.png" className="w-16" />
            </div>
            <div className='absolute hidden md:block left-[56%] top-[26%]'>
              <img src="/squarBox1.png" className="w-12" />
            </div>
            <div className='absolute hidden md:block right-[12%] top-[26%]'>
              <img src="/squarBox2.png" className="w-12" />
            </div>
            <div className='absolute hidden md:block right-[14%] bottom-[10%]'>
              <img src="/squarBox3.png" className="w-12" />
            </div>
            <div className='absolute hidden md:block left-[60%] bottom-[12%]'>
              <img src="/circle.png" className="w-8" />
            </div>


            <div className='w-full md:w-6/12 ms-0 md:ms-8 px-6 py-14 md:py16 md:px-14 items-center text-center md:text-start'>
              <div>
                <h1 className="text-xl md:text-4xl font-semibold text-gray-900 leading-8 md:leading-12">Happy <span className='text-[#CB8461]'>Chinese New Year</span>, 20% discount for you today</h1>
              </div>
              <div className='mt-8 flex flex-col md:flex-row justify-center items-center md:justify-start gap-4'>
                <Link href={'/'}>
                  <button className={`flex items-center gap-4 py-4 px-8 transition rounded-md font-semibold text-white bg-[#286054] border border-[#286054] cursor-pointer hover:bg-[#194e43]`}>
                    Subscribe Course
                  </button>
                </Link>
              </div>
            </div>
            <div className='-mt-[140px] w-5/12 ms-auto hidden md:block'>
              <Image src="/childBoy.png" className="" width={300} height={300} />
            </div>
          </div>
      </section>
    </div>
  );
};

export default page;