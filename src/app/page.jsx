'use client'
import React from 'react';
import Banner from './Home/Banner';
import Link from 'next/link';
import Image from 'next/image';
import PopularCourses from './Home/PopularCourses';
import Testimoni from './Home/Testimoni';

const page = () => {
  return (
    <div className='min-h-screen'>
      <Banner></Banner>

      <section className='w-10/12 md:w-6/12 mx-auto space-y-10 my-10 mt-16'>
        <div className='text-center'>
          <h1 className='text-2xl md:text-4xl font-semibold'>Trusted more than <span className='text-[#CB8461]'>100+</span> in the world</h1>
          <p className='mt-6 px-0 md:px-60 text-md md:text-lg text-gray-500 leading-7'>they have asked us more than 3 times to teach their employees about various things. to improve their skills</p>
        </div>
        <div className='flex justify-around items-center flex-wrap gap-4'>
          <span> <img src="/ubar.png" className="w-18 md:w-28" /> </span>
          <span> <img src="/google.png" className="w-18 md:w-28" /> </span>
          <span> <img src="/paypal.png" className="w-18 md:w-28" /> </span>
          <span> <img src="/msoft.png" className="w-18 md:w-28" /> </span>
          <span> <img src="/drible.png" className="w-18 md:w-28" /> </span>
        </div>
      </section>
      {/* first section end ================================*/}

      <section className='mt-0 md:mt-40 w-full md:w-11/12 mx-auto'>
        <div className="bg-[#F2E7DB] rounded-xl flex md:flex-row justify-between gap-5 w-11/12 mx-auto relative">
          <div className='absolute right-0 bottom-0 md:right-0 md:bottom-0'>
            <img src="/victorCircleRC.png" className="w-16" />
          </div>
          <div className='absolute left-0 top-0 md:left-0 md:top-0'>
            <img src="/victorCirclelc.png" className="w-16" />
          </div>
          <div className='absolute hidden md:block left-[60%] top-[26%]'>
            <img src="/squarBox1.png" className="w-12" />
          </div>
          <div className='absolute hidden md:block right-[12%] top-[26%]'>
            <img src="/squarBox2.png" className="w-12" />
          </div>
          <div className='absolute hidden md:block right-[14%] bottom-[14%]'>
            <img src="/squarBox3.png" className="w-12" />
          </div>
          <div className='absolute hidden md:block left-[63%] bottom-[11%]'>
            <img src="/circle.png" className="w-8" />
          </div>


          <div className='w-full md:w-6/12 ms-0 md:ms-8 px-6 py-14 md:py16 md:px-14 items-center text-center md:text-start'>
            <div>
              <h1 className="text-xl md:text-4xl font-semibold text-gray-900 leading-8 md:leading-12">Happy <span className='text-[#CB8461]'>Chinese New Year</span>, 20% <br />discount for you today</h1>
            </div>
            <div className='mt-8 flex flex-col md:flex-row justify-center items-center md:justify-start gap-4'>
              <Link href={'/'}>
                <button className={`py-4 px-8 transition rounded-md font-semibold text-white bg-[#286054] border border-[#286054] cursor-pointer hover:bg-[#194e43]`}>
                  Subscribe Course
                </button>
              </Link>
            </div>
          </div>
          <div className='-mt-[140px] w-7/19 ms-auto hidden md:block'>
            <Image src="/childBoy.png" className="" width={300} height={300} />
          </div>
        </div>
      </section>
      {/* Second section end=========================*/}
      <section className='mt-12 md:mt-40 w-full md:w-10/12 mx-auto flex flex-col md:flex-row justify-between gap-6'>
        <div className='text-center md:text-start w-full md:w-4/12'>
          <h1 className='text-2xl md:text-4xl font-semibold mb-8'>Why do we <span className='text-[#CB8461]'>exist?</span></h1>
          <p className='mt-6 px-6 md:px-2 text-md md:text-lg text-gray-500 leading-8'>Because we know that many people or companies have the same problem when it comes to how difficult it is to improve their skills.</p>
          {/*================== ceo card =================== */}
          <div className='flex flex-col items-center md:items-start'>
            <div className='flex items-center gap-5 mt-8 mb-6'>
              <img src="/CEO.png" alt="" className="w-14 md:w-16" />
              <div className='text-start'>
                <h3 className='text-lg text-black font-semibold '>Jerony Pulquosta</h3>
                <p className='text-sm text-gray-500'>CEO Skill Shoot</p>
              </div>
            </div>
            <div className='bg-gray-400 h-0.5 my-4 md:my-7 w-8/12 md:w-full'></div>

            <div className='flex items-center gap-14'>
              <div>
                <h1 className='text-xl md:text-4xl font-bold mb-4'>100+</h1>
                <p className='px-0 text-sm md:text-md text-gray-500 leading-8'>Updated Material</p>
              </div>
              <div>
                <h1 className='text-xl md:text-4xl font-bold mb-4'>15K</h1>
                <p className='px-0 text-sm md:text-md text-gray-500 leading-8'>Member Join</p>
              </div>
            </div>
          </div>
          {/*================== ceo card end =================== */}
        </div>

        <div className='w-full md:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10'>
          <div className='flex flex-col items-center md:items-start w-8/12 md:w-9/12 mx-auto md:ms-0'>
            <div>
              <img src="/shape1.png" alt="" className="w-12 md:w-14 mb-5" />
            </div>
            <div>
              <h1 className='text-center md:text-start text-lg md:text-2xl text-[#286054] font-semibold'>Material Limitations</h1>
              <p className='mt-4 text-center md:text-start text-sm md:text-lg text-gray-500 leading-7'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
          {/* Card 2=============== */}
          <div className='flex flex-col items-center md:items-start w-8/12 md:w-9/12 mx-auto md:ms-0'>
            <div>
              <img src="/shape2.png" alt="" className="w-12 md:w-14 mb-5" />
            </div>
            <div>
              <h1 className='text-center md:text-start text-lg md:text-2xl text-[#286054] font-semibold'>Unprofessional Mentor</h1>
              <p className='mt-4 text-center md:text-start text-sm md:text-lg text-gray-500 leading-7'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
          {/* Card 3=============== */}
          <div className='flex flex-col items-center md:items-start w-8/12 md:w-9/12 mx-auto md:ms-0'>
            <div>
              <img src="/shape3.png" alt="" className="w-12 md:w-14 mb-5" />
            </div>
            <div>
              <h1 className='text-center md:text-start text-lg md:text-2xl text-[#286054] font-semibold'>Video Quality</h1>
              <p className='mt-4 text-center md:text-start text-sm md:text-lg text-gray-500 leading-7'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
          {/* Card 4=============== */}
          <div className='flex flex-col items-center md:items-start w-8/12 md:w-9/12 mx-auto md:ms-0'>
            <div>
              <img src="/shape4.png" alt="" className="w-12 md:w-14 mb-5" />
            </div>
            <div>
              <h1 className='text-center md:text-start text-lg md:text-2xl text-[#286054] font-semibold'>High Price</h1>
              <p className='mt-4 text-center md:text-start text-sm md:text-lg text-gray-500 leading-7'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>

        </div>
      </section>
{/* Third section end ===================== */}
      <section className='mt-12 md:mt-20 bg-[#286054] relative pb-12'>
        <div className='absolute left-[3%] top-[4%] md:left-[18%] md:top-[14%]'>
          <img src="/squarBox2.png" className="w-12" />
        </div>
        <div className='absolute right-[4%] top-[5%] md:right-[15%] md:top-[7%]'>
          <img src="/circle.png" className="w-8" />
        </div>

        <div className='w-full md:w-10/12 mx-auto'>
          <h1 className='text-center text-2xl md:text-4xl text-white font-semibold mb-8 pt-20'>Popular courses of the week</h1>
          <p className='mt-4 mb-6 px-4 md:px-72 text-center text-sm md:text-lg text-gray-300 leading-8'>List of the most popular lists that are often studied by our members Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, blanditiis.</p>
          <div className='relative'>
            <div className='absolute left-[2%] top-[36%] md:left-[1%] md:top-[41%] bg-gray-200 rounded-full hover:bg-[#286054] z-50 cursor-pointer'>
              <img src="/slideArrow.png" className="w-12 p-1" />
            </div>
            <div className='absolute right-[1%] top-[36%] md:right-[1%] md:top-[41%] bg-gray-200 rounded-full hover:bg-[#286054] z-50 rotate-180 cursor-pointer'>
              <img src="/slideArrow.png" className="w-12 p-1" />
            </div>
            <PopularCourses></PopularCourses>
          </div>
        </div>
      </section>
    {/* forth section end ===================== */}
      <section className='mt-12 md:mt-20 px-8 md:px-20 w-full md:w-10/12 mx-auto flex flex-col md:flex-row justify-between gap-6'>
        <div className='hidden md:block relative'>
          <div className='absolute hidden md:block right-[4%] top-[73%]'>
            <img src="/lateUsCard.png" className="w-48" />
          </div>
          <div className='absolute right-[7%] top-[20%] md:right-[6%] md:top-[20%]'>
            <img src="/bannerPan.png" className="w-14" />
          </div>
          <div className='absolute -right-[5%] -bottom-[2%] md:left-[7%] md:top-[14%]'>
            <img src="/bannerPlayBtn.png" className="w-14" />
          </div>
          <div className="absolute left-[4%] bottom-[4%] md:left-[0%] md:top-[54%]">
            <img src="/bannerclnder.png" className="w-14" />
          </div>
          <div className='ps-10 bg-[url(/halfCircle.png)] bg-bottom bg-no-repeat'>
            <img src="/person.png" alt="" />
          </div>
        </div>
        <div className='w-full md:w-6/12 relative'>
          <div className='absolute right-[32%] top-[7%] md:left-[17%] md:top-[8%]'>
            <img src="/bannerUnderline.png" className="w-36 md:w-40" />
          </div>

          <h1 className='text-3xl md:text-4xl font-bold mb-8'>Let us <span className='text-[#286054]'>Skill Shoot</span></h1>
          <p className='mt-6 pe-0 md:pe-28 text-md md:text-lg text-gray-500 leading-8'>We are a company engaged in education with the aim of improving the skills of many people and so that younger people can reach the career paths they want.</p>
          <p className='mt-6 pe-0 md:pe-28 text-md md:text-lg text-gray-500 leading-8'>we have been around since 2019 with currently 100+ updated materials and 15K members who have joined.</p>
          <div className='grid grid-cols-2'>
            <div className='flex items-center gap-5 mt-8 mb-6'>
              <img src="/lateUsIcone1.png" alt="" className="w-10 md:w-16" />
              <div className='text-start'>
                <h3 className='text-sm md:text-lg text-black font-semibold '>15k People Join</h3>
              </div>
            </div>
            <div className='flex items-center gap-5 mt-8 mb-6'>
              <img src="/lateUsIcone2.png" alt="" className="w-10 md:w-16" />
              <div className='text-start'>
                <h3 className='text-sm md:text-lg text-black font-semibold '>Trusted Mentor</h3>
              </div>
            </div>
            <div className='flex items-center gap-5 mt-8 mb-6'>
              <img src="/lateUsIcone3.png" alt="" className="w-10 md:w-16" />
              <div className='text-start'>
                <h3 className='text-sm md:text-lg text-black font-semibold '>30+ Free Videos</h3>
              </div>
            </div>
            <div className='flex items-center gap-5 mt-8 mb-6'>
              <img src="/lateUsIcone4.png" alt="" className="w-10 md:w-16" />
              <div className='text-start'>
                <h3 className='text-sm md:text-lg text-black font-semibold '>100+ Premium Videos</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* fifth section end ===================== */}
      <section className='mt-12 md:mt-20 w-full md:w-11/12 mx-auto'>
        <div className="bg-[#F2E7DB] rounded-xl flex flex-col md:flex-row justify-around items-center gap-5 w-11/12 mx-auto relative py-16">
          <div className='absolute left-0 top-0 md:left-0 md:top-0'>
            <img src="/victorCirclelc.png" className="w-16" />
          </div>
          <div className='absolute right-[-4%] bottom-[30%] md:right-[44%] md:bottom-[-5%]'>
            <img src="/squarBox2.png" className="w-12" />
          </div>

          <div className='w-full md:w-5/12 ms-0 md:ms-8 px-6 py-14 md:py16 md:px-14 items-center text-center md:text-start'>
            <div>
              <h1 className="text-xl md:text-4xl font-semibold text-gray-900 leading-8 md:leading-12"><span className='text-[#CB8461]'>Improve </span>your skills, and reach your career as soon as possible</h1>
            </div>
          </div>

          <div className='flex flex-col md:flex-row justify-center items-center md:justify-start gap-4'>
            <Link href={'/'}>
              <button className={`py-4 px-8 transition rounded-md font-semibold text-white bg-[#CB8461] border border-[#CB8461] cursor-pointer hover:bg-[#194e43]`}>
                Join Now
              </button>
            </Link>
            <Link href={'/'}>
              <button className={`py-4 px-8 transition rounded-md font-semibold text-white bg-[#286054] border border-[#286054] cursor-pointer hover:bg-[#194e43]`}>
                Subscribe Course
              </button>
            </Link>
          </div>
        </div>
      </section>
{/* Pricing plan section ============================ */}
      <section className='mt-12 md:mt-20 w-11/12 md:w-7/12 mx-auto'>
        <h1 className='text-center text-2xl md:text-4xl text-black font-semibold mb-8 pt-20'><span className='text-[#CB8461]'>Subscribe</span> with us now</h1>
        <p className='mt-4 mb-6 px-4 md:px-72 text-center text-sm md:text-lg text-gray-600 leading-8'>by subscribing now you will be able to access the material easily and cheaply, so you will be very efficient and benefit.</p>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto mt-10'>
          <div className="card bg-white order-1 md:order-none">
            <div className="card-body">
              <div className="flex flex-col justify-between">
                <div>
                  <span className="text-2xl font-bold">$50</span><span className='text-sm font-extralight'>/ 1 month</span>
                </div>
                <h2 className="text-3xl font-bold my-2">Base</h2>
                <p className='text-md font-extralight text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat neque iusto voluptates corporis quibusdam velit.</p>
              </div>
              <ul className="mt-6 flex flex-col gap-4 text-xm">
                <li className='flex items-center gap-3'>
                  <img src="/check-circle-1.png" alt="" className='w-4' />
                  <span>Access all videos</span>
                </li>
                <li className='flex items-center gap-3'>
                  <img src="/check-circle-1.png" alt="" className='w-4' />
                  <span>Get Certificate</span>
                </li>
                <li className='flex items-center gap-3'>
                  <img src="/check-circle-1.png" alt="" className='w-4' />
                  <span>Chat support</span>
                </li>
                <li className='flex items-center gap-3'>
                  <img src="/check-circle-1.png" alt="" className='w-4' />
                  <span>Update Notification</span>
                </li>
                <li className="opacity-50 flex items-center gap-3">
                  <img src="/check-circle-1.png" alt="" className='w-4' />
                  <span className="line-through">Download material</span>
                </li>
                <li className="opacity-50 flex items-center gap-3">
                  <img src="/check-circle-1.png" alt="" className='w-4' />
                  <span className="line-through">Real-time collaboration tools</span>
                </li>
              </ul>
              <div className="mt-6 text-center">
                <Link href={'/'}>
                  <button className={`py-2 w-full transition rounded-full font-semibold text-[#CB8461] bg-[#FFFAF8] border border-[#FFFAF8] cursor-pointer hover:bg-[#CB8461] hover:text-white`}>
                    Join Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="card bg-[#194e43] mt-0 md:-mt-3.5 rounded-3xl shadow-2xl shadow-green-900 order-0 md:order-none">
            <div className="card-body">
              <div className='flex justify-end items-center'>
                <span className="badge badge-md bg-[#CB8461] border-none rounded-full text-white">Most Popular</span>
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <span className="text-2xl text-white font-bold">$100</span><span className='text-sm text-white font-extralight'>/ 6 month</span>
                </div>
                <h2 className="text-3xl text-white font-bold my-2">Pro</h2>
                <p className='text-md font-extralight text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat neque iusto voluptates corporis quibusdam velit.</p>
              </div>
              <ul className="mt-6 flex flex-col gap-4 text-xm text-white">
                <li className='flex items-center gap-3'>
                  <img src="/check-circle-2.png" alt="" className='w-4' />
                  <span>Access all videos</span>
                </li>
                <li className='flex items-center gap-3'>
                  <img src="/check-circle-2.png" alt="" className='w-4' />
                  <span>Get Certificate</span>
                </li>
                <li className='flex items-center gap-3'>
                  <img src="/check-circle-2.png" alt="" className='w-4' />
                  <span>Chat support</span>
                </li>
                <li className='flex items-center gap-3'>
                  <img src="/check-circle-2.png" alt="" className='w-4' />
                  <span>Update Notification</span>
                </li>
                <li className="flex items-center gap-3">
                  <img src="/check-circle-2.png" alt="" className='w-4' />
                  <span>Download material</span>
                </li>
                <li className="flex items-center gap-3">
                  <img src="/check-circle-2.png" alt="" className='w-4' />
                  <span>Real-time collaboration tools</span>
                </li>
              </ul>
              <div className="mt-6 text-center">
                <Link href={'/'}>
                  <button className={`py-2 w-full transition rounded-full font-semibold text-[#FFFAF8] bg-[#CB8461] border border-[#CB8461] cursor-pointer hover:bg-[#FFFAF8] hover:text-[#CB8461]`}>
                    Join Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="card bg-white order-2 md:order-none">
            <div className="card-body">
              <div className="flex flex-col justify-between">
                <div>
                  <span className="text-2xl font-bold">$200</span><span className='text-sm font-extralight'>/ 12 month</span>
                </div>
                <h2 className="text-3xl font-bold my-2">Enterprise</h2>
                <p className='text-md font-extralight text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat neque iusto voluptates corporis quibusdam velit.</p>
              </div>
              <ul className="mt-6 flex flex-col gap-4 text-xm">
                <li className='flex items-center gap-3'>
                  <img src="/check-circle-1.png" alt="" className='w-4' />
                  <span>Access all videos</span>
                </li>
                <li className='flex items-center gap-3'>
                  <img src="/check-circle-1.png" alt="" className='w-4' />
                  <span>Get Certificate</span>
                </li>
                <li className='flex items-center gap-3'>
                  <img src="/check-circle-1.png" alt="" className='w-4' />
                  <span>Chat support</span>
                </li>
                <li className='flex items-center gap-3'>
                  <img src="/check-circle-1.png" alt="" className='w-4' />
                  <span>Update Notification</span>
                </li>
                <li className="flex items-center gap-3">
                  <img src="/check-circle-1.png" alt="" className='w-4' />
                  <span>Download material</span>
                </li>
                <li className="flex items-center gap-3">
                  <img src="/check-circle-1.png" alt="" className='w-4' />
                  <span>Real-time collaboration tools</span>
                </li>
              </ul>
              <div className="mt-6 text-center">
                <Link href={'/'}>
                  <button className={`py-2 w-full transition rounded-full font-semibold text-[#CB8461] bg-[#FFFAF8] border border-[#FFFAF8] cursor-pointer hover:bg-[#CB8461] hover:text-white`}>
                    Join Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* Testimonial section ================ */}
      <section className='mt-12 md:mt-20 pb-12 bg-gray-100/50'>
        <div className='w-full md:w-7/12 mx-auto'>
          <h1 className='text-center text-2xl md:text-4xl text-black font-semibold pt-20'>What do they <span className='text-[#CB8461]'>say?</span></h1>
          <p className='mt-4 mb-6 px-4 md:px-72 text-center text-sm md:text-lg text-gray-600 leading-8'>This is an honest review from members who have joined us</p>
          <div className='relative mb-16'>
            <div className='absolute left-[42%] top-[100%] md:left-[45%] md:top-[102%] bg-base-100 rounded-full hover:bg-[#CB8461] z-50 cursor-pointer'>
              <img src="/arrow.png" className="w-8 md:w-12" />
            </div>
            <div className='absolute right-[42%] top-[100%] md:right-[46%] md:top-[102%] bg-base-100 rounded-full hover:bg-[#CB8461] z-50 rotate-180 cursor-pointer'>
              <img src="/arrow.png" className="w-8 md:w-12" />
            </div>
            <Testimoni></Testimoni>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;