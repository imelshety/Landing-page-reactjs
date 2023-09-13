import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.svg';
import arrow from '../assets/Down.svg';
import { Link } from 'react-scroll';
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    // set toggle menu
    const toggle = () => setIsMenuOpen(!isMenuOpen);
    useEffect(() => {
        const handleScroll = () => {
            window.scrollY > 100 ? setIsSticky(true) : setIsSticky(false);

        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.addEventListener('scroll', handleScroll);

        }
    })
    // navItems array
    const navItems = [
        { link: "Home", path: "home" },
        { link: "Services", path: "services" },
        { link: "About", path: "about" },
        { link: "Product", path: "product" },
        { link: "Testimonial", path: "testimonial" },
        { link: "FAQ", path: "footer" }
    ]
    return (
        <header className='w-full bg-neutralWhite fixed top-0 left-0 right-0'>
            <nav className={`py-4 ${isSticky ? "top-0 left-0 right-0 border-b bg-neutralWhite" : ""}`}>
                <div className='flex justify-between items-center gap-8'>
                    <a href="/"
                        className='text-2xl font-semibold flex space-x-3' >
                        <img src={logo} alt="Logo" className='w-10 inline-block' />
                        <span className='text-BrandSecondary'>NEXCENT</span>
                    </a>

                    {/* nav items for large screen */}
                    <ul className='hidden md:flex space-x-12'>
                        {navItems.map(({ link, path }) =>
                            <Link to={path} key={path} spy={true} offset={-100} smooth={true} className='text-NeutralDGrey hover:text-brandPrimary cursor-pointer' >{link}</Link>)}
                    </ul>
                    {/* btn for large screen */}
                    <div className='space-x-4 hidden md:flex items-center mt-2'>
                        <button className=' text-NeutralDGrey border-2 bg-neutralWhite text-md p-1 rounded flex justify-center items-center lg:p-3 lg:text-xl transition hover:bg-brandPrimary hover:text-neutralWhite'>
                            <span>Login</span>
                        </button>
                        <button className=' text-neutralWhite border-2 bg-brandPrimary text-md p-1 rounded flex justify-center items-center lg:p-3 lg:text-xl  transition hover:bg-neutralWhite hover:text-brandPrimary '>
                            <span>SignUp</span>
                        </button>
                    </div>
                    {/* show brn in  mobile device  */}
                    <div className="md:hidden text-neutraDlGrey focus:outline-none focus:text-gray-500">
                        <button onClick={toggle}>
                            {isMenuOpen ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
                            </svg>
                                : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path fillRule="evenodd" d="M3 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 5.25zm0 4.5A.75.75 0 013.75 9h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                                </svg>

                            }
                        </button>
                    </div>
                </div>
                {/* nav items for mobile screen */}
                <div className={`space-y-5 flex flex-col mt-10 bg-brandPrimary rounded ${isMenuOpen ? "block fixed top-5 left-0 right-0 " : "hidden"}`}>
                    {navItems.map(({ link, path }) =>
                        <Link to={path} key={path} spy={true} offset={-100} smooth={true} className='text-neutralWhite hover:text-NeutralDGrey cursor-pointer ' >{link}</Link>)}
                </div>
            </nav>
        </header >
    )
}

export default Navbar