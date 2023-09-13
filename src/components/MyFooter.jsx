import React from 'react'
import { Footer } from 'flowbite-react';
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import logo from '../assets/logo.svg';
// import Motion
import { motion } from 'framer-motion'
// import variants
import { fadeIn } from '../variants'

const MyFooter = () => {
    return (
        <Footer container id='footer' className='bg-[#263238]'>
            <div className="w-full mx-auto">
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                    <motion.dev
                        variants={fadeIn("right", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                        className='space-y-8 mb-8 ml-5'>
                        <a href="/"
                            className='text-2xl font-semibold flex space-x-3' >
                            <img src={logo} alt="Logo" className='w-10 inline-block' />
                            <span className='text-neutralWhite'>NEXCENT</span>
                        </a>
                        <div >
                            <p className='text-neutralWhite font-semibold text-sm'>Copyright &#128525; 2023 Mohamed Elshety  &#128151;</p>
                            <p className='text-neutralWhite font-semibold text-sm'>All rights reserved</p>

                        </div>
                        <div className='flex mt-8'>
                            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                                <Footer.Icon
                                    href="#"
                                    icon={BsFacebook}
                                    className='text-neutralWhite hover:text-indigo-500 transition-all duration-300'
                                />
                                <Footer.Icon
                                    href="#"
                                    icon={BsInstagram}
                                    className='text-neutralWhite hover:text-orange-500 transition-all duration-300'
                                />
                                <Footer.Icon
                                    href="#"
                                    icon={BsTwitter}
                                    className='text-neutralWhite hover:text-blue-500 transition-all duration-300'

                                />
                                <Footer.Icon
                                    href="#"
                                    icon={BsGithub}
                                    className='text-neutralWhite hover:text-teal-300 transition-all duration-300'

                                />
                            </div>
                        </div>

                    </motion.dev>
                    <motion.dev
                        variants={fadeIn("left", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                        className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                        <div>
                            <Footer.Title title="Company" className='text-neutralWhite' />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">
                                    About us
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Blog
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Contact us
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Pricing
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Testimonials
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title=" Support" className='text-neutralWhite' />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">
                                    Help center
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Terms of service
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Legal
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Privacy policy
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Status
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Stay up to date" className='text-neutralWhite' />
                            <input type="email" required className='w-64 h-10 rounded-xl' placeholder='Your Email address' />
                        </div>
                        {/*  */}
                    </motion.dev>
                </div>

            </div>
        </Footer>
    )
}

export default MyFooter