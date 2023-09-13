import React from 'react'

const NewsLetter = () => {
    return (
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16'>
            <div>
                <h1 className='text-3xl md:text-4xl lg:text-5xl text-[#263238] font-semibold text-center mb-4 lg:leading-snug'>Pellentesque suscipit fringilla libero eu.</h1>
            </div>
            <div>
                <button className=' bg-brandPrimary text-neutralWhite py-5 px-5 mt-8 mx-auto flex rounded transition-all duration-300 hover:translate-y-3'>
                    Read More
                    <span className='ml-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                    </span>
                </button>
            </div>
        </div>
    )
}

export default NewsLetter