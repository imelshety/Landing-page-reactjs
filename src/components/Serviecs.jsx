import React from 'react'
// import Motion
import { motion } from 'framer-motion'
// import variants
import { fadeIn } from '../variants'

const Serviecs = () => {
    const cards = [
        { id: 1, title: 'Membership Organisations', desc: 'Our membership management software provides full automation of membership renewals and payments', image: '/src/assets/service1.png' },
        { id: 2, title: 'National Associations ', desc: 'Our membership management software provides full automation of membership renewals and payments', image: '/src/assets/service2.png' },
        { id: 3, title: 'Membership Organisations', desc: 'Our membership management software provides full automation of membership renewals and payments', image: '/src/assets/service3.png' }

    ]
    return (
        <div className='px-4 py-16 md:px-14 w-full mx-auto' id='services'>
            <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className='text-center my-8'>
                <h2 className='text-NeutralBlack text-3xl md:text-4xl font-semibold mb-2'>Our Clients</h2>
                <p className='text-neutralGrey'>We have been working with some Fortune 500+ clients</p>
                {/* Our logos */}
                <div className='my-12 flex justify-between'>
                    <img src="/src/assets/logo-company/company1.png" alt="company-1" />
                    <img src="/src/assets/logo-company/company2.png" alt="company-2" />
                    <img src="/src/assets/logo-company/company3.png" alt="company-3" />
                    <img src="/src/assets/logo-company/company4.png" alt="company-4" />
                    <img src="/src/assets/logo-company/company5.png" alt="company-5" />
                    <img src="/src/assets/logo-company/company6.png" alt="company-6" />
                    <img src="/src/assets/logo-company/company7.png" alt="company-7" />

                </div>
            </motion.div>
            <motion.div
                variants={fadeIn("left", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className='text-center mt-20 w-1/2 mx-auto'>
                <h2 className='text-NeutralBlack text-2xl md:text-4xl font-semibold mb-2 leading-8 py-4'>Manage your entire community in a single system</h2>
                <p className='text-neutralGrey'>Who is Nextcent suitable for?</p>
            </motion.div>
            <motion.div
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className='mt-14 mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 gap-12'>

                {cards.map(card =>
                    <div key={card.id} className='h-full text-center px-4 py-8 mx-auto md:w-[300px] md:h-80 flex items-center justify-center rounded-md shadow cursor-pointer hover:translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300'>
                        <div>
                            <div className='bg-[#E8F5E9] h-14 w-14 mb-4 mx-auto rounded-tl-3xl rounded-br-3xl'>
                                <img src={card.image} alt={cards.title} className='ml-2' />
                            </div>
                            <h4 className='text-2xl font-bold text-neutralGrey px-2 mb-2'>{card.title}</h4>
                            <p className='text-sm text-neutralGrey leading-3'>{card.desc}</p>

                        </div>
                    </div>
                )}

            </motion.div>
        </div>
    )
}

export default Serviecs