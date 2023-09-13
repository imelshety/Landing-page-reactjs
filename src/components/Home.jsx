import { Carousel } from 'flowbite-react'
import banner1 from '/assets/banner1.png'
import React from 'react'
// import Motion
import { motion } from 'framer-motion'
// import variants
import { fadeIn } from '../variants'
const Home = () => {
    return (

        <div className='bg-neutralSilver' id='home'>
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto h-screen'>
                <Carousel className='w-full mx-auto'>
                    {/* start slide one */}
                    <div className="py-12 my-28 md:my-8 flex flex-col md:flex-row-reverse justify-between items-center gap-12">
                        <div>
                            <img src={banner1} alt="banner-1" />
                        </div>
                        <div className='md:w-1/2 mx-auto'>
                            <h1 className='text-5xl font-semibold text-NeutralDGrey mb-5 md:w-3/4 leading-snug'>Lessons and insights
                                <span className='text-brandPrimary leading-snug'>from 8 years</span>
                            </h1>
                            <p className='text-neutralGrey text-base mb-8'>Where to grow your business as a photographer: site or social media?</p>
                            <button className='btn-primary'>Register</button>
                        </div>
                    </div>
                    {/* start slide Two */}
                    <div className="py-12 my-28 md:my-8 flex flex-col md:flex-row-reverse justify-between items-center gap-12">
                        <div>
                            <img src={banner1} alt="banner-1" />
                        </div>
                        <div className='md:w-1/2 mx-auto'>
                            <h1 className='text-5xl font-semibold text-NeutralDGrey mb-5 md:w-3/4 leading-snug'>Learn and Earn Money
                                <span className='text-brandPrimary leading-snug'> in 4 years</span>
                            </h1>
                            <p className='text-neutralGrey text-base mb-8'>Where to grow your business as a photographer: site or social media?</p>
                            <button className='btn-primary'>Register</button>
                        </div>
                    </div>
                    {/* start slide three */}
                    <div className="py-12 my-28 md:my-8 flex flex-col md:flex-row-reverse justify-between items-center gap-12">
                        <div>
                            <img src={banner1} alt="banner-1" />
                        </div>
                        <div className='md:w-1/2 mx-auto'>
                            <h1 className='text-5xl font-semibold text-NeutralDGrey mb-5 md:w-3/4 leading-snug'>Lessons and insights
                                <span className='text-brandPrimary leading-snug'>from 8 years</span>
                            </h1>
                            <p className='text-neutralGrey text-base mb-8'>Where to grow your business as a photographer: site or social media?</p>
                            <button className='btn-primary'>Register</button>
                        </div>
                    </div>
                </Carousel>

            </div>
        </div>
    )
}

export default Home