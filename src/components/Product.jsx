import React from 'react'

const Product = () => {
    return (
        <>
            <div className='max-w-screen-2xl px-4 lg:px-14 mx-auto my-8 flex flex-col md:flex-row items-center justify-center'>
                <div className='md:w-11/12 flex flex-col justify-center items-center md:flex-row gap-12'>
                    <div>
                        <img src="/src/assets/product1.png" alt="about-image" />
                    </div>
                    <div className='md:w-3/5 mx-auto'>
                        <h2 className='text-4xl font-semibold text-NeutralDGrey mb-4 md:w-4/5'>How to design your site footer like we did</h2>
                        <p className='md:w-3/4 text-sm text-neutralGrey mb-8'>Donec a eros justo.
                            Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna.
                            Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus.
                            In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa.
                            Praesent felis est, finibus et nisi ac,
                            hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                        <button className='btn-primary'>Learn More</button>
                    </div>
                </div>
            </div>
            <div className='bg-neutralSilver py-16 max-w-screen-2xl px-4 lg:px-14 mx-auto my-8 flex flex-col md:flex-row justify-around'>
                <div className='md:w-1/2 mx-auto mb-8'>
                    <img src="/src/assets/product2.png" alt="product2" className='' />
                </div>
                <div className='flex flex-col justify-center items-start md:w-1/2'>
                    <p className=' text-sm text-neutralGrey leading-7 mb-8'>Maecenas dignissim justo eget nulla rutrum molestie.
                        Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare,
                        tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie,
                        nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales.
                        Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien,
                        vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id.
                        Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                    <span className='text-brandPrimary font-light text-2xl mb-4'>Tim Smith</span>
                    <p className='text-sm text-[#89939E] mb-8'>British Dragon Boat Racing Association</p>

                    <div className='space-y-8 space-x-8 flex flex-col md:flex-row justify-center items-center md:w-1/4 lg:w-11/12'>
                        <img src="/src/assets/icon1product.svg" alt="1" className='ml-5 md:mt-8 md:ml-0' />
                        <img src="/src/assets/icon2product.svg" alt="2" />
                        <img src="/src/assets/icon3product.svg" alt="3" />
                        <img src="/src/assets/icon4product.svg" alt="4" />
                        <img src="/src/assets/icon5product.svg" alt="5" />
                        <img src="/src/assets/icon6product.svg" alt="6" />
                        <button className=' text-brandPrimary text-sm py-2 mt-8 flex rounded border hover:bg-brandPrimary hover:text-neutralWhite transition-all duration-300 hover:translate-y-3'>
                            Meet All Cutstomers
                            <span className='ml-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                            </span>
                        </button>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Product