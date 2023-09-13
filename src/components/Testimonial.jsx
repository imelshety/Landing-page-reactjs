import React from 'react'
// import Motion
import { motion } from 'framer-motion'
// import variants
import { fadeIn } from '../variants'
const Testimonial = () => {
    const blogs = [
        { id: 1, title: 'Creating Streamlined Safeguarding Processes with OneRen', image: "/assets/blog1.png" },
        { id: 2, title: 'What are your safeguarding responsibilities and how can you manage them?', image: "/assets/blog2.png" },
        { id: 3, title: 'Revamping the Membership Model with Triathlon Australia', image: "/assets/blog3.png" }

    ]
    return (
        <div className='max-w-screen-2xl mx-auto px-4 lg:px-14 my-12 pb-12' id='testimonial'>
            <motion.div
                variants={fadeIn("left", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className='flex flex-col justify-center items-center'>
                <h2 className='text-NeutralDGrey text-3xl md:text-5xl font-semibold text-center mb-8'>Caring is the new marketing</h2>
                <p className='text-neutralGrey text-sm text-center leading-8 md:w-1/2'>The Nexcent blog is the best place to read about the latest membership insights, trends and more.
                    See whos joining the community, read about how our community are increasing their membership income and lots.</p>
            </motion.div>

            <motion.div
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-between mt-12'>
                {blogs.map((blog) =>
                    <div key={blog.id} className='mx-auto mb-12 relative cursor-pointer'>
                        <img src={blog.image} alt={blog.id} className='hover:scale-95 transition-all duration-300' />
                        <div className=' md:w-3/4 bg-neutralWhite text-center px-4 py-8 rounded-md  mx-auto absolute left-0 right-0 -bottom-14 shadow-xl hover:scale-95 transition-all duration-300'>
                            <h4 className='text-NeutralDGrey font-semibold mb-3'>{blog.title}</h4>
                            <button className=' text-brandPrimary py-1 px-2 mx-auto flex rounded hover:bg-brandPrimary hover:text-neutralWhite transition-all duration-300 hover:translate-y-3'>
                                Read More
                                <span className='ml-3'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                    </svg>
                                </span>
                            </button></div>
                    </div>
                )}
            </motion.div>
        </div >
    )
}

export default Testimonial