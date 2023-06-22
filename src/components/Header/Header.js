import React, { useState } from 'react';
import logo from '../../assets/images/logo.svg';
import hamburger from '../../assets/images/icon-menu.svg'
import close from '../../assets/images/icon-menu-close.svg'

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className='flex flex-row justify-between lg:pt-0'>
            <img src={logo} alt="logo" className='cursor-pointer' />

            {isOpen && <div onClick={() => setIsOpen(false)} className='fixed inset-0 bg-black opacity-50 z-10'></div>}

            <nav className={`transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} 
                             w-4/6 fixed right-0 top-0 h-full bg-white transition-transform duration-200 ease-in-out z-20
                             flex flex-col items-start space-y-4 p-8 pt-36 font-inter font-normal text-base text-very-dark-blue lg:relative lg:translate-x-0 lg:w-auto lg:flex-row lg:justify-between lg:pb-0 lg:pt-2 lg:space-x-8 lg:space-y-0 lg:bg-transparent`}>
                
                <button className='hover:text-soft-red'>Home</button>
                <button className='hover:text-soft-red'>New</button>
                <button className='hover:text-soft-red'>Popular</button>
                <button className='hover:text-soft-red'>Trending</button>
                <button className='hover:text-soft-red'>Categories</button>
            </nav>

            <button onClick={() => setIsOpen(!isOpen)} className='lg:hidden z-30'>
                <img src={isOpen ? close : hamburger} alt='menu icon' />
            </button>
        </header>
    );
}

export default Header;
