import React from 'react'
// import Motion
import { motion } from 'framer-motion'
// import variants
import { fadeIn } from '../variants'
const About = () => {
    return (
        <div id='about'>
            <div className='max-w-screen-2xl px-4 lg:px-14 mx-auto my-8 flex flex-col md:flex-row items-center justify-center'>
                <div className='md:w-11/12 flex flex-col justify-center items-center md:flex-row gap-12'>
                    <motion.div
                        variants={fadeIn("right", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                    >
                        <img src="/assets/about.png" alt="about-image" />
                    </motion.div>
                    <motion.div
                        variants={fadeIn("left", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                        className='md:w-3/5 mx-auto'>
                        <h2 className='text-4xl font-semibold text-NeutralDGrey mb-4 md:w-4/5'>The unseen of spending three years at Pixelgrade</h2>
                        <p className='md:w-3/4 text-sm text-neutralGrey mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum.
                            Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis.
                            Nullam pulvinar sit amet risus pretium auctor
                            . Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                        <button className='btn-primary'>Learn More</button>
                    </motion.div>
                </div>
            </div>
            <div className='bg-neutralSilver py-16 max-w-screen-2xl px-4 lg:px-14 mx-auto my-8'>
                <div className='flex flex-col md:flex-row justify-center items-center'>
                    <motion.div
                        variants={fadeIn("right", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                        className='md:w-1/2'>
                        <h2 className='text-4xl font-semibold text-NeutralDGrey mb-4 md:w-2/3'>Helping a local <span className='text-brandPrimary'>business reinvent itself</span></h2>
                        <p className=' text-sm text-neutralGrey mb-8'>We reached here with our hard work and dedication.</p>
                    </motion.div>
                    <motion.div
                        variants={fadeIn("left", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                        className='md:w-1/2'>
                        <div className='grid sm:grid-cols-1 md:grid-cols-2'>
                            <div className='flex space-x-5'>
                                <img src="/assets/Icon-about1.png" alt="about-1" className='w-12 h-12' />
                                <div>
                                    <h3 className='text-2xl text-NeutralDGrey font-semibold mb-2'>2,245,341</h3>
                                    <p className='text-sm text-neutralGrey mb-4'>Members</p>
                                </div>
                            </div>
                            <div className='flex space-x-5'>
                                <img src="/assets/Icon-about2.png" alt="about-2" className='w-12 h-12' />
                                <div>
                                    <h3 className='text-2xl text-NeutralDGrey font-semibold mb-2'>46,328</h3>
                                    <p className='text-sm text-neutralGrey mb-4'>Clubs</p>
                                </div>
                            </div>
                            <div className='flex space-x-5'>
                                <img src="/assets/Icon-about3.png" alt="about-3" className='w-12 h-12' />
                                <div>
                                    <h3 className='text-2xl text-NeutralDGrey font-semibold mb-2'>828,867</h3>
                                    <p className='text-sm text-neutralGrey mb-4'>Event Bookings</p>
                                </div>
                            </div>
                            <div className='flex space-x-5'>
                                <img src="/assets/Icon-about4.png" alt="about-4" className='w-12 h-12' />
                                <div>
                                    <h3 className='text-2xl text-NeutralDGrey font-semibold mb-2'>1,926,436</h3>
                                    <p className='text-sm text-neutralGrey mb-4'>Payments</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>

    )
}

export default About